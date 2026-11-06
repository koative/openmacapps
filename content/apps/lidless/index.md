---
name: "Lidless"
summary: "Menu bar app that keeps a Mac awake with the lid closed, so coding agents keep working when you move the laptop around."
category: "Utilities"
tags:
  - menu-bar
  - coding-agents
  - sleep
repository: "https://github.com/nghialuong/Lidless"
website: "https://github.com/nghialuong/Lidless"
license: "MIT"
licenseUrl: "https://github.com/nghialuong/Lidless/blob/main/LICENSE"
download: "https://github.com/nghialuong/Lidless/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nghialuong/Lidless"
  - "https://github.com/nghialuong/Lidless/blob/main/LICENSE"
  - "https://github.com/nghialuong/Lidless/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/nghialuong/Lidless/main/Resources/icon_1024.png"
    credit: "Nghia Luong"
    license: "MIT; upstream app icon, trademarks retained"
---

Lidless adds a toggle to the menu bar that keeps the Mac running when the lid is closed. It sets the power flag that `pmset disablesleep` uses, through a small privileged helper that is registered with SMAppService, so toggling does not ask for a password. A watchdog restores normal sleep if the app stops checking in, and safety guards can pause the setting when the Mac runs hot, when it is on battery, or when the battery is low. An optional timer turns keep-awake off after a chosen interval. The README's motivating example is coding agents such as Claude Code or Codex that keep working while you move the laptop around.

It suits people who leave a task running on a laptop and carry it away. The project uses Sparkle for updates, and its releases are notarized DMG files.

Lidless needs macOS 13 or later. Running with the lid closed under heavy load can heat the machine and drain the battery, so the README recommends keeping it plugged in and ventilated.
