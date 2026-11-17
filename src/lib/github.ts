import fs from 'node:fs';
import path from 'node:path';

export type GithubStats = {
  stars: number;
  archived: boolean;
  /** Date of the last push to any branch, YYYY-MM-DD. */
  pushed: string;
  release: { tag: string; date: string } | null;
};

/** Written by `bun run github` (scripts/github.ts) before a deploy; absent in most local builds. */
export const githubFile = path.resolve(process.cwd(), 'public/github.json');

let cache:
  { fetched: string; apps: Record<string, GithubStats> } | null | undefined;
function load() {
  if (cache === undefined)
    cache = fs.existsSync(githubFile)
      ? JSON.parse(fs.readFileSync(githubFile, 'utf8'))
      : null;
  return cache;
}

export const githubStats = (slug: string): GithubStats | undefined =>
  load()?.apps[slug];

/** "12,345" below 10,000 and "12.3k" above, as GitHub shows it. */
export const formatStars = (stars: number) =>
  stars < 10_000
    ? stars.toLocaleString('en-US')
    : `${(stars / 1000).toFixed(stars < 100_000 ? 1 : 0).replace(/\.0$/, '')}k`;
