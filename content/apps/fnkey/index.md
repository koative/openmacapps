---
name: "FnKey"
summary: "Pastes what you say while you hold the Fn key, transcribed by Deepgram or Groq with your own API key."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - menu-bar
  - voice-typing
repository: https://github.com/evoleinik/fnkey
website: https://github.com/evoleinik/fnkey
license: GPL-3.0
licenseUrl: https://github.com/evoleinik/fnkey/blob/main/LICENSE
download: https://github.com/evoleinik/fnkey/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
sources:
  - https://github.com/evoleinik/fnkey
  - https://github.com/evoleinik/fnkey/blob/main/LICENSE
  - https://github.com/evoleinik/fnkey/releases
  - https://raw.githubusercontent.com/evoleinik/fnkey/main/README.md
  - https://github.com/evoleinik/fnkey/releases/tag/v0.6.0
---

Hold the Fn key, say what you want typed, and let go: FnKey pastes the transcription wherever your cursor is. The microphone is live only while the key is down, so the orange microphone indicator shows exactly when it listens. A tap shorter than 0.3 seconds, or Fn pressed with another key, records nothing.

Transcription runs on outside services, and you bring the API keys. Deepgram's Nova-3 model streams text while you talk. Groq's Whisper takes the whole clip after release, either on its own or when Deepgram fails or gives no answer within ten seconds. Keys and settings are small text files in `~/.config/fnkey`, and you create the key files from Terminal.

- A menu option presses Return after the paste, so a chat message goes out immediately.
- With live pasting switched on, FnKey pastes each completed phrase before you let go of Fn.
- A keywords file adds names and jargon, sent to Deepgram as key terms and to Groq as a prompt hint.
- Your previous clipboard comes back half a second after the paste, and clipboard managers record one entry per dictation instead of every phrase.

Setup asks for three permissions: Input Monitoring to see the Fn key, Microphone, and Accessibility to paste. The release builds carry no Apple developer certificate. macOS therefore treats each update as a new app, and you grant the permissions again. If no Fn key turns up within five seconds of launch, FnKey listens to Option instead.

Separate ZIPs cover Apple silicon and Intel, and both builds of version 0.6.0 need macOS 11 or later.
