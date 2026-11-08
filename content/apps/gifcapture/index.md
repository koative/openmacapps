---
name: "GifCapture"
summary: "Records a resizable region of the screen and saves it as an animated GIF; last released in June 2017."
category: "Media"
tags:
  - screen-recording
  - gif
  - screenshots
repository: "https://github.com/onmyway133/GifCapture"
website: "https://github.com/onmyway133/GifCapture"
license: "MIT"
licenseUrl: "https://github.com/onmyway133/GifCapture/blob/master/LICENSE.md"
download: "https://github.com/onmyway133/GifCapture/releases/download/1.1.0/GifCapture.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/onmyway133/GifCapture"
  - "https://github.com/onmyway133/GifCapture/blob/master/LICENSE.md"
  - "https://github.com/onmyway133/GifCapture/releases"
  - "https://raw.githubusercontent.com/onmyway133/GifCapture/master/README.md"
  - "https://github.com/onmyway133/GifCapture/releases/tag/1.1.0"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/onmyway133/GifCapture/blob/master/GifCapture/Assets.xcassets/AppIcon.appiconset/icon_512@2x.png"
    credit: "Khoa Pham"
    license: "MIT; upstream app icon, trademarks retained"
maintenance: "unmaintained"
maintenanceNote: "No release since June 2017 and no commit since April 2021, as of 6 November 2026."
---

GifCapture records part of the screen as an animated GIF. Drag and resize its window over the area you want, press Command-R to start, and press Command-S to stop and save the file. When the GIF is ready, you can open it from the notification banner.

The app has a preferences window, and its commands have keyboard equivalents. Three items on the README's feature list were never finished: a progress display, recording across more than one screen, and picking a single application to capture. GIF encoding comes from the NSGIF library, and the icon from EmojiOne.

Version 1.1.0 from June 2017 is the last release, and the last commit dates from April 2021. It is an Intel app for macOS 10.11 or later, so Apple silicon Macs run it through Rosetta 2. The app has no code signature, and Gatekeeper rejects it, so you have to allow it under Privacy & Security in System Settings. Homebrew can also install it as a cask.
