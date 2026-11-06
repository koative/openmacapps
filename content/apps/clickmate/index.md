---
name: "ClickMate"
summary: "Adds a ClickMate submenu to Finder's right-click menu for file templates, copy path, compression and archive editing."
category: "Utilities"
tags:
  - finder
  - files
  - context-menu
repository: "https://github.com/Funnyrz/ClickMate"
website: "https://github.com/Funnyrz/ClickMate"
license: "MIT"
licenseUrl: "https://github.com/Funnyrz/ClickMate/blob/main/LICENSE"
download: "https://github.com/Funnyrz/ClickMate/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Funnyrz/ClickMate"
  - "https://github.com/Funnyrz/ClickMate/blob/main/LICENSE"
  - "https://github.com/Funnyrz/ClickMate/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Funnyrz/ClickMate/main/ClickMate/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "ClickMate contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

ClickMate adds everyday file tools to Finder's context menu. You can create files from templates, copy paths in several formats, open a folder in your editor, compress a selection, and edit text inside ZIP and JAR archives. Optional shortcuts add Finder Cut, which moves files with Command-X and Command-V, and a screenshot tool with annotation and scrolling capture. It suits people who handle files in Finder all day and want those steps in one menu.

It needs macOS 14 or later and has builds for Apple silicon and Intel. The README says the release DMG is unsigned, so you run the `xattr` command it gives before opening the app. You must also enable the ClickMate Finder extension in System Settings and authorize the folders you use. Shortcuts need Accessibility or Screen Recording permission for the background service, and unsigned builds run that service only for the current session.
