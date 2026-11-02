---
name: "VCMI"
summary: "An open-source engine for Heroes of Might and Magic III that runs the game natively, with mods and a map editor."
category: "Games"
tags:
  - strategy
  - turn-based
  - fantasy
  - game-engine
  - mods
  - cross-platform
repository: https://github.com/vcmi/vcmi
website: https://vcmi.eu
license: "GPL-2.0"
licenseUrl: https://github.com/vcmi/vcmi/blob/develop/license.txt
download: https://github.com/vcmi/vcmi/releases/latest
homebrew: "vcmi"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/vcmi/vcmi
  - https://github.com/vcmi/vcmi/blob/develop/license.txt
  - https://github.com/vcmi/vcmi/releases
  - https://github.com/vcmi/vcmi/blob/develop/docs/players/Installation_macOS.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/vcmi/vcmi/develop/clientapp/icons/vcmiclient.256x256.png
    credit: "VCMI team"
    license: "GPL-2.0; upstream project asset, trademarks retained"
---

VCMI is an open-source recreation of the Heroes of Might and Magic III engine. It plays the original maps and campaigns as a native Mac app, adds interface improvements and support for larger windows, and can load mods that add towns, creatures and rule changes. A launcher manages settings and mods, and a map editor is included.

The game itself is not included: you need the data files from a copy of Heroes III, such as the Complete edition sold by GOG, whose offline installer the launcher can import. Separate builds are published for Apple silicon and Intel Macs. They are not notarized, so the first launch has to be allowed with Open Anyway under Privacy & Security in System Settings. Saved games usually cannot be loaded after a major version update.
