---
name: "Chaos"
summary: "Menu bar app that names and files screenshots with a vision model: your own cloud API key or local Ollama."
category: "Utilities"
tags:
  - screenshots
  - organization
  - menu-bar
  - local-ai
repository: "https://github.com/michaelmjhhhh/Chaos"
website: "https://github.com/michaelmjhhhh/Chaos"
license: "MIT"
licenseUrl: "https://github.com/michaelmjhhhh/Chaos/blob/main/LICENSE"
download: "https://github.com/michaelmjhhhh/Chaos/releases/latest/download/Chaos.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/michaelmjhhhh/Chaos"
  - "https://github.com/michaelmjhhhh/Chaos/blob/main/LICENSE"
  - "https://github.com/michaelmjhhhh/Chaos/releases"
---

Chaos watches for new screenshots, asks a vision model for a short description of each one, and renames the file from it, for example `terminal-git-log_143022.png`. Renamed files go to an output folder you choose, optionally in daily or monthly subfolders. The provider can be any OpenAI-compatible vision API, such as OpenAI, OpenRouter or DeepSeek, or Ollama running on your Mac. Every rename is recorded in a local history with undo and retry, and existing files are never overwritten. It is for people whose desktop fills up with screenshots named by date and time.

Requires an Apple Silicon Mac running macOS 15 or later. The app is ad-hoc signed and not notarized, so the first launch needs Open Anyway under System Settings > Privacy & Security. Images are sent only to the provider you configure; with Ollama they stay on your Mac. The hosted free trial has been retired, so you need your own API key or a local model.
