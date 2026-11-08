---
name: "Claude Usage"
summary: "Shows Claude Code session, weekly, and credit usage in the menu bar, plus context use in the status line."
category: "AI"
tags:
  - menu-bar
  - coding-agents
  - monitoring
repository: "https://github.com/Bread-bang/claude-usage"
website: "https://github.com/Bread-bang/claude-usage"
license: "MIT"
licenseUrl: "https://github.com/Bread-bang/claude-usage/blob/main/LICENSE"
download: "https://github.com/Bread-bang/claude-usage/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/Bread-bang/claude-usage"
  - "https://github.com/Bread-bang/claude-usage/blob/main/LICENSE"
  - "https://github.com/Bread-bang/claude-usage/releases"
  - "https://raw.githubusercontent.com/Bread-bang/claude-usage/main/README.md"
  - "https://github.com/Bread-bang/claude-usage/releases/tag/v0.4.3"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/Bread-bang/claude-usage/main/docs/icon.png"
    credit: "Bread-bang"
    license: "MIT; upstream project asset, trademarks retained"
---

Claude Usage puts your Claude Code limits in the menu bar. Click it to see the current five-hour session, the weekly limits for all models and for Sonnet, and your pay-as-you-go credits. Every figure has a usage bar and a reset time. The menu bar number follows whichever window you pick and changes colour as it fills.

It also adds a line under the Claude Code prompt with the model, how full the context window is and the tokens used, such as `Opus 4.8 · 11% · 113K/1M`. Each terminal pane draws its own line, so it stays correct across tmux panes. If another tool already owns the Claude Code status line, the app leaves its entry in `~/.claude/settings.json` alone.

Claude Usage reads the sign-in token Claude Code keeps in the Keychain, so you must have run `claude` and signed in once. The developer says its only network request goes to Anthropic's usage endpoint and that the token is never written to disk. That endpoint is undocumented, and the README warns that it or Claude Code's Keychain format can change without notice. When a refresh fails, the app keeps showing the last good figures with a warning. You can set it to refresh every 30 seconds, minute or five minutes.

Claude Usage needs macOS 13. The release ZIP holds an Apple silicon app, signed with a Developer ID and notarized. It also installs from the developer's Homebrew tap.
