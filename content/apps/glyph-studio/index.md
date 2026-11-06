---
name: "Glyph Studio"
summary: "Local-first macOS AI workspace that answers per life area from a markdown vault kept on your own Mac."
category: "AI"
tags:
  - local-ai
  - local-first
  - markdown
  - privacy
repository: "https://github.com/fru-dev3/glyph-studio"
website: "https://glyph.fru.dev/studio"
license: "GPL-3.0-only"
licenseUrl: "https://github.com/fru-dev3/glyph-studio/blob/main/LICENSE"
download: "https://github.com/fru-dev3/glyph-studio/releases/latest/download/Glyph-Studio-mac-arm64.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/fru-dev3/glyph-studio"
  - "https://github.com/fru-dev3/glyph-studio/blob/main/LICENSE"
  - "https://github.com/fru-dev3/glyph-studio/releases"
  - "https://glyph.fru.dev/studio"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/fru-dev3/glyph-studio/main/src-tauri/icons/icon.icns"
    credit: "Glyph Studio contributors"
    license: "GPL-3.0-only; upstream app icon, trademarks retained"
---

Glyph Studio keeps a separate AI context for each part of your life, such as wealth, health, tax and career, and answers each from its own notes in a markdown vault on your Mac. It can run installed command-line models such as Claude, Codex or Ollama, or send requests through an OpenRouter key, and it stores the chats and the memory it builds from them on your machine unless you turn on an integration. It is for people who want an assistant grounded in their own records rather than a blank chat window.

The Mac download is for Apple silicon Macs running macOS 13 or later. The README says the build is signed and notarized, so it opens without a Gatekeeper warning. Telemetry is off unless you opt in. Voice input needs a local transcription engine installed separately, such as whisper.cpp, or `hear` for Apple's on-device speech. The app footer labels the build as Beta.
