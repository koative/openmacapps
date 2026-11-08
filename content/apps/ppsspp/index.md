---
name: "PPSSPP"
summary: "Plays PSP games from your own disc images, with save states, HD rendering and controller mapping."
category: "Games"
tags: ["emulation", "psp", "controllers"]
repository: "https://github.com/hrydgard/ppsspp"
website: "https://www.ppsspp.org"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/hrydgard/ppsspp/blob/master/LICENSE.TXT"
download: "https://www.ppsspp.org/download"
freeDownload: true
homebrew: "ppsspp-emulator"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/hrydgard/ppsspp", "https://github.com/hrydgard/ppsspp/blob/master/LICENSE.TXT", "https://www.ppsspp.org/download", "https://www.ppsspp.org/", "https://raw.githubusercontent.com/hrydgard/ppsspp/master/README.md", "https://www.ppsspp.org/docs/faq", "https://www.ppsspp.org/docs/reference/mac", "https://www.ppsspp.org/docs/reference/rewind", "https://www.ppsspp.org/docs/reference/key-bindings", "https://www.ppsspp.org/files/1_20_4/PPSSPP_macOS.dmg"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/hrydgard/ppsspp/blob/master/UWP/AssetsNormal/Square150x150Logo.scale-200.png", "credit": "PPSSPP contributors", "license": "GPL-2.0-or-later; project trademarks retained"}]
icon: "./assets/icon.png"
---

PPSSPP plays PSP games on the Mac from ISO or CSO files that you make from your own UMD discs. No games come with the app, and it needs no PSP BIOS file, since it emulates the console's system software at a high level.

- Games can render well above the PSP's original resolution, with texture scaling, anisotropic filtering and post-processing shaders for color and brightness.
- Save states store a game at any moment and load it back later.
- Rewind keeps an in-memory snapshot every few seconds so you can step back after a mistake. It is off by default because it uses a lot of memory.
- Keyboard keys and external controllers map to PSP buttons, with extra bindings for fast-forward, rapid fire and swapping the analog stick with the d-pad.
- Save data copied from a real PSP carries over, so you can continue a game started on the handheld.

On the Mac, PPSSPP keeps its user data in `.config/ppsspp` inside your home folder, laid out like a PSP Memory Stick. You install it from a DMG by dragging the app to Applications. The free 1.20.4 DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.

PPSSPP Gold is a paid build for Windows, macOS and Android. The FAQ says it works the same as the free version and exists to fund development.
