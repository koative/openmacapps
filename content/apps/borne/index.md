---
name: "Borne"
summary: "Native MAME front end with a three-pane game library and classic id Software engines; you supply your own game files."
category: "Games"
tags:
  - emulation
  - gaming
  - native
repository: "https://github.com/gpasa/borne"
website: "https://borne.pasahome.org"
license: "GPL-3.0"
licenseUrl: "https://github.com/gpasa/borne/blob/main/LICENSE"
download: "https://github.com/gpasa/borne/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/gpasa/borne"
  - "https://github.com/gpasa/borne/blob/main/LICENSE"
  - "https://github.com/gpasa/borne/releases/latest"
  - "https://borne.pasahome.org"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/gpasa/borne/HEAD/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Borne contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Borne is a native macOS front end for MAME and for classic id Software games, modelled on MAMEUI. Its window shows folders on the left, the game list in the middle and artwork and details on the right. MAME 0.289 is bundled, and PC games such as Doom, Quake and Duke Nukem 3D run on bundled source ports. It suits people who already own an arcade or PC game collection and want a Mac library for it: you point Borne at your own game files. Freedoom, a free Doom-style game, can be downloaded from within the app.

Borne requires macOS 14 or later and ships Apple silicon and Intel builds; the README says these are signed and notarized. The app is GPL-3.0; bundled MAME is GPL-2.0 and the other bundled engines keep their own licenses. Game data is not included. Some engines and data files are downloaded on request and checked against a checksum, and id Software data is only fetched after you accept id Software's licenses in Borne.
