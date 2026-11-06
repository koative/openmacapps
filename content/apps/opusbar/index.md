---
name: "OpusBar"
summary: "Menu bar cat that shows the state of every Claude Code and Codex session and how much of your plan is left."
category: "Developer tools"
tags:
  - claude-code
  - codex
  - coding-agents
  - menu-bar
repository: "https://github.com/kushalBanda/OpusBar"
website: "https://kushalbanda.com/opusbar/"
license: "Apache-2.0"
licenseUrl: "https://github.com/kushalBanda/OpusBar/blob/main/LICENSE"
download: "https://github.com/kushalBanda/OpusBar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kushalBanda/OpusBar"
  - "https://github.com/kushalBanda/OpusBar/blob/main/LICENSE"
  - "https://github.com/kushalBanda/OpusBar/releases/latest"
  - "https://kushalbanda.com/opusbar/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/kushalBanda/OpusBar/releases/download/v0.1.21/OpusBar-0.1.21.dmg"
    credit: "Kushal Banda (OpusBar)"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

OpusBar puts your Claude Code and Codex sessions in the menu bar as a small animated cat. The cat's pose follows the most urgent session: working, thinking, waiting for a permission or an answer, done, stuck on an error, or idle. It sends a notification when a session needs you, can bring the matching terminal tab, editor window or app forward, and shows your 5-hour and weekly plan limits alongside token use. It is for developers who run several coding-agent sessions at once.

It requires macOS 14 or later and runs on Apple silicon and Intel. The DMG is not notarized by Apple, so the first launch has to be allowed under System Settings › Privacy & Security. The curl install script in the README avoids that step. Connecting an agent adds hooks to its settings after backing up the file. The only regular network request is a daily update check to GitHub, which can be turned off.
