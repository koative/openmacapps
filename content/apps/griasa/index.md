---
name: "Griasa"
summary: "Records meetings on your Mac and lists the promises made in them, with dates, before your next call."
category: "Productivity"
tags:
  - meetings
  - local-first
  - transcription
  - local-ai
alternativeTo:
  - granola
repository: "https://github.com/Stari-am/griasa"
website: "https://stari-am.github.io/griasa/"
license: "GPL-3.0"
licenseUrl: "https://github.com/Stari-am/griasa/blob/main/LICENSE"
download: "https://github.com/Stari-am/griasa/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Stari-am/griasa"
  - "https://github.com/Stari-am/griasa/blob/main/LICENSE"
  - "https://github.com/Stari-am/griasa/releases/latest"
  - "https://stari-am.github.io/griasa/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Stari-am/griasa/releases/latest/download/Griasa-1.0.26.dmg"
    credit: "Griasa contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Griasa is a menu bar app that records your meetings on the Mac, transcribes them locally and pulls out who promised what and by when. Before a calendar event it shows who is attending and which open promises involve them, and it can record a call with one button. It also offers hold-to-talk dictation, reminders from anything on screen, and a history of transcripts and notes. It suits people who take many calls and want commitments tracked without sending audio to a service.

It requires macOS 14 or later and runs as a universal build; the release disk image is signed with a Developer ID certificate and notarized. Microphone, Speech Recognition, Accessibility and Screen Recording permissions are requested, and recording the other side of a call needs Screen Recording. Speech is transcribed on the Mac with Apple's recognizer or whisper.cpp; first launch installs whisper.cpp through Homebrew and downloads a 1.6 GB model, and the local language model is between 3 GB and 37 GB depending on memory. A new install uses that local model; Anthropic, OpenAI, Gemini, or the Claude Code and Codex command-line tools are used only once you select them as the AI provider. The README notes that other participants get no recording indicator from macOS, and offers an optional setting that reminds you to tell them.
