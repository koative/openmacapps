---
name: "DesktopCtl"
summary: "Local runtime that lets AI agents read the screen and control the mouse and keyboard, through a menu-bar app and a CLI."
category: "AI"
tags:
  - agents
  - automation
  - computer-use
  - developer-utilities
repository: "https://github.com/yaroshevych/desktopctl"
website: "https://desktopctl.com"
license: "MIT"
licenseUrl: "https://github.com/yaroshevych/desktopctl/blob/main/LICENSE.txt"
download: "https://github.com/yaroshevych/desktopctl/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/yaroshevych/desktopctl"
  - "https://github.com/yaroshevych/desktopctl/blob/main/LICENSE.txt"
  - "https://github.com/yaroshevych/desktopctl/releases"
  - "https://desktopctl.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/yaroshevych/desktopctl/releases/download/v0.3.0/DesktopCtl-v0.3.0-macos.zip"
    credit: "Oleg Yaroshevych"
    license: "MIT; upstream app icon, trademarks retained"
---

DesktopCtl is a local runtime for AI agents that need to act on a Mac's screen. It reads text with OCR, finds menu items through the macOS Accessibility interface, and runs clicks, typing and waits from a command-line tool that returns JSON. A menu-bar app and launcher handle permissions and settings. It is for developers building or testing desktop automation, and the author says any model can drive it, including models without vision.

The build is Apple silicon only: the binary is arm64, and the bundle declares macOS 12.0 as its minimum. The app needs Accessibility and Screen Recording permission. It is not notarized; release builds are ad-hoc signed, so the first launch must be allowed in System Settings. The install script removes the quarantine attribute from the installed app and CLI. The project describes itself as in active development, with macOS as the only supported platform.
