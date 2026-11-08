---
name: "Aerial"
summary: "Plays Apple's aerial videos as a Mac screen saver and live wallpaper, with clock and weather overlays and your own clips."
category: "Media"
tags:
  - screensaver
  - video
  - desktop
repository: "https://github.com/AerialScreensaver/Aerial"
website: "https://aerialscreensaver.github.io"
license: "MIT"
licenseUrl: "https://github.com/AerialScreensaver/Aerial/blob/main/LICENSE"
download: "https://github.com/AerialScreensaver/Aerial/releases"
freeDownload: true
homebrew: "aerial"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
sources: ["https://github.com/AerialScreensaver/Aerial", "https://github.com/AerialScreensaver/Aerial/blob/main/LICENSE", "https://github.com/AerialScreensaver/Aerial/releases", "https://raw.githubusercontent.com/AerialScreensaver/Aerial/main/README.md", "https://aerialscreensaver.github.io", "https://aerialscreensaver.github.io/download/", "https://github.com/AerialScreensaver/Aerial/releases/tag/v4.1.10"]
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/AerialScreensaver/Aerial/main/Aerial/Resources/Assets.xcassets/AppIcon.appiconset/icon-color-1-1024x1024-transparent.png"
    credit: "Guillaume Louel, John Coates, and Aerial contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Aerial plays Apple's aerial footage, the city, desert and space station shots made for Apple TV, as your Mac's screen saver and, if you want, as a moving desktop wallpaper. You drag Aerial.app into Applications and open it. A setup assistant asks whether you want a screen saver only, a still wallpaper or a live one, which overlay style to use, and whether the app lives in the menu bar or the Dock.

The Video Library then shows a card for each display with what it is playing.

- Overlays such as the clock, weather and location captions are dragged into seven zones on the screen.
- Your own .mov or .mp4 files go into one folder and join the rotation, with a title, a location and a time-of-day tag.
- Live sources include RTSP cameras, HLS streams and YouTube live URLs.
- Playlists, multi-display modes, global hotkeys and community video packs round it out.

Playback pauses under thermal pressure, in Low Power Mode or while a camera is in use. The live wallpaper also pauses when windows cover it. The developer says Aerial sends no telemetry.

Since version 4 the screen saver has shipped as an app extension inside Aerial.app, and 4.1 added the wallpaper extension. Version 4.1.10 needs macOS 26 Tahoe. It is an 11 MB Universal app, Developer ID-signed and notarized, and it updates itself through Sparkle. On macOS 15 Sequoia, Aerial 4.0.16 still works, minus the wallpaper.
