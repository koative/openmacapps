---
name: "Double Shot"
summary: "Menu-bar app that keeps a Mac awake, lid closed included, for as long as AI coding agents are still working."
category: "Utilities"
tags:
  - menu-bar
  - sleep
  - caffeine
  - coding-agents
alternativeTo:
  - amphetamine
repository: "https://github.com/noahelhadedy/double-shot"
website: "https://noahelhadedy.com"
license: "MIT"
licenseUrl: "https://github.com/noahelhadedy/double-shot/blob/main/LICENSE"
download: "https://github.com/noahelhadedy/double-shot/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/noahelhadedy/double-shot"
  - "https://github.com/noahelhadedy/double-shot/blob/main/LICENSE"
  - "https://github.com/noahelhadedy/double-shot/releases"
  - "https://noahelhadedy.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/noahelhadedy/double-shot/main/Resources/AppIcon.png"
    credit: "Noah Elhadedy"
    license: "MIT; upstream app icon, trademarks retained"
---

Double Shot keeps a Mac awake from the menu bar, either for a chosen time or until you turn it off. Its main feature is watching for AI coding agents such as Claude Code, Codex and Gemini CLI, and staying awake only while they are actually working. It can also keep the Mac running with the lid closed, which suits starting a long agent run and putting the laptop in a bag. The README credits KeepingYouAwake and Amphetamine as its inspiration.

It requires macOS 14 or later, and the app is a universal build for Apple silicon and Intel. It is not notarized, so the first launch has to be allowed under System Settings > Privacy & Security > Open Anyway. Lid-closed mode needs a one-time administrator password, after which a sudoers rule lets the app run four pmset commands without asking again. With an external display connected, the lid rules step aside. The app checks GitHub once a day for a newer version unless you turn that off in Settings.
