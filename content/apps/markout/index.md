---
name: "Markout"
summary: "Native offline Markdown editor for macOS with math and diagram rendering, built as a successor to MacDown."
category: "Writing"
tags:
  - markdown
  - editor
  - writing
  - text-editor
alternativeTo:
  - typora
repository: "https://github.com/maxmilian/markout"
website: "https://github.com/maxmilian/markout"
license: "MIT"
licenseUrl: "https://github.com/maxmilian/markout/blob/main/LICENSE"
download: "https://github.com/maxmilian/markout/releases/download/v0.3.0/Markout-v0.3.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/maxmilian/markout"
  - "https://github.com/maxmilian/markout/blob/main/LICENSE"
  - "https://github.com/maxmilian/markout/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/maxmilian/markout/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "maxmilian"
    license: "MIT; upstream app icon, trademarks retained"
---

Markout is a native Markdown editor for macOS, built with SwiftUI, TextKit and WKWebView. The syntax, math and diagram engines are bundled rather than loaded from a CDN, so it works offline. It is a fresh rebuild in the spirit of MacDown, the editor the author used for years and which is no longer maintained. It suits people who write Markdown documents and want a plain-text editor with rendering.

It needs macOS 14 or later, and the README recommends an Apple silicon Mac. Markout is ad hoc signed but not notarized by Apple, so the first launch needs a right-click on Markout.app, then Open. If double-clicking still refuses, clear the quarantine flag once with xattr. Building from source needs Xcode and XcodeGen.
