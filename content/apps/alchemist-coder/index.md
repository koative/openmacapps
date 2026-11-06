---
name: "Alchemist Coder"
summary: "Desktop workspace that follows Claude Code, Codex, Gemini CLI and Grok Build agents and their subagents live."
category: "Developer tools"
tags:
  - coding-agents
  - agents
  - language-models
repository: "https://github.com/Alekla0126/alchemist-coder"
website: "https://coder.alekla.com"
license: "AGPL-3.0"
licenseUrl: "https://github.com/Alekla0126/alchemist-coder/blob/main/LICENSE"
download: "https://github.com/Alekla0126/alchemist-coder/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Alekla0126/alchemist-coder"
  - "https://github.com/Alekla0126/alchemist-coder/blob/main/LICENSE"
  - "https://github.com/Alekla0126/alchemist-coder/releases"
  - "https://coder.alekla.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Alekla0126/alchemist-coder/main/apps/desktop/build/icon.png"
    credit: "Alekla0126"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

Alchemist Coder is a desktop workspace for coding agents. It runs Claude Code, Codex, Gemini CLI and Grok Build over the Agent Client Protocol, shows each agent and subagent with its plan, tool calls, diffs and cost as they run, and keeps a searchable index of past conversations. It suits developers who run several coding agents at once and want to follow or approve their work in one place. This repository is the AGPL-3.0 Community edition; a separate proprietary Pro edition adds sign-in, end-to-end encrypted sync, and access to Claude, ChatGPT, Gemini, Grok and Kimi K3 with your own account.

The README does not state a minimum macOS version. The published Mac builds for Apple silicon and Intel are not signed with an Apple certificate and are not notarized, so the first launch needs Open Anyway under System Settings, Privacy & Security. Agents need their own CLIs installed. Building from source needs Node.js 22.13 or later and pnpm. The README says the app sends no telemetry and contacts only npm and PyPI, to check agent versions.
