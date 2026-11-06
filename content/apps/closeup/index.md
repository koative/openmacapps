---
name: "CloseUp"
summary: "Adds close, minimize, maximize, hide and quit controls to each window in Mission Control, with keyboard shortcuts."
category: "Utilities"
tags:
  - window-management
  - keyboard-shortcuts
  - mission-control
repository: "https://github.com/oomol-lab/CloseUp"
website: "https://github.com/oomol-lab/CloseUp"
license: "GPL-3.0"
licenseUrl: "https://github.com/oomol-lab/CloseUp/blob/main/LICENSE"
download: "https://github.com/oomol-lab/CloseUp/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/oomol-lab/CloseUp"
  - "https://github.com/oomol-lab/CloseUp/blob/main/LICENSE"
  - "https://github.com/oomol-lab/CloseUp/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/oomol-lab/CloseUp/main/Sources/CloseUp/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "CloseUp contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

CloseUp draws window controls on top of the native Mission Control view, so you can close, minimize, maximize, hide or quit a window from its thumbnail without switching to it first. Every action has a shortcut that acts on the window under the pointer, and batch shortcuts close all windows or hide all but the one you point at. It is for people who juggle many windows and want to clear them from the overview.

It needs macOS 14.0 or later and Accessibility permission, which it asks for on first launch. Apple silicon and Intel Macs each get a separate DMG. The README says releases are signed, notarized and updated through Sparkle, with an optional beta channel. It uses private Mission Control APIs, which the README acknowledges.
