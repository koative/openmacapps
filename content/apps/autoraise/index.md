---
name: AutoRaise
summary: Raises and focuses windows when you rest the pointer on them.
category: Productivity
tags:
  - window-management
  - mouse
  - focus
repository: https://github.com/sbmpost/AutoRaise
website: https://github.com/sbmpost/AutoRaise
license: GPL-3.0
licenseUrl: https://github.com/sbmpost/AutoRaise/blob/master/LICENSE.md
download: https://github.com/sbmpost/AutoRaise/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: '2026-11-08'
sources:
  - https://github.com/sbmpost/AutoRaise
  - https://github.com/sbmpost/AutoRaise/blob/master/LICENSE.md
  - https://github.com/sbmpost/AutoRaise/blob/master/README.md
  - https://github.com/sbmpost/AutoRaise/releases
  - https://raw.githubusercontent.com/sbmpost/AutoRaise/master/README.md
  - https://github.com/sbmpost/AutoRaise/releases/tag/v5.7
  - https://github.com/sbmpost/AutoRaise-UI
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sbmpost/AutoRaise/master/AutoRaise.dmg
    credit: AutoRaise contributors; 256px PNG extracted from AutoRaise.app/Contents/Resources/AppIcon.icns in the upstream DMG
    license: GPL-3.0; upstream project asset, trademarks retained
screenshots: []
---

AutoRaise brings a window to the front and gives it focus when you rest the pointer on it, after a delay you choose. You move the mouse to the window you want, and the click that would normally bring it forward is no longer needed.

After installing, you grant the Accessibility permission by clicking its balloon icon, and right-clicking the same icon opens preferences. Much of the behaviour can be tuned:

- How long the pointer must stop before a raise, and how often its position is checked.
- A key, Control by default, that pauses AutoRaise while you hold it.
- Apps and window titles to leave alone, with regular expressions allowed for titles.
- Raising only when the window under the pointer is on another screen than the focused one, or only while two or more displays are connected.
- Moving the pointer to the window you switch to with Command-Tab or Command-backtick.

The project comes in two parts. This repository holds the engine and its command-line options, which can also live in a `~/.AutoRaise` configuration file. The menu bar app and its preferences window are a separate project, AutoRaise-UI. Release 5.7 is a DMG with a Universal app for Apple silicon and Intel that needs macOS 10.15 or later and is Developer ID-signed and notarized.

AutoRaise works on separate windows only. Panes drawn inside one window, such as tmux or iTerm2 splits, count as a single window to macOS and cannot be focused one by one.
