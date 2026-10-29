import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import {
  categories,
  getApps,
  httpsUrl,
  isoDate,
  parseMarkdown,
  slugPattern,
  type CatalogApp,
} from './catalog';
import { absoluteUrl } from './site';

/**
 * Rule-based landing pages. Neither lists apps by hand: an alternatives page
 * shows every app whose `alternativeTo` names it, and a topic page shows every
 * app carrying one of its tags, so a new app folder appears on them by itself.
 */

const alternativeSchema = z
  .object({
    /** The proprietary product, e.g. CleanMyMac. */
    name: z.string().trim().min(1).max(60),
    vendor: z.string().trim().min(1).max(60),
    website: httpsUrl,
    category: z.enum(categories),
    /** What the product does, in our own words; no prices or ratings. */
    summary: z.string().trim().min(15).max(160),
    sources: z.array(httpsUrl).min(1),
    verified: isoDate,
    /** False for products with no macOS version (Notepad++, PuTTY): the page answers "{name} for Mac". */
    onMac: z.boolean().default(true),
  })
  .strict();

const topicSchema = z
  .object({
    /** Plural noun phrase used in the heading and title, e.g. Clipboard managers. */
    title: z.string().trim().min(3).max(60),
    /** Meta description: 50–160 characters. */
    description: z.string().trim().min(50).max(160),
    /** An app joins the topic when it has any of these tags. */
    tags: z.array(z.string().regex(slugPattern)).min(1),
    /** Optionally narrows the topic to one category. */
    category: z.enum(categories).optional(),
  })
  .strict();

type Entry<T> = T & { slug: string; body: string };
export type Alternative = Entry<z.infer<typeof alternativeSchema>> & {
  apps: CatalogApp[];
};
export type Topic = Entry<z.infer<typeof topicSchema>> & {
  apps: CatalogApp[];
};

export const alternativesDirectory = path.resolve(
  process.cwd(),
  'content/alternatives',
);
export const topicsDirectory = path.resolve(process.cwd(), 'content/topics');

function loadEntries<T>(directory: string, schema: z.ZodType<T>): Entry<T>[] {
  if (!fs.existsSync(directory)) return [];
  const label = path.basename(directory);
  return fs
    .readdirSync(directory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.slice(0, -3);
      try {
        if (!slugPattern.test(slug))
          throw new Error('Use a lowercase, hyphen-separated file name');
        const { data, body } = parseMarkdown(
          fs.readFileSync(path.join(directory, name), 'utf8'),
        );
        if (!body)
          throw new Error(
            'Write an original introduction below the frontmatter',
          );
        return { ...schema.parse(data), slug, body };
      } catch (error) {
        throw new Error(
          `[${label}/${slug}] ${error instanceof Error ? error.message : String(error)}`,
          { cause: error },
        );
      }
    });
}

export function loadAlternatives(
  apps: CatalogApp[],
  directory = alternativesDirectory,
): Alternative[] {
  const entries = loadEntries(directory, alternativeSchema);
  const known = new Set(entries.map((entry) => entry.slug));
  for (const app of apps)
    for (const id of app.alternativeTo)
      if (!known.has(id))
        throw new Error(
          `[${app.slug}] alternativeTo "${id}" needs content/alternatives/${id}.md`,
        );
  return entries
    .map((entry) => {
      const list = apps.filter((app) => app.alternativeTo.includes(entry.slug));
      if (list.length < 2)
        throw new Error(
          `[alternatives/${entry.slug}] needs at least two apps listing it in alternativeTo`,
        );
      return { ...entry, apps: list };
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'en'));
}

export function loadTopics(
  apps: CatalogApp[],
  directory = topicsDirectory,
): Topic[] {
  const tags = new Set(apps.flatMap((app) => app.tags));
  return loadEntries(directory, topicSchema)
    .map((entry) => {
      for (const tag of entry.tags)
        if (!tags.has(tag))
          throw new Error(`[topics/${entry.slug}] no app has the tag "${tag}"`);
      const list = apps.filter(
        (app) =>
          app.tags.some((tag) => entry.tags.includes(tag)) &&
          (!entry.category || app.category === entry.category),
      );
      if (list.length < 3)
        throw new Error(`[topics/${entry.slug}] matches fewer than three apps`);
      return { ...entry, apps: list };
    })
    .sort((a, b) => a.title.localeCompare(b.title, 'en'));
}

// Same caching rule as getApps: production builds load once, everything else rereads.
const prod = (import.meta as ImportMeta & { env?: { PROD?: boolean } }).env
  ?.PROD;
let alternativesCache: Alternative[] | undefined;
let topicsCache: Topic[] | undefined;
export function getAlternatives(): Alternative[] {
  if (!prod) return loadAlternatives(getApps());
  return (alternativesCache ??= loadAlternatives(getApps()));
}
export function getTopics(): Topic[] {
  if (!prod) return loadTopics(getApps());
  return (topicsCache ??= loadTopics(getApps()));
}

/** schema.org ItemList of app pages, in display order. */
export const appItemList = (apps: CatalogApp[]) => ({
  '@type': 'ItemList',
  numberOfItems: apps.length,
  itemListElement: apps.map((app, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: absoluteUrl(`apps/${app.slug}/`),
    name: app.name,
  })),
});

/** schema.org BreadcrumbList from Discover down to the current page; paths are site-relative. */
export const breadcrumbList = (trail: [name: string, path: string][]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [['Discover', ''] as const, ...trail].map(
    ([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: absoluteUrl(path),
    }),
  ),
});

/** True when every listed app's official macOS download has been checked and costs nothing. */
export const allFree = (apps: CatalogApp[]) =>
  apps.every((app) => app.freeDownload === true);

/** "7 free, open-source alternatives", or "7 alternatives, 1 source available" when any app has restrictions. */
export function sourceCount(apps: CatalogApp[], noun: string): string {
  const restricted = apps.filter(
    (app) => app.sourceAvailability === 'source-available',
  ).length;
  if (restricted)
    return `${apps.length} ${noun}, ${restricted} source available`;
  return `${apps.length} ${allFree(apps) ? 'free, open-source' : 'open-source'} ${noun}`;
}

/** `prefix` plus as many app names as fit in a 160-character meta description. */
export function describeApps(prefix: string, apps: CatalogApp[]): string {
  const names = apps.map((app) => app.name);
  for (let count = names.length; count > 0; count--) {
    const shown = names.slice(0, count);
    const list =
      count === names.length
        ? `${shown.slice(0, -1).join(', ')}${count > 1 ? ' and ' : ''}${shown.at(-1)}.`
        : `${shown.join(', ')} and more.`;
    const text = `${prefix}${list}`;
    if (text.length <= 160) return text;
  }
  return prefix.length <= 160 ? prefix : `${prefix.slice(0, 159)}…`;
}

/** Display order for guide pages: featured picks first, then by name. */
export const picksFirst = (apps: CatalogApp[]) =>
  [...apps].sort(
    (a, b) =>
      Number(b.featured) - Number(a.featured) ||
      a.name.localeCompare(b.name, 'en'),
  );

/** "Clipboard managers" → "clipboard managers"; acronyms such as "AI" keep their case. */
export const lowerTitle = (title: string) =>
  title.replace(/^\p{Lu}(?!\p{Lu})/u, (letter) => letter.toLowerCase());

/** The topic's own category, else the category holding more than half its apps. */
export function topicCategory(topic: Topic): Topic['category'] {
  if (topic.category) return topic.category;
  const counts = new Map<Topic['category'], number>();
  for (const app of topic.apps)
    counts.set(app.category, (counts.get(app.category) ?? 0) + 1);
  for (const [category, count] of counts)
    if (count * 2 > topic.apps.length) return category;
  return undefined;
}
