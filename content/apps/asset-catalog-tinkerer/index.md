---
name: "Asset Catalog Tinkerer"
summary: "Open compiled asset catalog (.car) files to browse the images inside, then copy or export them."
category: "Developer tools"
tags:
  - xcode
  - images
  - inspection
  - quick-look
repository: https://github.com/insidegui/AssetCatalogTinkerer
website: https://github.com/insidegui/AssetCatalogTinkerer
license: "BSD-2-Clause"
licenseUrl: https://github.com/insidegui/AssetCatalogTinkerer/blob/main/LICENSE
download: https://github.com/insidegui/AssetCatalogTinkerer/releases
freeDownload: true
homebrew: "asset-catalog-tinkerer"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/insidegui/AssetCatalogTinkerer", "https://github.com/insidegui/AssetCatalogTinkerer/blob/main/LICENSE", "https://raw.githubusercontent.com/insidegui/AssetCatalogTinkerer/main/README.md", "https://github.com/insidegui/AssetCatalogTinkerer/releases/tag/2.9", "https://insidegui.gumroad.com/l/AssetCatalogTinkerer"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/insidegui/AssetCatalogTinkerer/releases/download/2.9/AssetCatalogTinkerer_v2.9-290.zip
    credit: "Guilherme Rambo"
    license: "BSD-2-Clause project asset (AppIcon.icns from the 2.9 release bundle); trademarks retained"
---

Asset Catalog Tinkerer opens the compiled asset catalogs, files ending in .car, that apps keep their images in, and shows you every image inside. Look in an app's Resources folder for one. Once it is open, you can drag single images out, or export a selection or the whole catalog to a folder.

Since version 2.2 it also reads theme store files, which hold the artwork for interface controls. macOS keeps one in /System/Library/CoreServices/SystemAppearance.bundle. Apple's pro apps carry others in frameworks such as ProKit.framework and LunaKit.framework.

A Quick Look plug-in comes with the app, so you can preview a catalog in Finder without opening it. The app was written with images in mind. Newer kinds of catalog content, such as named colors, are not supported.

Version 2.9 is a universal app for macOS 11 or later, signed with a Developer ID and notarized. You can download it from GitHub, install the asset-catalog-tinkerer Homebrew cask, or get it on Gumroad and pay the developer whatever amount you choose.
