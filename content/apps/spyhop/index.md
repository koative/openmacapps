---
name: "Spyhop"
summary: "Kanban board for AI coding sessions from Claude Code, Codex and OMP, showing which ones are waiting for you."
category: "Developer tools"
tags:
  - coding-agents
  - kanban
  - terminal
  - menu-bar
repository: "https://github.com/leeleelee3264/spyhop"
website: "https://leeleelee3264.github.io/spyhop/"
license: "MIT"
licenseUrl: "https://github.com/leeleelee3264/spyhop/blob/main/LICENSE"
download: "https://github.com/leeleelee3264/spyhop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/leeleelee3264/spyhop"
  - "https://github.com/leeleelee3264/spyhop/blob/main/LICENSE"
  - "https://github.com/leeleelee3264/spyhop/releases/latest"
  - "https://leeleelee3264.github.io/spyhop/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/leeleelee3264/spyhop/releases/download/v2.1.3/Spyhop-2.1.3.dmg"
    credit: "leelee"
    license: "MIT; upstream app icon, trademarks retained"
---

Spyhop reads the transcripts of your Claude Code, Codex and OMP sessions and places each one on a board. Sessions are laid out as steps (done, now, next), and those waiting for your input rise to the top, with a count in the menu bar. Clicking a card jumps to its pane or tab; in Orca it targets the exact pane, in Terminal, iTerm2, Ghostty, WezTerm and cmux the exact tab, and other terminals are brought forward. It suits people who run several agent sessions at once and lose track of which one needs them.

It needs macOS 13 or later and a logged-in claude or codex CLI, which it uses to write the summaries. Only the transcript leaves your Mac, sent to the summarizer model you choose in Settings, with anything that looks like a key masked first. The app is ad-hoc signed and not notarized, so the first launch must be allowed in System Settings. tmux and SSH sessions outside Orca are not supported, and the Windows version is a separate community preview.
