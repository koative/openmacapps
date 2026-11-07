# Decisions

One dated line per decision, oldest first. When a decision replaces an earlier one, the line says which. If another project file contradicts this log, this log wins; fix the other file.

- 2026-10-17: Bun for everything: installation, scripts, tests, Astro and CI.
- 2026-10-17: Source-available apps are listed, but marked separately on cards, explained on product pages, and filterable by source. They are never called open source.
- 2026-10-17: Every app's official icon may be shown, including reserved-trademark and non-commercial ones, unmodified and with its real terms recorded. An icon is removed if its rights holder asks.
- 2026-10-17: Design follows the Mac App Store: sidebar shell (bottom tab bar on mobile), Discover shelves, product pages with a Get button, light and dark appearance from the system. Replaces the dark showcase, which had replaced the rejected pastel library design.
- 2026-10-29: Product name OpenMacApps, domain openmacapps.com, repository koative/openmacapps. Every page states that Mac and macOS are Apple trademarks and that the site is not affiliated with Apple.
- 2026-10-29: Pages say "free" only when every app they list has `freeDownload: true`.
- 2026-11-02: Credit Koative only; the founder's name and personal link are not shown. Replaces the 2026-10-31 credit that also named the founder.
- 2026-11-06 (Koray): Brand mark is the blue squircle with a 2×2 app grid and the top-right tile lifted out (`docs/BRAND.md`). Replaces the blue square with a cube.
- 2026-11-06 (Koray): Inclusion rules: unmaintained apps are listed with an Unmaintained label; star counts are not a criterion; command-line-only tools and apps whose main job needs a paid account stay out.
- 2026-11-06 (Koray): Standard published source-available licenses that allow personal use are listed (Commons Clause, FSL, PolyForm Noncommercial, Perimeter and Shield, the CC BY-NC family, and BSL when its Additional Use Grant allows ordinary use). One-off custom licenses stay out, apart from the reviewed exceptions in `src/lib/catalog.ts`.
- 2026-11-07: OpenMacApps shares no names, links, code, data, tools or research archive with any other project. Its research lives only in this repository: `docs/RESEARCH.md`, `docs/VERIFICATION.md` and `research/`. Replaces the same-day decision to copy finished research to a separate archive.
- 2026-11-07: claude-seo (core skills, v2.5.0, keyless only) is the SEO tool for this project. Copy work may also use the copywriting, copy-editing, competitors and site-architecture skills from marketingskills. geo-seo-claude is not used: its schema templates ship filled-in ratings and it updates itself from an unpinned branch. Whatever these tools suggest, structured data never gains `aggregateRating`, `Review` or `Rating` markup; `bun run check:links` fails the build output if it does.
- 2026-11-07: Nothing is pushed straight to `main`. Every change goes on its own branch and reaches `main` through a pull request. Commits from this workstation are authored as Abdulkadir Polat.
