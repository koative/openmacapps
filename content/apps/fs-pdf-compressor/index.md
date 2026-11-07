---
name: "FS PDF Compressor"
summary: "Drag-and-drop PDF compressor that runs Ghostscript locally, so your files never leave the Mac."
category: "Productivity"
tags:
  - pdf
  - compression
  - files
  - cross-platform
repository: "https://github.com/gitlares/fs-pdf-compressor"
website: "https://gitlares.github.io/fs-pdf-compressor/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/gitlares/fs-pdf-compressor/blob/main/LICENSE"
download: "https://github.com/gitlares/fs-pdf-compressor/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/gitlares/fs-pdf-compressor"
  - "https://github.com/gitlares/fs-pdf-compressor/blob/main/LICENSE"
  - "https://github.com/gitlares/fs-pdf-compressor/releases"
  - "https://gitlares.github.io/fs-pdf-compressor/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/gitlares/fs-pdf-compressor/releases/download/v1.0.16/FS-PDF-Compressor-1.0.16-arm64.dmg
    credit: FS PDF Compressor contributors
    license: AGPL-3.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

FS PDF Compressor makes PDFs smaller by dropping files onto its window, onto an optional always-on-desktop Drop Zone, or through a Finder Quick Action. Compression uses Ghostscript bundled inside the app, so no website upload and no separate install are needed. It replaces the original only when the result is smaller, and an optional Keep original mode writes a compressed copy beside it. It suits people who regularly shrink scanned or exported PDFs before mailing or uploading them.

The Mac build needs macOS 14 or later on Apple silicon. The README says it is Developer ID signed and notarized by Apple, so it opens normally with Gatekeeper enabled. The project also ships Linux and Windows builds, which this entry does not cover. The README describes the app as free, with no accounts, analytics or telemetry, and an optional donation link.
