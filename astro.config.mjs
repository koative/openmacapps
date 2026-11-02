import { defineConfig } from 'astro/config';
import { site, basePath } from './src/lib/site.ts';

export default defineConfig({
  site: new URL(site.url).origin,
  base: basePath,
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  // Renamed apps keep their old product URL, which upstream READMEs link to.
  redirects: {
    '/apps/openbucket/': '/apps/bucketdeck/',
  },
});
