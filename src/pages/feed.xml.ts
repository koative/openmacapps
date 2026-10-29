import { getApps } from '../lib/catalog';
import { site, absoluteUrl } from '../lib/site';

const escape = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
const rfc822 = (date: string) => new Date(`${date}T00:00:00Z`).toUTCString();

export function GET() {
  const apps = [...getApps()]
    .sort(
      (a, b) => b.added.localeCompare(a.added) || a.name.localeCompare(b.name),
    )
    .slice(0, 50);
  const items = apps.map((app) => {
    const url = absoluteUrl(`apps/${app.slug}/`);
    return `<item><title>${escape(app.name)}</title><link>${url}</link><description>${escape(app.summary)}</description><category>${escape(app.category)}</category><pubDate>${rfc822(app.added)}</pubDate><guid isPermaLink="true">${url}</guid></item>`;
  });
  const feed = absoluteUrl('feed.xml');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${escape(`${site.name}: newly added open-source Mac apps`)}</title><link>${site.url}</link><description>${escape(site.description)}</description><language>en</language>${apps[0] ? `<lastBuildDate>${rfc822(apps[0].added)}</lastBuildDate>` : ''}<atom:link href="${feed}" rel="self" type="application/rss+xml"/>${items.join('')}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml' } },
  );
}
