---
name: "AgentConfig"
summary: "Manages the config files and API keys of AI coding agents, including Codex and Claude Code, with switchable profiles."
category: "Developer tools"
tags:
  - coding-agents
  - agents
  - developer-utilities
repository: "https://github.com/iHongRen/AgentConfig"
website: "https://github.com/iHongRen/AgentConfig"
license: "Apache-2.0"
licenseUrl: "https://github.com/iHongRen/AgentConfig/blob/main/LICENSE"
download: "https://github.com/iHongRen/AgentConfig/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/iHongRen/AgentConfig"
  - "https://github.com/iHongRen/AgentConfig/blob/main/LICENSE"
  - "https://github.com/iHongRen/AgentConfig/releases/tag/v1.0.1"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/iHongRen/AgentConfig/releases/download/v1.0.1/AgentConfig.dmg"
    credit: "iHongRen and AgentConfig contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

AgentConfig is a native macOS app that gathers the configuration files of AI coding tools in one window: Codex, Claude Code, OpenCode and Qwen Code. It keeps separate profiles, so you can hold several API keys and switch between them in one click. It also edits shell environment variables in a managed block in files such as .zshrc without touching the rest of the file. It is for developers who use more than one coding agent or account.

AgentConfig needs macOS 14 or later on an Apple silicon Mac, because the release build is arm64 only. The DMG is not notarized: it is signed ad hoc, so macOS may block the first launch. The README suggests clearing the quarantine attribute with `xattr` if that happens. The README also states that the app makes no network requests and keeps all data on your Mac.
