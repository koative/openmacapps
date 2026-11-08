---
name: "Squeegee"
summary: "Closes idle app windows automatically under per-app rules, such as Finder windows left unused for four hours."
category: "Utilities"
tags:
  - window-management
  - automation
  - menu-bar
repository: "https://github.com/scosman/Squeegee"
website: "https://github.com/scosman/Squeegee"
license: "MIT"
licenseUrl: "https://github.com/scosman/Squeegee/blob/main/LICENSE"
download: "https://github.com/scosman/Squeegee/releases/latest/download/Squeegee.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/scosman/Squeegee"
  - "https://github.com/scosman/Squeegee/blob/main/LICENSE"
  - "https://github.com/scosman/Squeegee/releases/latest"
assets:
  - path: ./assets/icon.png
    source: https://github.com/scosman/Squeegee/releases/download/v1.1.0/Squeegee.dmg
    credit: Squeegee contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Squeegee closes windows that have sat idle for too long. You choose a time limit for each app, or one global default, and Squeegee tracks each window separately, so an old Finder window closes while the active ones stay open. It sends an ordinary close request, the same as the red button, so save prompts still appear and nothing is force-quit. Closed windows are listed in the menu bar for one-click reopening, and rules can be paused for an hour, until tomorrow or until you resume. It includes suggested rules for common apps and needs no account.

It needs macOS 15 or later and the Accessibility permission, which it asks for on first launch. Restoring Finder windows to the folders they showed also needs permission to control Finder; without it, they reopen in the default folder. The release DMG is notarized and universal. The project says it makes no network connections and collects no telemetry.
