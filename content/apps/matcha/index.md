---
name: "Matcha"
summary: "A menu bar app that keeps your Mac awake during exports, builds and downloads, and during coding agent runs."
category: "Utilities"
tags:
  - menu-bar
  - automation
  - native
  - privacy
alternativeTo:
  - amphetamine
repository: "https://github.com/jakeantelis/Matcha"
website: "https://github.com/jakeantelis/Matcha"
license: "MIT"
licenseUrl: "https://github.com/jakeantelis/Matcha/blob/main/LICENSE"
download: "https://github.com/jakeantelis/Matcha/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jakeantelis/Matcha"
  - "https://github.com/jakeantelis/Matcha/blob/main/LICENSE"
  - "https://github.com/jakeantelis/Matcha/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/jakeantelis/Matcha/main/Resources/AppIcon.icns"
    credit: "Antelis Labs LLC"
    license: "MIT; upstream app icon, trademarks retained"
---

Matcha stops your Mac from sleeping or locking while something long is running, such as an export, a render, a large download, a backup or a build. You start a session from the cup in the menu bar, using a preset, a duration like "90m", or a clock time, and it ends when the timer runs out or you stop it. It can also detect coding agents such as Claude Code, Codex and Gemini CLI, and a command line tool keeps the Mac awake for exactly as long as a given command runs. Like Amphetamine, it keeps the Mac awake; it adds timers, a battery guard and agent detection.

Matcha requires macOS 11 or later, on Apple silicon or Intel. The README says the app is signed and notarized. It has no accounts, analytics or telemetry; it checks GitHub for updates about once a day. Keep in mind that it keeps the lock screen away only during a session, so use idle auto-stop or a timed session if you walk away, and that staying awake uses battery power.
