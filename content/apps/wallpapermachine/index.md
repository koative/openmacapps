---
name: "WallpaperMachine"
summary: "Plays Wallpaper Engine scene, video and web wallpapers from the Steam Workshop as your Mac desktop."
category: "Utilities"
tags:
  - wallpaper
  - desktop
  - video
  - menu-bar
  - native
alternativeTo:
  - wallpaper-engine
repository: https://github.com/MMFoundation/WallpaperMachine
website: https://www.wallpapermachine.app
license: "GPL-3.0-only"
licenseUrl: https://github.com/MMFoundation/WallpaperMachine/blob/main/LICENSE
download: https://www.wallpapermachine.app/download
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/MMFoundation/WallpaperMachine
  - https://github.com/MMFoundation/WallpaperMachine/blob/main/LICENSE
  - https://github.com/MMFoundation/WallpaperMachine/releases
  - https://www.wallpapermachine.app/download
  - https://github.com/MMFoundation/WallpaperMachine/blob/main/docs/features/telemetry.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/MMFoundation/WallpaperMachine/releases/download/v1.7.1/WallpaperMachine-1.7.1-arm64.dmg
    credit: "WallpaperMachine contributors"
    license: "GPL-3.0-only; app icon taken from the official release bundle, trademarks retained"
---

WallpaperMachine brings Wallpaper Engine's animated wallpapers to the Mac. It renders scene wallpapers with its own Rust and Metal engine and also plays video and web wallpapers, your own videos and pictures, and still images saved from pixiv. Each display can have its own wallpaper with separate scaling, frame rate and volume, and the app keeps running in the menu bar for pause, mute and skip controls.

Browsing the Steam Workshop works without signing in, but downloading from it, and scene wallpapers in general, need a Steam account that owns Wallpaper Engine, because scenes rely on resources from that purchase. Playlists, schedules, audio-reactive wallpapers, battery and heat limits, and an experimental animated lock screen and screen saver round it out. It is not affiliated with Wallpaper Engine or Valve.

It needs macOS 15 or later on an Apple silicon Mac. Releases are not notarized yet, so the first launch has to be allowed in System Settings under Privacy & Security. Detailed performance reports are opt-in, but every copy sends one anonymous daily ping, with no install ID, so the developer can count active Macs; there is no switch for it.
