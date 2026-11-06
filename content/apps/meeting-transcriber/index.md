---
name: "Meeting Transcriber"
summary: "Menu bar app that records Teams, Zoom and Webex calls and transcribes them on the Mac, separating speakers."
category: "Productivity"
tags:
  - meetings
  - transcription
  - speech-to-text
  - privacy
alternativeTo:
  - granola
repository: "https://github.com/pasrom/meeting-transcriber"
website: "https://meetingtranscriber.app"
license: "MIT"
licenseUrl: "https://github.com/pasrom/meeting-transcriber/blob/main/LICENSE"
download: "https://github.com/pasrom/meeting-transcriber/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/pasrom/meeting-transcriber"
  - "https://github.com/pasrom/meeting-transcriber/blob/main/LICENSE"
  - "https://github.com/pasrom/meeting-transcriber/releases/latest"
  - "https://meetingtranscriber.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/pasrom/meeting-transcriber/releases/download/v0.8.1/MeetingTranscriber-0.8.1.dmg"
    credit: "pasrom"
    license: "MIT; upstream app icon, trademarks retained"
---

Meeting Transcriber is a menu bar app that starts recording when it sees a Teams, Zoom or Webex call window. When the call ends, it transcribes the audio on your Mac, separates the speakers and writes a Markdown summary with decisions and action items. Transcription uses on-device WhisperKit or Parakeet models. The summary step can use the Claude CLI or any OpenAI-compatible endpoint, including a local Ollama or LM Studio model.

It requires macOS 14.2 or later on Apple silicon. The app bundle is an arm64-only build, and the project website says Intel Macs are not supported because transcription runs on the Neural Engine. The DMG is Developer ID signed and notarized. Meeting detection reads window titles, so the app needs Screen Recording permission. The first run downloads the speech models, and the Whisper model is about 1 GB. The Homebrew tap may need `brew trust` before installation.
