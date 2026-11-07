// bun run icon <slug> <link> [--credit "..."] [--license "..."]
// Saves an app's icon as a 256 px assets/icon.png and records where it came from.
// The link can be a PNG, JPEG or .icns file (a GitHub file page works) or the app's
// official .dmg/.zip download; from a download, the icon the app itself declares is used.
// macOS only: it uses sips, iconutil, hdiutil, ditto and plutil, which ship with macOS.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parseDocument, isMap, isSeq, visit, type YAMLSeq } from 'yaml';
import { catalogDirectory } from '../src/lib/catalog.ts';

const SIZE = 256;
const MIN_SOURCE = 128;

// Renders an app's own icon (including Icon Composer / asset-catalog icons) to a PNG,
// or with "generic" the icon macOS shows for an app without one.
const RENDER = `ObjC.import('AppKit');
function run(argv) {
  const [app, out, size, mode] = argv;
  const px = Number(size);
  const icon = mode === 'generic'
    ? $.NSWorkspace.sharedWorkspace.iconForFileType('com.apple.application-bundle')
    : $.NSWorkspace.sharedWorkspace.iconForFile(app);
  const rep = $.NSBitmapImageRep.alloc.initWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBytesPerRowBitsPerPixel(null, px, px, 8, 4, true, false, $.NSCalibratedRGBColorSpace, 0, 0);
  const ctx = $.NSGraphicsContext.graphicsContextWithBitmapImageRep(rep);
  $.NSGraphicsContext.saveGraphicsState;
  $.NSGraphicsContext.setCurrentContext(ctx);
  icon.drawInRectFromRectOperationFraction($.NSMakeRect(0, 0, px, px), $.NSZeroRect, $.NSCompositingOperationSourceOver, 1.0);
  ctx.flushGraphics;
  $.NSGraphicsContext.restoreGraphicsState;
  rep.representationUsingTypeProperties($.NSBitmapImageFileTypePNG, $({})).writeToFileAtomically(out, true);
}`;

function run(command: string, args: string[], input?: string): string {
  const result = spawnSync(command, args, { encoding: 'utf8', input });
  if (result.status !== 0)
    throw new Error(
      `${command} failed: ${(result.stderr || result.stdout).trim()}`,
    );
  return result.stdout;
}

function pixels(file: string): [number, number] {
  const out = run('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file]);
  return [
    Number(/pixelWidth: (\d+)/.exec(out)?.[1]),
    Number(/pixelHeight: (\d+)/.exec(out)?.[1]),
  ];
}

// The largest image inside an .icns file.
function fromIcns(icns: string, work: string): string {
  const set = path.join(work, 'icon.iconset');
  try {
    run('iconutil', ['-c', 'iconset', icns, '-o', set]);
  } catch {
    // Older .icns layouts iconutil rejects: sips still reads the first image.
    const png = path.join(work, 'icns.png');
    run('sips', ['-s', 'format', 'png', icns, '--out', png]);
    return png;
  }
  return fs
    .readdirSync(set)
    .map((name) => path.join(set, name))
    .sort((a, b) => pixels(b)[0] - pixels(a)[0])[0];
}

// The icon an app bundle declares in its Info.plist.
function fromApp(app: string, work: string): string {
  const plist = path.join(app, 'Contents', 'Info.plist');
  const key = (name: string) => {
    try {
      return run('plutil', ['-extract', name, 'raw', '-o', '-', plist]).trim();
    } catch {
      return '';
    }
  };
  const file = key('CFBundleIconFile');
  if (file) {
    const icns = path.join(
      app,
      'Contents',
      'Resources',
      path.extname(file) ? file : `${file}.icns`,
    );
    if (fs.existsSync(icns)) return fromIcns(icns, work);
  }
  if (!file && !key('CFBundleIconName'))
    throw new Error(`${path.basename(app)} declares no icon`);
  // Asset-catalog icon (for example Icon Composer): let macOS render it.
  const script = path.join(work, 'render.js');
  const png = path.join(work, 'rendered.png');
  const generic = path.join(work, 'generic.png');
  fs.writeFileSync(script, RENDER);
  run('osascript', ['-l', 'JavaScript', script, app, png, '512']);
  run('osascript', [
    '-l',
    'JavaScript',
    script,
    app,
    generic,
    '512',
    'generic',
  ]);
  if (fs.readFileSync(png).equals(fs.readFileSync(generic)))
    throw new Error(
      `${path.basename(app)} has no icon of its own (macOS shows the generic app icon)`,
    );
  return png;
}

function findApp(root: string): string {
  const apps = run('find', [
    root,
    '-maxdepth',
    '4',
    '-name',
    '*.app',
    '-type',
    'd',
    '-prune',
  ])
    .split('\n')
    .filter(Boolean)
    .sort(
      (a, b) => a.split('/').length - b.split('/').length || a.localeCompare(b),
    );
  if (!apps.length) throw new Error('No .app bundle inside the download');
  return apps[0];
}

async function iconSource(file: string, work: string): Promise<string> {
  const head = Buffer.from(await Bun.file(file).slice(0, 8).arrayBuffer());
  if (head.subarray(0, 4).toString('hex') === '89504e47') return file;
  if (head.subarray(0, 3).toString('hex') === 'ffd8ff') return file;
  if (head.subarray(0, 4).toString('latin1') === 'icns')
    return fromIcns(file, work);
  if (head.subarray(0, 2).toString('latin1') === 'PK') {
    const root = path.join(work, 'zip');
    run('ditto', ['-x', '-k', file, root]);
    return fromApp(findApp(root), work);
  }
  const size = fs.statSync(file).size;
  const tail = Buffer.from(
    await Bun.file(file)
      .slice(size - 512, size - 508)
      .arrayBuffer(),
  );
  if (tail.toString('latin1') === 'koly') {
    const mount = path.join(work, 'mnt');
    fs.mkdirSync(mount);
    // "Y" accepts a license agreement some disk images show on mount.
    run(
      'hdiutil',
      [
        'attach',
        '-nobrowse',
        '-readonly',
        '-noautoopen',
        '-mountpoint',
        mount,
        file,
      ],
      'Y\n',
    );
    try {
      return fromApp(findApp(mount), work);
    } finally {
      spawnSync('hdiutil', ['detach', mount, '-force', '-quiet']);
    }
  }
  throw new Error('The link is not a PNG, JPEG, .icns, .zip or .dmg');
}

// GitHub file pages are fetched raw; the page link stays the recorded source.
const rawUrl = (link: string) =>
  link.replace(
    /^https:\/\/github\.com\/([^/]+\/[^/]+)\/blob\//,
    'https://raw.githubusercontent.com/$1/',
  );

const [slug, link, ...rest] = process.argv.slice(2);
const option = (name: string) => {
  const at = rest.indexOf(`--${name}`);
  return at >= 0 ? rest[at + 1] : undefined;
};

try {
  if (!slug || !link)
    throw new Error(
      'Usage: bun run icon <slug> <https link to a PNG, JPEG, .icns, or the official .dmg/.zip> [--credit "..."] [--license "..."]',
    );
  if (process.platform !== 'darwin')
    throw new Error('bun run icon uses macOS tools; run it on a Mac.');
  if (!link.startsWith('https://')) throw new Error('Use an https link');
  const folder = path.join(catalogDirectory, slug);
  const index = path.join(folder, 'index.md');
  if (!fs.existsSync(index))
    throw new Error(`No app folder content/apps/${slug}`);

  const work = fs.mkdtempSync(path.join(os.tmpdir(), 'oma-icon-'));
  try {
    const response = await fetch(rawUrl(link), {
      signal: AbortSignal.timeout(300_000),
    });
    if (!response.ok)
      throw new Error(`Download failed: HTTP ${response.status}`);
    const download = path.join(work, 'download');
    await Bun.write(download, response);

    const source = await iconSource(download, work);
    const [width, height] = pixels(source);
    if (Math.abs(width - height) > Math.max(width, height) * 0.02)
      throw new Error(
        `The image is ${width} x ${height}; an app icon is square (a banner or wordmark is not an icon)`,
      );
    if (width < MIN_SOURCE)
      throw new Error(
        `The image is only ${width} px; use a source of at least ${MIN_SOURCE} px`,
      );
    fs.mkdirSync(path.join(folder, 'assets'), { recursive: true });
    run('sips', [
      '-s',
      'format',
      'png',
      '-z',
      String(SIZE),
      String(SIZE),
      source,
      '--out',
      path.join(folder, 'assets', 'icon.png'),
    ]);

    // Record the icon in the frontmatter, keeping the file's existing style.
    const text = fs.readFileSync(index, 'utf8');
    const parts = /^---\r?\n([\s\S]*?)\r?\n---(\r?\n[\s\S]*)$/.exec(text);
    if (!parts) throw new Error(`${index} has no frontmatter`);
    const doc = parseDocument(parts[1]);
    const assets = doc.get('assets');
    const previous = isSeq(assets)
      ? (assets as YAMLSeq).items.find(
          (item) =>
            isMap(item) &&
            item.get('path') !== './assets/icon.png' &&
            item.get('credit'),
        )
      : undefined;
    const credit =
      option('credit') ??
      (isMap(previous)
        ? String(previous.get('credit'))
        : `${doc.get('name')} contributors`);
    const license =
      option('license') ??
      `${doc.get('license')}; upstream app icon, trademarks retained`;
    const entry = doc.createNode({
      path: './assets/icon.png',
      source: link,
      credit,
      license,
    });
    // Records written as JSON-style lists get a JSON-style entry.
    if (isSeq(assets) && (assets as YAMLSeq).flow)
      visit(entry, {
        Scalar(_, node) {
          node.type = 'QUOTE_DOUBLE';
        },
      });
    if (isSeq(assets)) {
      const at = (assets as YAMLSeq).items.findIndex(
        (item) => isMap(item) && item.get('path') === './assets/icon.png',
      );
      if (at >= 0) (assets as YAMLSeq).items[at] = entry;
      else (assets as YAMLSeq).add(entry);
    } else
      doc.set(
        'assets',
        doc.createNode([
          { path: './assets/icon.png', source: link, credit, license },
        ]),
      );
    doc.set('icon', './assets/icon.png');
    fs.writeFileSync(
      index,
      `---\n${doc.toString({ lineWidth: 0, flowCollectionPadding: false }).trimEnd()}\n---${parts[2]}`,
    );

    console.log(
      `icon: content/apps/${slug}/assets/icon.png (${SIZE} px, from a ${width} px source). Check it is the app's own icon, then run bun run validate.`,
    );
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
