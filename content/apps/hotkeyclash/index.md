---
name: HotkeyClash
summary: Scans running apps, automation-tool configs and system shortcuts for keyboard shortcuts that clash.
category: Utilities
tags:
  - keyboard-shortcuts
  - troubleshooting
  - menu-bar
repository: https://github.com/Wunderlandmedia/HotkeyClash
website: https://hotkeyclash.com
license: GPL-2.0
licenseUrl: https://github.com/Wunderlandmedia/HotkeyClash/blob/main/LICENSE
download: https://github.com/Wunderlandmedia/HotkeyClash/releases
freeDownload: true
homebrew: "hotkeyclash"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/Wunderlandmedia/HotkeyClash
  - https://github.com/Wunderlandmedia/HotkeyClash/blob/main/LICENSE
  - https://github.com/Wunderlandmedia/HotkeyClash/blob/main/README.md
  - https://github.com/Wunderlandmedia/HotkeyClash/releases
  - https://raw.githubusercontent.com/Wunderlandmedia/HotkeyClash/main/README.md
  - https://hotkeyclash.com
  - https://github.com/Wunderlandmedia/HotkeyClash/releases/tag/v0.9.3
assets:
  - path: ./assets/icon.png
    source: https://github.com/Wunderlandmedia/HotkeyClash/blob/2ce1a5a42db386e67fae8631831de6be28c72a5b/HotkeyClash/Assets.xcassets/AppIcon.appiconset/256.png
    credit: HotkeyClash contributors
    license: GPL-2.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

HotkeyClash shows you where two programs claim the same keyboard shortcut. It runs from the menu bar, scans your Mac and lists each clash in a split view, with a sidebar of conflicts and a detail pane naming the apps involved.

It collects shortcuts from three places. It reads the menus of running apps through the Accessibility API. It parses the configuration files of Alfred, BetterTouchTool, Hammerspoon, Karabiner-Elements, Keyboard Maestro and skhd, plus Obsidian's custom command hotkeys, which never appear in its menus. And it reads macOS system shortcuts such as Spotlight, Mission Control and Screenshots, along with Globe (fn) shortcuts.

Two global shortcuts on the same keys count as a definite conflict. A global shortcut that overlaps an app's menu item is a potential one, since it only matters while that app is in front. HotkeyClash also guesses which shortcut wins from where each tool hooks into the keyboard, and says so when two sit at the same level and it cannot tell. To check for real, press a combination and it reports which app caught the keypress.

You can search by app, action or key and export the report as Markdown. Scanning running apps needs Accessibility permission; config files and system shortcuts are read without it. HotkeyClash requires macOS 14 or later. Version 0.9.3 is a Universal app, Developer ID-signed and notarized, and the developer says it has no telemetry.
