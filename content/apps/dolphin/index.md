---
name: "Dolphin"
summary: "Emulates the GameCube and Wii, playing games from disc images you dump from your own discs."
category: "Games"
tags: ["emulation", "gamecube", "wii"]
repository: "https://github.com/dolphin-emu/dolphin"
website: "https://dolphin-emu.org"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/dolphin-emu/dolphin/blob/master/COPYING"
download: "https://dolphin-emu.org/download"
freeDownload: true
homebrew: "dolphin"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/dolphin-emu/dolphin", "https://github.com/dolphin-emu/dolphin/blob/master/COPYING", "https://dolphin-emu.org/download", "https://raw.githubusercontent.com/dolphin-emu/dolphin/master/Readme.md", "https://raw.githubusercontent.com/dolphin-emu/dolphin/master/COPYING", "https://dolphin-emu.org/download/", "https://dolphin-emu.org/docs/faq/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/dolphin-emu/dolphin/blob/master/Data/Sys/Resources/dolphin_logo%402x.png", "credit": "Dolphin contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Dolphin runs GameCube and Wii games on your Mac from disc images. Controller bindings are set in the main configuration window, where a second GameCube pad needs port 2 set to Standard Controller.

It reads ISO and GCM dumps as well as WBFS, CISO, GCZ and RVZ files. It can also compress games to RVZ, the format the FAQ recommends, because WBFS and CISO drop parts of the disc to save space. Dolphin does not supply games. The FAQ asks you to dump discs you own with a Wii and treats downloaded copies as illegal, even of games you bought.

With a modern mid-range graphics card, games can run at HD resolutions. From the command line Dolphin can launch a game, load a save state or run without its interface. The bundled `dolphin-tool` converts, verifies and extracts disc images. Audio emulation has a fast HLE mode and a slower LLE mode that is close to exact.

Releases come every few months, and development builds land several times a day for anyone who wants newer changes before they are well tested. The Mac release is a single Universal disk image for Apple silicon and Intel, and it requires macOS 11 Big Sur. The 2609b image is Developer ID-signed and notarized. The README licenses Dolphin under GPL version 2 or later. COPYING adds that most original code is GPLv2+, some derived code has other terms, and the repository as a whole is compatible with GPLv3.
