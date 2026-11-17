// Fetches stars, archive state and the latest release of every GitHub repository in the catalog.
// Writes public/github.json for the build; a failed fetch leaves pages without these numbers.
import fs from 'node:fs';
import { getApps } from '../src/lib/catalog';
import { githubFile, type GithubStats } from '../src/lib/github';

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.warn('github: GITHUB_TOKEN is not set; skipping repository stats.');
  process.exit(0);
}

const repos = getApps().flatMap((app) => {
  const match =
    /^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+?)(?:\.git)?\/?$/i.exec(
      app.repository,
    );
  return match ? [{ slug: app.slug, owner: match[1], name: match[2] }] : [];
});

const fields = `stargazerCount isArchived pushedAt latestRelease { tagName publishedAt }`;
const stats: Record<string, GithubStats> = {};
let missing = 0;
for (let i = 0; i < repos.length; i += 100) {
  const batch = repos.slice(i, i + 100);
  const query = `{ ${batch
    .map(
      (repo, n) =>
        `r${n}: repository(owner: ${JSON.stringify(repo.owner)}, name: ${JSON.stringify(repo.name)}) { ${fields} }`,
    )
    .join(' ')} }`;
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      authorization: `bearer ${token}`,
      'content-type': 'application/json',
      'user-agent': 'openmacapps-catalog',
    },
    body: JSON.stringify({ query }),
  });
  if (!response.ok) {
    console.warn(
      `github: request failed with ${response.status}; skipping repository stats.`,
    );
    process.exit(0);
  }
  // Renamed or deleted repositories come back as null with an error; the rest still count.
  const { data } = (await response.json()) as {
    data?: Record<
      string,
      {
        stargazerCount: number;
        isArchived: boolean;
        pushedAt: string;
        latestRelease: { tagName: string; publishedAt: string } | null;
      } | null
    >;
  };
  batch.forEach((repo, n) => {
    const node = data?.[`r${n}`];
    if (!node) return void missing++;
    stats[repo.slug] = {
      stars: node.stargazerCount,
      archived: node.isArchived,
      pushed: node.pushedAt.slice(0, 10),
      release: node.latestRelease && {
        tag: node.latestRelease.tagName,
        date: node.latestRelease.publishedAt.slice(0, 10),
      },
    };
  });
}

fs.writeFileSync(
  githubFile,
  `${JSON.stringify({ fetched: new Date().toISOString().slice(0, 10), apps: stats })}\n`,
);
console.log(
  `github: stats for ${Object.keys(stats).length} of ${repos.length} repositories${missing ? `, ${missing} not found` : ''}.`,
);
