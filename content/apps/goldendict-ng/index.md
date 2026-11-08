---
name: GoldenDict-ng
summary: "Searches all your local dictionaries at once and shows the results on one page."
category: Education
tags:
  - dictionary
  - languages
  - reference
repository: https://github.com/xiaoyifang/goldendict-ng
website: https://xiaoyifang.github.io/goldendict-ng/
license: GPL-3.0-or-later
licenseUrl: https://github.com/xiaoyifang/goldendict-ng/blob/staged/LICENSE.txt
download: https://github.com/xiaoyifang/goldendict-ng/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources:
  - https://github.com/xiaoyifang/goldendict-ng
  - https://github.com/xiaoyifang/goldendict-ng/blob/staged/LICENSE.txt
  - https://github.com/xiaoyifang/goldendict-ng/blob/staged/README.md
  - https://github.com/xiaoyifang/goldendict-ng/releases
  - https://raw.githubusercontent.com/xiaoyifang/goldendict-ng/staged/README.md
  - https://xiaoyifang.github.io/goldendict-ng/
  - https://xiaoyifang.github.io/goldendict-ng/install/
  - https://xiaoyifang.github.io/goldendict-ng/manage_sources/
  - https://github.com/xiaoyifang/goldendict-ng/releases/tag/v26.11.0
assets:
  - path: ./assets/icon.png
    source: https://github.com/xiaoyifang/goldendict-ng/blob/staged/icons/programicon.png
    credit: GoldenDict-ng contributors
    license: GPL-3.0-or-later; project trademarks remain with their owners
icon: ./assets/icon.png
---

Type a word into GoldenDict-ng and it searches every dictionary you have added, then shows all the entries together on one page. It reads many formats, among them MDX, DSL, StarDict and Zim. Websites, audio files and external programs can act as dictionaries too. For local files, you point it at the folders where your dictionaries live.

- A popup window handles quick lookups.
- Full-text search looks inside entries, using the Xapian engine.
- Hunspell morphology adds word stemming and spelling correction.
- Case, diacritics and punctuation are folded, so typing "Grussen" finds "grüßen" in German dictionaries.
- Anki integration and transliteration for some languages are built in.

Releases use calendar version numbers, and the project tentatively plans two a year around major Qt releases and the package freezes of Linux distributions. On the Mac it needs macOS 13 or later. Each release offers Apple silicon and Intel DMGs, built against two Qt versions.

GoldenDict-ng is a fork of the original GoldenDict, and the "-ng" stands for next generation. Against its predecessor it handles dictionaries larger than 4 GB and more than ten million headwords. Entries render through a current web engine, and there is a dark theme.
