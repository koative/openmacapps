# Decisions

One dated line per project decision, oldest first. When a decision replaces an earlier one, the line says which. If another file in this repository contradicts this log, the log wins; fix the other file.

- 2026-10-17: Bun for everything: installation, scripts, tests, Astro and CI.
- 2026-10-17: Source-available apps are listed, but marked separately on cards, explained on product pages, and filterable by source. They are never called open source.
- 2026-10-17: Every app's official icon may be shown, including reserved-trademark and non-commercial ones, unmodified and with its real terms recorded. An icon is removed if its rights holder asks.
- 2026-10-17: Design follows the Mac App Store: sidebar shell (bottom tab bar on mobile), Discover shelves, product pages with a Get button, light and dark appearance from the system. Replaces the dark showcase, which had replaced the rejected pastel library design.
- 2026-10-29: Product name OpenMacApps, domain openmacapps.com, repository koative/openmacapps. Every page states that Mac and macOS are Apple trademarks and that the site is not affiliated with Apple.
- 2026-10-29: Pages say "free" only when every app they list has `freeDownload: true`.
- 2026-11-02: Credit koative only; no personal names or links. Replaces the 2026-10-31 credit that also named the founder.
- 2026-11-06: Brand mark is the blue squircle with a 2×2 app grid and the top-right tile lifted out (`docs/BRAND.md`). Replaces the blue square with a cube.
- 2026-11-06: Inclusion rules: unmaintained apps are listed with an Unmaintained label; star counts are not a criterion; command-line-only tools and apps whose main job needs a paid account stay out.
- 2026-11-06: Standard published source-available licenses that allow personal use are listed (Commons Clause, FSL, PolyForm Noncommercial, Perimeter and Shield, the CC BY-NC family, and BSL when its Additional Use Grant allows ordinary use). One-off custom licenses stay out, apart from the reviewed exceptions in `src/lib/catalog.ts`.
- 2026-11-07: Structured data never carries `aggregateRating`, `Review` or `Rating` markup, because the catalog has no ratings or reviews; `bun run check:links` fails the build output if it does.
- 2026-11-07: Every change reaches `main` through a pull request; nothing is pushed to `main` directly.
- 2026-11-08: Prose app counts stay round ("1,800+", "More than 1,800"), computed from the catalog so they stay true as it grows. Exact counts remain where the page lists the apps.
- 2026-11-08: App descriptions follow the house style in CONTRIBUTING.md ("Writing the description"): the app in third person, the reader as "you", facts only from primary sources, no stock frames or puffery, at most two attributions. `src/lib/writing.ts` enforces the mechanical rules on every record verified from this date.
- 2026-11-08: When sources disagree on a requirement such as the minimum macOS, the project's download page or release notes win.
- 2026-11-09: Public copy never claims that licenses were checked "by hand"; it says what the check is: the license is read from the license file.
