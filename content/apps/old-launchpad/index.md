---
name: "Old Launchpad"
summary: "Standalone SwiftUI replacement for the classic Launchpad grid, with folders, drag-to-reorder and inline search."
category: "Utilities"
tags:
  - launcher
  - customization
  - native
repository: "https://github.com/netsvetaev/Old-Launchpad"
website: "https://github.com/netsvetaev/Old-Launchpad"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/netsvetaev/Old-Launchpad/blob/main/LICENSE"
download: "https://github.com/netsvetaev/Old-Launchpad/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/netsvetaev/Old-Launchpad"
  - "https://github.com/netsvetaev/Old-Launchpad/blob/main/LICENSE"
  - "https://github.com/netsvetaev/Old-Launchpad/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/netsvetaev/Old-Launchpad/main/Old%20Launchpad/Assets.xcassets/AppIcon.appiconset/1024-mac.png"
    credit: "Art Netsvetaev"
    license: "BSD-3-Clause; upstream app icon, trademarks retained"
---

Old Launchpad recreates the classic Launchpad grid as a separate app. Each page holds seven by five icons, hovering one icon over another for three seconds makes a folder, and icons can be reordered by dragging. A search field in the top bar filters the grid as you type. The app watches `/Applications` and `~/Applications` for added or removed apps and keeps its layout in an Application Support file. It suits people who miss the old grid. macOS does not expose hot corners to third-party apps, so opening it from a corner needs a tool such as BetterTouchTool or Raycast.

The README lists macOS 13 or later and Xcode 15 for building, but the compiled app declares macOS 15.5 or later in its bundle. The release zip is signed ad hoc and not notarized, so the first launch must be allowed in System Settings.
