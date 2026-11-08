---
name: "Iconizer"
summary: "Creates Xcode asset catalogs of app icons, launch images and image sets from one source image."
category: "Developer tools"
tags:
  - xcode
  - icons
  - development
repository: "https://github.com/raphaelhanneken/iconizer"
website: "https://raphaelhanneken.com/iconizer/"
license: "MIT"
licenseUrl: "https://github.com/raphaelhanneken/iconizer/blob/master/LICENSE"
download: "https://github.com/raphaelhanneken/Iconizer/releases/download/2020.11.0/Iconizer.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/raphaelhanneken/iconizer/blob/master/README.md"
  - "https://github.com/raphaelhanneken/iconizer/releases/tag/2020.11.0"
  - "https://github.com/raphaelhanneken/iconizer"
  - "https://github.com/raphaelhanneken/iconizer/blob/master/LICENSE"
  - "https://github.com/raphaelhanneken/Iconizer/releases"
  - "https://raphaelhanneken.com/iconizer/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/raphaelhanneken/iconizer/blob/master/Iconizer/Resources/Images.xcassets/Iconizer.appiconset/icon-1024.png"
    credit: "Raphael Hanneken"
    license: "MIT; upstream app icon, trademarks retained"
maintenance: "unmaintained"
maintenanceNote: "No release since November 2020 and no commit since October 2021, as of 6 November 2026."
---

Iconizer turns one dropped image into a finished Xcode asset catalog: choose the targets, click Export, and it builds the folder structure and renders every image size the catalog needs.

It covers three kinds of asset. App icons can be made for macOS, iPhone, iPad, CarPlay and Apple Watch, either as separate catalogs or combined into one. Launch images for iPhone and iPad come from a landscape and a portrait image, or from one square image used for both, and Iconizer tries to keep the aspect ratio. For an image set, you give it a @3x image and a name, and it writes the 1x, 2x and 3x versions.

Source size matters. The project site suggests 1024 by 1024 pixels for icons, and 2208 by 1242 for a landscape launch image (1242 by 2208 for portrait).

The 2020.11.0 DMG holds a Universal app for Apple silicon and Intel that declares macOS 10.10 or later. Neither the disk image nor the app carries a usable signature, so macOS blocks the first launch until you allow it under Privacy & Security. The README also gives a Homebrew cask, `iconizer`. For a plain .icns file, the README points to the developer's separate Icns Composer app.
