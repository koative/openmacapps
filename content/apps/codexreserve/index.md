---
name: "CodexReserve"
summary: "Menu bar rings showing your Codex 5-hour and weekly limits, with reset times, refreshed in the background."
category: "Developer tools"
tags:
  - coding-agents
  - usage-tracking
  - menu-bar
  - monitoring
repository: "https://github.com/yourarnav/CodexReserve"
website: "https://github.com/yourarnav/CodexReserve"
license: "MIT"
licenseUrl: "https://github.com/yourarnav/CodexReserve/blob/main/LICENSE"
download: "https://github.com/yourarnav/CodexReserve/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/yourarnav/CodexReserve"
  - "https://github.com/yourarnav/CodexReserve/blob/main/LICENSE"
  - "https://github.com/yourarnav/CodexReserve/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/yourarnav/CodexReserve/main/Resources/AppIcon.icns"
    credit: "Arnav Attri"
    license: "MIT; upstream app icon, trademarks retained"
---

CodexReserve sits in the menu bar and shows your Codex usage as two rings: green for the 5-hour limit and blue for the weekly limit. Hovering shows the exact numbers and reset times, and the app refreshes quietly in the background, with a chime as limits run down. Pro accounts with no 5-hour window show only the weekly ring. It is for people who use Codex heavily and want to know whether they have room to keep going. The README says the whole code is in the repository.

It requires macOS 14 or later and that you have signed in to Codex at least once. The release is self-signed and not notarized, so macOS may report the app as damaged on first launch; the README's fix is to clear the quarantine flag once with xattr. Building from source needs Xcode 26 or later. A Homebrew cask is also available.
