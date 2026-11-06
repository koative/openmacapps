---
name: "EK Bridge"
summary: "Menu bar app that lets AI agents and scripts use only the calendars and reminder lists you choose, asking before changes."
category: "Utilities"
tags:
  - calendar
  - reminders
  - coding-agents
  - mcp
  - menu-bar
repository: "https://github.com/bereciartua/ek-bridge"
website: "https://github.com/bereciartua/ek-bridge"
license: "Apache-2.0"
licenseUrl: "https://github.com/bereciartua/ek-bridge/blob/main/LICENSE"
download: "https://github.com/bereciartua/ek-bridge/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/bereciartua/ek-bridge"
  - "https://github.com/bereciartua/ek-bridge/blob/main/LICENSE"
  - "https://github.com/bereciartua/ek-bridge/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/bereciartua/ek-bridge/blob/main/Resources/AppIcon.icns"
    credit: "EK Bridge contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

EK Bridge runs in the menu bar and gives MCP clients such as Claude Code, Claude Desktop, Codex and Cursor, plus scripts through a command-line client, access to Calendar and Reminders. Each connection gets its own grants: which calendars and lists it can read, create in, edit, delete from or complete. A panel shows every field of a change before you allow it, and an activity log names what each agent changed and explains refusals. Connections can be paused or removed. It suits people who want an assistant to check or manage their schedule without giving it access to everything.

Requires macOS 14 or later, on Apple silicon or Intel. The README says the build is notarized with a Developer ID, and that updates are signed and checked before they install. The project describes itself as a personal project in public preview with best-effort support. Cloud agents such as claude.ai and ChatGPT can reach it only through the experimental Remote Access feature and a tunnel you run.
