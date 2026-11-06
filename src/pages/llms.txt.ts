import { categories, getApps } from '../lib/catalog';
import { categorySlug } from '../lib/collections';
import { getAlternatives, getTopics, sourceCount } from '../lib/guides';
import { llmsHeader } from '../lib/llms';
import { absoluteUrl, site } from '../lib/site';

const link = (title: string, path: string, note: string) =>
  `- [${title}](${absoluteUrl(path)}): ${note}`;

export function GET() {
  const apps = getApps();
  const alternatives = getAlternatives();
  const topics = getTopics();
  const body = `${llmsHeader}
## Key pages

${link('Discover', '', 'featured apps, editorial collections, categories and open-source alternatives.')}
${link('Search', 'search/', `all ${apps.length.toLocaleString('en-US')} apps on one page, filterable by name, category, tag, license and the proprietary app they replace.`)}
${link('Categories', 'categories/', `the ${categories.length} categories and the topics within them.`)}
${link('Alternatives', 'alternatives/', `open-source replacements for ${alternatives.length} proprietary products.`)}
${link('Topics', 'topics/', `${topics.length} kinds of tool, each with the apps that do that job.`)}
${link('About', 'about/', `who makes ${site.name} and how apps are chosen.`)}
${link('How We Verify', 'how-we-verify/', 'the checks every listing passed: license file, source availability, official download and a dated review.')}
- [Contribute](${site.repository}/blob/main/CONTRIBUTING.md): how to add or correct an app with a pull request.
- [GitHub repository](${site.repository}): the site's code and every app record.

## Categories

${categories
  .map((category) =>
    link(
      category,
      `categories/${categorySlug(category)}/`,
      `${sourceCount(
        apps.filter((app) => app.category === category),
        'apps',
      )}.`,
    ),
  )
  .join('\n')}

## Alternatives

${alternatives
  .map((entry) =>
    link(
      `Open-source alternatives to ${entry.name}`,
      `alternatives/${entry.slug}/`,
      `${sourceCount(entry.apps, 'alternatives')}${entry.onMac ? '' : `; ${entry.name} has no macOS version`}.`,
    ),
  )
  .join('\n')}

## Topics

${topics
  .map((topic) =>
    link(
      topic.title,
      `topics/${topic.slug}/`,
      `${topic.description} ${sourceCount(topic.apps, 'apps')}.`,
    ),
  )
  .join('\n')}

## Data

${link('catalog.json', 'catalog.json', 'every app as one JSON array: name, slug, summary, Markdown description, category, tags, alternativeTo, repository, website, download, freeDownload, homebrew, license (SPDX), licenseUrl, sourceAvailability, licenseNotes, featured, added and verified dates, sources, and icon, screenshot and image attribution.')}
${link('feed.xml', 'feed.xml', 'RSS feed of newly added apps.')}
${link('sitemap.xml', 'sitemap.xml', 'every page on the site.')}
${link('llms-full.txt', 'llms-full.txt', 'every app on one line, grouped by category, with summary, license and download host.')}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
