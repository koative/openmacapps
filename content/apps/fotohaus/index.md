---
name: "Fotohaus"
summary: "Private photo organizer for Apple silicon Macs with face and text search and non-destructive editing, all on-device."
category: "Productivity"
tags:
  - photography
  - privacy
  - native
  - search
repository: "https://github.com/aelnagish/Fotohaus"
website: "https://aelnagish.github.io/Fotohaus/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/aelnagish/Fotohaus/blob/main/LICENSE"
download: "https://github.com/aelnagish/Fotohaus/releases/download/v1.0.1/Fotohaus-1.0.1-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/aelnagish/Fotohaus"
  - "https://github.com/aelnagish/Fotohaus/blob/main/LICENSE"
  - "https://github.com/aelnagish/Fotohaus/releases"
  - "https://aelnagish.github.io/Fotohaus/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/aelnagish/Fotohaus/main/packaging/Fotohaus.icns"
    credit: "Abdullah Yusuf"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

Fotohaus organises a photo library on your Mac. It finds faces and reads text in images so you can search for people and words, and it edits photos non-destructively, keeping the originals and letting you undo each edit. Face recognition, search and editing all run on the Mac, with no account, cloud service or upload. It suits photographers and families who want a library they control.

Requires macOS 14 or later on Apple silicon (M1 or newer); the release has no Intel build. The app is not notarized, so macOS may block the first launch; the README describes the Open Anyway step and a one-line Terminal fix for the "damaged" message. The source is GPL-3.0-or-later, and each release attaches the source archive for the bundled FFmpeg, x264 and x265 libraries.
