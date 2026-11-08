---
name: "Spotifly"
summary: "A SwiftUI Spotify player that also turns the Mac into a Spotify Connect device; needs a Premium account."
category: "Media"
tags:
  - music
  - streaming
  - audio-player
  - music-player
repository: https://github.com/ralph/Spotifly
website: https://ralph.github.io/Spotifly/
license: "MIT"
licenseUrl: https://github.com/ralph/Spotifly/blob/main/LICENSE
download: https://github.com/ralph/Spotifly/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
sources:
  - https://github.com/ralph/Spotifly
  - https://github.com/ralph/Spotifly/blob/main/LICENSE
  - https://github.com/ralph/Spotifly/releases
  - https://ralph.github.io/Spotifly/
  - https://raw.githubusercontent.com/ralph/Spotifly/main/README.md
  - https://github.com/ralph/Spotifly/releases/tag/v1.4.0
---

Spotifly plays Spotify on the Mac from a SwiftUI window and needs a Spotify Premium account. You connect it to your account once in the browser, and that single authorisation both signs you in and makes the Mac available as a Spotify Connect device. From then on you can play music on the Mac itself or use Spotifly to control playback on your phone and speakers.

The window covers your library, with playlists, albums, the artists you follow and your liked songs, plus favourites and search, and a queue you reorder by dragging. Spotifly also has a miniplayer. Playback and navigation work from the keyboard. Space plays and pauses, Command with the left or right arrow changes track and Command-L likes the current song. Command-1 to Command-4 jump between Favorites, Playlists, Albums and Artists, and Command-F goes to the search field.

Version 1.4.0 is an Apple silicon app, Developer ID-signed and notarized, that requires macOS 27 or later. It comes as a ZIP from GitHub releases or through the developer's Homebrew tap.

Playback and Spotify Connect are implemented in Swift, following the protocol work of the librespot project, and Ogg Vorbis audio is decoded with Xiph.Org's libogg and libvorbis.
