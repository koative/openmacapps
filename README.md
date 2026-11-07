# OpenMacApps

**Good software. Open by nature.** A considered collection of open-source macOS apps and clearly labeled source-available alternatives, maintained by [koative](https://github.com/koative).

[Explore the catalog](https://openmacapps.com/) · [Contribute an app](CONTRIBUTING.md) · [Research & inclusion policy](docs/RESEARCH.md)

![OpenMacApps' Discover page: a sidebar store layout, spotlight cards with real app screenshots, and shelves of apps with Get buttons](docs/preview.png)

OpenMacApps is an app-store-style catalog of open-source Mac software. Browse Discover shelves, collections, and categories, search the whole catalog, and open a product page that puts the source code, license, and official download side by side. Light and dark appearance follow your system. Every entry is a small, reviewable folder, and the website and the category lists below come from the same Markdown source.

## One app, one folder

```text
content/apps/
  rectangle/
    index.md              # Metadata + original Markdown description
    assets/
      icon.png            # Official image with recorded provenance
      screenshot.png
```

YAML frontmatter describes the app: name, summary, category, tags, the proprietary products it replaces, repository, official website, download page, optional Homebrew cask, source classification, reviewed license, license evidence, verification date, and asset attribution. The Markdown body explains what it does. Screenshots are optional; invented screenshots and unverified compatibility claims are not accepted. Alternatives pages (`content/alternatives/`) and topic pages (`content/topics/`) list apps by those fields and tags, so a new folder appears on them automatically.

This structure keeps assets beside the app, makes pull requests understandable, and avoids one giant JSON file becoming a merge-conflict bottleneck. Generated output is never the editing surface.

## Development

Requires Bun 1.4.3+. Bun installs dependencies, runs TypeScript, executes tests, and runs Astro in development and CI. The static site is served by GitHub Pages.

```sh
bun install --frozen-lockfile
bun run dev
bun run validate
bun run check
bun test
bun run build
bun run check:links
```

Open the address printed by the dev server (normally `http://localhost:4321/`). `bun run sync` copies catalog assets for the site and refreshes the generated category lists in [`catalog/`](catalog/). CI checks the data, TypeScript, tests, and production build. Changes pushed to `main` deploy to GitHub Pages.

The [discovery queue](research/README.md) tracks repository leads from eleven directories. Refresh it with `bun run discover`; only independently reviewed app folders enter the store. `bun run homebrew` records Homebrew casks whose download or homepage is the app's own repository or website; see [CONTRIBUTING.md](CONTRIBUTING.md#local-workflow) for the matching rules.

See [how the catalog is maintained](docs/ARCHITECTURE.md) for the data model and editing flow, and [publishing and SEO](docs/PUBLISHING.md) for the shared site configuration, social card, custom domain setup, and sitemap submission.

## Catalog principles

- **Licenses are explicit.** Paid open-source distributions can qualify. Apps with published source and additional restrictions are separately labeled **Source available**, explained on their detail pages, and filterable. Closed-source freeware is excluded.
- **Evidence travels with every entry.** Source repository, license file, official download, and a dated verification record are required.
- **Original projects get the credit.** Logos, screenshots, and trademarks belong to their respective owners; each included asset records its source and applicable rights.
- **A directory is a lead, not proof.** We research multiple lists and verify individual projects. See the [research notes](docs/RESEARCH.md).
- **No installer mirror.** Download links lead to official sources. Inclusion is not a security audit or an endorsement by Apple or the app authors.

## Browse the collection

<!-- catalog:start -->

1,887 macOS apps: **1,855 open source** and **32 source available**. Source-available apps have additional restrictions and are labeled separately. Each category's list is generated from [content/apps](content/apps); edit the app folders to contribute.

| Category | Apps |
| --- | ---: |
| [Productivity](catalog/productivity.md) | 289 |
| [Developer tools](catalog/developer-tools.md) | 336 |
| [Utilities](catalog/utilities.md) | 578 |
| [Media](catalog/media.md) | 161 |
| [Privacy & security](catalog/privacy-security.md) | 63 |
| [Writing](catalog/writing.md) | 53 |
| [Design](catalog/design.md) | 60 |
| [Internet](catalog/internet.md) | 101 |
| [Education](catalog/education.md) | 29 |
| [Games](catalog/games.md) | 36 |
| [AI](catalog/ai.md) | 181 |

<!-- catalog:end -->

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete entry format, image policy, and checks. Small improvements to descriptions, broken links, screenshots, and license evidence are welcome.

## Credits and licensing

Built with [Astro](https://astro.build/) and [Lucide](https://lucide.dev/). Text uses each visitor's system fonts; the bundled icon license is preserved in [third-party notices](public/third-party-notices.txt). Discovery sources include [mac-apps](https://github.com/jeffreyjackson/mac-apps), [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps), and [awesome-mac](https://github.com/jaywcjlove/awesome-mac); the full comparison is in [our research](docs/RESEARCH.md).

OpenMacApps' original code and text are MIT licensed ([LICENSE](LICENSE)). Third-party app icons, screenshots, fonts, and other assets retain their upstream licenses and ownership; each app's asset metadata is in [content/apps](content/apps). App names and trademarks belong to their respective owners. App code licenses are listed for discovery and do not automatically license every visual asset. Mac and macOS are trademarks of Apple Inc.; OpenMacApps is not affiliated with Apple.

Made by [koative](https://koative.com)
