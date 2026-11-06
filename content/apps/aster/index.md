---
name: "Aster"
summary: "Native macOS terminal workspace where Ghostty terminals sit in splits beside file browsing, previews and agent sessions."
category: "Developer tools"
tags:
  - terminal
  - terminal-emulator
  - workspaces
repository: "https://github.com/OpenFabrica/aster"
website: "https://aster.foo/en/"
license: "MIT"
licenseUrl: "https://github.com/OpenFabrica/aster/blob/master/LICENSE"
download: "https://github.com/OpenFabrica/aster/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/OpenFabrica/aster"
  - "https://github.com/OpenFabrica/aster/blob/master/LICENSE"
  - "https://github.com/OpenFabrica/aster/releases/tag/v0.6.29"
  - "https://aster.foo/en/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/OpenFabrica/aster/releases/download/v0.6.29/Aster-0.6.29.dmg"
    credit: "lanjiangwei"
    license: "MIT; upstream app icon, trademarks retained"
---

Aster puts terminals and the files around them in one native window. Terminals run on the Ghostty core and split recursively, mixed with a file browser, an editor and previews for Markdown, PDF, images and diffs. Claude Code and Codex sessions get names and run states in the tab bar, command completion runs locally, and SSH hosts and remote workspaces open as tabs. It suits developers who keep a shell, project notes and coding agents side by side.

Aster needs macOS 14 or later on Apple silicon. The 0.6.29 DMG contains an arm64 binary only, so Intel Macs cannot run it. The DMG is signed with a Developer ID and notarized, and in-app updates are fetched only from the official appcast. The project says it collects no usage data. Crash reporting and CLI agent memory extraction are off by default, and turning them on can send crash details or project summaries.
