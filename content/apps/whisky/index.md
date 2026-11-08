---
name: "Whisky"
summary: "A SwiftUI front end for Wine that creates bottles and runs Windows apps and games on Apple silicon Macs."
category: "Games"
tags: ["gaming", "emulation", "native"]
repository: "https://github.com/frankea/Whisky"
website: "https://frankea.github.io/Whisky/"
license: "GPL-3.0"
licenseUrl: "https://github.com/frankea/Whisky/blob/main/LICENSE"
download: "https://github.com/frankea/Whisky/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/frankea/Whisky", "https://github.com/frankea/Whisky/blob/main/LICENSE", "https://github.com/frankea/Whisky/releases", "https://frankea.github.io/Whisky/", "https://github.com/whisky-app/whisky", "https://raw.githubusercontent.com/frankea/Whisky/main/README.md", "https://github.com/frankea/Whisky/releases/tag/app-v3.7.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/frankea/Whisky/main/Whisky/Assets.xcassets/AppIcon.appiconset/256R256x1.png", "credit": "Whisky contributors", "license": "GPL-3.0 repository asset; trademarks retained"}]
---

Whisky runs Windows installers, launchers and games on an Apple silicon Mac through Wine. You create a bottle in one click, run an installer or .exe inside it, and start what it installed from a library showing the games and pinned programs of all your bottles.

- Wine 11.0 comes with DXMT, which translates DirectX 11 to Metal, and DXVK over MoltenVK as the fallback.
- Built-in launcher support covers Steam, Epic, the EA App, Rockstar and Battle.net.
- More than 80 curated per-game configurations can be browsed inside the app.
- One-click diagnostic reports help trace crashes and freezes, and a controller compatibility mode addresses gamepad detection and mapping.

On first launch Whisky downloads the Wine runtime, about 330 MB, and sets up a default bottle. Version 3.7.0 added whisky:// links and a Dock menu that start a pinned game from outside the window. Telemetry stays off unless you tick a box during setup, and the README lists the five setup events it sends once enabled.

The original whisky-app/whisky project was archived on April 9, 2025. Development continues in this community fork maintained by frankea, which is not affiliated with the original. Its File menu imports bottles the original app left behind, referencing them in place so the old app keeps working. The plain Homebrew cask named whisky still installs the archived original, while the fork's cask is frankea/whisky/whisky.

The fork requires macOS 15 or later on Apple silicon. Its GitHub release is a DMG holding an Apple silicon app, Developer ID-signed and notarized, and later versions arrive through Sparkle inside the app.
