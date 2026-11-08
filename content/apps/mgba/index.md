---
name: "mGBA"
summary: "An emulator for Game Boy Advance and related handheld systems."
category: "Games"
tags: ["emulation", "game-boy-advance", "game-boy"]
repository: "https://github.com/mgba-emu/mgba"
website: "https://mgba.io"
license: "MPL-2.0"
licenseUrl: "https://github.com/mgba-emu/mgba/blob/master/LICENSE"
download: "https://mgba.io/downloads.html"
freeDownload: true
homebrew: "mgba-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/mgba-emu/mgba", "https://github.com/mgba-emu/mgba/blob/master/LICENSE", "https://raw.githubusercontent.com/mgba-emu/mgba/master/README.md", "https://mgba.io", "https://mgba.io/downloads.html", "https://github.com/mgba-emu/mgba/releases/tag/0.10.5"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/mgba-emu/mgba/blob/master/res/mgba-256.png", "credit": "mGBA contributors", "license": "MPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

mGBA plays Game Boy Advance games, along with Game Boy and Game Boy Color titles, from ROM files you load. You play with the keyboard or a gamepad, and both can be remapped.

- Hold Tab to fast-forward and Backquote to rewind.
- Nine save-state slots, each shown as a screenshot.
- Recording to video, GIF, WebP or APNG.
- Cheat codes, IPS, UPS and BPS patches, and games opened straight from ZIP or 7z archives.
- Lua scripting, and a debugger with a command line and GDB remote support.

It detects each cartridge's save type, flash memory size included, and keeps real-time clocks running without setup. Hardware extras are covered too. The Game Boy Camera and Printer work, as do the e-Reader and the solar sensor in the Boktai games. Two games on the same Mac can connect over an emulated link cable.

A built-in BIOS replacement means you need no BIOS file, though you can load one.

The download page offers a modern macOS build for 10.13 and later and a legacy one for 10.9. The modern build is a universal app, signed with a Developer ID and notarized. Some Game Boy mappers are only partly supported, and the README lists which features each one is missing.
