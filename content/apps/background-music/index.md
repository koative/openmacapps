---
name: Background Music
summary: "Sets a separate volume for each app and pauses your music player while another app plays sound."
category: Utilities
tags:
  - audio
  - menu-bar
  - volume
alternativeTo:
  - voicemeeter
repository: https://github.com/kyleneideck/BackgroundMusic
website: https://github.com/kyleneideck/BackgroundMusic
license: "GPL-2.0-or-later"
licenseUrl: https://github.com/kyleneideck/BackgroundMusic/blob/master/LICENSE
download: https://github.com/kyleneideck/BackgroundMusic/releases
freeDownload: true
homebrew: "background-music"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/kyleneideck/BackgroundMusic", "https://github.com/kyleneideck/BackgroundMusic/blob/master/LICENSE", "https://raw.githubusercontent.com/kyleneideck/BackgroundMusic/master/README.md", "https://raw.githubusercontent.com/kyleneideck/BackgroundMusic/master/BGMApp/BGMApp/main.m", "https://github.com/kyleneideck/BackgroundMusic/releases", "https://github.com/kyleneideck/BackgroundMusic/releases/tag/v0.5.0", "https://vb-audio.com/Voicemeeter/"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/kyleneideck/BackgroundMusic/blob/8c25450e9b0d3867417c4872018b03fb30c0c85c/BGMApp/BGMApp/Images.xcassets/AppIcon.appiconset/appicon_256.png
    credit: Background Music contributors
    license: GPL-2.0; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/kyleneideck/BackgroundMusic/blob/8c25450e9b0d3867417c4872018b03fb30c0c85c/Images/README/Screenshot.png
    credit: Background Music contributors
    license: GPL-2.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: Background Music menu showing per-application volume sliders and audio controls.
    source: https://github.com/kyleneideck/BackgroundMusic/blob/8c25450e9b0d3867417c4872018b03fb30c0c85c/Images/README/Screenshot.png
    credit: Background Music contributors
icon: ./assets/icon.png
---

Background Music gives every app that plays sound its own volume slider, and it pauses your music when something else starts making noise. Once the other sound stops, the music picks up again. Auto-pause works with iTunes, Spotify, VLC, VOX, Decibel, Hermes, Swinsian and GPMDP.

The sliders can push a quiet app past its usual maximum. Some apps play audio through a helper process, which matters for meeting and video call apps. If a slider seems to do nothing, look under More Apps for an entry ending in "(Helper)".

All of this works through a virtual audio device. Background Music makes it the default output while it runs and switches back when you quit. The same device lets you record what the Mac is playing: choose it as the input in QuickTime Player, or combine it with a microphone as an aggregate device in Audio MIDI Setup. Because macOS treats that device as a microphone, the app asks for microphone access. The developer says it never listens to the microphone itself.

The project still calls the app alpha. If it crashes and sound stops, pick another output in System Settings > Sound. Uninstalling runs a script kept inside the app bundle.

Voicemeeter is a full virtual mixing console for routing sound between apps and devices, and it runs only on Windows. Background Music covers the per-app volume and recording parts on a Mac.

Version 0.5.0 is a signed and notarized installer package that needs macOS 10.13 or later and no restart.
