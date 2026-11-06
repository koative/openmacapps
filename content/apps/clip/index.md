---
name: "Clip"
summary: "Menu bar screenshot, screen recording and on-device OCR tool that stays offline unless you check for updates."
category: "Utilities"
tags:
  - screenshots
  - screen-recording
  - ocr
  - annotation
alternativeTo:
  - cleanshot
repository: "https://github.com/chengffei/clip"
website: "https://chengffei.github.io/clip/"
license: "MIT"
licenseUrl: "https://github.com/chengffei/clip/blob/main/LICENSE"
download: "https://github.com/chengffei/clip/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/chengffei/clip"
  - "https://github.com/chengffei/clip/blob/main/LICENSE"
  - "https://github.com/chengffei/clip/releases/latest"
  - "https://chengffei.github.io/clip/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/chengffei/clip/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_512%402x.png"
    credit: "Felix Cheng and realskyrin"
    license: "MIT; upstream app icon, trademarks retained"
---

Clip is a menu bar tool for screenshots, region recordings and text capture. Double-tap Command to start a capture, then mark it up with shapes, arrows, a pen, mosaic, numbered markers and editable text. It can record a region to MP4 or GIF, stitch long scrolling captures, pin a capture above other windows and copy recognized text. It suits people who capture and mark up screenshots often and do not want an account or uploads.

It requires macOS 14 or later and is a universal build that runs on Apple silicon and Intel. The app is signed but not notarized, so macOS blocks the first launch until you allow it under Privacy & Security or clear the quarantine flag. It needs Accessibility and Screen Recording permissions. Text recognition runs on the Mac with Apple Vision and a bundled PP-OCRv6 model under Apache-2.0. The only network request is the update check, which runs when you choose Check for Updates.
