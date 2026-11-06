---
name: "MenubarCC"
summary: "Menu bar crab that shows what each Claude Code session is doing: walking while Claude works, bouncing when it needs you."
category: "Developer tools"
tags:
  - menu-bar
  - coding-agents
  - agents
  - notifications
repository: "https://github.com/ksterx/MenubarCC"
website: "https://github.com/ksterx/MenubarCC"
license: "MIT"
licenseUrl: "https://github.com/ksterx/MenubarCC/blob/main/LICENSE"
download: "https://github.com/ksterx/MenubarCC/releases/download/v2.8.0/MenubarCC-2.8.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/ksterx/MenubarCC"
  - "https://github.com/ksterx/MenubarCC/blob/main/LICENSE"
  - "https://github.com/ksterx/MenubarCC/releases"
---

MenubarCC shows the state of your Claude Code sessions as an animated crab in the menu bar. It walks while a session is busy, bounces when Claude is waiting for your reply, and pulses when a session has been busy with no progress past a threshold you set. Clicking it lists sessions as stuck, active, waiting or idle, and sounds can mark a finished response or a permission request. It suits people who run several Claude Code sessions at once and do not want to check each terminal.

The README says it needs macOS 13 or later on Apple silicon, plus Claude Code. It is signed with a Developer ID and notarized by Apple. Its state detection reads Claude Code's session files and a hook bridge it offers to install in Claude Code's settings; installing it makes a timestamped backup of settings.json first and changes only its own entries. Its only network request is the update check against GitHub.
