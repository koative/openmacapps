---
name: Radiola
summary: "Plays internet radio from a menu in the menu bar, with a station manager and song history."
category: Media
tags:
- radio
- streaming
- music
- menu-bar
- music-player
repository: https://github.com/SokoloffA/radiola
website: https://github.com/SokoloffA/radiola
license: MIT
licenseUrl: https://github.com/SokoloffA/radiola/blob/main/LICENSE
download: https://github.com/SokoloffA/radiola/releases
freeDownload: true
homebrew: "radiola"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
- https://github.com/SokoloffA/radiola
- https://github.com/SokoloffA/radiola/blob/main/LICENSE
- https://github.com/SokoloffA/radiola/releases
- https://github.com/SokoloffA/radiola/blob/main/README.md
- https://github.com/SokoloffA/radiola/releases/tag/v13.3.0
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/SokoloffA/radiola/main/Radiola/Assets.xcassets/AppIcon.appiconset/radiola-512%402.png
  credit: Alexander Sokolov
  license: MIT-licensed repository asset; no separate icon terms stated
---

Radiola plays internet radio from the menu bar. Click its icon, pick a station from the menu, and it starts playing. Scrolling the mouse wheel over the icon changes the volume.

- A separate station window manages your list of stations and also works as a fuller player.
- Stations can be sorted into groups, and since 13.2.0 it remembers which groups are open when switching lists.
- New stations can be found through a RadioBrowser search, and the Add Station dialog can fetch a station's title.
- A history view shows the song playing now and those played recently.

Since 13.0.1 playback restarts on its own after a temporary network loss. Global keyboard shortcuts are supported. The README describes the app as small, under 40 MB, and free.

It exists for listening to streams without starting a full music player. Version 13.3.0 needs macOS 11.3 or later and comes as a disk image holding a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. Homebrew also installs it as a cask.
