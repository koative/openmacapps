---
name: "iCanHazShortcut"
summary: "Binds any terminal command to a keyboard shortcut, with a TOML config and AppleScript control."
category: "Utilities"
tags:
  - keyboard-shortcuts
  - automation
  - keyboard
repository: "https://github.com/deseven/iCanHazShortcut"
website: "https://github.com/deseven/iCanHazShortcut"
license: "Unlicense"
licenseUrl: "https://github.com/deseven/iCanHazShortcut/blob/master/LICENSE"
download: "https://github.com/deseven/iCanHazShortcut/releases"
homebrew: "icanhazshortcut"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/deseven/iCanHazShortcut"
  - "https://github.com/deseven/iCanHazShortcut/blob/master/LICENSE"
  - "https://github.com/deseven/iCanHazShortcut/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/deseven/iCanHazShortcut/releases/download/2.0.1/ichs.dmg"
    credit: "deseven"
    license: "Unlicense; upstream app icon, trademarks retained"
---

iCanHazShortcut runs terminal commands from keyboard shortcuts. You bind a key combination to a command, and pressing the keys runs it. Shortcuts can also be enabled, disabled or triggered from AppleScript, by key combination, action name or ID. The configuration is a TOML file, and a backup is written before each change. An older v1 INI configuration can be migrated on first run. It suits people who already run scripts or tools from Terminal and want quick keys for them.

It needs macOS 13 or later. The release is a universal build and is notarized. Shortcut IDs changed in v2.0.0 and are not compatible with the numeric IDs of v1, which matters for AppleScript that refers to them. Development builds are published from the master branch for testing.
