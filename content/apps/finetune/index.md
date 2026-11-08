---
name: "FineTune"
summary: "Sets per-app volume, boosts quiet apps, routes audio to different devices and applies EQ from the menu bar."
category: "Utilities"
tags: ["audio", "volume", "menu-bar", "equalizer"]
repository: "https://github.com/ronitsingh10/FineTune"
website: "https://github.com/ronitsingh10/FineTune"
license: "GPL-3.0"
licenseUrl: "https://github.com/ronitsingh10/FineTune/blob/main/LICENSE"
download: "https://github.com/ronitsingh10/FineTune/releases"
freeDownload: true
homebrew: "finetune"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ronitsingh10/FineTune", "https://github.com/ronitsingh10/FineTune/blob/main/LICENSE", "https://github.com/ronitsingh10/FineTune/releases", "https://raw.githubusercontent.com/ronitsingh10/FineTune/main/README.md", "https://github.com/ronitsingh10/FineTune/releases/tag/v1.9.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/ronitsingh10/FineTune/main/FineTune/Assets.xcassets/fineTuneIcon.appiconset/icon_256x256.png", "credit": "Ronit Singh and FineTune contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

FineTune gives every app playing sound its own volume slider in the menu bar. Click its icon, and the apps currently making noise appear with a slider, a mute button and an output device picker.

- Per-app boost raises quiet apps by 2x, 3x or 4x.
- Each app can go to a different output, or to several devices at once.
- A ten-band equalizer with 20 presets works per app, and AutoEQ profiles correct individual headphones.
- Global hotkeys change the volume of whichever app is making sound, even when another app is in front.

Pinned apps stay in the list while silent, so you can set their volume, EQ and output in advance. When a device reconnects, its apps return to it with their settings. FineTune also controls external displays over DDC and sets software volume on USB DACs and HDMI outputs whose hardware slider does nothing. URL schemes let scripts and Shortcuts change volume, mute and routing.

FineTune taps app audio through macOS's Screen and System Audio Recording permission, which it requests at first launch. An app on the ignore list bypasses the tap entirely and goes back to normal macOS audio.

Version 1.9.0 requires macOS 15.4 or later. The DMG holds a Universal app, Developer ID-signed and notarized, and it is also on Homebrew. The app is free under GPL-3.0, with optional tips through Ko-fi.
