---
name: mBAE
summary: "Lists and extracts Bethesda .bsa and .ba2 archives from Skyrim, Fallout 4 and Starfield on a Mac."
category: Games
tags:
  - modding
  - archives
  - skyrim
  - fallout
  - extractor
repository: https://github.com/starbudweiser/mBAE
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/mBAE/blob/main/LICENSE
download: https://github.com/starbudweiser/mBAE/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "The file list of an open BSA archive."
    source: https://github.com/starbudweiser/mBAE/blob/main/docs/screenshots/02_archive.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/mBAE
  - https://github.com/starbudweiser/mBAE/blob/main/LICENSE
  - https://github.com/starbudweiser/mBAE/releases
  - https://raw.githubusercontent.com/starbudweiser/mBAE/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mBAE/blob/main/docs/screenshots/02_archive.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mBAE/releases/download/v2.0.0/mBAE_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mBAE opens Bethesda game archives and extracts their files to a folder you choose. Drop a Skyrim Special Edition .bsa or a Fallout 4 or Starfield .ba2 anywhere on the window to see its content.

The file list shows each path, size and compression, with sortable columns. Extract all writes everything to the destination with a progress bar and keeps the folder structure. zlib and LZ4 compression are both handled.

Extraction is guarded against bad archives. Files whose internal path is absolute or contains `..` are skipped, so nothing is written outside the destination folder.

The app is the Mac counterpart of Bethesda Archive Extractor on Windows and covers its main use: looking inside an archive and pulling out meshes, textures or scripts to inspect or patch them.

Earlier versions were packaged Python. The current one is written in Swift, with a Language menu, an About window and a daily update check. It ships as an arm64 build for macOS 15 or later, signed with a Developer ID and notarized, in English, French, Spanish and Italian.
