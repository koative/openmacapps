import { afterEach, test } from 'bun:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { stringify as stringifyYaml } from 'yaml';
import { loadCatalog } from '../src/lib/catalog.ts';
import {
  loadAlternatives,
  loadTopics,
  sourceCount,
} from '../src/lib/guides.ts';

const temporaryDirectories: string[] = [];
afterEach(() => {
  for (const directory of temporaryDirectories.splice(0))
    fs.rmSync(directory, { recursive: true, force: true });
});
function directory() {
  const created = fs.mkdtempSync(path.join(os.tmpdir(), 'guides-test-'));
  temporaryDirectories.push(created);
  return created;
}
function markdown(folder: string, file: string, data: unknown) {
  fs.mkdirSync(path.dirname(path.join(folder, file)), { recursive: true });
  fs.writeFileSync(
    path.join(folder, file),
    `---\n${stringifyYaml(data)}---\n\nAn original introduction.`,
  );
}
function apps(
  entries: {
    slug: string;
    tags: string[];
    alternativeTo?: string[];
    category?: string;
    freeDownload?: boolean;
  }[],
) {
  const root = directory();
  for (const { slug, ...fields } of entries)
    markdown(root, `${slug}/index.md`, {
      name: slug,
      summary: 'A small, useful example application for your Mac.',
      category: 'Utilities',
      repository: `https://github.com/example/${slug}`,
      website: 'https://example.org',
      license: 'MIT',
      licenseUrl: `https://github.com/example/${slug}/blob/main/LICENSE`,
      download: `https://github.com/example/${slug}/releases`,
      added: '2026-10-17',
      verified: '2026-10-17',
      sources: [`https://github.com/example/${slug}`],
      ...fields,
    });
  return loadCatalog(root);
}
const product = {
  name: 'Paid Tool',
  vendor: 'Vendor Inc.',
  website: 'https://paid.example',
  category: 'Utilities',
  summary: 'A commercial tool that hides menu bar icons.',
  sources: ['https://paid.example'],
  verified: '2026-10-29',
};

test('an alternatives page lists exactly the apps that name it, and needs two', () => {
  const guides = directory();
  markdown(guides, 'paid-tool.md', product);
  const catalog = apps([
    { slug: 'one', tags: ['menu-bar'], alternativeTo: ['paid-tool'] },
    { slug: 'two', tags: ['menu-bar'], alternativeTo: ['paid-tool'] },
    { slug: 'three', tags: ['menu-bar'] },
  ]);
  const [page] = loadAlternatives(catalog, guides);
  assert.deepEqual(
    page.apps.map((app) => app.slug),
    ['one', 'two'],
  );
  assert.throws(
    () => loadAlternatives(catalog.slice(1), guides),
    /at least two apps/,
  );
  assert.throws(
    () =>
      loadAlternatives(
        apps([{ slug: 'one', tags: ['x'], alternativeTo: ['missing'] }]),
        guides,
      ),
    /needs content\/alternatives\/missing\.md/,
  );
});

test('a topic gathers apps with any of its tags within its category, and needs three', () => {
  const topics = directory();
  const topic = {
    title: 'Clipboard managers',
    description:
      'Open-source clipboard managers for Mac that keep a searchable history of copied items.',
    tags: ['clipboard-manager', 'clipboard-history'],
    category: 'Productivity',
  };
  markdown(topics, 'clipboard-managers.md', topic);
  const catalog = apps([
    { slug: 'a', tags: ['clipboard-manager'], category: 'Productivity' },
    { slug: 'b', tags: ['clipboard-history'], category: 'Productivity' },
    {
      slug: 'c',
      tags: ['clipboard-manager', 'menu-bar'],
      category: 'Productivity',
    },
    { slug: 'd', tags: ['clipboard-manager'], category: 'Utilities' },
    { slug: 'e', tags: ['menu-bar'], category: 'Productivity' },
  ]);
  assert.deepEqual(
    loadTopics(catalog, topics)[0].apps.map((app) => app.slug),
    ['a', 'b', 'c'],
  );
  assert.throws(() => loadTopics(catalog.slice(1), topics), /fewer than three/);
  markdown(topics, 'clipboard-managers.md', {
    ...topic,
    tags: ['nobody-has-this'],
  });
  assert.throws(() => loadTopics(catalog, topics), /no app has the tag/);
});

test('lists are called free only when every app has a verified free download', () => {
  const free = apps([
    { slug: 'a', tags: ['x'], freeDownload: true },
    { slug: 'b', tags: ['x'], freeDownload: true },
  ]);
  assert.equal(sourceCount(free, 'apps'), '2 free, open-source apps');
  for (const third of [{ freeDownload: false }, {}])
    assert.equal(
      sourceCount(
        apps([
          { slug: 'a', tags: ['x'], freeDownload: true },
          { slug: 'b', tags: ['x'], freeDownload: true },
          { slug: 'c', tags: ['x'], ...third },
        ]),
        'apps',
      ),
      '3 open-source apps',
    );
});
