# Publishing OpenMacApps

The public repository is [koative/openmacapps](https://github.com/koative/openmacapps). The site is served at <https://openmacapps.com/>. Pushes to `main` run the Bun checks and deploy the static Astro build through GitHub Actions.

## Site identity and SEO

`src/lib/site.ts` owns the site name, default title, description, repository URL, public URL, and theme colours. Astro's base path, catalog asset fallback, generated README links, sitemap, robots output, web app manifest, RSS feed, and link checker derive their address and name from it, so a rename is one edit there.

Each page has a canonical URL without filter parameters, Open Graph and Twitter metadata, and a share image. Discover, search, the category and collection pages, About, and every app page are in the sitemap. App pages have descriptive titles and factual `SoftwareApplication` and breadcrumb structured data. We do not invent prices, review scores, or release dates: only an app whose official download was checked as free (`freeDownload: true`) gets an `Offer` with price `0`, and unchecked or paid apps get no `offers`. This markup does not guarantee a Google rich result. The 404 page is marked `noindex` and excluded from the sitemap.

Links to listed apps (website, repository, download, license and sources) are ordinary followed links, because each one has been checked. On an alternatives page, the link to the proprietary product's own website carries `rel="nofollow"`: it is a reference for readers, not an endorsement. App pages offer developers a "Listed on OpenMacApps" README badge (`public/badge.svg`) that links back to their listing.

`public/social-card.png` is the 1200 × 630 default sharing image. Its editable source is `design/social-card.html`, which shows real catalog icons from `content/apps/`. Serve the repository root over HTTP, open the file in a browser on macOS so `system-ui` resolves to SF Pro, and capture a 1200 × 630 screenshot. `docs/preview.png` is a 1440 × 1050 screenshot of the actual Discover page in light appearance.

`src/layouts/Layout.astro` loads [Simple Analytics](https://www.simpleanalytics.com/) on every page with the script from `scripts.simpleanalyticscdn.com`. Page views are stored only for hostnames added to the Simple Analytics account, so `openmacapps.com` must be listed there; local previews send hits that the service does not record.

## Installable app and offline support

`/manifest.webmanifest` comes from `src/pages/manifest.webmanifest.ts`. Its name, description and colours come from `site.ts`, and its start URL and scope come from Astro's base path. It has Search, Categories and Alternatives shortcuts. `site.themeColor` holds the opaque colours of the translucent top bar (`--bg-bar` in `src/styles/global.css` flattened onto `--bg`). The manifest and the light and dark `theme-color` meta tags in `Layout.astro` read it, so update it when the bar colour in `global.css` changes.

The icons in `public/` come from the brand kit in `public/brand/` (see [BRAND.md](BRAND.md)): `favicon.svg` is a copy of `brand/favicon.svg`, `icon-192.png` and `icon-512.png` are rendered from `brand/app-icon.svg`, and `icon-maskable-512.png` (glyph inside the 80% safe zone) and `apple-touch-icon.png` (180 px, because iOS applies its own mask) are full-bleed: the icon gradient as a plain square, glyph from `brand/mark.svg`, no transparency. If the mark changes, re-render them all, for example with `sharp` from a temporary directory, and bump `CACHE` in `public/sw.js` so the precached icons refresh. The brand board `docs/brand.png` is a 1440 × 960 screenshot (device scale 1) of `design/brand-board.html`, captured like the social card.

`public/sw.js` is registered only in production builds. It precaches `/offline/` and the icons. Page navigations go to the network first and fall back to the last cached copy of that page, then to the offline page. Hashed `/_astro/` assets are served cache-first. Other origins (Simple Analytics, Homebrew, GitHub) and non-GET requests bypass it. Bump `CACHE` in `sw.js` when the precache list, a precached file or the strategy changes; activation deletes older caches. The offline page is `noindex` and stays out of the sitemap.

## RSS feed

`/feed.xml` (`src/pages/feed.xml.ts`) is an RSS 2.0 feed of the 50 most recently added apps. Apps are sorted by `added`, newest first, then by name. Each item has the app name, its absolute product URL as link and permalink GUID, the summary, the category, and `added` as the publication date. Every page links it with `<link rel="alternate" type="application/rss+xml">`.

## llms.txt

`/llms.txt` (`src/pages/llms.txt.ts`) describes the site for language models in the [llmstxt.org](https://llmstxt.org/) format: a summary, how listings are verified, then links to the key pages, every category, alternatives and topic page, and the data files. `/llms-full.txt` (`src/pages/llms-full.txt.ts`) shares the header and lists every app on one line, grouped by category, with its summary, license and download host. Both are built from the catalog, so counts stay current; `bun run check:links` checks their links. Neither is in the sitemap.

## Custom domain

The site is served at the root of `openmacapps.com`, registered at Cloudflare on 2026-10-29:

- Cloudflare zone `openmacapps.com` has four **A** records for `@` (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`), four **AAAA** records for `@` (`2606:50c0:8000::153` to `2606:50c0:8003::153`) and a **CNAME** `www` → `koative.github.io`, all **DNS only** (gray cloud). GitHub redirects `www` to the apex.
- Repository **Settings → Pages → Custom domain** is `openmacapps.com`. The Actions publishing method uses this setting, not a `CNAME` file.
- `site.url` in `src/lib/site.ts` is `https://openmacapps.com/`, so the base path is `/`.

**Enforce HTTPS** is on: GitHub's certificate covers `openmacapps.com` and `www.openmacapps.com`, and plain `http://` requests get a 301 redirect to HTTPS (checked 2026-10-29).

The catalog's earlier address, a subdomain in the `koative.com` Cloudflare zone, answers with a permanent redirect so old links and search results carry over: its DNS record is proxied (orange cloud), and a zone **Redirect Rule** sends a 301 to `concat("https://openmacapps.com", http.request.uri.path)` with the query string preserved. GitHub Pages serves one custom domain per repository, so it cannot do this redirect itself. Add `openmacapps.com` in Google Search Console and use the Change of Address tool from the old property.

To change the hostname again, update the Pages setting and DNS records, change `site.url`, update the README's hand-written links and the repository homepage, run `bun run sync` to regenerate catalog links, then run the validation and build checks before deploying.

The generated `/robots.txt` is served at the hostname root and points to `https://openmacapps.com/sitemap.xml`. The sitemap is also linked from every page's HTML. Verify the domain in Google Search Console and submit `/sitemap.xml`; this requires access to the domain or Search Console account.

GitHub redirects renamed repository URLs, so links that use the repository's earlier name still work; `site.repository` in `src/lib/site.ts` and the README use the current name.

References: [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [repository renaming](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository), [Google structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
