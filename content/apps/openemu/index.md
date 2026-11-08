---
name: "OpenEmu"
summary: "A Mac game library that sorts your game backups by console and plays them through plug-in emulator cores."
category: "Games"
tags: ["emulation", "game-library", "native"]
repository: "https://github.com/OpenEmu/OpenEmu"
website: "https://openemu.org"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/OpenEmu/OpenEmu/blob/master/OpenEmu/OpenEmuApplication.swift"
download: "https://openemu.org"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/OpenEmu/OpenEmu", "https://github.com/OpenEmu/OpenEmu/blob/master/OpenEmu/OpenEmuApplication.swift", "https://openemu.org", "https://github.com/OpenEmu/OpenEmu/blob/master/README.md", "https://github.com/OpenEmu/OpenEmu/releases/tag/v2.4.1"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/OpenEmu/OpenEmu/master/OpenEmu/Graphics.xcassets/OpenEmu.appiconset/icon-256-srgb.png", "credit": "OpenEmu contributors", "license": "BSD-3-Clause; upstream project asset, trademarks retained"}]
---

OpenEmu turns backups of games you already own into a single library on the Mac. Drag a ROM file onto the window, and OpenEmu scans it, files it under the right console and adds the box art. Then you pick a game and play.

Each console runs on a core, a separate emulation engine loaded as a plug-in. The README lists about thirty systems this way:

- Atari consoles from the 2600 to the Lynx, through Stella, Atari800, ProSystem and Mednafen.
- Nintendo systems from the NES to the GameCube and DS, with Snes9x or bsnes for the Super Nintendo and Dolphin for the GameCube.
- Sega hardware from the SG-1000 to the Saturn, mostly through Genesis Plus.
- The PlayStation and PSP, through Mednafen and PPSSPP, plus rarer machines such as the Vectrex, Virtual Boy and WonderSwan.

Collections can mix games from different consoles. The keyboard works, though the project recommends a gamepad. Any generic HID-compliant USB or Bluetooth gamepad should work, and devices in OpenEmu's database get their buttons mapped automatically.

The app needs macOS 10.14.4 or later and updates itself through Sparkle. The current release, 2.4.1, is Intel-only, and the website links special instructions for opening it the first time. The OpenEmu front end is under a BSD 3-clause license. You supply the games yourself.
