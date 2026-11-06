---
name: "Brow"
summary: "Shows Claude Code usage limits for several accounts in the notch, plus git-worktree workspaces for parallel sessions."
category: "Developer tools"
tags:
  - claude-code
  - notch
  - usage-tracking
  - git
repository: "https://github.com/efim0v/brow"
website: "https://efimov.page/brow/"
license: "GPL-3.0"
licenseUrl: "https://github.com/efim0v/brow/blob/main/LICENSE"
download: "https://github.com/efim0v/brow/releases/latest/download/Brow.zip"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/efim0v/brow"
  - "https://github.com/efim0v/brow/blob/main/LICENSE"
  - "https://github.com/efim0v/brow/releases"
  - "https://efimov.page/brow/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/efim0v/brow/main/Resources/AppIcon.icns"
    credit: "Brow contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Brow is for people who run Claude Code under several accounts. It shows each account's five-hour and weekly limits, with the time until each resets, in the MacBook notch. It can also open a separate browser profile for an account whose sign-in has expired. An optional Workspaces mode gives each feature of a multi-repository product its own folder of git worktrees on one branch, so parallel Claude Code sessions see the whole product. Workspaces stays off until you turn it on.

It requires macOS 26 or later on Apple silicon. The build is signed ad hoc and is not notarized by Apple, so the first launch must be allowed in System Settings under Privacy & Security with Open Anyway. Brow reads Claude Code's sign-in token from the macOS Keychain and calls Anthropic's usage endpoints, which the README says are not a documented public API and may change. Workspaces needs git and a terminal, such as cmux or Terminal.app.
