---
name: "Resizr"
summary: "Generates iOS app icon sets and image assets from one source image; the Android output was never finished."
category: "Design"
tags:
  - image-editor
  - images
  - developer-utilities
maintenance: unmaintained
maintenanceNote: "No commits or release since December 2019, as of 2026-11-06."
repository: "https://github.com/onurgenes/Resizr"
website: "https://github.com/onurgenes/Resizr"
license: "MIT"
licenseUrl: "https://github.com/onurgenes/Resizr/blob/master/LICENSE"
download: "https://github.com/onurgenes/Resizr/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/onurgenes/Resizr"
  - "https://github.com/onurgenes/Resizr/blob/master/LICENSE"
  - "https://github.com/onurgenes/Resizr/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/onurgenes/Resizr/master/Resizr/Assets.xcassets/AppIcon.appiconset/Resizr-Icon-512@2x.png"
    credit: "Onur Genes (Resizr)"
    license: "MIT; upstream app icon, trademarks retained"
---

Resizr takes one source image and exports the icon set and image assets an iOS app needs into a folder you choose. It is meant for developers and designers who would otherwise cut each size by hand. The README lists Android icon sets and a warning for source images that are too small as unfinished, so the tool covers only the iOS side.

The 1.3.2 build is signed with a Developer ID and notarized by Apple, and its binary is Intel only (x86_64). Its Info.plist declares macOS 10.13 or later. The project has had no commits or releases since December 2019, so expect no fixes or updates.
