---
name: "CodeVetter"
summary: "Desktop, CLI and MCP tool that checks agent-written code by running builds, tests and browser checks locally."
category: "Developer tools"
tags:
  - coding-agents
  - testing
  - local-first
  - mcp
repository: "https://github.com/Codevetter/codevetter"
website: "https://codevetter.com"
license: "MIT"
licenseUrl: "https://github.com/Codevetter/codevetter/blob/main/LICENSE"
download: "https://github.com/Codevetter/codevetter/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Codevetter/codevetter"
  - "https://github.com/Codevetter/codevetter/blob/main/LICENSE"
  - "https://github.com/Codevetter/codevetter/releases/latest"
  - "https://codevetter.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Codevetter/codevetter/main/apps/macos/CodeVetter/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png"
    credit: "Sarthak Agrawal"
    license: "MIT; upstream app icon, trademarks retained"
---

CodeVetter checks changes made by coding agents by running them rather than asking another model to judge the diff. Builds, tests and browser or API checks run on your Mac, and the result is a review with evidence for each finding and a handoff report. It ships as a desktop app, a CLI and an MCP server. It suits developers who use Claude Code, Codex or similar agents and want evidence that agent-written changes work.

Requires an Apple silicon Mac on macOS 14 or later. The README says the DMG is signed with a Developer ID and notarized, so no quarantine workaround is needed. AI features use API keys you supply for Anthropic, OpenAI or OpenRouter. The README marks some capabilities as prototypes, such as synthetic user QA.
