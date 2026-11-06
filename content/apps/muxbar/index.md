---
name: "muxbar"
summary: "Menu bar manager for tmux sessions, with a Keep Awake toggle and a closed-lid mode for unattended jobs."
category: "Developer tools"
tags:
  - menu-bar
  - terminal
  - workspaces
  - sleep
repository: "https://github.com/1989v/muxbar"
website: "https://github.com/1989v/muxbar"
license: "MIT"
licenseUrl: "https://github.com/1989v/muxbar/blob/main/LICENSE"
download: "https://github.com/1989v/muxbar/releases/download/v0.4.2/muxbar-0.4.2.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/1989v/muxbar"
  - "https://github.com/1989v/muxbar/blob/main/LICENSE"
  - "https://github.com/1989v/muxbar/releases"
---

muxbar lists your tmux sessions in the menu bar, where you can attach, preview or kill them, and start saved session templates, such as a script that keeps polling for cloud capacity. Keep Awake stops display and idle sleep, and closed-lid mode keeps the Mac running with the lid shut for unattended work. It also shows your weekly Claude and Codex limits, read from local logs. It suits developers who keep long builds or scripts running in tmux.

It requires macOS 13 or later and tmux, which you install with `brew install tmux`. The DMG is ad-hoc signed and not notarized, so on first launch right-click it and choose Open. Closed-lid mode changes the system sleep setting with pmset, asks for an administrator password (Touch ID works), and turns itself off when its timer ends, the power is unplugged or the lid opens. The README describes an optional sudoers rule that skips the password prompt.
