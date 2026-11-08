---
name: "CC Switch"
summary: "Switches API providers and manages MCP servers, skills and prompts for Claude Code, Codex, Gemini CLI and more."
category: "AI"
tags:
  - coding-agents
  - model-providers
  - cross-platform
repository: "https://github.com/farion1231/cc-switch"
website: "https://ccswitch.io"
license: "MIT"
licenseUrl: "https://github.com/farion1231/cc-switch/blob/main/LICENSE"
download: "https://github.com/farion1231/cc-switch/releases"
freeDownload: true
homebrew: "cc-switch"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/farion1231/cc-switch"
  - "https://github.com/farion1231/cc-switch/blob/main/LICENSE"
  - "https://github.com/farion1231/cc-switch/releases"
  - "https://raw.githubusercontent.com/farion1231/cc-switch/main/README.md"
  - "https://ccswitch.io"
  - "https://github.com/farion1231/cc-switch/releases/tag/v4.0.28"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/farion1231/cc-switch/main/src-tauri/icons/icon.png"
    credit: "Jason Young and CC Switch contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

CC Switch rewrites the config files of AI coding tools for you. Pick a saved provider in its window or tray menu, and Claude Code, Codex or Gemini CLI starts sending requests to that endpoint, key and model. Only those connection fields change; your plugins, hooks, MCP entries and comments stay in the file.

Twelve tools are supported, from Claude Desktop to OpenCode and Kimi Code. Five of them switch one active provider at a time. The others take several providers into their own config at once, and you choose a model inside the tool.

- More than 90 presets cover hosted APIs and relays, and you can write a custom entry.
- Local routing passes requests through your Mac, converts between Anthropic, OpenAI and Gemini API formats, and moves to the next provider in a queue when one fails.
- MCP servers and skills are added once and synced to whichever tools you tick; prompts are kept per tool and written to files such as CLAUDE.md or AGENTS.md.
- A sessions view turns each tool's logs into readable turns and copies a resume command.
- A usage dashboard reads the same logs to count tokens and spending per provider and model.

Claude Code picks up a switch straight away. Codex, Gemini CLI and Grok Build need a restart of the CLI first. Settings live in a local SQLite database, backed up every 24 hours by default, and can sync between machines over WebDAV or S3-compatible storage.

The macOS download is a Universal DMG or ZIP for Apple silicon and Intel, signed and notarized, and it needs macOS 12 or later. The project names ccswitch.io as its only official website. The README's sponsor banners advertise third-party API resellers unrelated to the app.
