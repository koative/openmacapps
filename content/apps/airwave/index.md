---
name: "Airwave"
summary: "Applies HRIR spatial audio to all system sound on stereo headphones, with support for HeSuVi preset files."
category: "Media"
tags:
  - audio
  - headphones
  - menu-bar
repository: "https://github.com/sallliisa/Airwave"
website: "https://github.com/sallliisa/Airwave"
license: "GPL-3.0"
licenseUrl: "https://github.com/sallliisa/Airwave/blob/main/LICENSE"
download: "https://github.com/sallliisa/Airwave/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/sallliisa/Airwave"
  - "https://github.com/sallliisa/Airwave/blob/main/LICENSE"
  - "https://github.com/sallliisa/Airwave/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/sallliisa/Airwave/main/Airwave/AppIcon-macOS-Default-1024x1024%401x.png"
    credit: "Airwave contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Airwave captures the Mac's system audio, convolves it with a head-related impulse response (HRIR) preset and plays the result through the current output, aiming for the wider, more speaker-like sound that HRIR filtering gives. It ships with Neutral, Room and Stage presets, accepts compatible HeSuVi HRIR `.wav` files, and has an optional EqualizerAPO-format equalizer and per-device profiles. It suits people who listen on stereo headphones and want a wider sound from everything they play.

It requires macOS 15 Sequoia or later, stereo headphones connected to a supported physical output, and the System Audio Capture permission; Airwave does not use the microphone. Virtual and aggregate devices are unsupported, and the effect is designed for headphones rather than speakers. The README does not say whether the build is notarized. If macOS stops the app from opening, allow it under System Settings > Privacy & Security with Open Anyway.
