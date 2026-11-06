---
name: "APNGb"
summary: "macOS app that builds animated PNG files from image frames and splits APNG files back into individual frames."
category: "Media"
tags:
  - animation
  - png
  - image-tools
repository: "https://github.com/shgodoroja/APNGb"
website: "https://github.com/shgodoroja/APNGb"
license: "MIT AND Zlib"
licenseUrl: "https://github.com/shgodoroja/APNGb/blob/master/LICENSE"
download: "https://github.com/shgodoroja/APNGb/releases/download/v2.0.1/APNGb-v2.0.1.app.zip"
freeDownload: true
maintenance: unmaintained
maintenanceNote: "No release since November 2017."
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/shgodoroja/APNGb"
  - "https://github.com/shgodoroja/APNGb/blob/master/LICENSE"
  - "https://github.com/shgodoroja/APNGb/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/shgodoroja/APNGb/releases/download/v2.0.1/APNGb-v2.0.1.app.zip"
    credit: "Stefan Godoroja"
    license: "MIT; upstream app icon, trademarks retained"
---

APNGb assembles a series of PNG frames into one animated PNG, with options to change the frame delay for all or selected frames, playback controls, and optimisation and compression. It can also split an APNG back into its frames. The app is built on Max Stepin's APNG Assembler and Disassembler, which ship inside it under the zlib license.

The app bundle declares macOS 10.11 or later and is an Intel-only (x86_64) build. The zip is signed with a Developer ID certificate but not notarized, so the first launch must be allowed in System Settings. The project has had no release since November 2017.
