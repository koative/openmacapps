---
name: fCLEANER
summary: "Scans a mod or game folder for leftover metadata, backups, sources and readmes, and removes them on request."
category: Games
tags:
  - modding
  - skyrim
  - cleanup
  - files
repository: https://github.com/starbudweiser/fCLEANER
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/fCLEANER/blob/main/LICENSE
download: https://github.com/starbudweiser/fCLEANER/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "A dry-run scan of a mods folder with sizes."
    source: https://github.com/starbudweiser/fCLEANER/blob/main/docs/screenshots/02_scan.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/fCLEANER
  - https://github.com/starbudweiser/fCLEANER/blob/main/LICENSE
  - https://github.com/starbudweiser/fCLEANER/releases
  - https://raw.githubusercontent.com/starbudweiser/fCLEANER/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/fCLEANER/blob/main/docs/screenshots/02_scan.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/fCLEANER/releases/download/v2.0.0/fCLEANER_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

fCLEANER finds the files a mod setup carries but the game never reads, and deletes them only when you ask. It is meant for a game folder after a mod list has been flattened, by mO2FLATTENER or by hand.

Every run starts as a dry run. The app lists what it would remove with the size of each file, and nothing is touched until you confirm. What it targets:

- system caches such as thumbs.db, desktop.ini and .DS_Store, and MO2 `*.mohidden` files;
- xEdit modgroups and Vortex or Nexus collection metadata;
- backups and temporary files such as `*.bak`, `*.tmp` and copies;
- office documents and graphic sources (.psd, .xcf, .pdn);
- readmes, changelogs and license files.

A filtering rules window lists every pattern, so you can see why a file is in the list before you purge it. On a large modlist the cleanup recovers space and makes the Data folder easier to read.

The app is written in Swift and ships as an arm64 build for macOS 15 or later, notarized. It checks GitHub once a day and can install a new release after checking its signature, never during a scan. The interface is in English, French, Spanish and Italian.
