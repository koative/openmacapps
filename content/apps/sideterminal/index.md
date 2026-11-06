---
name: "SideTerminal"
summary: "Terminal that slides in from a screen edge on mouse hover and keeps its sessions alive when hidden, built on Ghostty."
category: "Developer tools"
tags:
  - terminal
  - terminal-emulator
  - menu-bar
repository: "https://github.com/bunnysayzz/sideterminal"
website: "https://sideterminal.eu.cc"
license: "MIT"
licenseUrl: "https://github.com/bunnysayzz/sideterminal/blob/main/LICENSE"
download: "https://github.com/bunnysayzz/sideterminal/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/bunnysayzz/sideterminal"
  - "https://github.com/bunnysayzz/sideterminal/blob/main/LICENSE"
  - "https://github.com/bunnysayzz/sideterminal/releases"
  - "https://sideterminal.eu.cc"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/bunnysayzz/sideterminal/releases/download/v1.0.3/SideTerminal.dmg"
    credit: "bunnysayzz"
    license: "MIT; upstream app icon, trademarks retained"
---

SideTerminal is a terminal that slides in from the left or right edge of the screen when the pointer reaches it, and slides away when the pointer leaves. Sessions keep running while it is hidden, and up to ten can stay on a switcher shelf with their scrollback. The engine is Ghostty's terminal library, and the app adds the sidebar, settings and session handling around it. It suits people who keep long-running shells, SSH connections or Claude CLI sessions open and want them one edge away.

The app needs macOS 14 or later on Apple silicon. The DMG is unsigned and not notarized, so Gatekeeper blocks the first launch; allow it with the `xattr` command in the README or with Open Anyway in System Settings. The project is MIT-licensed, and its third-party components are listed in a separate file in the repository.
