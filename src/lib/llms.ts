import { hundredsBelow, type CatalogApp } from './catalog';
import { absoluteUrl, site } from './site';

/** Shared llmstxt.org header for /llms.txt and /llms-full.txt; counts come from the catalog. */
export function llmsHeader(apps: readonly CatalogApp[]): string {
  const restricted = apps.filter(
    (app) => app.sourceAvailability === 'source-available',
  ).length;
  const count = (n: number) => n.toLocaleString('en-US');
  return `# ${site.name}

> ${site.name} is an independent, curated directory of ${count(hundredsBelow(apps.length - restricted))}+ open-source Mac apps, plus ${count(restricted)} labelled source-available ones. Every listing links the app's source code, its license file and its official download. Source-available apps, whose published code carries extra license restrictions, are labelled separately and never called open source. Made by koative; not affiliated with Apple.

Before an app is listed, its license file is read, the project is confirmed to ship a macOS app, and only its official download is linked. Each listing records the date of its last check; that date is not a security audit or an endorsement. The full method is on [How We Verify](${absoluteUrl('how-we-verify/')}).
`;
}
