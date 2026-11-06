---
name: "FineTerm"
summary: "Connection manager for Terminal.app that lists saved SSH sessions and adds copy-on-select and right-click paste."
category: "Developer tools"
tags:
  - terminal
  - ssh
  - terminal-emulator
repository: "https://github.com/achendev/FineTerm"
website: "https://github.com/achendev/FineTerm"
license: "MIT"
licenseUrl: "https://github.com/achendev/FineTerm/blob/master/LICENSE"
download: "https://github.com/achendev/FineTerm/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/achendev/FineTerm"
  - "https://github.com/achendev/FineTerm/blob/master/LICENSE"
  - "https://github.com/achendev/FineTerm/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/achendev/FineTerm/releases/download/v0.0.5/FineTerm.dmg"
    credit: "Aleksandr Chendev"
    license: "MIT; upstream app icon, trademarks retained"
---

FineTerm wraps the built-in Terminal.app rather than replacing it. It keeps a searchable list of saved SSH, Telnet or script commands, opens each one in a new Terminal tab, and names the tab after the connection. It adds copy on select and paste on right click, plus a shortcut that switches between the list and Terminal. It is for admins and developers who connect to many hosts from Terminal.

It requires macOS 12 or later. The DMG is signed with an Apple Development certificate and is not notarized, so the first launch must be allowed in System Settings. The mouse and keyboard features need Accessibility permission, because the app intercepts events and sends Command-V to Terminal.
