---
name: "Music Router"
summary: "Menu bar utility that stops Music.app from auto-launching and sends media keys to the app that is playing."
category: "Utilities"
tags:
  - music
  - media-controls
  - menu-bar
  - automation
repository: "https://github.com/drumandbytes/music-router"
website: "https://github.com/drumandbytes/music-router"
license: "MIT"
licenseUrl: "https://github.com/drumandbytes/music-router/blob/main/LICENSE"
download: "https://github.com/drumandbytes/music-router/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/drumandbytes/music-router"
  - "https://github.com/drumandbytes/music-router/blob/main/LICENSE"
  - "https://github.com/drumandbytes/music-router/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/drumandbytes/music-router/main/Resources/AppIcon.icns"
    credit: "Drumandbytes OÜ"
    license: "MIT; upstream app icon, trademarks retained"
---

Music Router keeps Music.app from opening on its own, for example after an AirPlay speaker change, a Handoff from an iPhone or a Siri request, and it can take the keyboard's media keys so play, pause, next and previous go to whichever app is already playing. When nothing is playing, the key opens the replacement you choose, such as Spotify, VLC or a web player, and asks it to start. It is for people who keep getting Music opened by a media key they pressed for another app.

The README does not state a minimum macOS version; the app's Info.plist sets it to macOS 13.0. It needs Input Monitoring and Accessibility permission (renamed Device Control and Data Access in macOS 27), and the `media-control` Homebrew formula for Now Playing detection. The build is ad-hoc signed and not notarized, so the first launch needs Open Anyway in Privacy & Security. The README warns that rebuilding or re-signing can make macOS silently drop those permissions.
