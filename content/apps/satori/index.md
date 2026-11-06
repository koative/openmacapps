---
name: "Satori"
summary: "Keyboard-first Getting Things Done task manager with a terminal look and optional sync through your own private GitHub repo."
category: "Productivity"
tags:
  - keyboard-shortcuts
  - notes
  - tasks
  - terminal
alternativeTo:
  - todoist
repository: "https://github.com/emcee5000/satori"
website: "https://satorigtd.app"
license: "MIT"
licenseUrl: "https://github.com/emcee5000/satori/blob/main/LICENSE"
download: "https://github.com/emcee5000/satori/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/emcee5000/satori"
  - "https://github.com/emcee5000/satori/blob/main/LICENSE"
  - "https://github.com/emcee5000/satori/releases"
  - "https://satorigtd.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/emcee5000/satori/main/docs/icon.png"
    credit: "Michael Clarke"
    license: "MIT; upstream app icon, trademarks retained"
---

Satori is a native SwiftUI task manager built around David Allen's Getting Things Done method. It has an inbox with a guided process-inbox flow, next actions grouped by context, projects that must have a next action, scheduled and someday lists, and a weekly review. Almost every action has a keyboard shortcut, and the interface is a dark terminal-style view. It suits people who want GTD in a small, keyboard-driven app with no account, where the data stays in one readable JSON file.

The README says it needs macOS 14 or later and that release builds are universal. Releases are signed locally rather than with a Developer ID and are not notarized, so the first launch needs Open Anyway. The phone app is a web app at satorigtd.app, not a native iPhone app, and sync needs a private GitHub repository and a token you create. Inbox processing and the weekly review stay on the Mac, and the README says there is no light mode and no importer yet.
