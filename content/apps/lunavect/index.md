---
name: "Lunavect"
summary: "Menu bar monitor for Claude Code and Codex sessions that shows which one is waiting for you and your usage limits."
category: "Developer tools"
tags:
  - coding-agents
  - menu-bar
  - usage-tracking
repository: "https://github.com/lovach/Lunavect"
website: "https://lovach.github.io/Lunavect/"
license: "MIT"
licenseUrl: "https://github.com/lovach/Lunavect/blob/main/LICENSE"
download: "https://github.com/lovach/Lunavect/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/lovach/Lunavect"
  - "https://github.com/lovach/Lunavect/blob/main/LICENSE"
  - "https://github.com/lovach/Lunavect/releases/latest"
  - "https://lovach.github.io/Lunavect/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/lovach/Lunavect/main/design/selected/lunavect-appicon-1024.png"
    credit: "Lunavect contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Lunavect lists every Claude Code and Codex session on your Mac in one menu bar panel, with each session's live state: working, waiting for permission or input, or done. It shows weekly and five-hour usage limits for both tools with their reset times, can hold a session at a share of your weekly allowance that you choose, and notifies you when a response is ready, an approval is needed or a turn fails. It suits developers who run several agent sessions at once and want to know which one needs them.

It needs macOS 14 or later and runs on Apple silicon and Intel. The project says each release is Developer ID signed and notarized by Apple. Claude usage requires the Claude Code CLI, since Claude Desktop alone is not enough, and Codex needs the official Codex app or CLI. Sign-in stays with those official clients. Lunavect sends no session data or usage statistics to its developers, and update checks go to GitHub. The project calls itself independent; Claude and Codex are trademarks of their respective owners.
