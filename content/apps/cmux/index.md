---
name: "cmux"
summary: "Terminal built on libghostty with vertical tabs, split panes, an in-app browser and alerts when a coding agent wants input."
category: "Developer tools"
tags:
  - terminal
  - terminal-emulator
  - coding-agents
  - ssh
repository: "https://github.com/manaflow-ai/cmux"
website: "https://cmux.com"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/manaflow-ai/cmux/blob/main/LICENSE"
download: "https://github.com/manaflow-ai/cmux/releases/latest"
homebrew: "cmux"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/manaflow-ai/cmux"
  - "https://github.com/manaflow-ai/cmux/blob/main/LICENSE"
  - "https://github.com/manaflow-ai/cmux/releases/latest"
  - "https://cmux.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/manaflow-ai/cmux/main/Assets.xcassets/AppIcon.appiconset/512%402x.png"
    credit: "Manaflow, Inc."
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

cmux is a native Swift and AppKit terminal that draws its panes with libghostty and picks up fonts, colours and themes from an existing Ghostty config. Workspaces live in a vertical sidebar that shows each one's git branch, linked pull request, working directory and listening ports. Panes split in both directions, a browser pane can sit next to a shell, and a CLI and socket API can open workspaces, send keystrokes and drive that browser.

It is built for people who keep several AI coding agents running at once: a pane gets a coloured ring and its tab lights up when an agent is waiting, and a notification panel jumps to the most recent one. `cmux ssh` opens a workspace on a remote machine, with browser panes routed through that machine's network.

The app needs macOS 14 or later and ships as a universal build for Apple silicon and Intel. It is signed and notarized and updates itself through Sparkle. Anonymous telemetry is on by default and can be turned off in Settings. The Mac app and CLI are GPL-3.0-or-later; the cmux server components (web app, relays and workers) are under the Business Source License and are not part of the download. A paid cmux Pro plan adds early access to cloud and iOS features.
