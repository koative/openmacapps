import type { CatalogApp } from './catalog';

type Candidate = Pick<CatalogApp, 'slug' | 'category' | 'tags'>;

/** 32-bit FNV-1a: the same number on every machine and build, unlike Math.random. */
function hash(text: string): number {
  let value = 0x811c9dc5;
  for (let index = 0; index < text.length; index++) {
    value ^= text.charCodeAt(index);
    value = Math.imul(value, 0x01000193);
  }
  return value >>> 0;
}

/**
 * The "You Might Also Like" shelf for `app`: other apps scored 3 per shared tag
 * plus 1 for the same category, best first. Equal scores are ordered by a hash
 * of both slugs, so each page takes its own stable sample of a tie instead of
 * every page linking the start of the alphabet.
 */
export function relatedApps<T extends Candidate>(
  app: Candidate,
  apps: readonly T[],
  limit = 12,
): T[] {
  return apps
    .filter((other) => other.slug !== app.slug)
    .map((other) => ({
      app: other,
      score:
        (other.category === app.category ? 1 : 0) +
        other.tags.filter((tag) => app.tags.includes(tag)).length * 3,
      tie: hash(`${app.slug}\n${other.slug}`),
    }))
    .filter((other) => other.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.tie - b.tie ||
        a.app.slug.localeCompare(b.app.slug),
    )
    .slice(0, limit)
    .map((other) => other.app);
}
