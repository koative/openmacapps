import { categories, getApps } from '../lib/catalog';
import { collections, categorySlug } from '../lib/collections';
import { getAlternatives, getTopics } from '../lib/guides';
import { site } from '../lib/site';
export function GET() {
  const base = site.url;
  /** [path, lastmod?]; lastmod comes from each record's verification date. */
  const entries: [string, string?][] = [
    [''],
    ['search/'],
    ['categories/'],
    ...categories.map((category): [string] => [
      `categories/${categorySlug(category)}/`,
    ]),
    ...collections.map((collection): [string] => [
      `collections/${collection.id}/`,
    ]),
    ['alternatives/'],
    ...getAlternatives().map((entry): [string, string] => [
      `alternatives/${entry.slug}/`,
      entry.verified,
    ]),
    ['topics/'],
    ...getTopics().map((topic): [string] => [`topics/${topic.slug}/`]),
    ['about/'],
    ...getApps().map((app): [string, string] => [
      `apps/${app.slug}/`,
      app.verified,
    ]),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map(([path, lastmod]) => `<url><loc>${base}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
