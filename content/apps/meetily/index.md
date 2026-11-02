---
name: "Meetily"
summary: "A meeting note taker that records mic and system audio, transcribes it locally and writes AI summaries."
category: "AI"
tags:
  - meetings
  - transcription
  - speech-to-text
  - local-ai
  - privacy
alternativeTo:
  - granola
repository: https://github.com/Zackriya-Solutions/meetily
website: https://meetily.ai
license: "MIT"
licenseUrl: https://github.com/Zackriya-Solutions/meetily/blob/main/LICENSE.md
download: https://github.com/Zackriya-Solutions/meetily/releases
homebrew: "meetily"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/Zackriya-Solutions/meetily
  - https://github.com/Zackriya-Solutions/meetily/blob/main/LICENSE.md
  - https://github.com/Zackriya-Solutions/meetily/releases
  - https://github.com/Zackriya-Solutions/meetily/blob/main/PRIVACY_POLICY.md
  - https://meetily.ai
assets:
  - path: ./assets/icon.png
    source: https://github.com/Zackriya-Solutions/meetily/blob/main/frontend/src-tauri/icons/icon.png
    credit: "Zackriya Solutions"
    license: "MIT; upstream project asset, trademarks retained"
---

Meetily captures a meeting from your microphone and your Mac's system audio at the same time, so it can record calls from different meeting apps. It transcribes in real time on your machine with Whisper or Parakeet models, and can also import existing recordings or re-transcribe one with a different model or language.

Summaries come from the language model you choose. Ollama keeps everything local, and Claude, Groq, OpenRouter or any OpenAI-compatible endpoint can be used with your own key. Recordings, transcripts and models are stored on your Mac, and the optional usage analytics are off unless you turn them on.

The macOS download is for Apple silicon only and uses Metal and Core ML acceleration. This open-source Community Edition is free; the company also sells Meetily PRO, a separate product built on a different codebase with extra features.
