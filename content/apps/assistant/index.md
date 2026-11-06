---
name: "Assistant"
summary: "A voice assistant for Claude Code that answers out loud while it works and transcribes your speech with local Whisper."
category: "AI"
tags:
  - coding-agents
  - speech-to-text
  - local-ai
  - voice-typing
repository: "https://github.com/ciro-maciel/voice-assistant"
website: "https://ciromaciel.click/tools/voice-assistant"
license: "MIT"
licenseUrl: "https://github.com/ciro-maciel/voice-assistant/blob/main/LICENSE"
download: "https://github.com/ciro-maciel/voice-assistant/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ciro-maciel/voice-assistant"
  - "https://github.com/ciro-maciel/voice-assistant/blob/main/LICENSE"
  - "https://github.com/ciro-maciel/voice-assistant/releases/latest"
  - "https://ciromaciel.click/tools/voice-assistant"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ciro-maciel/voice-assistant/main/Resources/AppIcon.icns"
    credit: "Ciro Cesar Maciel"
    license: "SIL Open Font License 1.1 (Candal letter A, Vernon Adams); trademarks retained"
---

Assistant is a menu bar app for talking to Claude Code. You say its name and ask a question; it sends the request to one Claude Code session in the folder you choose and speaks the answer sentence by sentence while the work continues. Speech is transcribed on the Mac by a local Whisper model, so the audio stays there. It suits people who already use Claude Code and would rather hear progress and results than watch a terminal.

It requires macOS 14 or later on Apple silicon, Claude Code signed in, and a few Homebrew tools (sox, whisper-cpp and ffmpeg) plus a Whisper model download. The DMG is signed and notarized. Your requests and the files Claude Code reads go to Anthropic through your Claude Code account. It works in English and Brazilian Portuguese only, one model talks and works at a time, and it does not start at login.
