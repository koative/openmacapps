---
name: "PitchTap"
summary: "Menu bar app that shifts the pitch of one app's audio, or the whole Mac's sound, live while keeping the tempo."
category: "Media"
tags:
  - audio
  - music
  - menu-bar
repository: "https://github.com/gkudva96/pitchtap"
website: "https://gkudva96.github.io/pitchtap/"
license: "GPL-3.0"
licenseUrl: "https://github.com/gkudva96/pitchtap/blob/main/LICENSE"
download: "https://github.com/gkudva96/pitchtap/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/gkudva96/pitchtap"
  - "https://github.com/gkudva96/pitchtap/blob/main/LICENSE"
  - "https://github.com/gkudva96/pitchtap/releases/latest"
  - "https://gkudva96.github.io/pitchtap/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/gkudva96/pitchtap/HEAD/mac/Resources/AppIcon.icns"
    credit: "PitchTap contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

PitchTap is a menu bar app that changes the pitch of audio as it plays, in semitones, and leaves the tempo alone. It can shift one app, such as Spotify, Apple Music, YouTube or a video call, or everything the Mac plays. It suits singers who want a song in a comfortable key, musicians playing along with a recording, and anyone who wants to hear a track an octave lower. Processing happens on the Mac, and the project says nothing is recorded, saved or sent anywhere.

It needs an Apple silicon Mac (M1 or later) running macOS 14.4 or later; Intel Macs are not supported yet. The release build is not notarized, because it is not signed with a paid Apple developer certificate, so the first launch has to be allowed in System Settings under Privacy & Security. The first time you switch it on, macOS asks for permission to record system audio, which the app needs to hear sound before it changes it. Updates install themselves from version 0.4.0 on.
