---
name: "AgentsView"
summary: "Browse, search and analyse your local AI coding agent sessions and token costs across Claude Code, Codex and dozens more."
category: "AI"
tags:
  - coding-agents
  - usage-tracking
  - statistics
  - search
  - local-first
repository: https://github.com/kenn-io/agentsview
website: https://www.agentsview.io
license: "MIT"
licenseUrl: https://github.com/kenn-io/agentsview/blob/main/LICENSE
download: https://github.com/kenn-io/agentsview/releases
homebrew: "agentsview"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/kenn-io/agentsview
  - https://github.com/kenn-io/agentsview/blob/main/LICENSE
  - https://github.com/kenn-io/agentsview/releases
  - https://github.com/kenn-io/agentsview/blob/main/docs/configuration.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/kenn-io/agentsview/blob/main/desktop/src-tauri/icons/icon.icns
    credit: "Kenn Software LLC and AgentsView contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

AgentsView collects the session logs that AI coding agents leave on disk, such as those from Claude Code, Codex, Cursor, Gemini CLI and goose, into one local SQLite archive. You can then search past conversations, replay transcripts, and see dashboards of activity, tool use, token counts and estimated costs by project or model.

The desktop app wraps the same local server and web interface that the project's command-line tool provides. Sessions stay on your Mac unless you turn on features that share them, such as syncing another machine over SSH or importing cloud chats.

The macOS download is a notarized DMG for Apple silicon and needs macOS 11 or later. Release builds send limited anonymous telemetry to PostHog, including a daily activity ping and counts of screens and features used; the README says it can be turned off with the `AGENTSVIEW_TELEMETRY_ENABLED=0` or `DO_NOT_TRACK=1` environment variables.
