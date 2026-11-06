---
name: "Scarf"
summary: "Native Mac app for the Hermes AI agent: chat, sessions, memory, skills, cron jobs and MCP servers on local or SSH hosts."
category: "AI"
tags:
  - agents
  - chat
  - ssh
repository: "https://github.com/awizemann/scarf"
website: "https://awizemann.github.io/scarf/"
license: "MIT"
licenseUrl: "https://github.com/awizemann/scarf/blob/main/LICENSE"
download: "https://github.com/awizemann/scarf/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/awizemann/scarf"
  - "https://github.com/awizemann/scarf/blob/main/LICENSE"
  - "https://github.com/awizemann/scarf/releases"
  - "https://awizemann.github.io/scarf/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/awizemann/scarf/main/scarf/scarf/Assets.xcassets/AppIcon.appiconset/AW%20Mac%20OS%20Applications-macOS-Default-512x512@1x.png"
    credit: "Alan Wizemann"
    license: "MIT; upstream app icon, trademarks retained"
---

Scarf is a graphical front end for Hermes, the open-source agent from Nous Research that otherwise runs in a terminal and over messaging apps. It shows every session with its messages, tool calls, token use and cost, and lets you chat with the agent either in a rich view or a real terminal. Memory files, skills, cron jobs, MCP servers, messaging gateways, models and the rest of the Hermes configuration can be edited from forms instead of YAML, and projects get their own dashboards, boards and chats.

Each window connects to one Hermes install: the local one or any number of remote hosts over your existing SSH setup, with no relay service in between. Scarf reads the Hermes database read-only and makes changes through the `hermes` command, and adapts its interface to the Hermes version on each host. It is for people who already run Hermes and want to see and manage it in one place. A companion iPhone app, ScarfGo, is on the App Store.

Scarf needs macOS 15 or later and Hermes 0.6 or newer on each host; remote hosts need key-based SSH. Universal and Apple silicon builds are signed with a Developer ID, notarized and updated through Sparkle. The Mac app sends usage statistics by default, tied to a hashed per-install identifier but not to content, paths or hostnames; this can be turned off in Settings › Advanced › Usage Analytics.
