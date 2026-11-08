---
name: BetterCmdTab
summary: Replaces Command-Tab with a searchable switcher that lists every window as a list, grid or live previews.
category: Productivity
tags:
  - window-management
  - app-switcher
  - keyboard-shortcuts
repository: https://github.com/rokartur/BetterCmdTab
website: https://bettercmdtab.app
license: GPL-3.0
licenseUrl: https://github.com/rokartur/BetterCmdTab/blob/main/LICENSE
download: https://github.com/rokartur/BetterCmdTab/releases
freeDownload: true
homebrew: "bettercmdtab"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources:
  - https://github.com/rokartur/BetterCmdTab
  - https://github.com/rokartur/BetterCmdTab/blob/main/LICENSE
  - https://github.com/rokartur/BetterCmdTab/blob/main/README.md
  - https://github.com/rokartur/BetterCmdTab/releases
  - https://bettercmdtab.app
  - https://github.com/rokartur/BetterCmdTab/releases/tag/26.7
assets:
  - path: ./assets/icon.png
    source: https://github.com/rokartur/BetterCmdTab/blob/3df8c685cbf04cb349ff90aca10df02d7dfda592/web/public/icon.png
    credit: BetterCmdTab contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.webp
    source: https://github.com/rokartur/BetterCmdTab/blob/3df8c685cbf04cb349ff90aca10df02d7dfda592/web/public/screenshots/preview.webp
    credit: BetterCmdTab contributors
    license: GPL-3.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.webp
    alt: BetterCmdTab window switcher showing open-window previews.
    source: https://github.com/rokartur/BetterCmdTab/blob/3df8c685cbf04cb349ff90aca10df02d7dfda592/web/public/screenshots/preview.webp
    credit: BetterCmdTab contributors
icon: ./assets/icon.png
---

BetterCmdTab replaces the Command-Tab switcher with one that lists windows instead of apps, so two Safari windows show up as two choices. Tap Command-Tab to switch immediately, or hold it to open the switcher as a list, an icon grid or live previews.

- Type a letter to jump to a window. Slash starts a fuzzy search across open windows that can also find and launch installed apps.
- Press backslash to choose one tab of a window. This works in Safari, Chrome, Arc and several other browsers, plus Finder, Terminal and iTerm.
- Close, minimize, hide, quit or force-quit the selected app without leaving the switcher.
- Control-Command and an arrow key tiles a window, and repeated presses cycle through half, two-thirds and one-third.
- Scoped hotkeys open a filtered switcher with its own layout, and up to nine per-app hotkeys bring a specific app forward, starting it if needed.

You can sort by recent use, name, launch order or Dock order, and limit the list to the current Space or visible windows. Settings export as JSON or sync live with a config file in `~/.config/bettercmdtab`.

Without the Accessibility permission, Command-Tab does nothing. The developer says the app collects no telemetry and contacts only GitHub to check for updates.

BetterCmdTab needs macOS 13 or later. Release 26.7 comes as a DMG or ZIP with a Universal app for Apple silicon and Intel, and the DMG is notarized. Stable and beta builds are offered separately, including as two Homebrew casks.
