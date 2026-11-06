---
name: "SpatialAudio"
summary: "Menu bar utility that sends system audio through Apple's HRTFHQ spatial renderer on any headphones, via BlackHole 2ch."
category: "Media"
tags:
  - audio
  - headphones
  - menu-bar
repository: "https://github.com/vladsboev-web/SpatialAudio"
website: "https://github.com/vladsboev-web/SpatialAudio"
license: "MIT"
licenseUrl: "https://github.com/vladsboev-web/SpatialAudio/blob/main/LICENSE"
download: "https://github.com/vladsboev-web/SpatialAudio/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/vladsboev-web/SpatialAudio"
  - "https://github.com/vladsboev-web/SpatialAudio/blob/main/LICENSE"
  - "https://github.com/vladsboev-web/SpatialAudio/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/vladsboev-web/SpatialAudio/main/Resources/AppIcon.png"
    credit: "Vladislav Sboev"
    license: "MIT; upstream app icon, trademarks retained"
---

SpatialAudio sends system audio through Apple's HRTFHQ spatial mixer, so stereo music, films and games sound as if they come from speakers in front of you instead of inside your head. It works with headphones that do not offer Apple's spatial audio. It captures system sound through the BlackHole 2ch virtual driver, which you install separately. Volume keys and switching between headphones and speakers are handled from the menu bar.

It requires macOS 13 or later and is a universal build that runs on Apple silicon and Intel. The app is not notarized. The README asks you to clear the quarantine flag with `xattr` or to open the app from its context menu the first time. It asks for microphone access, which macOS requires to read audio from BlackHole. The README also documents a Homebrew install that uses the author's own tap.
