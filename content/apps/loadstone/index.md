---
name: "Loadstone"
summary: "Menu bar window manager that snaps windows into halves, thirds and corners by keyboard shortcut or by dragging to an edge."
category: "Utilities"
tags:
  - window-management
  - tiling
  - keyboard-shortcuts
  - menu-bar
alternativeTo:
  - magnet
repository: "https://github.com/mortenbrudvik/loadstone"
website: "https://github.com/mortenbrudvik/loadstone"
license: "MIT"
licenseUrl: "https://github.com/mortenbrudvik/loadstone/blob/main/LICENSE"
download: "https://github.com/mortenbrudvik/loadstone/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mortenbrudvik/loadstone"
  - "https://github.com/mortenbrudvik/loadstone/blob/main/LICENSE"
  - "https://github.com/mortenbrudvik/loadstone/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/mortenbrudvik/loadstone/releases/download/v0.3.0/Loadstone-0.3.0.zip"
    credit: "Morten Brudvik"
    license: "MIT; upstream app icon, trademarks retained"
---

Loadstone moves the frontmost window into a precise tile of the visible screen: halves, quarters, thirds and two-thirds, plus maximize, center and restore. Shortcuts default to Control-Option keys modeled on Magnet, and you can also drag a window to an edge or corner to snap it. Repeated presses carry a window across displays one half at a time. While it runs, it turns off macOS's own drag-to-tile setting and restores it on quit.

It suits people who keep several windows open on one screen or across two displays and want a small, native tool with no Dock icon.

Requires macOS 14 or later on Apple silicon; the release is signed with Developer ID and notarized. Loadstone needs Accessibility permission, which takes effect only after the app is relaunched. It is not sandboxed, because the sandbox blocks the Accessibility calls it uses. The README calls the project early-stage, and some apps refuse to resize their windows, in which case Loadstone beeps.
