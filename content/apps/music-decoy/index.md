---
name: "Music Decoy"
summary: "Stops macOS from launching the Music app when you press Play, by quietly standing in for it in the background."
category: "Utilities"
tags:
  - music
  - media-controls
  - keyboard
repository: https://github.com/FuzzyIdeas/MusicDecoy
website: https://lowtechguys.com/musicdecoy
license: "GPL-3.0"
licenseUrl: https://github.com/FuzzyIdeas/MusicDecoy/blob/main/LICENSE
download: https://github.com/FuzzyIdeas/MusicDecoy/releases/latest
homebrew: "music-decoy"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/FuzzyIdeas/MusicDecoy
  - https://github.com/FuzzyIdeas/MusicDecoy/blob/main/LICENSE
  - https://github.com/FuzzyIdeas/MusicDecoy/releases
  - https://lowtechguys.com/musicdecoy
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/FuzzyIdeas/MusicDecoy/main/Music/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "The Low Tech Guys (Alin Panaitiu)"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Music Decoy keeps macOS from opening Apple's Music app when you press Play on the keyboard or headphones and nothing else is playing. It runs in the background under the same bundle identifier as Music, so the system passes the Play key to it instead of launching Music. It has no window, Dock icon or menu bar icon, and does no work while it sits there.

While it runs, Music cannot be opened at all, even on purpose. Quit Music Decoy first from Activity Monitor or with `killall 'Music Decoy'`, or use the Shortcut the project provides to do both steps. A Terminal `defaults` setting can make the Play key open another player, such as Spotify, instead. Homebrew lists macOS 12 as the minimum, and the README describes a VLC setting to change if VLC crashes while Music Decoy is running.
