---
name: "SmartPause"
summary: "Menu bar utility that sends the play/pause key to whichever app is actually playing audio."
category: "Utilities"
tags:
  - menu-bar
  - media-controls
  - audio
  - keyboard-shortcuts
repository: "https://github.com/yasinozmeen/smartpause"
website: "https://smartpause.yasinozmeen.me"
license: "MIT"
licenseUrl: "https://github.com/yasinozmeen/smartpause/blob/main/LICENSE"
download: "https://github.com/yasinozmeen/smartpause/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/yasinozmeen/smartpause"
  - "https://github.com/yasinozmeen/smartpause/blob/main/LICENSE"
  - "https://github.com/yasinozmeen/smartpause/releases/latest"
  - "https://smartpause.yasinozmeen.me"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/yasinozmeen/smartpause/releases/download/v0.2.3/SmartPause-0.2.3.zip"
    credit: "Yasin Özmen"
    license: "MIT; upstream app icon, trademarks retained"
---

SmartPause catches the system play/pause key and sends the command to the app that is currently making sound, instead of whichever app macOS last remembers. A YouTube video, a Spotify track or a VLC file gets paused by the key, and when two sources play at once a single press switches between them. A small widget shows which app is playing and what the next press will do, and an option closes Apple Music if it opens by itself. It suits people who play audio from several apps on one Mac.

It needs macOS 14.2 or later on Apple silicon or Intel, plus the Accessibility permission; browser control also asks once per app for Automation. The release zip is signed with a development certificate and is not notarized, so the first launch has to be allowed in System Settings under Privacy & Security. The maintainer has tested Spotify, Brave, Chrome and Safari; the Arc and VLC adapters are untested.
