---
name: "Claudoscope"
summary: "A menu bar viewer for local Claude Code sessions, with session replay, cost alerts and secret scanning."
category: "AI"
tags:
  - coding-agents
  - statistics
  - menu-bar
  - security
repository: "https://github.com/cordwainersmith/Claudoscope"
website: "https://claudoscope.com"
license: "MIT"
licenseUrl: "https://github.com/cordwainersmith/Claudoscope/blob/master/LICENSE"
download: "https://github.com/cordwainersmith/Claudoscope/releases"
freeDownload: true
homebrew: "claudoscope"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/cordwainersmith/Claudoscope"
  - "https://github.com/cordwainersmith/Claudoscope/blob/master/LICENSE"
  - "https://github.com/cordwainersmith/Claudoscope/releases"
  - "https://github.com/cordwainersmith/Claudoscope/blob/master/README.md"
  - "https://github.com/cordwainersmith/Claudoscope/releases/tag/v1.4.1"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/cordwainersmith/Claudoscope/master/Claudoscope/Resources/app-icon-rounded.png"
    credit: "cordwainersmith"
    license: "MIT; upstream project asset, trademarks retained"
---

Claudoscope gives you a view of what Claude Code has been doing. It reads the session files Claude Code keeps under `~/.claude/projects/`, plus the Cowork sessions stored by the Claude desktop app, and shows them in a small menu bar widget and a larger dashboard. New activity appears as the files change, without a server process.

- Opt-in session notifications tell you when Claude is blocked on a permission or plan prompt or has finished, and spend alerts watch estimated costs against per-session, rolling, daily and monthly limits.
- A secret scanner looks through transcripts for leaked credentials such as AWS keys, private keys, tokens and passwords, popping an alert when a new one lands and sweeping your whole history in the background.
- The session viewer can replay a session on a time axis, bookmark turns, and resume a session in your terminal.
- The dashboard covers analytics, per-file diffs of what Claude changed, plans, a timeline, and a health check of your Claude Code configuration.

A hardening option applies a security baseline to your Claude Code setup in one click. There is also a read-only MCP server, which stays disabled until you switch it on and means you can ask Claude Code about your usage directly. The costs it shows are estimates from built-in pricing tables.

The developer says everything runs locally, with no telemetry and no account, and that the only network call is the update check, which you can turn off. Claudoscope has nothing to show unless Claude Code is installed and has been run at least once.

It needs macOS 14 or later and an Apple silicon Mac; Intel is not supported. Version 1.4.1 ships as a DMG that is Developer ID-signed and notarized, and the app updates itself from GitHub releases.
