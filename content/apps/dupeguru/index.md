---
name: "dupeGuru"
summary: "Finds duplicate files across chosen folders by name or content, with special modes for music and pictures."
category: "Utilities"
tags:
  - files
  - cleanup
  - storage
  - cross-platform
repository: https://github.com/arsenetar/dupeguru
website: https://dupeguru.voltaicideas.net
license: "GPL-3.0"
licenseUrl: https://github.com/arsenetar/dupeguru/blob/master/LICENSE
download: https://github.com/arsenetar/dupeguru/releases/tag/4.3.1
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/arsenetar/dupeguru
  - https://github.com/arsenetar/dupeguru/blob/master/LICENSE
  - https://github.com/arsenetar/dupeguru/releases/tag/4.3.1
  - https://dupeguru.voltaicideas.net
  - https://raw.githubusercontent.com/arsenetar/dupeguru/master/README.md
  - https://github.com/arsenetar/dupeguru/releases
  - https://formulae.brew.sh/api/cask/dupeguru.json
  - https://formulae.brew.sh/cask/dupeguru
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/arsenetar/dupeguru/master/images/dupeguru.icns
    credit: "dupeGuru contributors"
    license: "GPL-3.0 repository asset; trademarks retained"
---

dupeGuru looks through the folders you pick for files that are probably copies of each other and shows them in groups. You then decide what happens to the extras: delete them, or move or copy them somewhere else.

A standard scan compares either file names or file contents. The name scan uses fuzzy matching, so it can pair files whose names are close but not identical. Beyond that:

- Music mode can read tags and shows music-specific details in the results.
- Picture mode compares images fuzzily, catching pictures that look alike without being the same file.
- Settings for the matching engine let you tune which kind of duplicates it looks for, and the help file documents each one.
- Results can be filtered and sorted, which helps when a low threshold produces false matches.

You can mark a folder as a reference, so duplicates inside it cannot be deleted and stay in the reference position of their group. The project presents this, with the grouping, as a guard against removing the wrong copy.

The Mac version uses the same Python core and Qt interface as the Windows and Linux builds. The newest release is 4.3.1 from July 2022, a zip holding a Universal app for Intel and Apple silicon. That app is signed with a Developer ID but not notarized, so Gatekeeper rejects it, and Homebrew disabled its dupeguru cask on 1 September 2026 for failing that check. Commits still land in the repository in 2026, and the README asks for help with macOS testing and packaging.
