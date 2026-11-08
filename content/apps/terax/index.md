---
name: "Terax"
summary: "A terminal-first workspace with a code editor, Git tools and an AI agent using your own keys or local models."
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
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/crynta/terax-ai"
  - "https://github.com/crynta/terax-ai/blob/main/LICENSE"
  - "https://github.com/crynta/terax-ai/releases"
  - "https://terax.app"
  - "https://raw.githubusercontent.com/crynta/terax-ai/main/README.md"
  - "https://github.com/crynta/terax-ai/releases/tag/v0.9.0"
assets:
  - path: ./assets/icon.png
    source: https://github.com/crynta/terax-ai/blob/main/src-tauri/icons/icon.png
    credit: "Terax contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Terax puts a terminal at the centre of a small development workspace, with an editor, Git tools and an AI panel in the same window. The app is built with Tauri and Rust and takes about 7 to 8 MB on disk. Version 0.9.0 moved the terminal to a Ghostty-based renderer drawn with WebGPU.

- Terminal tabs and splits, inline search, and Spaces that bring back tabs, folders and layouts on the next launch.
- A CodeMirror editor with Vim mode, AI autocomplete, optional language servers, and viewers for Markdown, images, video, audio and PDF.
- A Git panel where you stage hunks, commit with Command-Return and browse history on a commit graph.
- A preview tab that finds local dev servers and opens them beside your code.

The AI panel plans work, reads and edits files and runs shell commands, asking before a command runs. Its edits show up as diffs you accept or reject hunk by hunk, and it can start Claude Code in a terminal and hand work to it. You choose the provider and paste your own key, for OpenAI, Anthropic, Google, OpenRouter, Mistral or any OpenAI-compatible endpoint. Local models run through LM Studio, MLX or Ollama. Keys go into the macOS keychain. The developer says Terax has no telemetry and needs no account.

There are Apple silicon and Intel downloads, and the app updates itself from GitHub releases. The Apple silicon app in 0.9.0 needs macOS 13 or later and is notarized. Terax is still before version 1.0.
