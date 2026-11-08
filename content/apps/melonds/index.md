---
name: "melonDS"
summary: "A Nintendo DS and DSi emulator with a desktop interface and configurable controls."
category: "Games"
tags: ["emulation", "nintendo-ds", "controllers"]
repository: "https://github.com/melonDS-emu/melonDS"
website: "https://melonds.kuribo64.net"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/melonDS-emu/melonDS/blob/master/LICENSE"
download: "https://github.com/melonDS-emu/melonDS/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/melonDS-emu/melonDS", "https://github.com/melonDS-emu/melonDS/blob/master/LICENSE", "https://github.com/melonDS-emu/melonDS/releases", "https://melonds.kuribo64.net", "https://melonds.kuribo64.net/downloads.php", "https://melonds.kuribo64.net/faq.php", "https://raw.githubusercontent.com/melonDS-emu/melonDS/master/README.md", "https://raw.githubusercontent.com/melonDS-emu/melonDS/master/src/NDS.cpp"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/melonDS-emu/melonDS/blob/master/res/icon/melon_256x256.png", "credit": "melonDS contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

melonDS runs Nintendo DS games on the Mac from ROM files, and lets you change how the two screens are positioned, sized and rotated. It also emulates the DSi, though that part is still in progress.

Games can start directly from the ROM. Booting through the console firmware instead needs BIOS and firmware dumps from an original DS or DS Lite; firmware dumped from a DSi or 3DS holds only configuration data and will not boot. You make those dumps yourself, and the project's FAQ links a dumper that runs from a flashcart. DSi mode also needs the DSi's own BIOS, firmware and NAND image.

- A JIT recompiler speeds up emulation.
- The OpenGL renderer can upscale 3D graphics.
- Savestates and joysticks are supported, and the clock, the microphone and closing the lid are emulated.
- Wi-Fi covers local multiplayer and online play, and both are still being worked on.
- DLDI is supported, and GBA slot add-ons are a work in progress.

Version 1.1, released in November 2025, added DSP emulation for DSi games, cheat import from usrcheat.dat and higher-quality audio resampling. The developer writes on the project blog that version 1.2 will follow once a new OpenGL renderer is finished.

The Mac download is a ZIP holding a Universal app for Apple silicon and Intel. The same release is built for Windows, Linux and several BSDs, and nightly builds come straight from the GitHub repository. melonDS is licensed under GPL version 3 or later.
