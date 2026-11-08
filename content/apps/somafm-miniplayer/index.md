---
name: SomaFM miniplayer
summary: An unofficial menu-bar player for the listener-supported SomaFM internet radio stations.
category: Media
tags:
- music
- streaming
- menu-bar
- audio-player
- music-player
repository: https://github.com/ealeksandrov/SomaFM-miniplayer
website: https://github.com/ealeksandrov/SomaFM-miniplayer
license: MIT
licenseUrl: https://github.com/ealeksandrov/SomaFM-miniplayer/blob/master/LICENSE.md
download: https://github.com/ealeksandrov/SomaFM-miniplayer/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
- https://github.com/ealeksandrov/SomaFM-miniplayer
- https://github.com/ealeksandrov/SomaFM-miniplayer/blob/master/LICENSE.md
- https://github.com/ealeksandrov/SomaFM-miniplayer/releases
- https://somafm.com/
- https://raw.githubusercontent.com/ealeksandrov/SomaFM-miniplayer/master/README.md
- https://github.com/ealeksandrov/SomaFM-miniplayer/releases/tag/2.0.0
- https://apps.apple.com/app/id1303140142
assets:
- path: ./assets/icon.png
  source: https://github.com/ealeksandrov/SomaFM-miniplayer/releases/download/2.0.0/SomaFM-miniplayer-2.0.0.dmg
  credit: Evgeny Aleksandrov
  license: Official app icon extracted unmodified from the 2.0.0 release; name and icon retained by the author
---

SomaFM miniplayer plays the internet radio stations of SomaFM from the menu bar. Its author describes it as an unofficial, minimal player. You open its menu from the status item, choose a station and listen, with the station and current track shown at the top of the menu beside a play/pause button.

Clicking the current track either copies it or opens a search for it on Google, YouTube, Apple Music or Spotify, depending on the action you pick in settings. A left click on the status item can open the menu or toggle playback instead; the menu still opens on a right-click, or a click with Control or Option held. The menu bar icon pulses while a stream connects and dims when playback is paused.

Version 2.0.0, released in August 2026, rewrote the app and follows version 1.2.0 from 2019. The GitHub disk image holds a Universal app for Apple silicon and Intel that is Developer ID-signed and notarized and requires macOS 14 or later. The author also publishes it on the Mac App Store. Building it yourself needs Xcode 26 or later and no third-party dependencies.

Settings are split between playback and behaviour. Playback covers starting at login, playing as soon as the app launches and notifications for new tracks. Behaviour covers the left-click and track-click actions, station sorting and recent stations. With Now Playing support, the media keys and Control Center control playback, even while the Mac is locked.
