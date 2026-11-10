---
name: csSETTINGS
summary: "Keeps a library of Community Shaders presets for a Skyrim CrossOver bottle and applies them with automatic backups."
category: Games
tags:
  - skyrim
  - modding
  - shaders
  - crossover
  - presets
repository: https://github.com/starbudweiser/csSETTINGS
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/csSETTINGS/blob/main/LICENSE
download: https://github.com/starbudweiser/csSETTINGS/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
sources:
  - https://github.com/starbudweiser/csSETTINGS
  - https://github.com/starbudweiser/csSETTINGS/blob/main/LICENSE
  - https://github.com/starbudweiser/csSETTINGS/releases
  - https://raw.githubusercontent.com/starbudweiser/csSETTINGS/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/csSETTINGS/releases/download/v1.0.0/csSETTINGS-1.0.0-macOS-arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

csSETTINGS manages the Community Shaders presets of a Skyrim bottle running under CrossOver, including the Bottled Shaders build used on Macs. You keep every preset in one library and apply one with a click.

Each apply is preceded by an automatic backup, and any earlier state can be restored. Presets come in from archives or folders, or straight from Nexus Mods inside the app. Downloading from Nexus needs a Premium account and your API key, which is kept in the macOS Keychain and never in a file.

The app can also switch the bottle between Community Shaders and ENB. Each system has its own set of files, and the switch makes a checked backup before it changes anything, so you can go back.

It is the smallest tool of the Skyrim Mac Toolkit and assumes the bottle is already set up. The interface follows your Mac's language among English, French, Spanish and Italian. The app is built with Python and Qt and ships as an arm64 build for Apple silicon, signed with a Developer ID and notarized. It checks GitHub for new releases once a day and can install them on its own when you allow it in Settings.
