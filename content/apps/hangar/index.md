---
name: "Hangar"
summary: "Menu bar list of terminal commands and app launches you can toggle on and off, with auto-start on login."
category: "Utilities"
tags:
  - menu-bar
  - terminal
  - launcher
  - snippets
repository: "https://github.com/0fuz/hangar"
website: "https://github.com/0fuz/hangar"
license: "MIT"
licenseUrl: "https://github.com/0fuz/hangar/blob/main/LICENSE"
download: "https://github.com/0fuz/hangar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/0fuz/hangar"
  - "https://github.com/0fuz/hangar/blob/main/LICENSE"
  - "https://github.com/0fuz/hangar/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/0fuz/hangar/main/Hangar/Hangar/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "0fuz"
    license: "MIT; upstream app icon, trademarks retained"
---

Hangar keeps the terminal commands and apps you run every day as a list in the menu bar. Turning on a terminal snippet opens iTerm2 or Terminal and runs its command; turning it off closes it. An application snippet launches an app, optionally with a project or file. Commands can contain `{{name}}` placeholders that Hangar asks for at launch, with a live preview, and groups switch together. Auto-start on login brings pinned workflows back after a restart. It suits developers who keep a build, watcher or TUI running in one project while working in another. The app is native Swift and AppKit and has no account.

The README lists macOS 14 or later, as its build requirement, and Xcode 15 or later for building. The release DMG is ad-hoc signed and not notarized, so on first launch macOS may refuse to open it. Open it from the right-click menu, or clear the quarantine flag as the README describes. The first time it controls a terminal, macOS asks for Automation permission.
