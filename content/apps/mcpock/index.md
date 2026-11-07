---
name: "mcpock"
summary: "Menu bar app that starts each MCP server your coding agents use and reports which are broken, slow or waiting for sign-in."
category: "Developer tools"
tags:
  - coding-agents
  - mcp
  - menu-bar
  - monitoring
repository: "https://github.com/aka-kika/mcpock"
website: "https://mcpock.com"
license: "MIT"
licenseUrl: "https://github.com/aka-kika/mcpock/blob/main/LICENSE"
download: "https://github.com/aka-kika/mcpock/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/aka-kika/mcpock"
  - "https://github.com/aka-kika/mcpock/blob/main/LICENSE"
  - "https://github.com/aka-kika/mcpock/releases"
  - "https://mcpock.com"
assets:
  - path: ./assets/icon.png
    source: https://github.com/aka-kika/mcpock/releases/download/v1.13.0/mcpock.dmg
    credit: mcpock contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mcpock finds the MCP servers listed in the config files of agents such as Claude Code, Cursor, Codex and Goose, starts each one the way the agent would, and reports which are broken, slow, waiting for a sign-in or set up differently from one agent to the next. It never edits those config files. A small read-only MCP server inside the app lets an agent ask for the status instead of pasting errors. It suits people who run several coding agents and want one place to see why a tool stopped working.

Requires macOS 26 or later on Apple silicon. The README says the app is signed and notarized by Apple. To check a local server, mcpock runs the exact command from your config, so the server's own code runs on your Mac. Usage counts are off by default and are read from each agent's history without keeping chat content. Update checks go through Sparkle and ask first.
