---
name: ConsoleMini
summary: A controller-friendly, full-screen launcher that turns a Mac into a living-room console front end for emulators.
category: Games
tags:
- emulation
- launcher
- controllers
repository: https://github.com/momenbasel/ConsoleMini
website: https://www.moamenbasel.com/ConsoleMini/
license: MIT
licenseUrl: https://github.com/momenbasel/ConsoleMini/blob/main/LICENSE
download: https://github.com/momenbasel/ConsoleMini/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/momenbasel/ConsoleMini
- https://github.com/momenbasel/ConsoleMini/blob/main/LICENSE
- https://github.com/momenbasel/ConsoleMini/releases
- https://raw.githubusercontent.com/momenbasel/ConsoleMini/main/README.md
- https://github.com/momenbasel/ConsoleMini/releases/tag/v0.1.3
- https://www.moamenbasel.com/ConsoleMini/
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/momenbasel/ConsoleMini/main/build/icon.icns
  credit: ConsoleMini contributors
  license: MIT-licensed repository asset; no separate icon terms stated
---

ConsoleMini puts a full-screen game library on a Mac hooked up to a TV. You pick a system with a controller, choose a game, and ConsoleMini starts it in the matching emulator. The emulators do the actual playing, and they handle in-game controller input themselves.

Each system maps to one emulator, installed separately, mostly through Homebrew casks:

- PS1 through DuckStation, PS2 through PCSX2 and PS3 through RPCS3.
- PS4 through shadPS4, which is experimental on macOS, so few games run.
- PSP through PPSSPP, N64 through Mupen64Plus and GBA through mGBA.
- SNES and NES through RetroArch cores, and Dreamcast through Flycast.

The Settings tab shows which emulators are installed and can install the missing ones with a script. A save-state panel lists each emulator's save folder with file counts and a button to reveal it in Finder. ConsoleMini only reads those folders; saving and loading stay with each emulator's own hotkeys.

No games or BIOS files come with it. The app is built with Electron and is still at version 0.1. Releases include Apple silicon and Intel DMGs and ZIPs. The Apple silicon build of 0.1.3 needs macOS 11 or later and is signed with a Developer ID and notarized.

Menu navigation works with any pad the HTML5 Gamepad API sees, including DualShock 4, DualSense, Xbox and 8BitDo controllers. A kiosk script starts the launcher at login, turns off sleep and hides the Dock, so the Mac boots straight into the library.
