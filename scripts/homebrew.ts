import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import {
  catalogDirectory,
  getApps,
  normalizeRepository,
  type CatalogApp,
} from '../src/lib/catalog';

const caskList = z.array(
  z.object({
    token: z.string(),
    homepage: z.string().nullable(),
    url: z.string(),
    deprecated: z.boolean(),
    disabled: z.boolean(),
    artifacts: z.array(z.unknown()),
  }),
);
export type Cask = z.infer<typeof caskList>[number];
export type CaskMatch = { cask: Cask; fromRepository: boolean };

const page = (url: string | null) => {
  try {
    return url ? normalizeRepository(url) : null;
  } catch {
    return null;
  }
};
const githubRepository = (url: string | null) => {
  const match = url?.match(
    /^https?:\/\/(?:www\.)?github\.com\/([\w.-]+)\/([\w.-]+)/i,
  );
  return match ? page(`https://github.com/${match[1]}/${match[2]}`) : null;
};

/**
 * Active casks whose download or homepage is the app's own repository or
 * website. A similar name alone never matches, so another project's installer
 * cannot be attached to an app.
 */
export function matchingCasks(
  app: Pick<CatalogApp, 'repository' | 'website'>,
  casks: Cask[],
): CaskMatch[] {
  const repository = githubRepository(app.repository) ?? page(app.repository);
  const website = page(app.website);
  return casks.flatMap((cask) => {
    // Versioned variants (`@beta`) and casks Homebrew is retiring are never offered.
    if (cask.disabled || cask.deprecated || cask.token.includes('@')) return [];
    const homepage = page(cask.homepage);
    const fromRepository =
      !!repository &&
      [
        githubRepository(cask.url),
        githubRepository(cask.homepage),
        homepage,
      ].includes(repository);
    return fromRepository || (!!website && homepage === website)
      ? [{ cask, fromRepository }]
      : [];
  });
}

const installsApp = (cask: Cask) =>
  cask.artifacts.some(
    (artifact) =>
      typeof artifact === 'object' && artifact !== null && 'app' in artifact,
  );

/** One cask, or none when several remain equally plausible and a human must choose. */
export function pickCask(
  slug: string,
  matches: CaskMatch[],
): string | undefined {
  let pool = matches;
  for (const prefer of [
    (match: CaskMatch) => match.fromRepository,
    (match: CaskMatch) => match.cask.token === slug,
    (match: CaskMatch) => installsApp(match.cask),
  ]) {
    if (pool.length < 2) break;
    const kept = pool.filter(prefer);
    if (kept.length) pool = kept;
  }
  return pool.length === 1 ? pool[0].cask.token : undefined;
}

function setHomebrew(slug: string, token: string | undefined): void {
  const file = path.join(catalogDirectory, slug, 'index.md');
  const text = fs.readFileSync(file, 'utf8');
  const end = text.indexOf('\n---', 3);
  let frontmatter = text.slice(0, end).replace(/\nhomebrew:.*/, '');
  if (token)
    frontmatter = frontmatter.replace(
      /^download:.*$/m,
      (line) => `${line}\nhomebrew: ${JSON.stringify(token)}`,
    );
  fs.writeFileSync(file, frontmatter + text.slice(end));
}

if (import.meta.main) {
  const write = process.argv[2] === 'sync';
  const response = await fetch('https://formulae.brew.sh/api/cask.json', {
    signal: AbortSignal.timeout(60_000),
  });
  if (!response.ok) throw new Error(`Homebrew API: HTTP ${response.status}`);
  const casks = caskList.parse(await response.json());
  const problems: string[] = [];
  const pending: string[] = [];
  const undecided: string[] = [];
  const owners = new Map<string, string>();
  let verified = 0;
  for (const app of getApps()) {
    const matches = matchingCasks(app, casks);
    const recordedIsValid = matches.some(
      (match) => match.cask.token === app.homebrew,
    );
    if (recordedIsValid) verified++;
    else if (app.homebrew && !write)
      problems.push(
        `${app.slug}: "${app.homebrew}" is not an active Homebrew cask whose download or homepage is this app's repository or website`,
      );
    const token = recordedIsValid ? app.homebrew : pickCask(app.slug, matches);
    if (!token && matches.length > 1)
      undecided.push(
        `${app.slug}: ${matches.map((match) => match.cask.token).join(', ')}`,
      );
    if (token && owners.has(token))
      problems.push(
        `${app.slug}: "${token}" is also used by ${owners.get(token)}`,
      );
    if (token) owners.set(token, app.slug);
    if (token === app.homebrew) continue;
    if (write) setHomebrew(app.slug, token);
    pending.push(`${app.slug}: ${app.homebrew ?? '-'} -> ${token ?? '-'}`);
  }
  if (write) {
    console.log(pending.join('\n'));
    console.log(
      `${pending.length} listings updated; ${owners.size} apps have a Homebrew cask.`,
    );
    if (undecided.length)
      console.log(
        `Several casks match; set \`homebrew\` by hand if one is right:\n${undecided.join('\n')}`,
      );
  } else {
    console.log(
      `${verified} Homebrew casks verified.${pending.length ? ` ${pending.length} listings differ from the cask index; run \`bun run homebrew\`.` : ''}`,
    );
  }
  if (problems.length) {
    console.error(problems.join('\n'));
    process.exitCode = 1;
  }
}
