---
name: "Hermes Desktop"
summary: "Native Mac workspace for Hermes Agent, local or over SSH: sessions, Kanban, cron jobs, skills, files and a terminal."
category: "Developer tools"
tags:
  - agents
  - ssh
  - terminal
  - kanban
repository: "https://github.com/dodo-reach/hermes-desktop"
website: "https://dodo-reach.github.io/hermes-desktop/"
license: "MIT"
licenseUrl: "https://github.com/dodo-reach/hermes-desktop/blob/main/LICENSE"
download: "https://github.com/dodo-reach/hermes-desktop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/dodo-reach/hermes-desktop"
  - "https://github.com/dodo-reach/hermes-desktop/blob/main/LICENSE"
  - "https://github.com/dodo-reach/hermes-desktop/releases/latest"
  - "https://dodo-reach.github.io/hermes-desktop/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/dodo-reach/hermes-desktop/blob/main/packaging/HermesDesktop.icns"
    credit: "dodo-reach"
    license: "MIT; upstream app icon, trademarks retained"
---

Hermes Desktop is a native front end for Hermes Agent, a separate agent project that must already be set up on the host. It connects to Hermes on the same Mac or on another machine over SSH and works on that host's real data: sessions with chat, Kanban boards, cron jobs, skills and workspace files edited in place with conflict checks, usage figures, and an embedded terminal. There is no gateway, daemon or local mirror in between, so the host stays the only copy.

It suits people who already run Hermes Agent, whether on this Mac, a Raspberry Pi, a VPS or another computer, and want one window for daily work with it. Several Hermes profiles can be used side by side, and workflow presets saved on the Mac launch in a new Terminal tab.

The app needs macOS 14 or later and is a universal build. The host needs `python3` and its Hermes data; SSH mode needs key-based login that works without prompts. Releases are ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings › Privacy & Security. The latest release, 1.2.0, dates from June 2026.
