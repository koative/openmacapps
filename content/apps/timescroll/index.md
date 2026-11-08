---
name: "TimeScroll"
summary: "Saves snapshots of your screen to a folder on your Mac, indexes their text and lets you scroll back through what you saw."
category: "Productivity"
tags:
  - search
  - screen-recording
  - privacy
repository: "https://github.com/XInTheDark/TimeScrollApp"
website: "https://timescroll.muzhen.org/"
license: "GPL-3.0"
licenseUrl: "https://github.com/XInTheDark/TimeScrollApp/blob/main/LICENSE"
download: "https://github.com/XInTheDark/TimeScrollApp/releases/download/v2.2.1/TimeScroll-2.2.1.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/XInTheDark/TimeScrollApp/blob/main/README.md"
  - "https://timescroll.muzhen.org/install"
  - "https://github.com/XInTheDark/TimeScrollApp/releases/tag/v2.2.0"
  - "https://github.com/XInTheDark/TimeScrollApp"
  - "https://github.com/XInTheDark/TimeScrollApp/blob/main/LICENSE"
  - "https://github.com/XInTheDark/TimeScrollApp/releases/tag/v2.2.1"
  - "https://timescroll.muzhen.org/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/XInTheDark/TimeScrollApp/main/app/TimeScrollDev/Assets.xcassets/AppIcon.appiconset/AppIcon-mac-512x512%402x.png"
    credit: "TimeScroll contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Every few seconds, when something on screen has changed, TimeScroll saves a snapshot and indexes the text in it. Later you scroll back through the timeline or search for a word you remember, and jump to the moment it was on screen.

- The timeline splits your past activity into work sessions, and a calendar takes you to any day. Search highlights the match on the snapshot and filters by app and date.
- AI search finds a moment from a plain description, using a MobileCLIP2 model you download in Settings or a local Ollama model.
- Summaries, added in 2.2.0, have a local Ollama model write up what you did over a selected range, next to the time spent in each app.
- A timelapse export turns any period into a video at up to 600 times speed.
- Optional audio transcripts record the microphone or system audio and transcribe it on the Mac with a Whisper model.
- An MCP server inside the app gives Claude and other MCP clients access to search your history on request.

TimeScroll needs macOS 14 or later and comes as a ZIP with a Universal app for Apple silicon and Intel. Capture needs the Screen Recording permission. If you also grant Accessibility, Direct mode reads on-screen text without OCR, which the developer says uses much less energy.

You can exclude apps, delete any time range and encrypt the database and media behind Touch ID or your Mac password, though the vault is still marked beta. The developer says nothing leaves the Mac and there are no accounts or analytics.
