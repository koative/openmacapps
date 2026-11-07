# Release verification

## Old apps that depend on a web service — 2026-11-07

Eight old apps that call an outside service were traced to the hosts in their source, and each host was probed without credentials; issue trackers were read for recent breakage reports. Two licenses held out earlier were read again.

- **Removed:** Crypto Bar (CryptoCompare's API now wants a key the app cannot take; its stream no longer answers), ScreenCat (signalling host no longer resolves), Tusk (Evernote moved its login; blank-window reports since 2025), Katana (both built-in upload hosts shut down; the tagged source ships no Imgur token) and Copilot for Xcode (official builds link a closed Pro module for paid Plus features, the same pattern as Tracexy). All five are in `research/held-out.json`.
- **Corrected:** Playback no longer promises torrent, YouTube or IPFS links (its tracker and gateway do not answer); Hacker Menu's website now points at its repository, because hackermenu.io serves an unrelated spam page.
- **Kept:** App Reviews (Apple's review feed and search answer), mac2imgur (its bundled Imgur client ID is accepted) and AFFiNE (the Enterprise Edition license itself places the parts shipped in the Community Edition desktop app under MPL-2.0, as the record says).

## Old and re-added apps — 2026-11-07

Every listing whose last release (or last push, without releases) is older than 2020 was checked: 51 apps. The release binaries of all those with a downloadable build are 64-bit, so they still open on current macOS.

- **Removed, the thing they depend on is gone:** NWPusher (Apple's legacy binary push interface, shut down on 2021-03-31; its code has no other endpoint), CoreOS VM (CoreOS Container Linux, end of life in 2020), Overkill (keeps iTunes from opening; iTunes left macOS in 2019) and Sequel Pro (its 2016 release crashes on current macOS; Sequel Ace is listed).
- **Removed, held out before and re-added by the bulk expansion:** Tracexy (official builds under separate commercial terms), Dockit (LICENSE says MIT, README says GPL-3.0) and uPic (LICENSE says Apache-2.0, README says MIT).
- **Labelled unmaintained:** AppPolice, Medis, Manta, Is It Private, Tusk, Ao, Dozer and Postbird, none with a release since 2019 or earlier.
- **New guard:** `research/held-out.json` records 52 repositories reviews decided against, with reasons; `bun run validate` refuses them and `bun run discover` marks them `held-out`.

## fb-mac-messenger removed — 2026-11-07

fb-mac-messenger, a 2015 Intel-only wrapper around Messenger's website, was held out in the third expansion (`docs/RESEARCH.md`, "service gone or superseded") but came back in the seventh, bulk expansion, whose prefilter did not read earlier hold-outs. It is removed again.

## Catalog drift scan — 2026-11-07

Every listing was checked against its repository through GitHub's GraphQL API: whether the repository still resolves and under which name, whether it is archived, GitHub's license field against ours, and whether the license file has changed since the listing's `verified` date. The five listings hosted outside GitHub were fetched directly.

- **Resolved:** all 1,887 repositories (1,882 on GitHub, 5 elsewhere).
- **License changed:** gksdud moved from MIT to Apache-2.0 on 2026-11-06, the day it was added. The other license-file changes since verification are copyright years, notices and formatting.
- **Moved:** Wink was transferred to `hey-yvan/Wink`. AI Novel Writer was renamed Pagekin, with a new icon; its page moves to `/apps/pagekin/`.
- **Archived:** Hyper and wechsel are now listed as unmaintained.
- **Not changed:** LibreOffice, where GitHub reads `COPYING` (GPL-3.0) but the project's license is MPL-2.0 (`COPYING.MPL`). 161 repositories have no license GitHub can identify; their files were read at verification and none changed since.

## Four listings re-checked — 2026-11-07

The 2026-11-06 count found two repositories that no longer resolve and two licenses that differ from GitHub's. Each was re-checked against the repository and its license file.

- **ApolloShell:** relicensed from MIT to AGPL-3.0 on 2026-10-23 (LICENSE history and README); the record now says AGPL-3.0.
- **Muxy:** relicensed from MIT to Apache-2.0 on 2026-11-04; the record now says Apache-2.0.
- **Telegram for macOS:** the source moved from `overtake/TelegramSwift` to `TelegramMessenger/telegram-macos`, which telegram.org/apps links; still GPL-2.0, the icon file is unchanged. Repository, license and asset links updated.
- **mxMarkEdit:** removed. The `maxnd` account and its repository are gone, and no other public source was found, so the listing no longer meets the first inclusion rule.

## Source-available licenses and 13 apps — 2026-11-06

Six licenses were added to the reviewed source-available list in `src/lib/catalog.ts` (`docs/RESEARCH.md` → Source-available licenses), and 13 apps that had been skipped only for their license or its identifier were added. Each license file was re-read; each record states what the license allows in `licenseNotes`.

**Checks.** `bun run validate`, `bun run homebrew`, `bun run sync`, `bun run build` (2,079 pages), `bun test`, `bun run check`, `bun run check:generated` and `bun run check:links` (180,130 internal links).

## Seventh expansion (bulk): 826 apps — 2026-11-06

826 apps were added after the review recorded in `docs/RESEARCH.md` (Seventh expansion). Every license file was re-read when the entry was written. Signing and notarization were checked with `spctl` and `stapler` where the release download finished; otherwise the record states only what the project says. Unmaintained apps carry `maintenance: unmaintained` and a dated note. `bun run discover` refreshed the queue: 2,842 leads from 11 directories, 1,618 published.

**Checks.** `bun run validate`, `bun run homebrew`, `bun run sync`, `bun run build` (2,066 pages), `bun test`, `bun run check`, `bun run check:generated` and `bun run check:links` (178,949 internal links).

## Sixth expansion (pilot): 24 apps from awesome-swift-macos-apps — 2026-11-06

24 apps from the eleventh discovery source were added after the review recorded in `docs/RESEARCH.md` (Sixth expansion). For each app the license file was read, the current release was downloaded and checked with `spctl` and `stapler` (signing and notarization are stated in the record), and the icon was taken from the app's own icon set; Search draws its icon in code and publishes no image, so it shows a letter tile. `bun run homebrew` added casks for six of the new apps and four existing ones (557 apps now have a cask).

**Checks.** `bun run validate`, `bun run sync`, `bun run build`, `bun test`, `bun run check`, `bun run check:generated` and `bun run check:links`.

## How We Verify page — 2026-11-06

`/how-we-verify/` explains the checks every listing passes: the license file read by hand, GitHub's `NOASSERTION`, the Source available label, official downloads and the check date. The sidebar, the footer, About and each app page's verification note link to it, and it is in the sitemap. Counts of source-available apps, download hosts and check dates are computed from the app records at build time.

**GitHub's license field.** On 2026-11-06 GitHub's GraphQL API (`repository { licenseInfo { spdxId } }`) was read for the 1,018 listed apps whose repository is on GitHub. The page quotes the 112 apps with no named license.
- 844 match the record's license.
- 60 differ: 48 only by `-only` or `-or-later` (GitHub reports `GPL-3.0` for a record's `GPL-3.0-or-later`), the rest name one part of a multi-license record or a different license.
- 104 are `NOASSERTION`, among them all 14 source-available apps, Rectangle, Sequel Ace, CotEditor and HandBrake.
- 8 have no license: Gaphor, KStars, LICEcap, LimeChat, MacDown, Nativ, OpenEmu and Thunderbird.
- 2 repositories did not resolve: `maxnd/mxMarkEdit` and `overtake/TelegramSwift`.

Not changed here, but worth a re-review: the two repositories that did not resolve, ApolloShell (GitHub now reports AGPL-3.0, the record says MIT) and Muxy (GitHub reports Apache-2.0, the record says MIT).

**Checks.** `bun run build` (1,213 pages), `bun test` (19 tests), `bun run check` (0 errors, warnings or hints), `bun run check:generated` and `bun run check:links` (101,122 links) pass. The page was opened in Chromium against the production preview at 1,440 and 390 px, in light and dark: no horizontal scroll, the license table fits at 390 px, the About tab stays selected on mobile, and all 42 links on the page return 200. The source-available link opens Search with that filter and shows 14 apps.

## lich and Mechvibes repositories moved — 2026-11-01

GitHub's API showed two listed repositories resolving elsewhere. Both are the same projects, renamed or transferred, with unchanged license files.

**lich.**
- `omartelo/lich` now resolves to `lichdotdev/lich` with the same repository ID. The README and website are the same project, and the author still holds the copyright ("AGPL-3.0-only © 2026 omartelo").
- The LICENSE is unchanged from the stored copy, so the listing keeps `AGPL-3.0-only`. The icon file has not changed since 2026-09-06.
- The website moved to `https://lichdotdev.github.io/lich/`, which returns 200. The old `https://omartelo.github.io/lich/` returns 404 without a redirect. The repository URL, license, downloads, sources and icon source now use the new locations.

**Mechvibes (was MechvibesDX).**
- `hainguyents13/mechvibes-dx` now resolves to `hainguyents13/mechvibes`, with the same repository ID. The README calls it "Mechvibes 3, the official Mechvibes app", which replaces Mechvibes 2 (the Electron app) and MechvibesDX. The Electron repository was renamed `mechvibes-electron` and archived.
- The MIT LICENSE is unchanged from the stored copy. The icon file has not changed since 2025-12-08.
- The website is now `https://mechvibes.com` (200), the repository's GitHub `homepage`. The old website was the repository URL, which redirects.
- The record is named Mechvibes. Its description now covers the macOS caveats in the README: ad-hoc signed and not notarized, the Accessibility and Input Monitoring permissions, and an anonymous usage ping per launch that can be turned off. The README offers an Intel disk image, but releases v3.2.1 to v3.4.0 ship only `macos-arm64.dmg`, so the record still says Apple silicon.

**Old URL.** The folder moved from `mechvibes-dx` to `mechvibes`, to match the app's name. `/apps/mechvibes-dx/` is retired rather than redirected, as with Bucketdeck. The site has no redirect mechanism.

## OpenBucket renamed Bucketdeck — 2026-11-02

Koative renamed OpenBucket to Bucketdeck and moved new work to the GPL-3.0. The listing moved from `/apps/openbucket/` to `/apps/bucketdeck/`.

**Evidence.**
- The GitHub API names the repository `koative/bucketdeck`, and the old URL resolves there. Its license is GPL-3.0, and the latest release is v0.3.0.
- The README says it is licensed under the GPL "version 3", with no "or later" clause, so the listing records `GPL-3.0-only`. Releases up to v0.2.3 stay MIT. The Bucketdeck name and app icon are not covered by the license, so the icon's asset note says so.
- `assets/UPSTREAM-LICENSE.txt` is now the repository's current LICENSE.
- The tap cask `koative/tap/bucketdeck` installs `Bucketdeck.app` from the repository's releases, with homepage `https://bucketdeck.com/`.
- `https://bucketdeck.com/`, the three screenshot sources, the icon source and the compatibility notes all return 200. The compatibility notes still list the six providers named in the description.
- The repository's GitHub `homepage` field is `https://bucketdeck.com`.
- The app icon changed on 2026-11-02 to two nested glass bands on blue, built in Icon Composer. The listing's icon is now the repository's `brand/app-icon/bucketdeck-256.png`, macOS's own rendering of it, unmodified; the old icon source no longer exists.

**Old URL.** `/apps/openbucket/` is retired rather than redirected; the Bucketdeck README badge now links to `/apps/bucketdeck/`.

**Checks.** `bun run validate`, `bun run check:generated`, `bun test` (19 tests), `bun run check` and `bun run build` (1,213 pages) pass. `bun run check:links` passes with 97,627 links, and `bun run check:homebrew` verifies 547 casks.

## 119 apps from Homebrew install data — 2026-11-02

**Catalog.** 1,023 apps (1,009 open source and 14 source available), with 117 alternatives pages and 49 topic pages. The leads and every exclusion are in [RESEARCH.md](RESEARCH.md#fifth-expansion-2026-11-02).

**Each new record has:**
- a hand-checked license, with a verbatim copy of the upstream license file;
- an official icon at 256 px, except LidAngleSensor, whose repository has no icon;
- a checked `freeDownload`;
- an original description that states signing, telemetry, privileged helpers and account requirements where upstream documents them.

**Display.** Totals now print with a thousands separator ("1,023") on Discover, Search and the README.

**Checks.**
- `bun run validate`, `bun test` (19 tests), `bun run check` and `bun run build` (1,212 pages) pass.
- `bun run check:links` passes with 97,625 links. `bun run check:generated` passes, and `bun run check:homebrew` verifies 547 casks.
- No page lacks a description, has a title over 70 characters, or shares a title with another page.
- Discover, Search, a product page and the Wispr Flow and Lens alternatives pages were opened in a browser in light and dark, at 1,440 and 390 px wide. No page scrolls sideways, every image loads, and there are no page errors.

## Moved to openmacapps.com — 2026-10-29

The catalog is now OpenMacApps, at <https://openmacapps.com/>, built from `koative/openmacapps`.

**What changed.**
- **DNS:** the A, AAAA and `www` records were created with the Cloudflare CLI.
- **GitHub Pages:** the custom domain was switched with `gh`. Once the certificate was approved, HTTPS was enforced.
- **Repository:** renamed. Its old URL answers with a 301.

**Checks.**
- **New domain:** `https://openmacapps.com/` returns 200. `http://` and `www` 301 to the apex. The canonical, `robots.txt` and the sitemap use the new domain.
- **Old address:** the former koative.com subdomain now 301s to the same path on openmacapps.com, query string included. This was tried with `/`, `/apps/iina/?ref=x` and plain `http://`.
- **Pipelines:** the deploy and catalog checks passed.
- **Other koative sites:** the koative.com project page and OpenBucket's footer link to the new address.

## Image weight and layout shift — 2026-10-29

**Problem.** Pages used the original files: 256 px PNG icons averaging 38 KB each, and screenshots of up to 2.3 MB.

**Before.** Measured on the live site with Chromium, mobile profile (4× CPU slowdown, 1.6 Mbps, 150 ms latency).
- Discover: 3.4 MB of images and an 18.2 s Largest Contentful Paint (LCP). On desktop it loaded 10.7 MB of images.
- Product pages: an LCP of 7.5 s.
- Search: the controls appeared only after JavaScript ran, which moved the results (Cumulative Layout Shift, CLS, 0.19).

**After.** Icons and screenshots are now resized WebP copies built by Astro (1,854 files, 6.9 KB average). The search controls render from the first paint, and only no-JavaScript visitors hide them. Same profile, against the production build:

| Page | Images | LCP | CLS |
|---|---|---|---|
| Discover | 0.2 MB | 0.8 s | 0 |
| Product page | 16 KB | 0.8 s | 0 |
| Search | no change | — | 0 |

The build takes about 10 s. `bun run check:links` passes (86,533 links).

## 25 apps added for searched pages — 2026-10-29

**Catalog.** The catalog now holds 903 apps, with 111 alternatives pages and 49 topic pages.
- Each new record passed the inclusion gates: a macOS GUI, an official macOS download, an allowlisted license and a release within about a year. Each also has an official icon with provenance and the upstream license text, a checked `freeDownload` and original copy. Seafile's icon is 128 px, the largest the project publishes.
- Existing records changed only in their `tags`, `alternativeTo` and `homebrew` lines.
- `bun run homebrew` found casks for 12 of the new apps, for 430 apps in total.

**Checks.** `bun run validate`, `bun test` (19 tests), `bun run check`, `bun run build` (1,086 pages), `bun run check:links` (86,339 links) and `bun run check:homebrew` pass. The discovery queue now matches 783 published apps.

## Search-data pass: verified "free" wording and Windows-only products — 2026-10-29

**Why.** Semrush US data (kept locally in the ignored `research/semrush/`) showed that "free" searches far outnumber "open source" ones: 7,620 against 610 for Lightroom alternatives, and 37,340 against 1,010 for Photoshop. It also showed high demand for Windows-only tools on the Mac, such as "notepad++ for mac" (3,600) and "rufus mac" (1,300).

**Free downloads.** Every app record now has `freeDownload`, set from evidence: 869 are free and 9 paid.
- **GitHub release assets (694 apps):** a script found a macOS installer in each app's official GitHub releases.
- **Agents (184 apps):** checked each official download page or App Store listing.
- **Paid:** Ardour, Fritzing, Automute, AI Dictation, Mac Mouse Fix, Pi Stats, QCAD, Textual and Zettel. Paid binaries, paid store-only builds and trials that must be bought all count as paid.
- **Wording:** product pages say "Free download" or "Paid download". 130 of 154 guide pages qualify for "Free, open-source" in their titles, because every app they list is free.

**Windows-only products.**
- **13 new "X for Mac" pages** (`onMac: false`): Notepad++, Rufus, PuTTY, WinSCP, Task Manager, AutoHotkey, Paint.NET, Microsoft Paint, MobaXterm, PotPlayer, Voicemeeter, PDF-XChange Editor and Ventoy. The official site of each confirms there is no macOS version.
- **Skipped:** TinyTask, Microsoft Publisher, UltraViewer, Radmin VPN and PaintTool SAI, which have fewer than two genuine Mac replacements in the catalog.
- **Reworded topics:** the file manager and app uninstaller topics now cover "Finder replacement" and "app cleaner" searches.

**Checks.** `bun run validate` (105 alternatives and 49 topic pages), `bun test` (19 tests), `bun run check`, `bun run build` (1,055 pages) and `bun run check:links` (83,226 links) pass. No title exceeds 70 characters and none is duplicated.

## AlternativeTo-led expansion — 2026-10-29

**Leads.** The 347 most popular paid and freemium Mac products on AlternativeTo were crawled with a headless browser, respecting its robots rules. For each of the 289 products not already in the catalog, the crawl also collected its open-source Mac alternatives. These were leads only: an agent checked each product against its official site and each app against its own README and record, and no AlternativeTo text was copied.

**Result.**
- 34 new alternatives pages, for 92 in total, among them Microsoft Word, Excel, PowerPoint and Outlook, REAPER, FL Studio, Ableton Live, Pro Tools, Claude Code, Fork, Opera, Vivaldi, NordVPN, f.lux, Affinity and SketchUp.
- 15 new topic pages, for 49 in total, among them digital audio workstations, time trackers, torrent clients, Homebrew apps, Android mirroring, 3D modeling and CAD, and notch apps.
- Additional apps on 13 existing pages.

**Rejected.**
- Products that are themselves open source or source-available: VLC, 7-Zip, KeePass, the Codex CLI, Proton Pass, Dashlane and others.
- Products with fewer than two apps doing the same core job: Clip Studio Paint, After Effects, Proxyman, Transmit, BetterTouchTool, DEVONthink, Trello and others.
- Many loose AlternativeTo pairings, such as Wireshark for Little Snitch, Karabiner-Elements for TextExpander, and Joplin for Notion.

**Audit.** 85 app records changed, and only their `tags` and `alternativeTo` lines differ. Two apps named Pulse now get distinct page titles. `bun run validate`, `bun test`, `bun run check`, `bun run build` (1,042 pages) and `bun run check:links` (81,300 links) pass, and no page lacks a description or has a duplicate title.

## Alternatives, topics, SEO and installable app — 2026-10-29

- **New pages:** 58 alternatives pages (`/alternatives/<id>/`, proprietary products with at least two genuine replacements) and 34 topic pages (`/topics/<slug>/`, built from precise tags). They are generated from `alternativeTo` on 171 app records and tags on the rest, so new app folders join them automatically. 304 app records changed, and an audit against the previous commit confirmed that only their `tags` and `alternativeTo` lines differ; one tag was removed on purpose (`code-editor` from Open in Code, which is a Finder button rather than an editor).
- **Rejected products:** those without two apps doing the same core job (Illustrator, Sketch, Things, Todoist, BetterTouchTool, Hazel, Transmit, Dash, Dropbox, TeamViewer, Discord) have no page.
- **Source-available apps:** pages that include them say so in their counts (for example "14 alternatives, 2 source available").
- **Search, links and metadata:** searching for a proprietary product's name finds its alternatives. Every page has a unique title of 70 characters or fewer and a meta description of 165 or fewer. Alternatives, topic, category and collection pages carry ItemList and BreadcrumbList structured data. The sitemap lists 991 URLs, 936 with `lastmod`.
- **Installable app:** a web app manifest, icons, an RSS feed of the 50 newest apps (`/feed.xml`) and a service worker were added. Chromium's `Page.getInstallabilityErrors` returned none against the production build, and the worker activated with the offline page cached. With the server stopped, a visited page loaded from cache and an unvisited one showed the offline page.
- **Checks:** `bun run validate`, `bun test` (18 tests), `bun run check`, `bun run build` (993 pages), `bun run check:links` (75,498 links), `bun run check:generated` and `bun run check:homebrew` pass. Desktop, 390 px and 320 px layouts show no horizontal overflow, and the five-tab mobile bar fits at 320 px.

## OpenBucket Homebrew tap — 2026-10-29

OpenBucket is installed from Koative's own tap, so its listing shows `brew trust koative/tap && brew install --cask koative/tap/openbucket`; Homebrew 7 loads non-official taps only after `brew trust` (checked against the installed Homebrew's `trust` command, where a one-slash name trusts the tap). `bun run check:homebrew` now reads tap casks from their `homebrew-<tap>` repository and applies the same rule: 418 casks verified, and an unrelated tap cask set on the listing as a test was rejected. Three screenshots on OpenBucket's page had also made the mobile page scroll sideways by 296 px, because each screenshot link's screen-reader label is absolutely positioned and escaped the scrolling shelf; shelf tracks are now positioned, and Discover, Search, a category, a collection and two product pages show no horizontal overflow at 390 and 1440 px.

## OpenBucket listing refreshed — 2026-10-28

OpenBucket's repository replaced its JPEG screenshots with PNG captures of a new demo, so the listing's three image sources had started returning 404. The listing now uses the new captures (resized to 1600 px and stored as WebP with their transparent window corners) and states the providers its compatibility notes record as live-tested: Amazon S3, MinIO, RustFS, SeaweedFS, Garage and S3Mock. All four cited upstream URLs return 200.

## Homebrew install commands — 2026-10-28

417 of 878 listings now show a `brew install --cask` command with a copy button. `bun run homebrew` matched them against Homebrew's cask index (7,814 casks) and records a cask only when its download URL or homepage is the app's own repository or website; deprecated, disabled and `@` variant casks are skipped. Of the 104 listings whose sources already cited a cask page, 87 agree and none conflict; the other 17 were held back for clear reasons: 9 casks are disabled for failing Gatekeeper, `abyssoft-teleport` is a fork of a different repository, 5 casks point at a renamed or separate repository, and Warp and Turbo Boost Switcher use a different homepage. Two listings matched several casks and were picked by hand: BlackHole uses `blackhole-2ch`, and Jellyfin Desktop uses `jellyfin-media-player` (its old repository name redirects to `jellyfin-desktop`, and it installs the current stable 1.12.0), not `jellyfin`, which installs the Jellyfin server. `bun run validate`, `bun test` (16 tests), `bun run check`, `bun run check:links` and `bun run check:homebrew` pass; the copy button was exercised in a browser in light, dark, desktop, mobile and no-JavaScript states.

## OpenBucket added — 2026-10-18

Koative's own OpenBucket (MIT, native S3 browser) joined the catalog with its icon and three real screenshots: **878 apps, 864 open source and 14 source available**. `bun run validate`, `bun run check:generated` and `bun run check:links` (62,054 links across 898 pages) pass.

## Catalog expansion to 877 apps — 2026-10-17

The catalog contains **877 apps: 863 open source and 14 source available**, across 11 categories, with 870 official icons and 33 screenshots. Seven apps ship no usable icon of their own and show a letter tile. The 358 new records came from reviewing every remaining discovery lead; decisions are in [RESEARCH.md](RESEARCH.md#third-expansion-2026-10-17).

Oversized catalog images were downscaled (icons to 256 px, screenshots to 1600 px; 113 files), so an icon on Discover no longer downloads up to 2.3 MB. Upscaled icons for Widelands and Teleport were replaced with their native 128 px files, and Lan Mouse's icon was re-rendered with its transparent background.

- `bun run validate` and `bun run check:generated`: all 877 records pass.
- `bun test`: 14 tests passed. `bun run check`: zero errors, warnings or hints.
- `bun run build`: 897 static pages in about 2 seconds.
- `bun run check:links`: 61,972 internal links, assets, self-links, and sitemap entries resolve.
- `bun run discover`: 1,724 leads from ten directories; 766 match published apps.

## Catalog expansion to 519 apps (historical)

The catalog contains **519 apps: 508 open source and 11 source available**, across 11 categories, with 517 official icons and 32 screenshots. SketchyBar and ungoogled-chromium ship no usable icon of their own and show a letter tile. The 227 new records came from reviewing every discovery lead listed by at least two directories; decisions and exclusions are in [RESEARCH.md](RESEARCH.md#second-expansion-2026-10-17).

- `bun run validate` and `bun run check:generated`: all 519 records pass; no repository is listed twice.
- `bun test`: 14 tests passed. `bun run check`: zero errors, warnings or hints.
- `bun run build`: 539 static pages. A production build now reads the catalog once instead of once per page, which took the build from about 51 seconds to under 2 seconds at this size.
- `bun run check:links`: 37,037 internal links, assets, self-links, and sitemap entries resolve.
- `bun run discover`: 1,724 leads from ten directories; 429 match published apps.

## App store redesign and repository audit — 2026-10-17

At the time of the redesign the catalog contained **292 apps: 283 open source and 9 source available**, across 11 categories, and every app showed its official upstream icon (292 icons) alongside 32 screenshots. For 14 apps the icon is reserved by trademark or published under non-commercial or no-derivatives terms (for example Mozilla, Bitwarden, Blender, Joplin, SimpleX, CotEditor, DuckStation). The project owner approved showing these unmodified, only to identify the linked app in this non-commercial directory. Each record states the actual terms, and an icon is removed if its rights holder asks.

The site was rebuilt as an app-store-style catalog: a sidebar shell (bottom tab bar on narrow screens), Discover shelves, Search, 11 category pages, 4 collection pages, and a product page per app. Light and dark appearance follow the system. Text uses system fonts, so the Manrope and DM Sans packages were removed.

- `bun test`: 14 tests passed.
- `bun run check`: zero errors, warnings or hints.
- `bun run build`: 312 static pages.
- `bun run check:links`: 21,022 internal links, assets, absolute self-links, and sitemap entries resolve. The stricter checker found that the 404 page declared a canonical URL `/404/` that does not exist; noindex pages no longer emit one.
- `bun run check:generated`: README matches all 292 records.

Chromium checks against the production build covered: legacy `/?category=` and `/?collection=` links redirecting to `/search/` and `/collections/<id>/`; search typing, URL sync, and mirroring between the sidebar and page fields; empty state and reset; Show More (24 → 48) with focus moving to the first new result; category filters creating history that Back restores; sidebar search submitted from other pages; the `/` shortcut; shelf paging; and naming only the clicked icon for the view transition into the product page. No page errors occurred. With JavaScript disabled, Search lists all 292 apps, filter controls stay hidden, and shelves keep a native scrollbar.

Captures at 1440 and 390 px in light and dark appearance were reviewed against the design brief, and the review's findings were fixed. `DESIGN.md` and `.impeccable/design.json` describe the new system.

The content audit requested every URL in every record, checked repository moves and license files through the GitHub API, and fixed broken or redirected links, moved repositories (ComfyUI Desktop, digiKam), license identifiers (Comfy Desktop, digiKam, Element), and record text (Medis, Mos, Monolingual). Pages that block automated requests but load in a browser, and upstream-only problems (GitButler's download page, jamovi's download redirect), are listed in the audit notes rather than changed. Tooling fixes: stricter duplicate-repository detection, case-insensitive `.TXT` notices, a link checker that also reads single-quoted and `srcset` URLs, absolute self-links and sitemap entries, and GitHub Actions moved to Node 24 releases.

---

## Catalog expansion and Bun migration (historical)

At this point the catalog contained **292 apps: 283 open source and 9 source available**, across 11 categories, with 230 genuine upstream icons and 32 screenshots. Loop, Cap and Pearcleaner are included; Pearcleaner is explicitly classified as source available.

- Bun 1.4.3 installs from `bun.lock`, executes all scripts and tests, and runs Astro. GitHub Actions uses the same pinned version; no npm lockfile or setup-node step remains.
- `bun install --frozen-lockfile`: reproducible dependency install passed.
- `bun test`: 14 tests passed, including prevention of restricted licenses being labeled open source.
- `bun run check`: zero errors, warnings or hints.
- `bun run build`: 295 static pages.
- `bun run check:links`: 8,022 generated internal links and asset references resolve.
- `bun run check:generated`: README matches all 292 records.
- `bun audit`: no reported vulnerabilities in the checked dependency set.
- `bun run discover`: 1,721 repository leads from ten directories; 204 matched published entries at this snapshot. Other leads are explicitly unreviewed, not claimed to be compatible apps.

Chromium checks against the production preview verified initial 24-item batches, loading 48 items, keyboard focus on newly revealed content, restoration of the expanded count through browser history, full-catalog search, all source classifications, category/tag/collection intersections, shareable URLs, reload persistence, and empty/reset states. Collection links reset incompatible prior filters. With JavaScript disabled all 292 app links remain available.

Layout checks covered widths 360, 390, 768 and 1440. Desktop/mobile collection, catalog and license-detail captures were inspected. Loop, Cap, Blender, LibreOffice, Firefox, Jan and DuckStation detail routes and official download links were checked. The final production-preview browser run reported no JavaScript exceptions or failed local resources.

An independent code review identified two navigation issues (retained source filters on collection links and lost expanded counts on Back). Both were fixed and confirmed by the reviewer and browser checks. Related apps are ranked by shared tags and category rather than alphabetic category membership alone.

Primary-source research and exceptions are recorded in [RESEARCH.md](RESEARCH.md), the individual app records, and [the discovery queue](../research/README.md). This review does not claim every app was installed or security audited.

---

## First public release (historical)

Reviewed on 2026-10-17 for the first public release.

### Automated checks

- `npm run validate`: 24 app records, required source evidence and local asset provenance.
- `npm test`: 13 tests covering schema validation, unsafe paths, missing attribution, duplicate repositories, license notices, Markdown rendering, and executable-content removal.
- `npm run check`: no Astro/TypeScript errors, warnings, or hints.
- `npm run build`: 27 static pages.
- `npm run check:links`: 699 generated internal links and asset references resolve.
- `npm run check:generated`: README catalog matches app folders.
- `npm audit`: zero known dependency vulnerabilities at verification time.

These checks run in GitHub Actions before publication, except the dependency audit, which was run locally. Counts describe this release and will change with catalog growth.

### Browser verification

28 assertions passed in Chromium against the working site:

- Search handles uppercase app names and synchronizes the URL.
- Category/tag filtering, clear/reset, empty state, and featured sorting behave correctly.
- Discrete filters create browser history; Back restores the prior category and results.
- Shared filtered URLs survive reloads.
- The slash shortcut focuses search.
- Catalog and detail pages do not overflow at widths 360, 390, 768, and 1440 pixels.
- Application details, official download targets, artwork license links, screenshots, and the About page render correctly.
- No browser JavaScript errors occurred during those checks.

Additional checks confirmed that reduced-motion preferences suppress the screenshot lift and that all 24 app links remain available with JavaScript disabled; inactive search controls are hidden in that fallback.

### Design review

An independent reviewer inspected desktop and mobile captures of the dark showcase, catalog, app details, and About page. Two findings were fixed: a spotlight headline/image collision and insufficient contrast around search/select fields. Confirmation included hover at desktop and tablet widths, mobile spotlights, keyboard focus, empty results, image evidence, and footer content.

The final verdict was **ship** for those fixes and the requested coverage. Field borders measure 3.93:1 against the field surface and 4.26:1 against the page. The design system is recorded in `DESIGN.md` and `.impeccable/design.json`.

App inclusion verifies cited source/license evidence; it is not a software security audit, installation test, or guarantee that an upstream project will remain maintained. macOS compatibility should be checked on each project's current release page.
