---
name: "Porter for Claude Desktop"
summary: "Unofficial helper that moves Claude Desktop sessions between accounts and runs several Desktop profiles side by side."
category: "AI"
tags:
  - claude-code
  - coding-agents
  - backup
  - native
repository: "https://github.com/matteogilioli/porter-for-claude-desktop"
website: "https://matteogilioli.github.io/porter-for-claude-desktop/"
license: "MIT"
licenseUrl: "https://github.com/matteogilioli/porter-for-claude-desktop/blob/main/LICENSE"
download: "https://github.com/matteogilioli/porter-for-claude-desktop/releases/latest/download/Porter.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/matteogilioli/porter-for-claude-desktop"
  - "https://github.com/matteogilioli/porter-for-claude-desktop/blob/main/LICENSE"
  - "https://github.com/matteogilioli/porter-for-claude-desktop/releases"
  - "https://matteogilioli.github.io/porter-for-claude-desktop/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/matteogilioli/porter-for-claude-desktop/releases/download/v1.2.1/Porter.dmg
    credit: Porter for Claude Desktop contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Porter is a menu bar app for the Code tab of Claude Desktop. When one account reaches its usage limit, it moves the stopped Claude Code sessions to another account so you can pick up where you left off. It can also run several Claude Desktop profiles at once, each signed in to a different account, and it lists, archives, restores, deletes and moves sessions and project folders. Before every change it saves a backup, and the same actions are available from the command line. It is for people with more than one Claude account who work in Claude Code sessions.

Requires macOS 14 or later and Claude Desktop. The project is unofficial and not affiliated with Anthropic. It reads and writes Claude Desktop's own files, which are undocumented and may change with an update. Chats stay on Anthropic's servers with their account; Porter moves only the Code tab sessions kept on your Mac. The app is not notarized, so the first launch needs Open Anyway under System Settings > Privacy & Security, or the quarantine command in the README.
