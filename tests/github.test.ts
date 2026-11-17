import { expect, test } from 'bun:test';
import { macosRank } from '../src/lib/collections';
import { formatStars } from '../src/lib/github';

test('formatStars shortens large counts like GitHub', () => {
  expect(formatStars(0)).toBe('0');
  expect(formatStars(9_999)).toBe('9,999');
  expect(formatStars(10_000)).toBe('10k');
  expect(formatStars(47_144)).toBe('47.1k');
  expect(formatStars(123_456)).toBe('123k');
});

test('macosRank orders 10.x below 11 and point releases within a major', () => {
  expect(macosRank('10.15')).toBeLessThan(macosRank('11'));
  expect(macosRank('14')).toBeLessThan(macosRank('14.5'));
  expect(macosRank('14.5')).toBeLessThan(macosRank('15'));
});
