---
name: "Yardlet"
summary: "Native Mac app that runs Codex, Claude Code and other agent CLIs side by side, using the sign-ins already on your Mac."
category: "Developer tools"
tags:
  - coding-agents
  - claude-code
  - agents
  - terminal
repository: "https://github.com/zzunkie/yardlet"
website: "https://yardlet.app"
license: "MIT"
licenseUrl: "https://github.com/zzunkie/yardlet/blob/main/LICENSE"
download: "https://github.com/zzunkie/yardlet/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/zzunkie/yardlet"
  - "https://github.com/zzunkie/yardlet/blob/main/LICENSE"
  - "https://github.com/zzunkie/yardlet/releases"
  - "https://yardlet.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/zzunkie/yardlet/blob/main/Packaging/AppIcon.icns"
    credit: "zzunkie"
    license: "MIT; upstream app icon, trademarks retained"
---

Yardlet is a native SwiftUI window for running coding agents. Codex, Claude Code, OpenCode and others share one sidebar, conversation view and approval cards. Each agent keeps its own sign-in and session history, so a session started in Yardlet can resume in the original app or CLI. It also has a built-in Chromium browser the agents can drive, file previews, scheduled tasks and several accounts per provider. It suits people who already use the agent CLIs and want one window for them.

It requires macOS 15 or later, on Apple silicon or Intel. The Intel version is newer and, according to the README, has been tried on only one Intel Mac. You need at least one agent CLI installed and signed in, such as codex or claude. The README says the disk image is notarized. Updates arrive through Sparkle, and the README describes the network calls it makes: the daily update check and, if you pair a phone or another Mac, an end-to-end encrypted relay.
