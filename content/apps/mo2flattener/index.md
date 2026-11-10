---
name: mO2FLATTENER
summary: "Turns a Mod Organizer 2 instance into a plain, ready-to-play Skyrim folder that runs under CrossOver."
category: Games
tags:
  - skyrim
  - modding
  - mod-organizer
  - crossover
repository: https://github.com/starbudweiser/mO2FLATTENER
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/mO2FLATTENER/blob/main/LICENSE
download: https://github.com/starbudweiser/mO2FLATTENER/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "Assembly of an MO2 instance with its progress log."
    source: https://github.com/starbudweiser/mO2FLATTENER/blob/main/docs/screenshots/02_assembly.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/mO2FLATTENER
  - https://github.com/starbudweiser/mO2FLATTENER/blob/main/LICENSE
  - https://github.com/starbudweiser/mO2FLATTENER/releases
  - https://raw.githubusercontent.com/starbudweiser/mO2FLATTENER/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mO2FLATTENER/blob/main/docs/screenshots/02_assembly.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mO2FLATTENER/releases/download/v2.0.0/mO2FLATTENER_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mO2FLATTENER takes a Mod Organizer 2 instance and writes out a real Skyrim folder you can launch with CrossOver. The virtual file system MO2 uses on Windows does not work on a Mac, so the app does the merge on disk instead.

You point it at the instance and a profile. It reads `modlist.txt`, resolves conflicts in priority order with the bottom mod winning, as MO2 does, and copies the winning files with several threads at once. Root mods and Stock Game files go to the game root, the rest to Data.

Options:

- hard links instead of copies to save disk space;
- deployment of plugins.txt and the game INI files;
- exclusion of .pdb, .mohidden and other files the game never reads;
- a stop button and a stop-on-error setting.

A Mac adaptation step at the end can add DXMT, ENB or DLSS fixes for a CrossOver bottle, or leave a stock folder untouched. Each fix is announced first, listed in a report afterwards and can be undone one by one. Bottled Shaders is never downloaded or bundled.

The app pairs with fCLEANER, which removes the leftovers a flattened setup keeps. Releases are arm64 builds for macOS 15 or later, notarized, in four languages.
