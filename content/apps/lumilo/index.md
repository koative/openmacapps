---
name: "Lumilo"
summary: "Menu bar panel that starts, stops and monitors local LLM servers on Apple silicon, and fetches models from Hugging Face."
category: "AI"
tags:
  - local-ai
  - menu-bar
  - language-models
  - monitoring
repository: "https://github.com/kotuke/lumilo"
website: "https://github.com/kotuke/lumilo"
license: "MIT"
licenseUrl: "https://github.com/kotuke/lumilo/blob/main/LICENSE"
download: "https://github.com/kotuke/lumilo/releases/download/v0.4.2/Lumilo.0.4.2.arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/kotuke/lumilo"
  - "https://github.com/kotuke/lumilo/blob/main/LICENSE"
  - "https://github.com/kotuke/lumilo/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/kotuke/lumilo/releases/download/v0.4.2/Lumilo.0.4.2.arm64.dmg
    credit: Lumilo contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Lumilo is a menu bar panel for running a local language model server on an Apple silicon Mac. It starts and stops Splash, llama.cpp or TensorFold, shows whether the server is loading, ready or generating, and charts memory use and tokens per second. It can search Hugging Face for models, shows whether each variant fits in memory, and can launch coding agents against the local server. It suits people who run models on their own Mac and want the server state at a glance.

Requirements: an Apple silicon Mac. The app's bundle declares macOS 12 or later, but the Splash engine needs macOS 26.4 or later, and Homebrew installs the engines. The build is signed with a Developer ID and notarized by Apple, so it opens without a security warning. The project is independent and not affiliated with the authors of the engines it controls. The server listens only on this Mac unless you enable network access, which requires an API key.
