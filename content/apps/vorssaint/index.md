---
name: "Vorssaint"
summary: "A modular menu bar toolkit with audio mixing, system stats, window tools, clipboard history and more."
category: "Utilities"
tags: ["menu-bar", "window-management", "system-monitoring", "clipboard", "audio"]
alternativeTo: ["cleanshot"]
repository: "https://github.com/vorssaint/vorssaint-utils"
website: "https://vorssaint.com"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/vorssaint/vorssaint-utils/blob/main/LICENSE"
download: "https://github.com/vorssaint/vorssaint-utils/releases"
freeDownload: true
homebrew: "vorssaint"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/vorssaint/vorssaint-utils", "https://github.com/vorssaint/vorssaint-utils/blob/main/LICENSE", "https://github.com/vorssaint/vorssaint-utils/releases", "https://raw.githubusercontent.com/vorssaint/vorssaint-utils/main/README.md", "https://github.com/vorssaint/vorssaint-utils/releases/tag/v3.4.3"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/vorssaint/vorssaint-utils/main/Resources/Brand/AppIcon-Default.png", "credit": "Vorssaint contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Vorssaint puts a long list of small Mac utilities behind one menu bar icon, and you pick which ones to install. Start from a preset or choose features one by one. A removed feature stops loading and vanishes from the interface, and reinstalling it brings its settings back.

- Sound: a per-app volume mixer that can push quiet apps past 100%, per-app output routing and a microphone mute shortcut.
- System: CPU, GPU, memory, temperature and battery readings with history graphs, menu bar readouts and fan control, which is still in beta.
- Windows: an app switcher with live previews, window snapping by shortcut or screen edge, and Dock previews across desktops.
- Input: text snippets, smooth or linear scrolling, side-button support and a filter for accidental rapid clicks from a worn mouse.
- Files and apps: clipboard history, a drag shelf for files and links, an uninstaller, a cache cleaner and a Homebrew manager.

Setup asks only for the permissions your chosen features use. The permissions page shows which feature needs each one and flags any grant nothing uses anymore. The developer says there is no account, analytics or tracking, and that the network is used only for visible actions such as update checks, the speed test and share links.

CleanShot X covers screenshots, annotation and screen recording as a standalone app. Vorssaint's capture module handles scrolling screenshots, text recognition, redaction and recordings with automatic zooms, next to everything else in the same panel.

Vorssaint needs an Apple silicon Mac with macOS 14 Sonoma or later. The DMG holds an arm64-only app, signed with a Developer ID and notarized. The source is GPL 3.0 or later, while the name and icon are trademarks, so forks have to rebrand.
