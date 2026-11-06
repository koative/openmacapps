---
name: "Rocuronium"
summary: "Runs AI agents in a separate macOS login session with their own cursor and checks that each action really changed something."
category: "Developer tools"
tags:
  - agents
  - automation
  - developer-utilities
repository: "https://github.com/kageroumado/rocuronium"
website: "https://github.com/kageroumado/rocuronium"
license: "MIT"
licenseUrl: "https://github.com/kageroumado/rocuronium/blob/main/LICENSE"
download: "https://github.com/kageroumado/rocuronium/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kageroumado/rocuronium"
  - "https://github.com/kageroumado/rocuronium/blob/main/LICENSE"
  - "https://github.com/kageroumado/rocuronium/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/kageroumado/rocuronium/releases/download/v1.6.2/Rocuronium-1.6.2.dmg"
    credit: "kageroumado"
    license: "MIT; upstream app icon, trademarks retained"
---

Rocuronium lets an AI agent work in a separate macOS login session with its own desktop and cursor, so it does not fight you for the pointer. Each click, keypress or menu action is reported back as `confirmed`, `noEffect` or `unverifiable`, which catches cases where macOS says a call succeeded but nothing changed. Local vision models locate controls when an app exposes little accessibility data. Sessions are driven through a CLI and MCP tools.

It is for developers who want agents to operate Mac apps and need evidence of what happened, with a visible overlay and an emergency stop.

Requires an Apple silicon Mac on macOS 26.5 or later, Accessibility permission, and Screen Recording for screenshots and OCR. The DMG is Developer ID signed and notarized. Creating a session needs your approval, and so does taking over the human cursor; the emergency stop is ⌃⌥⇧⎋.
