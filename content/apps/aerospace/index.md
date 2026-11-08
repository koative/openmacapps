---
name: AeroSpace
summary: "Tiles windows in an i3-style tree and switches between its own workspaces from the keyboard."
category: Productivity
tags:
  - window-management
  - tiling
  - workspaces
  - window-manager
repository: https://github.com/nikitabobko/AeroSpace
website: https://nikitabobko.github.io/AeroSpace/guide
license: MIT
licenseUrl: https://github.com/nikitabobko/AeroSpace/blob/main/LICENSE.txt
download: https://github.com/nikitabobko/AeroSpace/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/nikitabobko/AeroSpace", "https://github.com/nikitabobko/AeroSpace/blob/main/LICENSE.txt", "https://raw.githubusercontent.com/nikitabobko/AeroSpace/main/README.md", "https://nikitabobko.github.io/AeroSpace/guide", "https://github.com/nikitabobko/AeroSpace/releases", "https://github.com/nikitabobko/AeroSpace/releases/tag/v0.21.3-Beta"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/nikitabobko/AeroSpace/blob/74a1bf17e82d70e0a21945ba04bb4f590bf19f83/resources/Assets.xcassets/AppIcon.appiconset/icon.png
    credit: AeroSpace contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

AeroSpace arranges your windows into tiles and moves between workspaces at the press of a key. It follows the i3 model: windows sit in a tree of containers, and each container lays its children out side by side or stacked.

There are four layouts. Horizontal and vertical tiles split the space, and horizontal and vertical accordion stack windows on top of each other, like i3's tabbed and stacked modes. The default bindings use Option with H, J, K and L to move focus and Option with a number to switch workspace.

Workspaces are AeroSpace's own. macOS Spaces animate slowly and offer no public API, so the app hides inactive windows in a corner of the screen and brings them back when you switch. It needs no change to System Integrity Protection and uses one private API.

Configuration is a TOML file, `~/.aerospace.toml`, and the project says it will never offer a settings window. The same commands run from a terminal as `aerospace workspace 1` and the like, with man pages and shell completion included.

The project is a public beta, and breaking changes are expected before version 1.0. The release ZIP holds a Universal app that runs on macOS 13 or later. It is not notarized. The recommended Homebrew cask removes the quarantine flag so the app opens without a warning.
