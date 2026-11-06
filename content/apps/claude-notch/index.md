---
name: "Claude Notch"
summary: "Shows Claude, Codex, Antigravity, DeepSeek and opencode-go usage limits in the Mac's notch."
category: "AI"
tags:
  - usage-tracking
  - notch
  - coding-agents
repository: "https://github.com/stevemcqueenz/claude-notch-tracker"
website: "https://stevemcqueenz.github.io/claude-notch-tracker/"
license: "MIT"
licenseUrl: "https://github.com/stevemcqueenz/claude-notch-tracker/blob/main/LICENSE"
download: "https://github.com/stevemcqueenz/claude-notch-tracker/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/stevemcqueenz/claude-notch-tracker"
  - "https://github.com/stevemcqueenz/claude-notch-tracker/blob/main/LICENSE"
  - "https://github.com/stevemcqueenz/claude-notch-tracker/releases"
  - "https://stevemcqueenz.github.io/claude-notch-tracker/"
---

Claude Notch shows AI usage limits in the notch as a small island. It displays the Claude 5-hour and 7-day limits, along with usage for Codex, Antigravity, DeepSeek and opencode-go, and it shows DeepSeek's peak and off-peak billing phase. The README says it reads local provider state and talks only to each provider's own service, with no analytics and no servers of its own. It suits people who keep hitting AI usage caps and want the numbers in view while they work.

The app needs macOS 14 or later. The release binary is Apple silicon only (arm64), although the README lists Intel too. You need at least one signed-in provider: a Claude session, a Codex login, an Antigravity CLI login, a DeepSeek API key or an opencode-go account. The first launch asks for Keychain access so the app can read your local Claude session; choose Always Allow. The release zip is signed and notarized.
