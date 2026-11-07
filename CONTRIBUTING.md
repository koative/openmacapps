# Contributing to OpenMacApps

OpenMacApps is a curated collection of open-source macOS apps and separately labeled source-available apps. App records are the source of truth: both the website and the README catalog are generated from `content/apps/`.

## Before adding an app

Check that the project ships a macOS app and publishes source code under a reviewed license. Read the upstream license file; a repository being public or an app being free is not enough. Prefer maintained projects, useful descriptions, and working download links. A paid download is fine if the code is genuinely open source.

Discovery lists help find candidates, but are not proof of a current license or macOS support. Link primary sources in the record. Do not infer Apple Silicon support or native implementation from a project's programming language.

Search existing app folders and repositories to avoid duplicates. If a license is absent from the reviewed allowlist in `src/lib/catalog.ts`, include evidence in your pull request so it can be reviewed and added.

## Folder format

Use a lowercase, hyphen-separated folder name. Keep each app's metadata, prose, and images together:

```text
content/apps/example-app/
├── index.md
└── assets/
    ├── icon.png
    └── screenshot.png
```

`index.md` starts with YAML frontmatter, followed by an original description. This is a structural example; replace its placeholder URLs and evidence with real upstream sources:

```yaml
---
name: Example App
summary: A focused macOS tool that makes a common task easier.
category: Utilities
tags:
  - menu-bar
  - automation
repository: https://github.com/example/example-app
website: https://example.org
license: MIT
licenseUrl: https://github.com/example/example-app/blob/main/LICENSE
download: https://github.com/example/example-app/releases
homebrew: example-app
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: The app's preferences window with automation shortcuts enabled.
    source: https://github.com/example/example-app/blob/main/docs/screenshot.png
    credit: Example App contributors
sources:
  - https://github.com/example/example-app
assets:
  - path: ./assets/icon.png
    source: https://github.com/example/example-app/blob/main/resources/icon.png
    credit: Example App contributors
    license: MIT
  - path: ./assets/screenshot.png
    source: https://github.com/example/example-app/blob/main/docs/screenshot.png
    credit: Example App contributors
    license: MIT
---

Describe what this app does, where it fits into a workflow, and any meaningful
limits. Use your own words rather than copying an upstream README.
```

Body Markdown supports headings, lists, emphasis, links, quotes, code, and tables. Raw HTML and inline Markdown images are not rendered; add imagery through the attributed screenshot fields. Top-level body headings are demoted so the app name remains the page title.

### Writing the description

The description is the reason to visit the page, so it carries facts a reader cannot get from the summary. Write it as a careful Mac editor who has used the app: plain, exact and unexcited. Aim for 150 to 300 words. On any record verified on or after 2026-11-08, `src/lib/writing.ts` rejects the mechanical failures listed below; older records keep loading until they are rewritten and re-verified.

- **Open with the job.** The first sentence says what the app does and what you do with it: what you open, press or type, and what you get back. Do not open with "{App} is a …", "provides" or "offers", or with a category label.
- **Shape it to the app.** A sentence or two on the job, a list when there are four or more parallel features, then whatever this app needs: setup, limits, a comparison. Do not end every description on requirements or the license.
- **Person and tense.** The app is third person, present tense ("Ice hides …"). The reader is "you" ("press Return to paste it"). Never "we" or "I".
- **Rhythm.** Mix short sentences with longer ones; keep each under 30 words (validation stops at 40) and paragraphs to five sentences. Validation rejects bodies whose sentence lengths are nearly uniform.
- **Name what it replaces.** When `alternativeTo` lists a product, name at least one and give the one real difference in your own words. No stock frame such as "does the same job", and no prices.
- **State requirements and limits as facts.** Minimum macOS, Apple silicon or Intel builds and notarization come from the project's download page, release notes or release files; when sources disagree, follow the download or release page. Put each limit next to the feature it limits. Mention cost, accounts or outside services only when a primary source says so.
- **Attribute sparingly.** Attribute only claims nobody can check from outside, such as privacy or telemetry, with a plain verb ("The developer says …"); validation allows two. Never describe what a source does not say.
- **Write about the app, not the review.** No "this entry", "I checked" or "at review time", and no "It suits people who …".
- **Never** use ratings, superlatives or peacock words ("powerful", "seamless", "intuitive", "native" as praise), "not just … but" constructions, em dashes, exclamation marks, bold, or text copied or closely paraphrased from upstream. Leave out what you could not verify instead of hedging it.

Summaries describe the job in one line, starting with a verb or the thing the app is ("Shrinks PDFs, images and videos you drag onto its window"), never with "Native" or "Menu bar app".

All links must use HTTPS. Keep summaries at most 130 characters. Tags must be unique lowercase words separated by hyphens, with one to ten tags per app. Dates must be quoted ISO dates; `verified` records the most recent manual check and cannot precede `added`. It is not a security audit or endorsement.

Categories are `Productivity`, `Developer tools`, `Utilities`, `Media`, `Privacy & security`, `Writing`, `Design`, `Internet`, `Education`, `Games`, and `AI`. Choose one main category; use tags for overlap. The `featured` flag is an editorial choice, not a popularity metric. License values use reviewed SPDX identifiers, with `AND` or `OR` expressions when upstream requires them.

`sourceAvailability` defaults to `open-source`. Restricted source licenses require `sourceAvailability: source-available` and an original `licenseNotes` paragraph explaining the material restrictions. The reviewed restricted identifiers live separately in `sourceAvailableLicenses`; they cannot pass validation as open source. The catalog currently recognizes `Apache-2.0 WITH Commons-Clause` (an editorial combined label, not a standard SPDX expression), `LicenseRef-Mac-Mouse-Fix`, `FSL-1.1-MIT`, `CC-BY-NC-4.0`, `CC-BY-NC-ND-4.0`, `LicenseRef-PasteBar`, `LicenseRef-NotchPrompter`, and `PolyForm-Shield-1.0.0`. Do not strip extra terms or classify missing licenses as source available. Closed-source apps remain out of scope.

`maintenance` is optional and accepts `unmaintained`. When set, `maintenanceNote` is required and must be a single sentence explaining the status (for example `maintenanceNote: "No release since March 2023."`). Unmaintained apps are listed with an "Unmaintained" label in Secondary Label grey on cards and product pages, and a neutral grey note box on their product page.

## Alternatives and topics

Two kinds of landing pages fill themselves from app records, so a new app appears on them as soon as its folder is merged.

- **Alternatives** (`/alternatives/<id>/`). An app lists the proprietary products it genuinely replaces in `alternativeTo`, for example `alternativeTo: ["bartender"]`, placed after `tags`. Each id needs `content/alternatives/<id>.md`: frontmatter with the product's `name`, `vendor`, official `website`, `category`, a 15–160 character `summary` of what it does in your own words, `sources` (the official page) and a quoted `verified` date, then a short original introduction. A product gets a page if it is closed source (paid or free), or if it has no macOS version at all; mark the second kind `onMac: false` (Notepad++, PuTTY), which frames the page as "{name} for Mac". List an app only when it does the same core job, not a related one. Directories such as AlternativeTo are useful leads but their pairings are loose, so check each one against the product's site and the app's README. A page is published once at least two apps list it; validation rejects unknown ids and pages with fewer apps. Source-available apps may be listed: their lockups say so, and the page counts them separately. Never include prices, ratings or logos of the proprietary product.
- **Topics** (`/topics/<slug>/`). `content/topics/<slug>.md` has a plural `title` (for example "Clipboard managers"), a 50–160 character meta `description`, the `tags` that place an app in the topic (any one is enough) and an optional `category` to narrow it, followed by an original introduction. Give a new app the topic's precise tag (such as `clipboard-manager`) and it joins the page. A topic needs at least three matching apps, and every tag it names must exist.

`freeDownload` records whether the official macOS download costs nothing (`true`) or must be bought, including pay-what-you-want minimums and paid store-only builds (`false`). Put it right after `download`, and leave it out until you have checked. Pages say "free" only when every app they list has `freeDownload: true`, so an unchecked new app keeps the wording at "open-source".

## Images and attribution

Use clear upstream app icons and screenshots, with readable screenshots and descriptive alt text. Keep assets local, sized for their actual use, and preferably PNG or WebP. Avoid oversized retina originals when a smaller image remains sharp. Never fabricate a screenshot or use a discovery list's image without tracing its origin.

Every image file needs an `assets` entry with its original source URL, owner credit, and applicable license. Code and image licenses may differ; verify both. The `icon` field is optional and `screenshots` can be empty. Third-party images retain their upstream license and trademark rights.

To add or replace an icon, run `bun run icon <slug> <link>` on a Mac. The link can be the icon file (PNG, JPEG or `.icns`; a GitHub file page works) or the app's official `.dmg` or `.zip` download, from which the icon the app itself declares is used. The command saves a 256 px `assets/icon.png`, records the link, credit and license in `assets`, and refuses images that are not square, smaller than 128 px, or macOS's generic app icon. Use `--credit` and `--license` when the defaults (the record's existing credit and "<license>; upstream app icon, trademarks retained") are wrong. It cannot tell an app's own icon from another product's logo; check that yourself.

An app's official icon may be used even when its logo is reserved as a trademark or carries a non-commercial or no-derivatives license: OpenMacApps is non-commercial and shows the icon only to identify the app it links to. Use the official file unmodified (resizing or format conversion only), name the rights holder in `credit`, and state the actual terms in `license`, for example "Trademark of Mozilla Foundation; not covered by the MPL-2.0 code license". Remove the icon if the rights holder asks. For screenshots and every other image, if reuse rights are unclear, omit the image and explain the gap in your pull request.

Asset paths must begin with `./assets/`, remain inside the app folder, and point to existing files. Symlinks and path traversal are rejected. List provenance even for images not currently shown. Keep the applicable upstream license notices as `.txt` files in `assets/`; the build preserves and links each notice. The build copies these files into `public/catalog/`; do not edit generated copies.

## Local workflow

Use Bun 1.4.3 or newer (CI uses the version pinned in `package.json`):

```sh
bun install --frozen-lockfile
bun run dev
```

After editing records, run:

```sh
bun run validate
bun test
bun run check
bun run build
bun run check:links
bun run check:generated
```

`bun run sync` validates records, copies catalog assets, writes the public `catalog.json` feed, and regenerates the category lists in `catalog/` and their index in the README between `<!-- catalog:start -->` and `<!-- catalog:end -->`. Both development and production builds run sync automatically. Commit the updated README and `catalog/` alongside app records. Generated `public/catalog/`, `public/catalog.json`, and `dist/` stay out of Git.

`homebrew` is optional and names a Homebrew cask; the product page shows `brew install --cask <token>` with a copy button. Run `bun run homebrew` instead of guessing a token: it reads Homebrew's cask index and records a cask only when its download or homepage is the app's own repository or website, skipping deprecated, disabled and `@` variant casks. When several casks match (for example BlackHole's channel variants), it lists them and leaves the choice to you; a hand-set token must still pass that rule. CI runs `bun run check:homebrew`, which fails if a recorded cask disappears, is deprecated or no longer points at the app.

A cask from a third-party tap is written in full, `owner/tap/token` (for example `koative/tap/bucketdeck`); `bun run homebrew` never adds one, so set it by hand. The check reads the cask file from `github.com/owner/homebrew-tap` and applies the same repository-or-website rule. Because Homebrew only loads non-official taps that the user has trusted, the product page shows `brew trust owner/tap && brew install --cask owner/tap/token` and links the tap repository instead of formulae.brew.sh.

The site is served at the root of `https://openmacapps.com/`. Keep internal links and image URLs aware of Astro's `BASE_URL`; the catalog loader already resolves image paths. Preview production output with `bun run preview` after building.

## Pull requests

Describe the change and include direct evidence for the source license, macOS downloads, and image reuse. Keep unrelated fixes separate. CI checks data integrity, that the README and category lists are current, meaningful loader tests, Astro types, and the production build. Merges to `main` publish through GitHub Pages.

For an app suggestion without code, use the app suggestion issue form. For a broken link, incorrect license, outdated screenshot, moved repository or removal request, use the listing problem issue form with the affected app and evidence.
