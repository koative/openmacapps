---
name: "Phosphene"
summary: "Plays your own videos as animated desktop and lock screen wallpapers, chosen in System Settings."
category: "Utilities"
tags:
  - wallpaper
  - video
  - desktop
  - customization
alternativeTo:
  - wallpaper-engine
repository: https://github.com/kageroumado/phosphene
website: https://kagerou.glass/phosphene/
license: "MIT"
licenseUrl: https://github.com/kageroumado/phosphene/blob/main/LICENSE
download: https://github.com/kageroumado/phosphene/releases
freeDownload: true
homebrew: "phosphene"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/kageroumado/phosphene
  - https://github.com/kageroumado/phosphene/blob/main/LICENSE
  - https://github.com/kageroumado/phosphene/releases
  - "https://raw.githubusercontent.com/kageroumado/phosphene/main/README.md"
  - "https://kagerou.glass/phosphene/"
  - "https://github.com/kageroumado/phosphene/releases/tag/v1.11.4"
  - "https://www.wallpaperengine.io/en"
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/kageroumado/phosphene/main/.github/phosphene-icon.png
    credit: "kageroumado"
    license: "MIT; upstream app icon, trademarks retained"
---

Phosphene puts your own videos in the Wallpaper pane of System Settings, next to Apple's Aerials. You import MP4, MOV or other files AVFoundation can read into its Library window, then pick one there for the desktop or lock screen. macOS does the playback, so the video keeps looping after you quit Phosphene.

- Each display or Space can have its own wallpaper, and a mode plays video on the lock screen only.
- Playback pauses when the desktop is covered and adjusts decoding to power and thermal conditions, with optional lower-resolution copies.
- A menu bar item previews and pauses playback, switches displays and can restart the wallpaper agent when playback gets stuck.
- Loops are gapless, with transitions when you lock and unlock.

Wallpaper Engine is a Windows program whose animated wallpapers come from the Steam Workshop. Phosphene converts Workshop downloads into looping videos. Getting them needs a Windows copy of Steam on the Mac through Sevoflurane, CrossOver or Whisky.

Phosphene needs macOS 26 and builds on private WallpaperExtensionKit APIs that macOS updates can change. The DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. Usage counting is off until you agree to it from the menu bar, and the developer says the anonymous check-in never includes which videos you use.
