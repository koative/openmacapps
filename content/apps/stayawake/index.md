---
name: "StayAwake"
summary: "Menu bar app that keeps a Mac awake, including with the lid closed, for long-running AI agent jobs."
category: "Utilities"
tags:
  - menu-bar
  - coding-agents
  - sleep
alternativeTo:
  - amphetamine
repository: "https://github.com/TY-teo/StayAwake"
website: "https://ty-teo.github.io/StayAwake/"
license: "MIT"
licenseUrl: "https://github.com/TY-teo/StayAwake/blob/main/LICENSE"
download: "https://github.com/TY-teo/StayAwake/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/TY-teo/StayAwake"
  - "https://github.com/TY-teo/StayAwake/blob/main/LICENSE"
  - "https://github.com/TY-teo/StayAwake/releases/latest"
  - "https://ty-teo.github.io/StayAwake/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/TY-teo/StayAwake/main/Resources/AppIcon.png"
    credit: "TY-teo"
    license: "MIT (repository); upstream app icon, trademarks retained"
---

StayAwake keeps a Mac from sleeping while a long job runs, including with the lid closed and no external display. It is aimed at overnight runs of Claude Code, Codex and Cursor. You can keep the Mac awake indefinitely or pick a timer of 30 to 300 minutes, and choose whether the display may switch off. Lid-closed mode uses `pmset disablesleep`. An optional scoped sudoers rule avoids repeated password prompts, and quitting the app restores normal sleep.

It requires macOS 26 or later on Apple silicon or Intel. The build is ad-hoc signed and not notarized, so the first launch needs approval under System Settings, Privacy & Security. The README notes that lid-closed sleep on Apple silicon is partly limited by hardware. Reliability is best on power or with an external display, and it recommends testing with a real running job before relying on it.
