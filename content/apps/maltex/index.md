---
name: "Maltex"
summary: "Native SwiftUI download manager built on the aria2 engine, covering HTTP, FTP, BitTorrent and magnet links."
category: "Internet"
tags:
  - download-manager
  - bittorrent
  - downloads
  - aria2
repository: "https://github.com/SteveShi/Maltex"
website: "https://github.com/SteveShi/Maltex"
license: "MIT"
licenseUrl: "https://github.com/SteveShi/Maltex/blob/main/LICENSE"
download: "https://github.com/SteveShi/Maltex/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/SteveShi/Maltex"
  - "https://github.com/SteveShi/Maltex/blob/main/LICENSE"
  - "https://github.com/SteveShi/Maltex/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/SteveShi/Maltex/releases/download/v1.2.2/Maltex-1.2.2-universal.dmg"
    credit: "SteveShi"
    license: "MIT; upstream app icon, trademarks retained"
---

Maltex is a native macOS rewrite of the Motrix downloader, built with SwiftUI on top of the aria2 engine. It handles HTTP, FTP, BitTorrent and magnet links, shows speeds and tasks from a menu bar extra, and includes a Safari extension that sends downloads to the app. An optional experimental aria2-next engine adds ED2K and Thunder links. It suits people who want a Motrix-style downloader that looks and behaves like a Mac app.

It needs macOS 14 or later, and the release DMG is a universal build for Apple silicon and Intel. The app is ad-hoc signed and not notarized, so the first launch must be allowed in System Settings. The README describes the project as in active development, and the latest release is from September 2026. The bundled aria2 engine is GPLv2, while Maltex's own code is MIT.
