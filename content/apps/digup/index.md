---
name: "DigUp"
summary: "Finds photos, PDFs, documents, recordings and videos on your Mac when you describe what is in them, using an on-device model."
category: "Utilities"
tags:
  - search
  - local-ai
  - files
  - menu-bar
  - cross-platform
repository: "https://github.com/ARahim3/DigUp"
website: "https://digup.arahim.dev"
license: "MIT"
licenseUrl: "https://github.com/ARahim3/DigUp/blob/main/LICENSE"
download: "https://github.com/ARahim3/DigUp/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ARahim3/DigUp"
  - "https://github.com/ARahim3/DigUp/blob/main/LICENSE"
  - "https://github.com/ARahim3/DigUp/releases"
  - "https://digup.arahim.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ARahim3/DigUp/main/Resources/AppIcon.icns"
    credit: "Abdur Rahim"
    license: "MIT; upstream app icon, trademarks retained"
---

DigUp indexes the folders you choose and lets you search them by describing what a file shows or says instead of remembering its name. It runs Google DeepMind's EmbeddingGemma 2 model through llama.cpp and puts pictures, PDF pages, documents, spreadsheets, slides, audio and video frames into one index, so a phrase can lead to a photo, a page in a contract or the minute of a podcast where a topic comes up. Exact strings such as invoice numbers and error codes are matched too, and an optional code search opens functions in your editor at the right line.

It is for people with large folders of mixed files who remember what something looked like or talked about but not where it went. A global shortcut opens a search panel from any app, results open at the matching page or moment, and indexing status sits in the menu bar.

The Mac app needs Apple silicon and macOS 14 or later, and it is signed and notarized. On first launch it downloads the 865 MB model once; the first indexing pass can take from a few minutes to about an hour for a large folder. Indexing and search happen on your Mac, and the app goes online only for that download and a daily update check you can turn off; there is no account or telemetry. Windows and Linux builds exist but are still in beta.
