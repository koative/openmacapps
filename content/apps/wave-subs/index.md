---
name: "Wave Subs"
summary: "Creates SRT or ASS subtitles from video using on-device speech models, then translates them, with an optional cloud API."
category: "Media"
tags:
  - transcription
  - translation
  - local-ai
  - video
repository: "https://github.com/jason-jm/wavesubs"
website: "https://wavesubs.com"
license: "MIT"
licenseUrl: "https://github.com/jason-jm/wavesubs/blob/main/LICENSE"
download: "https://github.com/jason-jm/wavesubs/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jason-jm/wavesubs"
  - "https://github.com/jason-jm/wavesubs/blob/main/LICENSE"
  - "https://github.com/jason-jm/wavesubs/releases"
  - "https://wavesubs.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jason-jm/wavesubs/blob/main/build/icon.icns"
    credit: "Wave Subs contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Wave Subs makes subtitles for a video file. It recognizes speech with Whisper models through whisper.cpp, accelerated by Metal on Apple silicon, aligns the text and translates it into 29 languages. Local translation uses Qwen3 models that run on your Mac. You can instead enter an OpenAI-compatible API key, in which case only the subtitle text is sent, never the video. It suits people who need subtitles for films, shows and other videos without uploading them.

It requires an Apple silicon Mac running macOS 12 or later; Intel Macs are not supported. The README says the DMG and ZIP are notarized by Apple. Speech models (75 MB to 3 GB) and local translation models (1.8 to 20 GB) are downloaded inside the app when you need them. Recognition and translation run one after the other, not at the same time.
