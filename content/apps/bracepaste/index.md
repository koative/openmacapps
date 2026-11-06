---
name: "BracePaste"
summary: "Menu bar app that formats JSON and SQL on the clipboard after a double Cmd+C, with all processing done on the Mac."
category: "Developer tools"
tags:
  - clipboard
  - developer-utilities
  - code
  - menu-bar
repository: "https://github.com/vishalnarkhede/BracePaste"
website: "https://github.com/vishalnarkhede/BracePaste"
license: "MIT"
licenseUrl: "https://github.com/vishalnarkhede/BracePaste/blob/main/LICENSE"
download: "https://github.com/vishalnarkhede/BracePaste/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/vishalnarkhede/BracePaste"
  - "https://github.com/vishalnarkhede/BracePaste/blob/main/LICENSE"
  - "https://github.com/vishalnarkhede/BracePaste/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/vishalnarkhede/BracePaste/main/JSONClipboardFormatter/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Vishal Narkhede"
    license: "MIT; upstream app icon, trademarks retained"
---

BracePaste watches for a double Cmd+C in any app. If the clipboard holds recognizable JSON or SQL, it replaces the clipboard with a formatted version and opens a small floating editor; ordinary text is left alone. You can also run the same formatting from the menu bar. It is for developers who often copy API responses, logs or queries. Processing is local, and the README says there is no network use and no analytics. It does not keep a clipboard history.

It requires macOS 13 or later. The release build is ad-hoc signed and not notarized, so macOS warns on first launch; right-click, Open, or Open Anyway in Privacy & Security resolves it. The double-copy trigger uses Accessibility permission. Without that permission it falls back to watching clipboard changes, which is slightly slower, and the menu bar action always works. After an update, macOS may treat the new build as a different app, so you may need to remove and re-add it in the Accessibility list.
