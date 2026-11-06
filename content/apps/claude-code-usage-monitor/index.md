---
name: "Claude Code Usage Monitor"
summary: "Menu bar battery icon and popover showing your Claude Code 5-hour and weekly usage, with rate limit reset countdowns."
category: "Developer tools"
tags:
  - coding-agents
  - usage-tracking
  - menu-bar
repository: "https://github.com/davidlikescat/claude-code-usage-monitor"
website: "https://github.com/davidlikescat/claude-code-usage-monitor"
license: "MIT"
licenseUrl: "https://github.com/davidlikescat/claude-code-usage-monitor/blob/main/LICENSE"
download: "https://github.com/davidlikescat/claude-code-usage-monitor/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/davidlikescat/claude-code-usage-monitor"
  - "https://github.com/davidlikescat/claude-code-usage-monitor/blob/main/LICENSE"
  - "https://github.com/davidlikescat/claude-code-usage-monitor/releases/latest"
---

A small SwiftUI menu bar app that shows how much of your Claude Code session and weekly allowance is left. The menu bar icon is a battery that drains with the 5-hour session. The popover shows the 5-hour and 7-day bars, colour-coded green, yellow and red, with countdowns to the next rate limit reset. It finds credentials in the Keychain, in `~/.claude/.credentials.json`, as a saved API key or in the shell environment, and can sign in through the browser when the Claude Code CLI is installed. It suits people who use Claude Code on a Pro, Team or API plan.

It needs macOS 13.0 or later and, according to the README, Apple silicon. The DMG is unsigned and not notarized, so the first launch must be allowed: right-click ClaudeUsage.app and choose Open. The README says browser sign-in reuses the OAuth token that Claude Code keeps in the Keychain.
