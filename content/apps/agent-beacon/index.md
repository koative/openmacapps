---
name: "Agent Beacon"
summary: "Menu bar status lights showing whether local coding agent tasks are done, waiting, failed or still running."
category: "Developer tools"
tags:
  - coding-agents
  - menu-bar
  - agents
  - monitoring
repository: "https://github.com/XiaoLuoLYG/agent-beacon"
website: "https://github.com/XiaoLuoLYG/agent-beacon"
license: "MIT"
licenseUrl: "https://github.com/XiaoLuoLYG/agent-beacon/blob/main/LICENSE"
download: "https://github.com/XiaoLuoLYG/agent-beacon/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/XiaoLuoLYG/agent-beacon"
  - "https://github.com/XiaoLuoLYG/agent-beacon/blob/main/LICENSE"
  - "https://github.com/XiaoLuoLYG/agent-beacon/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/XiaoLuoLYG/agent-beacon/main/Assets/AppIcon/AgentBeacon.icns"
    credit: "XiaoLuoLYG"
    license: "MIT; upstream app icon, trademarks retained"
---

Agent Beacon shows from the menu bar which of your coding-agent tasks are done, waiting for review, failed or running. Clicking a row jumps back to the app that ran it. It reads task state from CLI-launched Codex, Claude Code, Cursor and Gemini CLI sessions, and from a status file you can write yourself. It does not show prompts, responses or logs. It is for people running several agents at once.

The README does not state a macOS version. The recommended install is a one-line script from the repository that downloads the release, removes the quarantine flag and opens the app. The DMG is unsigned and triggers Gatekeeper's first-launch warning. This is a preview build (v0.1.0), and the README says more agent integrations are still in progress.
