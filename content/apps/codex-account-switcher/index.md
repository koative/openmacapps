---
name: "Codex Account Switcher"
summary: "Menu bar app for switching between several Codex accounts, with local usage tracking and a confirmed Codex Desktop handoff."
category: "AI"
tags:
  - coding-agents
  - account-switcher
  - usage-tracking
  - menu-bar
repository: "https://github.com/liuzhao1225/codex-account-switcher"
website: "https://liuzhao1225.github.io/codex-account-switcher/"
license: "MIT"
licenseUrl: "https://github.com/liuzhao1225/codex-account-switcher/blob/main/LICENSE"
download: "https://github.com/liuzhao1225/codex-account-switcher/releases/download/v0.1.27/Codex-Account-Switcher-macos-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/liuzhao1225/codex-account-switcher"
  - "https://github.com/liuzhao1225/codex-account-switcher/blob/main/LICENSE"
  - "https://github.com/liuzhao1225/codex-account-switcher/releases"
  - "https://liuzhao1225.github.io/codex-account-switcher/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/liuzhao1225/codex-account-switcher/releases/download/v0.1.27/Codex-Account-Switcher-macos-arm64.dmg"
    credit: "Zhao Liu (liuzhao1225)"
    license: "MIT; app icon, trademarks retained"
---

Codex Account Switcher keeps several Codex accounts on one Mac, such as personal, work and client logins. You add each account once through the browser, then pick one from the menu bar. After you confirm, the app closes Codex Desktop, switches the saved credentials, checks the selected account and reopens Desktop. It does not rotate accounts on its own, and the menu bar shows weekly usage, with the 5-hour window available as an option.

It requires macOS 14 or later on Apple Silicon. The README says the DMG is signed and notarized, and the app updates through Sparkle; the Windows version is outside this entry. Each saved account is a complete reusable credential file protected by file permissions, and the README warns that backups or other tools with access to your files can copy it. The project is independent and not affiliated with OpenAI.
