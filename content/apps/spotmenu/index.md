---
name: "SpotMenu"
summary: "Shows the current Spotify or Apple Music track in the menu bar, with playback controls and hotkeys."
category: "Media"
tags:
  - music
  - menu-bar
  - media-controls
repository: https://github.com/kmikiy/SpotMenu
website: https://kmikiy.github.io/SpotMenu/
license: "MIT"
licenseUrl: https://github.com/kmikiy/SpotMenu/blob/master/LICENSE
download: https://github.com/kmikiy/SpotMenu/releases
freeDownload: true
homebrew: "spotmenu"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/kmikiy/SpotMenu
  - https://github.com/kmikiy/SpotMenu/blob/master/LICENSE
  - https://github.com/kmikiy/SpotMenu/releases
  - https://formulae.brew.sh/cask/spotmenu
  - https://raw.githubusercontent.com/kmikiy/SpotMenu/master/README.md
  - https://github.com/kmikiy/SpotMenu/releases/tag/v2.3.0
  - https://kmikiy.github.io/SpotMenu/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/kmikiy/SpotMenu/master/SpotMenu/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "kmikiy and SpotMenu contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

SpotMenu shows the artist and title of whatever Spotify or Apple Music is playing, right in the menu bar. Click it to open a playback panel with the album art; hover over the panel and play/pause, next and previous controls appear. A right-click opens the context menu and Preferences.

SpotMenu can follow whichever player is active, or you can pin it to Spotify or Apple Music. Global shortcuts cover play/pause, next and previous track.

- The menu bar text can show or hide the artist and title, and add a playing icon, a liked icon or the app icon.
- A compact view packs the track details into two lines, and the maximum width runs from 40 to 300 points.
- The overlay takes your own tint and foreground colors, blur intensity and tint opacity.
- Spotify audiobooks and podcasts can show the book or show title, the chapter or episode, or both.

SpotMenu needs macOS 13 Ventura or later. The release is a ZIP holding a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and it updates itself through Sparkle. It is also available as a Homebrew cask.

Liking and unliking Spotify tracks, with their own shortcuts, takes some setup. You create a Spotify developer app, add SpotMenu's callback as a redirect URI, paste the client ID into Preferences and sign in.
