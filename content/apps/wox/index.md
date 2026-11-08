---
name: "Wox"
summary: "A keyboard launcher for apps, files and actions, extensible with Node.js, Python and script plugins."
category: "Productivity"
tags:
  - launcher
  - search
  - plugins
  - cross-platform
alternativeTo:
  - alfred
repository: https://github.com/Wox-launcher/Wox
website: https://www.woxlauncher.com
license: "GPL-3.0"
licenseUrl: https://github.com/Wox-launcher/Wox/blob/master/LICENSE
download: https://github.com/Wox-launcher/Wox/releases
freeDownload: true
homebrew: "wox"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/Wox-launcher/Wox
  - https://github.com/Wox-launcher/Wox/blob/master/LICENSE
  - https://github.com/Wox-launcher/Wox/releases
  - https://formulae.brew.sh/cask/wox
  - https://github.com/Wox-launcher/Wox/blob/master/README.md
  - https://www.woxlauncher.com
  - https://github.com/Wox-launcher/Wox/releases/tag/v2.4.9
  - https://www.alfredapp.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Wox-launcher/Wox/master/assets/mac/app.icns
    credit: "Wox contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Wox puts a search box behind a hotkey, and you type into it to open apps, find files and folders, or run a command without touching the mouse. Most of what it does comes from built-in plugins.

- Application search launches apps and switches between open windows.
- A clipboard history recalls copied text and images.
- The calculator and converter handle expressions, units, currencies, dates and time zones.
- Other plugins search the web and browser bookmarks, jump to open browser tabs, run shell commands and trigger system actions such as lock and shutdown.
- AI chat and reusable AI commands send prompts to language models and agents.

There are also floating notes, screen-area capture, saved window layouts, backup and settings sync. Beyond the built-ins, you can install Node.js, Python or script plugins and community themes from the Wox store, or write your own.

The project says it is not built on Electron and renders natively with the GPU, and puts everyday memory use at around 150 MB. Alfred is a macOS app whose workflows, which chain hotkeys, keywords and actions, need the paid Powerpack. Wox is licensed GPL-3.0 and also runs on Windows and Linux.

GitHub releases carry separate DMGs for Apple silicon and Intel. The Apple silicon DMG of version 2.4.9 needs macOS 12 or later and is Developer ID-signed and notarized. Homebrew installs it with `brew install --cask wox`.
