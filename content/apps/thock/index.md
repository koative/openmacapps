---
name: Thock
summary: Plays a mechanical keyboard sound for every key you press on a Mac, controlled from the menu bar.
category: Utilities
tags:
- keyboard
- audio
- menu-bar
- customization
repository: https://github.com/kamillobinski/thock
website: https://thockapp.com
license: MIT
licenseUrl: https://github.com/kamillobinski/thock/blob/main/LICENSE
download: https://github.com/kamillobinski/thock/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/kamillobinski/thock
- https://github.com/kamillobinski/thock/blob/main/LICENSE
- https://github.com/kamillobinski/thock/releases
- https://raw.githubusercontent.com/kamillobinski/thock/main/README.md
- https://github.com/kamillobinski/thock/releases/tag/1.23.0
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/kamillobinski/thock/main/Thock/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
  credit: Kamil Łobiński
  license: MIT repository asset; Thock name and icon retained by the author
---

Thock plays a recorded switch sound each time you press a key, so typing on a Mac keyboard sounds like typing on a mechanical board. You choose a switch profile from the menu bar icon and keep typing; a global shortcut turns the sounds on and off.

- Custom sound packs follow a simple JSON structure, so you can import other switch recordings or build your own.
- Spatial audio places each sound by key and cursor position, using Apple's spatial renderer on headphones and a light stereo pan on speakers, with a slider for the width.
- Sounds mute while Apple Music, Spotify or VLC is playing and come back when the music stops.
- Keyboard and mouse sounds have separate volume controls, and key sounds can vary in pitch.

Thock needs macOS 13.5 or later. Version 1.23.0 is a ZIP with a Universal app for Apple silicon and Intel, and the author also publishes a Homebrew tap.

A command-line tool and a Raycast extension turn the engine on or off and change sound packs without opening the menu, so Thock fits into launcher workflows and terminal scripts. The interface is available in ten languages, from Spanish and Japanese to Vietnamese and Russian.
