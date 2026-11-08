---
name: "PCSX2"
summary: "A PlayStation 2 emulator with upscaling, save states, shareable memory cards, a patching system and a lossless recorder."
category: "Games"
tags: ["emulation", "playstation-2", "controllers"]
repository: "https://github.com/PCSX2/pcsx2"
website: "https://pcsx2.net"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/PCSX2/pcsx2/blob/master/COPYING.GPLv3"
download: "https://pcsx2.net/downloads"
freeDownload: true
homebrew: "pcsx2"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/PCSX2/pcsx2", "https://github.com/PCSX2/pcsx2/blob/master/COPYING.GPLv3", "https://pcsx2.net/downloads", "https://pcsx2.net/", "https://raw.githubusercontent.com/PCSX2/pcsx2/master/README.md", "https://pcsx2.net/docs/setup/requirements", "https://pcsx2.net/docs/setup/bios", "https://pcsx2.net/compat/", "https://github.com/PCSX2/pcsx2/releases/tag/v2.8.2", "https://raw.githubusercontent.com/PCSX2/pcsx2/master/pcsx2/Pcsx2Config.cpp"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/PCSX2/pcsx2/blob/master/bin/resources/icons/AppIconLarge.png", "credit": "PCSX2 contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

PCSX2 plays PlayStation 2 games on your Mac. It emulates the console's hardware with MIPS CPU interpreters and recompilers, and most of the PS2 library now runs at full speed. The project keeps a public compatibility list with more than 2,500 titles tested.

The BIOS is the one hard requirement. It is proprietary Sony software, PCSX2 cannot run games without it, and no open replacement exists, so the documentation walks you through dumping it from a console you own. You supply the games too.

On top of plain emulation, PCSX2 adds features the console never had:

- Custom resolutions and upscaling beyond the PS2's native output.
- Save states alongside virtual memory cards that can be shared.
- A patching system for game fixes and changes.
- A built-in recorder that captures lossless video at full speed.

PCSX2 requires macOS 11 Big Sur or later, with Sonoma or Sequoia recommended. The macOS build is an Intel (x86-64) app only. On Apple silicon it runs through Rosetta 2, and the requirements page counts every M-series chip in its heaviest CPU tier. The download is a compressed archive holding a Developer ID-signed, notarized app, with stable and nightly builds on the project site.

On the graphics side, upscaling level and blending accuracy decide most of the GPU load, and the software renderer takes the GPU out of the picture entirely.
