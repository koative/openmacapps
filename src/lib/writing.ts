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
  if (/^(?:A |An )?native\b/i.test(record.summary))
    problems.push(
      'do not open the summary with "native"; start with what the app does',
    );
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
