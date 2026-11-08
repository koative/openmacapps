---
name: "Nativ"
summary: "A Mac workspace for chatting with, serving and monitoring local MLX models on Apple silicon."
category: "AI"
tags:
  - local-ai
  - language-models
  - chat
  - api
alternativeTo:
  - lm-studio
repository: https://github.com/Neywa-Labs/nativ
website: https://runnativ.ai/
license: "MIT"
licenseUrl: https://github.com/Neywa-Labs/nativ/blob/main/LICENSE
download: https://github.com/Neywa-Labs/nativ/releases
freeDownload: true
homebrew: "nativ"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/Neywa-Labs/nativ
  - https://raw.githubusercontent.com/Neywa-Labs/nativ/main/README.md
  - https://github.com/Neywa-Labs/nativ/blob/main/LICENSE
  - https://github.com/Neywa-Labs/nativ/releases
  - https://github.com/Neywa-Labs/nativ/blob/main/Docs/features/models.md
  - https://github.com/Blaizzy/nativ
  - https://formulae.brew.sh/cask/nativ
  - https://runnativ.ai/
  - https://lmstudio.ai/
  - https://lmstudio.ai/download
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Neywa-Labs/nativ/main/Design/AppIcon.svg
    credit: "Prince Canuma and Nativ contributors"
    license: "MIT repository asset; Nativ name and logo retained by the project"
---

Nativ runs open models on your Mac through a bundled mlx-vlm server. You pick a model, then chat with it, attach images, or point your coding tools at it.

The app finds MLX models already in your Hugging Face cache and downloads others with a warning when one will not fit in memory. You can move the cache to an external APFS drive. Once a model is on disk, inference stays on the Mac; downloads still need the network.

- The local server answers OpenAI-compatible chat, Responses, image, audio and embeddings requests, plus Anthropic Messages, at 127.0.0.1:8080 by default.
- It can configure and launch terminal agents such as Claude Code, Codex and Aider, and set up VS Code, Cursor or Zed against the same server.
- An Images tab generates and edits pictures with MLX image models.
- An Audio extension adds voice dictation in any app, with transcript history.
- MCP servers expose their tools to chat, and saved prompts can run on a schedule.
- A monitor shows per-core CPU load, GPU use, memory pressure and thermal sensors, and the menu bar can pin live graphs.

Nativ needs an Apple silicon Mac with macOS 26 or newer. The release is a DMG, also available as a Homebrew cask, and later versions arrive through Sparkle.

Development moved from the Blaizzy GitHub account to Neywa Labs, and the old GitHub Pages address now forwards to runnativ.ai. LM Studio also downloads and serves models, but it runs on Windows and Linux too and pairs llama.cpp with MLX. Nativ is MLX only and Mac only.
