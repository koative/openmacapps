---
name: "capcap"
summary: "A menu bar screenshot tool triggered by double-tapping Command, with annotation, scrolling capture and OCR."
category: "Utilities"
tags:
  - screenshots
  - annotation
  - ocr
  - menu-bar
  - screenshot-tool
repository: https://github.com/realskyrin/capcap
website: https://capcap.skyrin.fun
license: "MIT"
licenseUrl: https://github.com/realskyrin/capcap/blob/main/LICENSE
download: https://github.com/realskyrin/capcap/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/realskyrin/capcap
  - https://github.com/realskyrin/capcap/blob/main/LICENSE
  - https://github.com/realskyrin/capcap/releases
  - https://raw.githubusercontent.com/realskyrin/capcap/main/README.md
  - https://github.com/realskyrin/capcap/releases/tag/release-v1.7.23
  - https://capcap.skyrin.fun
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/realskyrin/capcap/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_512.png
    credit: "realskyrin"
    license: "MIT; upstream project asset, trademarks retained"
---

capcap takes a screenshot when you double-tap the Command key: click a window to grab it, or drag out any region, on any connected display. The capture opens in a floating editor where you annotate it, then press Return to copy the result or Escape to cancel.

- Arrows, numbered steps, text, rectangles, ellipses, a highlighter and mosaic stay editable after you place them, so you can move, recolour, rotate or delete them later.
- Scrolling capture stitches a long page while you scroll inside the selection.
- Beautify mode adds a gradient or wallpaper background, rounded corners, a shadow and padding.
- A pinned capture floats above all other windows for reference.
- A history panel keeps recent screenshots, colour picks and text, stored on the Mac, with search and starred items.
- Select an image in Finder and press the same shortcut to edit that file instead of taking a capture.

Text recognition uses Apple Vision on the Mac. On macOS 15 and later, Apple Translation can translate the recognised text on-device, or you can use your own AI or DeepL service. Uploading is optional and goes only to Tencent Cloud COS, Qiniu Kodo or Alibaba Cloud OSS buckets you configure. The developer says the app has no telemetry.

capcap needs macOS 14, plus Accessibility permission for the double-tap trigger and Screen Recording permission. The DMG holds a Universal app for Apple silicon and Intel, but it is self-signed and not notarized, so the README shows how to clear the quarantine flag. The interface comes in eight languages, and the main README is in Chinese, with an English translation alongside.
