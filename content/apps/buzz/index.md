---
name: "Buzz"
summary: "Speech-to-text for recordings, YouTube links and live microphone audio, running Whisper-family models on your own computer."
category: "AI"
tags: ["transcription", "speech-to-text", "local-ai", "cross-platform"]
repository: "https://github.com/chidiwilliams/buzz"
website: "https://chidiwilliams.github.io/buzz"
license: "MIT"
licenseUrl: "https://github.com/chidiwilliams/buzz/blob/main/LICENSE"
download: "https://sourceforge.net/projects/buzz-captions/files/"
freeDownload: true
homebrew: "buzz"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/chidiwilliams/buzz", "https://github.com/chidiwilliams/buzz/blob/main/LICENSE", "https://github.com/chidiwilliams/buzz/releases", "https://chidiwilliams.github.io/buzz", "https://raw.githubusercontent.com/chidiwilliams/buzz/main/README.md", "https://chidiwilliams.github.io/buzz/docs", "https://chidiwilliams.github.io/buzz/docs/installation", "https://sourceforge.net/projects/buzz-captions/files/", "https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/chidiwilliams/buzz/main/buzz/assets/buzz-icon-1024.png", "credit": "Chidi Williams and Buzz contributors", "license": "MIT repository asset; trademarks retained"}]
---

Buzz turns speech into text on your own computer. You drop in an audio or video file, or paste a YouTube link, pick a model, and get a transcript you can read back against the recording, translate, or save as TXT, SRT or VTT subtitles.

- Live mode transcribes what the microphone hears, with a separate presentation window for showing captions to a room. The documentation warns that this is resource-intensive and can fall behind real time.
- The transcript viewer has search, looped segments, playback speed and keyboard shortcuts.
- Speech separation can clean up noisy audio before transcription, and speaker identification labels who said what.
- A watch folder picks up new files automatically, and a command-line interface covers scripted jobs.
- Plugins add extras such as AI summaries.

Current macOS builds require Apple silicon and are published on SourceForge. Version 1.4.5 was the last release for Intel Macs, and its GitHub release still carries both an ARM64 and an x64 disk image.

Buzz is built around OpenAI's Whisper and can switch between several engines: Whisper, Whisper.cpp, Faster Whisper and Whisper-compatible Hugging Face models, plus Parakeet, Qwen3-ASR and others. You can also send audio to the OpenAI Whisper API instead of running a model locally.
