---
name: "Loom"
summary: "Menu bar monitor for local Codex, Claude Code and Antigravity sessions, showing which agents are working, waiting or idle."
category: "Developer tools"
tags:
  - coding-agents
  - menu-bar
  - usage-tracking
  - monitoring
repository: "https://github.com/chaiwithcode/Loom"
website: "https://chaiwithcode.github.io/Loom/"
license: "MIT"
licenseUrl: "https://github.com/chaiwithcode/Loom/blob/main/LICENSE"
download: "https://github.com/chaiwithcode/Loom/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/chaiwithcode/Loom"
  - "https://github.com/chaiwithcode/Loom/blob/main/LICENSE"
  - "https://github.com/chaiwithcode/Loom/releases/latest"
  - "https://chaiwithcode.github.io/Loom/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/chaiwithcode/Loom/releases/download/v2.2.0/Loom-2.2.0.dmg"
    credit: "Deepak Sharma"
    license: "MIT; upstream app icon, trademarks retained"
---

Loom shows the state of local AI coding agent sessions from the menu bar: which ones are working, waiting, idle or failed, along with the repository, branch and host app. It can also display quota data that Codex and Antigravity expose locally, and it sends notifications at 15% and 5% quota thresholds and when a session changes state. Loom reads local process and provider data only; it does not send prompts or change projects.

It suits developers who run several coding agents at once and want to see which one needs attention without switching windows.

Requires macOS 14 or later on Apple silicon. The DMG is Developer ID signed and notarized, and Loom updates through Sparkle. Discovery depends on what each provider exposes on disk, so Loom reports diagnostics rather than guaranteeing a session for every process. Claude Code exposes no quota through its local interface, and quota readings can be missing when a provider cannot be reached.
