---
name: "Petalwheel"
summary: "Menu bar file converter: drag files, tap Shift, drop them on a petal to convert, compress, OCR or archive."
category: "Utilities"
tags:
  - files
  - menu-bar
  - images
  - video
repository: "https://github.com/TheAlexRay/petalwheel"
website: "https://github.com/TheAlexRay/petalwheel"
license: "MIT"
licenseUrl: "https://github.com/TheAlexRay/petalwheel/blob/main/LICENSE"
download: "https://github.com/TheAlexRay/petalwheel/releases/download/v1.2.0/Petalwheel-1.2.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/TheAlexRay/petalwheel"
  - "https://github.com/TheAlexRay/petalwheel/blob/main/LICENSE"
  - "https://github.com/TheAlexRay/petalwheel/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/TheAlexRay/petalwheel/main/Resources/AppIcon-1024.png"
    credit: "kipperstudio"
    license: "MIT; upstream app icon, trademarks retained"
---

Petalwheel is a menu bar file converter. You drag files in Finder, tap Shift, and drop them on a petal of the wheel that opens under the cursor. It converts images, audio, video and documents, compresses and trims files, reads QR codes and text with OCR, and makes or extracts archives. Results are saved next to the originals, which are not changed. It suits people who regularly convert or compress files and do not want a separate app for each task. The app needs no Accessibility permission.

Requires an Apple silicon Mac running macOS 14 or later. The DMG is not notarized: Gatekeeper rejects it, which matches the README's note that builds are ad-hoc signed, so macOS blocks the first launch. On macOS 15 and later, open the app once and click Open Anyway under System Settings › Privacy & Security; on macOS 14, right-click the app and choose Open. The bundled FFmpeg and LAME are LGPL components; their notices are in the assets folder. The app was called Kumquat before version 1.1.0.
