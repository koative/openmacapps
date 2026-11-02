---
name: "Amiberry"
summary: "An Amiga emulator built on the WinUAE core, with JIT compilation, WHDLoad game launching, CRT shaders and bezels."
category: "Games"
tags:
  - emulation
  - retro-games
  - amiga
  - cross-platform
repository: https://github.com/BlitterStudio/amiberry
website: https://amiberry.com
license: "GPL-3.0"
licenseUrl: https://github.com/BlitterStudio/amiberry/blob/master/LICENSE
download: https://github.com/BlitterStudio/amiberry/releases/latest
homebrew: "amiberry"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/BlitterStudio/amiberry
  - https://github.com/BlitterStudio/amiberry/blob/master/LICENSE
  - https://github.com/BlitterStudio/amiberry/releases
  - https://amiberry.com
assets:
  - path: ./assets/icon.png
    source: https://github.com/BlitterStudio/amiberry/blob/master/data/icon.icns
    credit: "BlitterStudio and Amiberry contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Amiberry emulates Commodore Amiga computers using the emulation core from WinUAE, aiming for full Amiga compatibility. A custom just-in-time compiler for ARM64 and x86-64 speeds up emulation.

WHDLoad titles can be launched directly with automatic configuration, and floppy images, hard files and saved configurations can be dropped onto the window. The interface works with a mouse or a gamepad, and optional shaders and monitor bezels recreate the look of a CRT screen. The app checks for its own updates.

A universal macOS disk image is attached to each GitHub release. Original Amiga Kickstart ROMs are not included, and the WHDLoad support files are downloaded from their authors' sites on request rather than bundled.
