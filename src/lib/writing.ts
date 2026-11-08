/**
 * The description standard (CONTRIBUTING.md, "Writing the description"). It applies to every
 * record checked on or after `writingStandardSince`: new records, and older ones as they are
 * rewritten and re-verified. Records verified earlier keep loading until their rewrite.
 */
export const writingStandardSince = '2026-11-08';
export const minimumBodyWords = 120;

const processLanguage =
  /\b(?:this (?:entry|record|listing)|I checked|we checked|at review time|does not claim)\b/i;
const audienceSlot = /\bIt (?:suits|is for) (?:people|users|anyone) who\b/;
// Peacock words and stock frames that make catalog copy read as generated (docs/RESEARCH.md, Writing review).
const bannedWords =
  /\b(?:seamless(?:ly)?|robust|powerful|leverag\w*|cutting-edge|effortless(?:ly)?|blazing(?:ly)?|ultimate|intuitive|delv\w*|elevat\w*|game-chang\w*|does the same (?:core )?job|not (?:just|only|merely)\b[^.]{0,60}\bbut)\b/i;
const attribution =
  /\b(?:developer|project|README|documentation|download page|help center|website)\b[^.]{0,30}\b(?:says|states|lists|names|notes|describes)\b|\bper (?:its|the) \w+|\baccording to\b/gi;
export const countWords = (text: string) =>
  text.match(/[A-Za-z0-9][\w'’.-]*/g)?.length ?? 0;

/** Problems with a record's summary and body under the standard; empty when it complies. */
export function writingProblems(
  record: { verified: string; summary: string },
  body: string,
): string[] {
  if (record.verified < writingStandardSince) return [];
  const problems: string[] = [];
  const words = countWords(body);
  if (words < minimumBodyWords)
    problems.push(
      `the description has ${words} words; write at least ${minimumBodyWords}`,
    );
  const process = body.match(processLanguage);
  if (process)
    problems.push(
      `"${process[0]}" describes the review, not the app; state the fact directly`,
    );
  if ((body.match(/\bThe README says\b/g) ?? []).length > 1)
    problems.push('attribute to the README at most once per description');
  if (audienceSlot.test(body))
    problems.push(
      'drop the "It suits people who …" line, or name a narrower audience',
    );
  if (/^(?:A |An )?(?:native|menu bar app)\b/i.test(record.summary))
    problems.push(
      'do not open the summary with "native" or "menu bar app"; start with what the app does',
    );
  const banned = body.match(bannedWords);
  if (banned)
    problems.push(`"${banned[0]}" is puffery or a stock frame; say it plainly`);
  if (/—|!|\*\*/.test(body.replace(/`[^`]*`/g, '')))
    problems.push('no em dashes, exclamation marks or bold in descriptions');
  const attributions = body.match(attribution)?.length ?? 0;
  if (attributions > 2)
    problems.push(
      `${attributions} sentences cite a source; attribute only claims nobody can check, at most twice`,
    );
  // Word counts of prose sentences; list items and inline code are left out.
  const sentences = body
    .split(/\n{2,}/)
    .filter((block) => !/^\s*(?:[-*+]|\d+\.)\s/.test(block))
    .join(' ')
    .replace(/`[^`]*`/g, 'code')
    .split(/(?<=[.!?])\s+(?=[A-Z"“(])/)
    .map(countWords)
    .filter((n) => n > 0);
  const longest = Math.max(0, ...sentences);
  if (longest > 40)
    problems.push(
      `a sentence runs ${longest} words; split anything over 40 (aim for 30)`,
    );
  if (sentences.length >= 8) {
    const mean = sentences.reduce((a, b) => a + b, 0) / sentences.length;
    const sd = Math.sqrt(
      sentences.reduce((a, b) => a + (b - mean) ** 2, 0) / sentences.length,
    );
    if (sd / mean < 0.25)
      problems.push(
        'sentence lengths are too uniform; mix short sentences with longer ones',
      );
  }
  return problems;
}

/** True when the body names at least one replaced product, with or without its vendor. */
export function namesReplacedProduct(
  body: string,
  products: readonly { name: string; vendor: string }[],
): boolean {
  const text = body.toLowerCase();
  return products.some(({ name, vendor }) => {
    const short = name.toLowerCase().startsWith(`${vendor.toLowerCase()} `)
      ? name.slice(vendor.length + 1)
      : name;
    return [name, short].some((form) => text.includes(form.toLowerCase()));
  });
}
