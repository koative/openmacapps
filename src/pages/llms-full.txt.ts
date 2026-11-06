import { categories, getApps } from '../lib/catalog';
import { llmsHeader } from '../lib/llms';
import { absoluteUrl } from '../lib/site';

export function GET() {
  // Slug breaks ties between apps that share a name, so the file is byte-stable.
  const apps = [...getApps()].sort(
    (a, b) =>
      a.name.localeCompare(b.name, 'en') || a.slug.localeCompare(b.slug),
  );
  const sections = categories.map((category) => {
    const lines = apps
      .filter((app) => app.category === category)
      .map(
        (app) =>
          `- [${app.name}](${absoluteUrl(`apps/${app.slug}/`)}): ${app.summary.replace(/\.$/, '')}. License: ${app.license}.${app.sourceAvailability === 'source-available' ? ' Source available.' : ''} Download: ${new URL(app.download).hostname.replace(/^www\./, '')}.`,
      );
    return `## ${category}\n\n${lines.join('\n')}\n`;
  });
  return new Response(`${llmsHeader}\n${sections.join('\n')}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
