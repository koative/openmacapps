---
name: "Agent Sessions"
summary: "Searches and resumes local histories from Codex, Claude Code, Cursor and other coding agents, with a per-session quota meter."
category: "AI"
tags:
  - coding-agents
  - search
  - usage-tracking
  - local-first
  - notch
repository: "https://github.com/jazzyalex/agent-sessions"
website: "https://jazzyalex.github.io/agent-sessions/"
license: "MIT"
licenseUrl: "https://github.com/jazzyalex/agent-sessions/blob/main/LICENSE"
download: "https://github.com/jazzyalex/agent-sessions/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jazzyalex/agent-sessions"
  - "https://github.com/jazzyalex/agent-sessions/blob/main/LICENSE"
  - "https://github.com/jazzyalex/agent-sessions/releases"
  - "https://jazzyalex.github.io/agent-sessions/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/jazzyalex/agent-sessions/main/AgentSessions/Assets.xcassets/AppIcon.appiconset/icon_512x512.png"
    credit: "Alexander Malakhov"
    license: "MIT; upstream app icon, trademarks retained"
---

Agent Sessions reads the history files that coding agents leave on your Mac and builds a local search index over prompts, replies, tool calls, command output, errors and file paths. It understands 16 agent formats, including Codex, Claude Code, Cursor, GitHub Copilot CLI, OpenCode and Antigravity, and for most of them it can copy a resume command or reopen the session in Terminal, iTerm2, Warp or Ghostty. A Session Info panel shows the model, token counts and an estimated API-rate price when the source records them.

Its Quota Meter shows which running Codex or Claude session is using up the 5-hour and weekly limits, and the token or cost rate of OpenCode sessions, in the MacBook notch or on the desktop. It is for developers who work with several agents and want to find earlier conversations or keep an eye on subscription limits. Dollar figures are estimates at API prices, not your actual bill.

The app bundle targets macOS 14 or later as a universal build; it is signed and notarized, and updates arrive through Sparkle. Agent folders are read, not modified, and transcripts are not uploaded; optional network access covers update checks and a public model-price list, and the project states there is no telemetry.
