---
name: "Viz"
summary: "Captures text, QR codes, barcodes and colours from a screen snippet and copies the result to the clipboard."
category: "Utilities"
tags:
  - ocr
  - screenshots
  - color
repository: "https://github.com/alienator88/Viz"
website: "https://github.com/alienator88/Viz"
license: "Apache-2.0 WITH Commons-Clause"
sourceAvailability: "source-available"
licenseNotes: "Viz is licensed under Apache 2.0 with the Commons Clause. The Commons Clause bars selling Viz, or a product or service whose value comes substantially from it, for a fee or other consideration. Everything else in Apache 2.0 applies, so the source can be used, changed and shared for other purposes."
licenseUrl: "https://github.com/alienator88/Viz/blob/main/LICENSE.md"
download: "https://github.com/alienator88/Viz/releases"
homebrew: "viz"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "Development on hold; no release since October 2025 (checked 2026-11-06)."
icon: "./assets/icon.png"
sources:
  - "https://github.com/alienator88/Viz"
  - "https://github.com/alienator88/Viz/blob/main/LICENSE.md"
  - "https://github.com/alienator88/Viz/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/alienator88/Viz/releases/download/2.3.3/Viz.dmg"
    credit: "alienator88, Viz author"
    license: "Apache-2.0 WITH Commons-Clause; upstream app icon, trademarks retained"
---

Viz reads text from a snippet of the screen, using Apple's Vision framework, and copies it to the clipboard. It also recognises QR codes, barcodes and colours, and it can run a shell command on each capture with the captured text passed in. Captures are kept in a history that survives restarts, with optional iCloud Drive sync, and several snippets can be appended to the clipboard. It suits people who often need text from images, videos or screenshots that cannot be selected.

Viz runs on macOS 13 or later as a universal build, and the release is notarized. It is source-available rather than open source, because of the Commons Clause. The author has put development on hold: the README says issues, pull requests and releases are not being handled for now, and the last release is from October 2025.
