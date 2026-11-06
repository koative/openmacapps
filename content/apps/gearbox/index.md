---
name: "Gearbox"
summary: "Local task scheduler for cron-style and file-watch jobs, with retries, timeouts, a menu bar app and a CLI."
category: "Developer tools"
tags:
  - automation
  - tasks
  - terminal
  - menu-bar
repository: "https://github.com/hgayan7/gearbox"
website: "https://github.com/hgayan7/gearbox"
license: "Apache-2.0"
licenseUrl: "https://github.com/hgayan7/gearbox/blob/main/LICENSE"
download: "https://github.com/hgayan7/gearbox/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/hgayan7/gearbox"
  - "https://github.com/hgayan7/gearbox/blob/main/LICENSE"
  - "https://github.com/hgayan7/gearbox/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/hgayan7/gearbox/main/GearboxUI/Resources/AppIcon.png"
    credit: "hgayan7"
    license: "Apache-2.0 (repository); upstream app icon, trademarks retained"
---

Gearbox runs local tasks on a schedule written in plain language or cron syntax, or whenever files in a folder change. Tasks can have timeouts, retries with backoff, AC-power-only conditions, sleep prevention, and on-success or on-failure chaining. Run history is kept in a local SQLite database. The menu bar app is SwiftUI, and a CLI and a loopback webhook on 127.0.0.1 let scripts and launchers trigger tasks. Tasks can be exported to and applied from a YAML file. It suits people who would otherwise write cron jobs or launchd plists by hand.

The README gives macOS 13 or later as the requirement. It does not say whether the release build is notarized, and its install notes say macOS may ask for approval on first launch, under Privacy & Security. Keep-awake only applies to tasks where you turn on prevent-sleep.
