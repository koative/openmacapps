---
name: "Defi"
summary: "Scrollable-tiling window manager for Apple silicon Macs, inspired by Niri. Alpha, so behaviour and config may change."
category: "Utilities"
tags:
  - window-manager
  - tiling
  - keyboard
repository: "https://github.com/qeude/Defi"
website: "https://qeude.github.io/Defi/"
license: "MIT"
licenseUrl: "https://github.com/qeude/Defi/blob/main/LICENSE"
download: "https://github.com/qeude/Defi/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/qeude/Defi"
  - "https://github.com/qeude/Defi/blob/main/LICENSE"
  - "https://github.com/qeude/Defi/releases/latest"
  - "https://qeude.github.io/Defi/"
---

Defi places windows in columns on a horizontal strip. Opening a window adds a column and the strip grows; moving to a window past the edge of the screen scrolls the desktop to bring it into view. It also has dynamic and named workspaces, app rules, per-display layouts, an overview of workspaces and windows, window borders, and a configuration file in TOML that reloads when saved. A command-line tool and SketchyBar integration are included. Built-in shortcuts use Control and Option, and native window clicks, the Dock and Command-Tab keep working.

It suits people who like the scrolling column model of Niri and want it for ordinary macOS windows. Expect rough edges: the project calls itself an alpha, and apps can limit window sizes or expose only partial Accessibility support.

Defi needs Apple silicon and macOS 15.4 or later. The app is self-signed and not notarized, so the first launch is blocked until you allow it under System Settings, Privacy & Security. It requires Accessibility permission; Screen Recording is optional and only enables the move animations and Overview previews. Once a day it checks GitHub for a newer release, which can be turned off in Settings.
