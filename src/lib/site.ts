const name = 'OpenMacApps';

/** Publishing identity shared by Astro, generated files, and maintenance scripts. */
export const site = {
  name,
  title: `Open-source Mac apps: a curated macOS catalog — ${name}`,
  description:
    'Open-source Mac apps for productivity, design, development, and more. Browse screenshots, source code, and clear license details for each macOS app.',
  url: 'https://openmacapps.com/',
  repository: 'https://github.com/koative/openmacapps',
  /** Opaque bar colours from global.css `--bg-bar`, flattened onto `--bg`. */
  themeColor: { light: '#fbfbfd', dark: '#1e1e1e' },
  backgroundColor: '#ffffff',
};

export const basePath = new URL(site.url).pathname;
export const absoluteUrl = (path = '') => new URL(path, site.url).href;

/** Prevent content from terminating an inline JSON-LD script element. */
export const serializeJsonLd = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c');
