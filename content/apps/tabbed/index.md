---
name: "Tabbed"
summary: "Groups separate macOS windows into one tab bar; hold Command while dragging a window to add it to a group."
category: "Productivity"
tags:
  - window-management
  - tabs
  - keyboard
repository: "https://github.com/ZimengXiong/tabbed"
website: "https://github.com/ZimengXiong/tabbed"
license: "MIT"
licenseUrl: "https://github.com/ZimengXiong/tabbed/blob/main/LICENSE"
download: "https://github.com/ZimengXiong/tabbed/releases/download/v0.1.2/Tabbed.app.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/ZimengXiong/tabbed"
  - "https://github.com/ZimengXiong/tabbed/blob/main/LICENSE"
  - "https://github.com/ZimengXiong/tabbed/releases/tag/v0.1.2"
---

Tabbed turns ordinary macOS windows into tabs. Hold Command while dragging one window onto another to create a tab group, switch with alt+1 through alt+n, or cycle with alt+tab. Bindings live in `~/.config/tabbed.toml`, which is created on first launch. It is for people who want browser-style tabs for apps that only open separate windows.

The Xcode project targets macOS 14.0. The app needs Accessibility permission, granted under System Settings → Privacy & Security. The README tells you to clear the quarantine attribute with `xattr` before the first launch.
