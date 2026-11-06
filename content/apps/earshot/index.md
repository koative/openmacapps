---
name: "Earshot"
summary: "Live, on-device transcript of any Mac app's audio, with speaker names taken from Microsoft Teams live captions."
category: "Productivity"
tags:
  - transcription
  - local-ai
  - meetings
  - speech-to-text
repository: "https://github.com/Bouliw/earshot"
website: "https://github.com/Bouliw/earshot"
license: "MIT"
licenseUrl: "https://github.com/Bouliw/earshot/blob/main/LICENSE"
download: "https://github.com/Bouliw/earshot/releases/latest/download/Earshot.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Bouliw/earshot"
  - "https://github.com/Bouliw/earshot/blob/main/LICENSE"
  - "https://github.com/Bouliw/earshot/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Bouliw/earshot/main/Resources/AppIcon.icns"
    credit: "Bouliw"
    license: "MIT; upstream app icon, trademarks retained"
---

Earshot sits in the menu bar and turns the audio of any app on your Mac into a live transcript. It captures each app's audio with Core Audio process taps, transcribes with whisper.cpp on the Mac, and cuts lines at pauses. In Microsoft Teams it reads the live captions panel to put speaker names on lines. Sessions can be named after the matching calendar event. It suits people who want notes from calls or videos without sending the audio to a service.

It needs macOS 26 or later on Apple silicon. Earshot is not notarized by Apple, and its DMG is signed ad hoc, so the first launch needs Open Anyway in System Settings under Privacy & Security. It asks for permissions as you use features: Calendars, Device Control and Data Access for Teams speaker names, and Microphone only if you include your own voice. Without the optional permissions, sessions are named after the app and lines have no speaker names.
