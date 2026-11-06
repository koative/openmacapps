---
name: "Local Transcriber"
summary: "Menu bar app that records and transcribes meetings and dictation on your Mac, with speaker recognition and no cloud."
category: "Productivity"
tags:
  - transcription
  - meetings
  - local-ai
  - speech-to-text
repository: "https://github.com/teconomix/local-transcriber"
website: "https://transcriber.teconomix.net/en/"
license: "MIT"
licenseUrl: "https://github.com/teconomix/local-transcriber/blob/main/LICENSE"
download: "https://github.com/teconomix/local-transcriber/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/teconomix/local-transcriber"
  - "https://github.com/teconomix/local-transcriber/blob/main/LICENSE"
  - "https://github.com/teconomix/local-transcriber/releases"
  - "https://transcriber.teconomix.net/en/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/teconomix/local-transcriber/main/app/Resources/AppIcon.icns"
    credit: "Björn Rabethge"
    license: "MIT; upstream app icon, trademarks retained"
---

Local Transcriber records meetings, calls and interviews from a menu bar item, with the microphone and system audio kept as separate tracks. It transcribes them with Whisper large-v3-turbo on the Apple silicon GPU through MLX, and separates speakers with pyannote, so a voice you name once is recognized next time. It can also dictate into any app with a held key, offers to record when a video call starts, and can ask a local or chosen cloud model for minutes or a summary, only when you click. The README says the whole pipeline runs on the Mac, with no account, subscription or license server.

It requires a Mac with Apple silicon (M1 or newer) and macOS 14 or later; the AI features need macOS 26 with Apple Intelligence. Plan on about 8 GB of free disk space, and 16 GB of memory is recommended. Internet access is needed only for installation and for a cloud model if you choose one. The README makes recording consent your responsibility, since recording conversations without consent is illegal in many countries. The README does not say whether the release builds are notarized.
