---
name: "Notra"
summary: "Native SwiftUI notes app that keeps Markdown notes as local TextBundle documents with their attachments."
category: "Writing"
tags:
  - notes
  - markdown
  - note-taking
alternativeTo:
  - bear
repository: "https://github.com/akopulko/notra"
website: "https://github.com/akopulko/notra"
license: "MIT"
licenseUrl: "https://github.com/akopulko/notra/blob/master/LICENSE"
download: "https://github.com/akopulko/notra/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/akopulko/notra"
  - "https://github.com/akopulko/notra/blob/master/LICENSE"
  - "https://github.com/akopulko/notra/releases/latest"
  - "https://apps.apple.com/app/notra-markdown-notes/id6809414279"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/akopulko/notra/releases/download/v1.5/Notra-v1.5-macOS-arm64.zip"
    credit: "Konstantin Akopov (Notra)"
    license: "MIT; upstream app icon, trademarks retained"
---

Notra is a native SwiftUI notes app for Mac, iPhone and iPad. Each note is a Markdown document stored in a TextBundle package on your device, with its attachments kept in the same bundle. The free GitHub build covers the editing and organising features on the Mac, while a paid App Store edition with a one-time purchase adds iCloud sync. It suits people who want their notes as plain Markdown they can keep and copy themselves.

The GitHub build needs an Apple silicon Mac running macOS 26 or later. It is not notarized: it is signed with a development certificate, so the first launch has to be allowed in System Settings. It keeps notes locally with no iCloud sync, and updates are manual. The GitHub build and the App Store edition use separate libraries, so notes do not move between them automatically.
