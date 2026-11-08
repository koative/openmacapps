---
name: "ScummVM"
summary: "Runs classic adventure games and RPGs from their original data files using replacement game engines."
category: "Games"
tags: ["adventure-games", "game-engine", "retro-games"]
repository: "https://github.com/scummvm/scummvm"
website: "https://www.scummvm.org"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/scummvm/scummvm/blob/master/COPYING"
download: "https://www.scummvm.org/downloads"
freeDownload: true
homebrew: "scummvm-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/scummvm/scummvm", "https://github.com/scummvm/scummvm/blob/master/COPYING", "https://www.scummvm.org/downloads", "https://github.com/scummvm/scummvm/blob/master/README.md", "https://github.com/scummvm/scummvm/blob/master/base/main.cpp"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/scummvm/scummvm/blob/master/dists/android/store/scummvm_icon_512.png", "credit": "ScummVM contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

ScummVM plays classic point-and-click adventures, text adventures and RPGs on a Mac by replacing the games' original executables with its own engines. You supply the data files from your copy of the game.

To add one, copy the game's files into a folder, choose Add Game and pick that folder, not the files inside it. Mass Add searches a folder and its subfolders for every supported game at once. A Game Options dialog then holds that game's settings, and you start it from the list.

The name comes from SCUMM, the scripting system LucasArts used for Maniac Mansion and the Monkey Island games, and ScummVM was first built to run those SCUMM games. Engines for many other games followed, including Broken Sword, Myst and Blade Runner. The project's wiki lists every supported title, and a compatibility list marks which games can be played to the end.

The current download is a disk image for macOS 10.13 or later on Intel and Apple silicon and includes the Sparkle updater. The same release also comes in separate images without Sparkle for Mac OS X 10.9 on Intel, 32-bit Intel on 10.6 and PowerPC on 10.4.

Bug reports go to the project's own tracker, and the team asks you to test the latest daily build first. ScummVM is released under GPL-3.0 or later.
