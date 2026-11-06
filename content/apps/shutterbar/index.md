---
name: "Shutterbar"
summary: "ShareX-style screenshot tool for the menu bar: copy a region to the clipboard, run saved tasks, capture scrolling pages."
category: "Utilities"
tags:
  - screenshot-tool
  - annotation
  - menu-bar
  - native
alternativeTo:
  - cleanshot
repository: "https://github.com/mucahitimre/Shutterbar"
website: "https://github.com/mucahitimre/Shutterbar"
license: "MIT"
licenseUrl: "https://github.com/mucahitimre/Shutterbar/blob/main/LICENSE"
download: "https://github.com/mucahitimre/Shutterbar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mucahitimre/Shutterbar"
  - "https://github.com/mucahitimre/Shutterbar/blob/main/LICENSE"
  - "https://github.com/mucahitimre/Shutterbar/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/mucahitimre/Shutterbar/HEAD/Sources/Shutterbar/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Mücahit İmre"
    license: "MIT; upstream app icon, trademarks retained"
---

Shutterbar is a menu bar screenshot tool in the style of ShareX. Press ⌘⇧X, the screen freezes, and you select a region or a window. ⌘C copies the capture to the clipboard, or Enter runs the after-capture tasks you have set up. It also remembers the last region, captures scrolling pages and includes an annotation editor. The app was called MacShot before version 0.4.0. It suits people who came from ShareX and want the same workflow on a Mac.

Shutterbar requires macOS 14.0 or later. Releases from 0.3.2 on are signed with Developer ID and notarized, so version 0.4.0 opens with a normal double-click. On first launch it asks for Screen Recording permission, and the README says the app must be relaunched after you grant it. Automatic scrolling capture is in the GitHub build only; a future App Store build would be sandboxed and offer manual scrolling only.
