---
name: "RPCS3"
summary: "A PlayStation 3 emulator and debugger with macOS desktop builds."
category: "Games"
tags: ["emulation", "playstation-3", "debugging"]
repository: "https://github.com/RPCS3/rpcs3"
website: "https://rpcs3.net"
license: "GPL-2.0"
licenseUrl: "https://github.com/RPCS3/rpcs3/blob/master/LICENSE"
download: "https://rpcs3.net/download"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/RPCS3/rpcs3", "https://github.com/RPCS3/rpcs3/blob/master/LICENSE", "https://rpcs3.net/download", "https://github.com/RPCS3/rpcs3/blob/master/README.md", "https://github.com/RPCS3/rpcs3/blob/master/rpcs3/rpcs3qt/main_window.ui", "https://github.com/RPCS3/rpcs3/blob/master/rpcs3/rpcs3qt/main_window.cpp", "https://github.com/RPCS3/rpcs3-binaries-mac-arm64/releases", "https://github.com/RPCS3/rpcs3-binaries-mac/releases"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/RPCS3/rpcs3/blob/master/rpcs3/rpcs3.png", "credit": "RPCS3 contributors", "license": "GPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

RPCS3 runs PlayStation 3 games on a computer and doubles as a debugger for PS3 software. Written in C++, it has builds for Windows, Linux, FreeBSD and macOS.

The emulator ships without the PS3 system software or any games. You install the firmware from a `PS3UPDAT.PUP` file with the Install Firmware command, then add your own games. From there the main window works like a library:

- Games are added from folders or ISO images, and the game list can switch to a grid of icons.
- Package files (`.pkg`), along with RAP and EDAT files, install from the same window.
- Savestates can be booted directly, as can recently played games.
- A patch manager and a patch creator handle per-game patches.
- Gamepads and RPCN each have their own configuration dialog.

Mac builds are published for Apple silicon and Intel as separate 7z archives. The current Apple silicon app requires macOS 15 or later. It carries only an ad-hoc signature, which Gatekeeper rejects. Most of the code is under GPL-2.0-only, and some files carry other licenses.

The project collects per-game compatibility information on its wiki and forums, and lists minimum system requirements in its quickstart guide.
