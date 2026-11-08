---
name: "Loupe"
summary: "An accessibility inspector that turns any on-screen Mac UI element into structured notes for AI coding agents."
category: "Developer tools"
tags:
  - accessibility
  - inspection
  - coding-agents
  - annotation
repository: https://github.com/britchie4/Loupe
website: https://britchie4.github.io/Loupe/
license: "MIT"
licenseUrl: https://github.com/britchie4/Loupe/blob/main/LICENSE
download: https://github.com/britchie4/Loupe/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/britchie4/Loupe
  - https://github.com/britchie4/Loupe/blob/main/LICENSE
  - https://github.com/britchie4/Loupe/releases
  - https://britchie4.github.io/Loupe/
  - https://github.com/britchie4/Loupe/blob/main/README.md
  - https://github.com/britchie4/Loupe/releases/tag/v1.2.1
  - https://github.com/britchie4/Loupe/releases/tag/v1.1.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/britchie4/Loupe/main/Loupe/Assets.xcassets/AppIcon.appiconset/app_icon_256.png
    credit: "Brent Ritchie"
    license: "MIT repository asset; Loupe name and icon retained by the author"
---

When you ask a coding agent to change a Mac app's interface, a screenshot leaves it guessing which button you mean. Loupe lets you point at the control itself. Hover over any element in a running app and Loupe highlights it with its accessibility details, live. Click it, type the change you want in plain English, then copy the lot as structured text to paste into Claude Code, Cursor or Codex.

- The copied text carries each element's role, identifier, path in the accessibility tree and a regex search pattern. The path helps an agent pick the right one among similar controls.
- You can annotate several elements first and copy them in one batch.
- It reads native, Electron and Catalyst apps alike, as long as they expose accessibility data.
- A floating toolbar shrinks to a small icon while you are not using it.

Loupe needs macOS 14 and the Accessibility permission. It asks for that on first launch and starts on its own once you grant it. The download is a DMG holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. From version 1.2.1 it updates itself, and the Check for Updates command sits in both the menu bar icon and the toolbar's right-click menu. It is free under the MIT license, and you can also build it from source in Xcode.

The idea comes from Agentation, a hover, annotate and copy tool for web development. Loupe carries that workflow over to Mac apps and is itself written in SwiftUI.
