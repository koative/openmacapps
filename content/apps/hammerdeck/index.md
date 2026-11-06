---
name: "Hammerdeck"
summary: "Keyboard window grids and moves across displays, plus rules that rearrange windows when displays or apps change."
category: "Productivity"
tags:
  - window-management
  - keyboard-shortcuts
  - display
  - automation
repository: "https://github.com/kouxing2000/hammerdeck"
website: "https://hammerdeck.peach-studio.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/kouxing2000/hammerdeck/blob/master/LICENSE"
download: "https://github.com/kouxing2000/hammerdeck/releases/download/v0.3.2/Hammerdeck-0.3.2.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kouxing2000/hammerdeck"
  - "https://github.com/kouxing2000/hammerdeck/blob/master/LICENSE"
  - "https://github.com/kouxing2000/hammerdeck/releases"
  - "https://hammerdeck.peach-studio.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/kouxing2000/hammerdeck/master/design/AppIcon.png"
    credit: "Hammerdeck contributors"
    license: "GPL-3.0 code license; icon terms not stated upstream; trademarks retained"
---

Hammerdeck is for people with an ultrawide or several displays, where macOS halves and quarters are not enough. It binds window placement to keys: grids where a window spans chosen cells, moves and swaps between displays, a keyboard layer for arranging windows by feel, and one-key undo. A rules engine can rearrange windows when a display connects or an app launches, and some actions can run on a schedule. Settings are generated from each feature, so no Lua is needed, although it is built on an embedded Lua engine.

The README lists macOS 13 or later, as a universal build. It says the app is signed with a Developer ID and notarized by Apple. Window features need Accessibility permission. Full Disk Access is needed only for the Empty the Trash rule, and an OpenAI key only for AI text actions. Automatic update checks ask before installing anything.
