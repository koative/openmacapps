---
name: "amtrino"
summary: "Menu bar grid with one dot per Claude Code or Codex CLI session, pulsing while that session is mid-response."
category: "Developer tools"
tags:
  - coding-agents
  - menu-bar
  - claude-code
  - usage-tracking
repository: "https://github.com/arian-shamaei/amtrino"
website: "https://github.com/arian-shamaei/amtrino"
license: "MIT"
licenseUrl: "https://github.com/arian-shamaei/amtrino/blob/main/LICENSE"
download: "https://github.com/arian-shamaei/amtrino/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/arian-shamaei/amtrino"
  - "https://github.com/arian-shamaei/amtrino/blob/main/LICENSE"
  - "https://github.com/arian-shamaei/amtrino/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/arian-shamaei/amtrino/releases/download/v0.3.1/amtrino-0.3.1.zip
    credit: amtrino contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

amtrino puts a small grid of dots in the menu bar, one for each Claude Code or Codex CLI session on the Mac. Colour tells the sessions apart, motion shows which ones are mid-response, and a finished response flashes the dot and can trigger a notification that jumps to that session's tmux pane. It suits people who run many coding-agent sessions at once and would rather glance at the menu bar than cycle through terminal windows.

It is a Swift and AppKit app that needs macOS 13 or later and a python3 (3.9 or newer) on the PATH. The README says the release zip is signed and notarized by Apple. The project describes itself as vibe coded, and the README says it makes no network calls and keeps all data on the machine.
