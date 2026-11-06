---
name: "Kytto"
summary: "Open-source desktop app for managing MCP servers across Claude, Cursor, VS Code and Codex, with health checks and backups."
category: "Developer tools"
tags:
  - coding-agents
  - mcp
  - developer-utilities
  - backup
repository: "https://github.com/heyitsjakub/KyttoMCP"
website: "https://kytto.jakubhecht.sk/"
license: "MIT"
licenseUrl: "https://github.com/heyitsjakub/KyttoMCP/blob/main/LICENSE"
download: "https://github.com/heyitsjakub/KyttoMCP/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/heyitsjakub/KyttoMCP"
  - "https://github.com/heyitsjakub/KyttoMCP/blob/main/LICENSE"
  - "https://github.com/heyitsjakub/KyttoMCP/releases"
  - "https://kytto.jakubhecht.sk/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/heyitsjakub/KyttoMCP/main/macos/KyttoMCP/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Jakub Hecht (Kytto)"
    license: "MIT; upstream app icon, trademarks retained"
---

Kytto (the repository is named KyttoMCP) is a desktop control panel for the MCP servers configured in your AI tools. It reads the configuration files of Claude Desktop, Claude Code, Cursor, VS Code, Codex, Antigravity, Devin Desktop and OpenCode, shows which servers are enabled in each, and lets you switch or edit them. Every write makes a timestamped backup first. It also runs on-demand health checks, flags risky tool descriptions and changed tool contracts, saves profiles, and estimates how much context each server's tool schemas use. It suits people who run several MCP servers across more than one AI client.

It requires macOS 15 or later. It is a universal build for Apple silicon and Intel, but it is a beta and is not signed with a paid Apple Developer certificate, so the first launch needs Control-click → Open or Open Anyway in System Settings. The README publishes SHA-256 checksums and explains how to build without a developer account. Its only automatic network request is the update check; package version lookups and safety checks run only when you ask. Gateway mode is optional and applies only to supported stdio servers.
