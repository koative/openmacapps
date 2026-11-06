---
name: "Quail"
summary: "A menu bar server for running local GGUF and MLX language models on Apple silicon, with an OpenAI-compatible API."
category: "AI"
tags:
  - local-ai
  - menu-bar
  - language-models
  - native
repository: "https://github.com/adatoo/quail"
website: "https://quail-ai.app/"
license: "MIT"
licenseUrl: "https://github.com/adatoo/quail/blob/main/LICENSE"
download: "https://github.com/adatoo/quail/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/adatoo/quail"
  - "https://github.com/adatoo/quail/blob/main/LICENSE"
  - "https://github.com/adatoo/quail/releases/latest"
  - "https://quail-ai.app/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/adatoo/quail/main/Quail/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Arif Datoo"
    license: "MIT; upstream app icon, trademarks retained"
---

Quail runs local language model servers from the menu bar. It serves GGUF models through llama.cpp and MLX models through Apple's MLX, both from one model folder, and checks whether each model fits your memory before you download it. It exposes an OpenAI-compatible endpoint that tools such as Claude Code, Codex and Continue can use, and it ships a `quail` command line tool with a benchmark. It suits developers who want a small local model server; it has no chat window of its own and no image or audio generation.

Quail requires macOS 14 or later on Apple silicon. The README says the release DMG is signed and notarized. Nothing goes to the cloud, the project has no account and no telemetry, and the server listens only on this Mac by default. The project describes itself as 1.0.
