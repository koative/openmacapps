import { test } from 'bun:test';
import assert from 'node:assert/strict';
import { relatedApps } from '../src/lib/related.ts';

const app = (slug: string, tags: string[] = [], category = 'Utilities') => ({
  slug,
  tags,
  category: category as 'Utilities',
});
// Thirty apps that tie on category alone, named in alphabetical order.
const ties = Array.from({ length: 30 }, (_, index) =>
  app(`app-${String(index).padStart(2, '0')}`),
);

test('shared tags rank before category-only matches, unrelated apps never show', () => {
  const current = app('current', ['menu-bar']);
  const tagged = app('zz-tagged', ['menu-bar'], 'Productivity');
  const unrelated = app('unrelated', ['games'], 'Games');
  const shelf = relatedApps(current, [...ties, unrelated, tagged, current]);
  assert.equal(shelf[0], tagged);
  assert.equal(shelf.length, 12);
  assert.ok(!shelf.includes(unrelated) && !shelf.includes(current));
});

test('ties break the same way on every build, not alphabetically', () => {
  const current = app('current');
  const shelf = relatedApps(current, ties).map((other) => other.slug);
  assert.deepEqual(
    relatedApps(current, [...ties].reverse()).map((other) => other.slug),
    shelf,
  );
  assert.notDeepEqual(
    shelf,
    ties.slice(0, 12).map((other) => other.slug),
  );
  // Another page draws its own sample from the same tie.
  assert.notDeepEqual(
    relatedApps(app('other-page'), ties).map((other) => other.slug),
    shelf,
  );
});
