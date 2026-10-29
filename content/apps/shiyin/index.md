---
name: "Shiyin"
summary: "Records meetings, transcribes them and identifies speakers on your Mac, then drafts timestamped notes with an AI of your choice."
category: "AI"
tags:
  - meetings
  - transcription
  - local-ai
  - notes
repository: https://github.com/juinwei7/Shiyin
website: https://shiyin.weibuilds.com/en/
license: "MIT"
licenseUrl: https://github.com/juinwei7/Shiyin/blob/main/LICENSE
download: https://github.com/juinwei7/Shiyin/releases
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/juinwei7/Shiyin
  - https://github.com/juinwei7/Shiyin/blob/main/LICENSE
  - https://github.com/juinwei7/Shiyin/releases
  - https://shiyin.weibuilds.com/en/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/juinwei7/Shiyin/main/Resources/AppIcon.icns
    credit: "juinwei7 (Shiyin)"
    license: "MIT; upstream app icon, trademarks retained"
---

Shiyin records the microphone, computer audio or both, so the other side of a Zoom, Meet or Teams call is captured without a bot joining. After you stop, it transcribes the recording on the Mac with whisper.cpp and the Breeze ASR 25 model, or with the macOS built-in transcriber, labels speakers and remembers named voices, and lets you export notes, transcripts and recordings. Meetings can be in English, Chinese or Japanese.

Recording, transcription and speaker identification stay local, but the models (about 1.7 GB) are downloaded on first use. Writing the timestamped summary needs a summarizer you supply: a signed-in Claude Code or Codex CLI, an Anthropic, OpenAI or Gemini API key, or a local model through Ollama or LM Studio. It requires an Apple silicon Mac with macOS 26, and the app is not notarized, so the first launch must be allowed in System Settings.
