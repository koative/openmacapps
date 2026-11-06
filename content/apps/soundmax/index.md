---
name: "SoundMax"
summary: "Menu bar 10-band system equalizer with saved settings per output device and AutoEQ headphone curves."
category: "Media"
tags:
  - equalizer
  - audio
  - menu-bar
  - volume
repository: "https://github.com/snap-sites/SoundMax"
website: "https://github.com/snap-sites/SoundMax"
license: "MIT"
licenseUrl: "https://github.com/snap-sites/SoundMax/blob/main/LICENSE"
download: "https://github.com/snap-sites/SoundMax/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/snap-sites/SoundMax"
  - "https://github.com/snap-sites/SoundMax/blob/main/LICENSE"
  - "https://github.com/snap-sites/SoundMax/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/snap-sites/SoundMax/releases/download/v1.1.3-beta/SoundMax-Installer.dmg"
    credit: "Craig"
    license: "MIT; upstream app icon, trademarks retained"
---

SoundMax is a menu bar equalizer that applies a 10-band parametric EQ to all system audio. It routes sound through the BlackHole 2ch virtual driver and remembers the EQ and volume for each output device. It also has presets, a software volume slider for HDMI displays, and AutoEQ correction curves for many headphones. It suits people who want to shape the sound of every app without changing each one.

It needs macOS 13.0 or later and an Apple silicon Mac, since the release binary is arm64 only. BlackHole 2ch has to be installed separately, and the app asks for microphone access so it can read audio from BlackHole. The latest release is marked beta (v1.1.3-beta). The DMG is not notarized, so the first launch has to be allowed in System Settings.
