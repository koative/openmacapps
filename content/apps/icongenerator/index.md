---
name: "IconGenerator"
summary: "Turns one image into Xcode app icon sets for iPhone, iPad, macOS, tvOS and watchOS, or into an .icns file."
category: "Design"
tags:
  - icons
  - xcode
  - development
repository: "https://github.com/onmyway133/IconGenerator"
website: "https://github.com/onmyway133/IconGenerator"
license: "MIT"
licenseUrl: "https://github.com/onmyway133/IconGenerator/blob/master/LICENSE.md"
download: "https://github.com/onmyway133/IconGenerator/releases/download/1.2.0/IconGenerator.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/onmyway133/IconGenerator/blob/master/README.md"
  - "https://github.com/onmyway133/IconGenerator/releases/tag/1.2.0"
  - "https://github.com/onmyway133/IconGenerator"
  - "https://github.com/onmyway133/IconGenerator/blob/master/LICENSE.md"
  - "https://github.com/onmyway133/IconGenerator/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/onmyway133/IconGenerator/blob/master/Icon/Icon.icns"
    credit: "Khoa Pham"
    license: "MIT; upstream app icon, trademarks retained"
maintenance: "unmaintained"
maintenanceNote: "No release since September 2018 and no commit since November 2023, as of 6 November 2026."
---

Drag an image onto the left box of IconGenerator's window, pick a platform, and it writes the icon files an Xcode project expects. iPhone, iPad, macOS, tvOS and watchOS each produce an `AppIcon.appiconset` folder with its Contents.json. The sixth choice is a single `AppIcon.icns` file. Results land in your Downloads folder.

IconGenerator is built on Electron, which makes the download large for a small tool: the 1.2.0 ZIP is about 74 MB. Inside is an Intel-only (x86_64) app that declares macOS 10.9 or later, so Apple silicon Macs run it through Rosetta 2. It has no usable code signature. Gatekeeper refuses it until you allow it under Privacy & Security in System Settings.

Khoa Pham wrote it and published it under the MIT license. Version 1.2.0, from September 2018, is still the latest release.

The source image can be a PNG, JPEG, WebP, TIFF, GIF or SVG file. Resizing is handled by the sharp image library. The folder layout follows Apple's asset catalog format as Xcode used it when the app was written, so compare the result with what your current Xcode project asks for before you commit it.
