---
name: "Enso"
summary: "Native macOS terminal that labels tabs with the program running in them, with workspaces and a command palette."
category: "Developer tools"
tags:
  - terminal
  - workspaces
  - coding-agents
  - native
repository: "https://github.com/amanfromsolan/enso"
website: "https://github.com/amanfromsolan/enso"
license: "GPL-3.0"
licenseUrl: "https://github.com/amanfromsolan/enso/blob/main/LICENSE"
download: "https://github.com/amanfromsolan/enso/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/amanfromsolan/enso"
  - "https://github.com/amanfromsolan/enso/blob/main/LICENSE"
  - "https://github.com/amanfromsolan/enso/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/amanfromsolan/enso/main/macos/Enso/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Enso contributors; icon design by Shubhang Rajput"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Enso is a terminal for people who run several shells and coding agents at once. Tabs show the program running in them, with its icon, and can be pinned, grouped into nested folders and reopened after a restart. Workspaces keep projects apart, a command palette finds tabs and commands, and panes can be split side by side. Terminal rendering uses libghostty from the Ghostty project, and the interface is SwiftUI. Tabs running Claude or Codex can pick up their conversations after a relaunch.

The app declares macOS 15.0 or later in its bundle, although the README does not state a minimum. The release DMG is signed with Developer ID and notarized. The project describes itself as pre-1.0, so expect breaking changes between releases. The source is GPL-3.0; bundled Ghostty components keep their own MIT license.
