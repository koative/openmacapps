---
name: "Cemu"
summary: "Emulates the Wii U to run its games and homebrew, with a Mac build its developers call experimental."
category: "Games"
tags: ["emulation", "wii-u", "experimental"]
repository: "https://github.com/cemu-project/Cemu"
website: "https://cemu.info"
license: "MPL-2.0"
licenseUrl: "https://github.com/cemu-project/Cemu/blob/main/LICENSE.txt"
download: "https://github.com/cemu-project/Cemu/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/cemu-project/Cemu", "https://github.com/cemu-project/Cemu/blob/main/LICENSE.txt", "https://github.com/cemu-project/Cemu/releases", "https://raw.githubusercontent.com/cemu-project/Cemu/main/README.md", "https://cemu.info", "https://github.com/cemu-project/Cemu/releases/tag/v2.6"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/cemu-project/Cemu/blob/main/src/resource/cemu.icns", "credit": "Cemu contributors", "license": "MPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Cemu runs Wii U games and homebrew on a computer. The developers say most Wii U games run in a playable state, but they call the native Mac build purely experimental and not ready for issue-free play, with known slowdowns caused by MoltenVK and, on Apple silicon, by Rosetta.

Input covers the Wii U controllers:

- the GamePad, the Pro Controller and the Classic Controller are emulated, and Wiimotes partially
- keyboards and USB controllers can stand in for them
- a left mouse click acts as a touch on the GamePad screen
- gyro comes from a controller that has one, or from dragging with the right mouse button

The community keeps graphic packs in a separate repository, and the compatibility wiki on cemu.info lists how individual games run.

The Mac download for version 2.6 is a DMG for Intel only, so Apple silicon Macs run it through Rosetta. It needs macOS 12 or later and has no Developer ID signature. Cemu is written in C and C++ and licensed under MPL-2.0, apart from bundled dependencies and a few source files that carry their own licenses.
