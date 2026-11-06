---
name: "IconGenerator"
summary: "Electron app that turns one image into Xcode app icon sets for iPhone, iPad, macOS, tvOS and watchOS, or an .icns file."
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
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
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

IconGenerator takes one source image, in PNG, JPEG, WebP, TIFF, GIF or SVG, and writes an AppIcon.appiconset for iPhone, iPad, macOS, tvOS or watchOS, or an AppIcon.icns file. It is for developers who keep one master icon and need the Xcode asset files for each target.

The README says it is an Electron app and gives no minimum macOS version. The last release, 1.2.0, is from September 2018, so check the generated Contents.json against your Xcode version before you commit it.
