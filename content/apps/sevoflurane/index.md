---
name: "Sevoflurane"
summary: "Runs the Windows Steam client in a Wine bottle behind native Mac windows, with a Mac or Windows version chosen per game."
category: "Games"
tags:
  - gaming
  - steam
  - wine
  - emulation
repository: "https://github.com/kageroumado/sevoflurane"
website: "https://kagerou.glass/sevoflurane/"
license: "MIT"
licenseUrl: "https://github.com/kageroumado/sevoflurane/blob/main/LICENSE"
download: "https://github.com/kageroumado/sevoflurane/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/kageroumado/sevoflurane"
  - "https://github.com/kageroumado/sevoflurane/blob/main/LICENSE"
  - "https://github.com/kageroumado/sevoflurane/releases/latest"
  - "https://kagerou.glass/sevoflurane/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/kageroumado/sevoflurane/releases/download/v1.12.0/Sevoflurane-1.12.0.dmg
    credit: Sevoflurane contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Sevoflurane runs the Windows Steam client hidden inside a Wine bottle and replaces its interface with native Mac windows for the library, store, friends and chats, while Steam notifications arrive through macOS. For each game you can pick the native macOS version where Steam offers one, or the Windows version, and older games can be resized and upscaled. It suits people who want their Steam library on a Mac.

The project site lists macOS 26 or later on Apple silicon, while the README says Intel Macs have limited support and DirectX 12 games need Apple silicon. Setup installs Rosetta, fonts and Apple's Game Porting Toolkit, and the toolkit requires signing in with a free Apple Account. The site describes the app as free and open source, and its run statistics are opt-in.
