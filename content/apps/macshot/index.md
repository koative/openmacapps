---
name: "macshot"
summary: "A screenshot and screen recording tool with annotation, redaction, OCR, translation and scrolling capture."
category: "Media"
tags:
  - screenshots
  - annotation
  - screen-recording
  - ocr
  - screenshot-tool
  - screen-recorder
alternativeTo:
  - cleanshot
  - snagit
repository: "https://github.com/sw33tLie/macshot"
website: "https://macshot.io"
license: "GPL-3.0"
licenseUrl: "https://github.com/sw33tLie/macshot/blob/main/LICENSE"
download: "https://github.com/sw33tLie/macshot/releases"
freeDownload: true
homebrew: "macshot"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/sw33tLie/macshot", "https://github.com/sw33tLie/macshot/blob/main/LICENSE", "https://github.com/sw33tLie/macshot/blob/main/README.md", "https://github.com/sw33tLie/macshot/blob/main/CHANGELOG.md", "https://github.com/sw33tLie/macshot/releases", "https://github.com/sw33tLie/macshot/releases/tag/v4.4.0", "https://macshot.io", "https://cleanshot.com/"]
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/sw33tLie/macshot/main/macshot/Assets.xcassets/AppIcon.appiconset/icon_256x256.png"
    credit: "sw33tLie and macshot contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Press Command-Shift-X and macshot freezes the screen so you can drag over a region, annotate it and copy the result with Command-C. It lives in the menu bar, and the shortcuts can be changed.

- Annotation tools include arrows, shapes, text, numbered markers, a pixel ruler, a magnifying loupe and a spotlight that dims everything else.
- The censor tool pixelates, blurs or fills areas, and can find emails, phone numbers, card numbers and API keys on its own.
- Scroll capture stitches a long page into one tall or wide image.
- Recordings save as MP4 at up to 120 fps or as GIF, with system audio and microphone, and open in an editor for trimming.
- OCR pulls text from a selection with Apple Vision, translates it and reads QR codes.

Captures can go straight to Google Drive, to imgbb, or to S3-compatible storage such as Cloudflare R2. If you want none of that, macshot Offline is a separate build with the upload and cloud features removed. History keeps earlier captures with their annotations editable.

CleanShot X covers similar ground and is sold as a paid app. macshot is free under the GPL v3, and its developer takes no donations.

macshot needs macOS 12.3 or later and the Screen Recording permission. The DMG holds a Universal app, signed with a Developer ID and notarized. Version 4.4.0 changed the developer signature, so updating from 4.3 can mean granting permissions again.
