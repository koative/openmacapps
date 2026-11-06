---
name: "Mimer"
summary: "Open-source clipboard manager for developers with type-aware history, text transforms and history encrypted at rest."
category: "Productivity"
tags:
  - clipboard
  - clipboard-manager
  - menu-bar
  - encryption
alternativeTo:
  - paste
repository: "https://github.com/hasanjafri/Mimer"
website: "https://mimer.hasanjafri.com/"
license: "MIT"
licenseUrl: "https://github.com/hasanjafri/Mimer/blob/main/LICENSE"
download: "https://github.com/hasanjafri/Mimer/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/hasanjafri/Mimer"
  - "https://github.com/hasanjafri/Mimer/blob/main/LICENSE"
  - "https://github.com/hasanjafri/Mimer/releases/latest"
  - "https://mimer.hasanjafri.com/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/hasanjafri/Mimer/main/Sources/Mimer/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "Hasan Jafri (Mimer)"
    license: "MIT; upstream app icon, trademarks retained"
---

Mimer is a clipboard manager for developers that lives in the menu bar and opens as a command palette on Shift-Command-V. It labels each clip by type, such as link, code, colour, git SHA, issue key or file path with line number, and offers transforms such as JSON to TypeScript, JWT decoding, case changes and Unix-to-ISO time. It also has a paste stack, favourites, snippets, per-app exclusions and masking of detected secrets. An optional MCP server lets a local assistant run the transforms and, if you allow it, read recent clips. It suits developers who copy a lot of code, tokens and identifiers.

It requires macOS 14 or later. Releases are signed, notarized and updated through Sparkle, and Homebrew can install the cask. History is encrypted at rest with a key kept in the macOS Keychain, so losing that key makes the old history unreadable. The project collects no telemetry. AI access is off by default, and while it is on, the local channel is not authenticated, so any process on the Mac can query it. The README does not list supported chips.
