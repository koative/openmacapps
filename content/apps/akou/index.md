---
name: "akou"
summary: "Records calls on your Mac, transcribes them on-device and lets a terminal agent ask about the call."
category: "Productivity"
tags:
  - transcription
  - meetings
  - local-ai
  - audio
alternativeTo:
  - granola
repository: "https://github.com/GeiserX/akou"
website: "https://geiserx.github.io/akou/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/GeiserX/akou/blob/main/LICENSE"
download: "https://github.com/GeiserX/akou/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/GeiserX/akou"
  - "https://github.com/GeiserX/akou/blob/main/LICENSE"
  - "https://github.com/GeiserX/akou/releases"
  - "https://geiserx.github.io/akou/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/GeiserX/akou/main/assets/brand/akou.iconset/icon_512x512%402x.png"
    credit: "akou authors"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

akou records a call on the Mac by capturing the microphone and the call audio on separate channels, with no bot in the meeting and no virtual audio driver. A live transcript appears while people speak, and an accurate pass with speaker labels runs on the Mac after the call. A timestamped notepad keeps notes written during the call. The Ask feature answers questions about a call using Claude Code, Codex, a local model or your own API key, and finished calls can be exported as Markdown to your own notes folder or repository. It suits people who want meeting notes they own and a terminal agent that can query them.

The app needs an Apple silicon Mac running macOS 14.4 or later. The README says it is signed with a Developer ID and notarized since version 0.6.1. The first window downloads speech models of about 3.0 GB. The Windows and Linux archives contain only the command-line tool and cannot record. Ask sends questions to whichever provider you pick, so choose a local model to keep answers on the Mac. The project is GPL-3.0 licensed, and its NOTICE file credits the third-party code it builds on.
