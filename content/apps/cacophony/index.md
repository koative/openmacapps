---
name: "Cacophony"
summary: "Streams everything your Mac plays to several AirPlay 2 speakers at once, in sync, through a virtual output."
category: "Media"
tags:
  - audio
  - music
  - menu-bar
repository: "https://github.com/stonerl/cacophony"
website: "https://github.com/stonerl/cacophony"
license: "MIT"
licenseUrl: "https://github.com/stonerl/cacophony/blob/main/LICENSE"
download: "https://github.com/stonerl/cacophony/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/stonerl/cacophony"
  - "https://github.com/stonerl/cacophony/blob/main/LICENSE"
  - "https://github.com/stonerl/cacophony/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/stonerl/cacophony/releases/latest/download/Cacophony-1.0.0.zip"
    credit: "Cacophony contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Cacophony sends the Mac's system output to several AirPlay 2 speakers at the same time. It installs a virtual CoreAudio output device named Cacophony; once you pick AirPlay speakers from its menu bar panel, that device becomes the system output and mixes the audio of every app. macOS alone can send the output to only one AirPlay speaker. It suits people with several AirPlay 2 speakers, such as HomePods, who want them playing in sync. It is not suitable for video or games, because AirPlay adds about two seconds of buffering.

It requires macOS 26 or later, the Cacophony app in /Applications, and administrator approval to install the audio driver, which briefly restarts Core Audio. The release zip is signed with a Developer ID certificate and notarized. The README warns that the app uses private AVOutputContext APIs and a route-picker SPI that may break in future macOS releases. Launch at Login is on by default, and quitting the app restores the previous output.
