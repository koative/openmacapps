---
name: "Terax"
summary: "A lightweight terminal-first workspace with a code editor, Git tools and an AI agent using your own keys or local models."
category: "Developer tools"
tags:
  - terminal-emulator
  - terminal
  - coding-agents
  - git
  - cross-platform
repository: https://github.com/crynta/terax-ai
website: https://terax.app
license: "Apache-2.0"
licenseUrl: https://github.com/crynta/terax-ai/blob/main/LICENSE
download: https://github.com/crynta/terax-ai/releases
homebrew: "terax"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/crynta/terax-ai
  - https://github.com/crynta/terax-ai/blob/main/LICENSE
  - https://github.com/crynta/terax-ai/releases
  - https://terax.app
assets:
  - path: ./assets/icon.png
    source: https://github.com/crynta/terax-ai/blob/main/src-tauri/icons/icon.png
    credit: "Terax contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Terax puts a terminal at the centre of a small development workspace built with Tauri and Rust. The terminal has tabs, splits, search and saved layouts, and since version 0.9 renders through libghostty and WebGPU. Around it sit a CodeMirror editor with Vim mode and optional language servers, a file explorer, a Git panel with hunk staging and a commit graph, and a preview tab that opens local dev servers.

An AI side panel can plan work, read and edit files and run shell commands, with approval before commands run, and can start Claude Code in a terminal and pass work to it. It talks to the provider you choose with your own API key, including OpenAI, Anthropic, Google and OpenRouter, or to local models through LM Studio, MLX or Ollama. Keys are kept in the macOS keychain.

There are Apple silicon and Intel downloads, and the app updates itself from GitHub releases. The project is young and still before version 1.0.
