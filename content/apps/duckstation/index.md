---
name: "DuckStation"
summary: "A PlayStation emulator whose current source has noncommercial, no-derivatives restrictions."
category: "Games"
tags: ["emulation", "playstation", "source-available"]
repository: "https://github.com/stenzek/duckstation"
website: "https://www.duckstation.org"
license: "CC-BY-NC-ND-4.0"
licenseUrl: "https://github.com/stenzek/duckstation/blob/master/LICENSE"
download: "https://github.com/stenzek/duckstation/releases/tag/latest"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/stenzek/duckstation", "https://github.com/stenzek/duckstation/blob/master/LICENSE", "https://github.com/stenzek/duckstation/releases/tag/latest", "https://raw.githubusercontent.com/stenzek/duckstation/master/README.md"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/stenzek/duckstation/master/src/duckstation-qt/DuckStation.icns", "credit": "Duck icon by Icons8 (https://icons8.com/icon/74847/duck), as credited by DuckStation; DuckStation by Stenzek", "license": "Icons8 duck icon (Icons8 terms, attribution required) shipped in the DuckStation repository under CC BY-NC-ND 4.0; unmodified (converted from .icns and resized only); used only to identify the app in a non-commercial directory"}]
sourceAvailability: "source-available"
licenseNotes: "CC-BY-NC-ND-4.0 permits sharing with attribution for noncommercial purposes, but does not permit distributing adapted material. This is not an open-source software license."
---

DuckStation emulates the original Sony PlayStation, so you can play PS1 discs and disc images on a Mac. Before any game starts, you need a BIOS image from a PS1 or PS2, which the project does not supply; the README tells you to dump it from your own console. Games come from you as well, either read straight from a CD drive or loaded as images in formats such as bin/cue, CHD, CCD and unencrypted PBP.

The desktop interface is built with Qt and shows your library as a list or grid, with multi-disc games merged into one entry. A separate full-screen "Big Picture" interface suits a TV. Beyond plain playback it offers:

- Hardware renderers, Metal among the supported APIs, with upscaling, texture filtering and PGXP geometry correction.
- Save states with rewind and runahead.
- Per-game settings, controller presets, and analog, lightgun and multitap input.
- A memory card editor, cheat and patch databases, and RetroAchievements.

The project aims to be as accurate as possible while staying fast on low-end hardware, and it discourages hack options.

The Mac build is a Universal app for Intel and Apple silicon and requires macOS 13.3. It carries only an ad hoc signature, not a Developer ID, because the developer will not pay a yearly certificate cost for a project that brings in no revenue. If macOS reports an unidentified developer, the README says to click Open Anyway in Privacy & Security. A built-in updater follows either a stable channel or a preview channel built from every commit.

The current code is under CC BY-NC-ND 4.0. You may share unmodified releases for noncommercial use, but not adapted versions, which makes DuckStation source-available rather than open source.
