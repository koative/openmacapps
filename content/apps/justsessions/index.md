---
name: "JustSessions"
summary: "Native Mac workspace that lists, searches, resumes and deletes sessions from Claude Code, Codex and other coding CLIs."
category: "Developer tools"
tags:
  - terminal
  - coding-agents
  - ssh
  - claude-code
repository: "https://github.com/yangzichao/JustSessions"
website: "https://yangzichao.github.io/JustSessions/"
license: "MIT"
licenseUrl: "https://github.com/yangzichao/JustSessions/blob/main/LICENSE"
download: "https://github.com/yangzichao/JustSessions/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/yangzichao/JustSessions"
  - "https://github.com/yangzichao/JustSessions/blob/main/LICENSE"
  - "https://github.com/yangzichao/JustSessions/releases"
  - "https://yangzichao.github.io/JustSessions/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/yangzichao/JustSessions/releases/download/v1.3.0/JustSessions.dmg
    credit: JustSessions contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

JustSessions is a native macOS app for people who run command-line coding agents. It groups sessions from Claude Code, Codex CLI, Antigravity CLI, Kiro CLI, OpenCode and Pi by project, searches their messages, and lets you read a conversation, resume it in its original CLI or delete it. The CLIs run in native tabs and split views, and SSH hosts can be browsed the same way. The project says it reads the history your CLIs already write and does not upload conversations; the CLIs still talk to their own providers.

Requires macOS 14 or later on Apple silicon, with each CLI you want installed and signed in. The app is signed and notarized. It bundles tmux so that a closed tab can keep its CLI running on this Mac; SSH hosts need their own tmux for the same behaviour.
