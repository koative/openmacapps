---
name: RawTherapee
summary: "Develops RAW photos with fine control over demosaicing, color and detail, plus a command-line converter."
category: Design
tags:
  - photography
  - raw-editor
  - batch-processing
alternativeTo:
  - lightroom
  - capture-one
  - luminar-neo
repository: https://github.com/RawTherapee/RawTherapee
website: https://rawtherapee.com/
license: GPL-3.0
licenseUrl: https://github.com/RawTherapee/RawTherapee/blob/dev/LICENSE
download: https://rawtherapee.com/downloads/
freeDownload: true
homebrew: "rawtherapee"
featured: false
added: 2026-10-17
verified: "2026-11-08"
screenshots: []
sources:
  - https://github.com/RawTherapee/RawTherapee
  - https://github.com/RawTherapee/RawTherapee/blob/dev/LICENSE
  - https://github.com/RawTherapee/RawTherapee/blob/dev/README.md
  - https://rawtherapee.com/downloads/
  - https://rawtherapee.com/downloads/5.13/
  - https://www.adobe.com/products/photoshop-lightroom-classic.html
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/RawTherapee/RawTherapee/dev/rtdata/icons/hicolor/256x256/apps/rawtherapee.png", "credit": "RawTherapee contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

RawTherapee turns RAW files from a wide range of cameras into finished images. You open a shot, then work through demosaicing, color and detail settings before saving the result. Edits are non-destructive and run in a 32-bit floating-point engine.

The project puts weight on control over demosaicing. You can pick the algorithm, combine two of them on one image, and merge pixel-shift files with automatic ghost masking. It also repairs hot and dead pixels and can subtract dark frames or apply flat-field correction. Besides RAW, it opens high-dynamic-range DNG, JPEG, TIFF and PNG.

Version 5.13 came out in July 2026 and improved the Gamut Compression and Color Appearance & Lighting tools, among others. The Mac download is a ZIP holding a DMG with a Universal app. On Apple silicon it requires macOS 26 Tahoe; Intel Macs need macOS 12 Monterey or later. The app has to sit in /Applications and will refuse to start from anywhere else. A separate `rawtherapee-cli` tool handles processing from the command line.

Adobe Lightroom pairs its editor with a photo library for organizing and sharing, sold on an Adobe plan. RawTherapee is GPL-licensed and, as its README notes, will probably lack side features such as asset management, printing and uploading.
