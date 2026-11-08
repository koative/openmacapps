---
name: Switch
summary: Replaces Command-Tab with a picker of every open window, including those on other Spaces, filtered as you type.
category: Productivity
tags:
  - window-management
  - app-switcher
  - keyboard-shortcuts
repository: https://github.com/Sanyam-G/switch
website: https://switch-dev.sanyamgarg.com
license: FSL-1.1-MIT
licenseUrl: https://github.com/Sanyam-G/switch/blob/main/LICENSE.md
download: https://github.com/Sanyam-G/switch/releases
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources:
  - https://github.com/Sanyam-G/switch
  - https://github.com/Sanyam-G/switch/blob/main/LICENSE.md
  - https://github.com/Sanyam-G/switch/blob/main/README.md
  - https://github.com/Sanyam-G/switch/releases
  - https://raw.githubusercontent.com/Sanyam-G/switch/main/README.md
  - https://switch-dev.sanyamgarg.com
  - https://github.com/Sanyam-G/switch/releases/tag/v0.3.23
sourceAvailability: source-available
licenseNotes: FSL restricts competing commercial uses. Each version receives an additional MIT license two years after its publication; current FSL versions are source available.
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Sanyam-G/switch/main/Sources/Switch/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "Switch contributors", "license": "FSL-1.1-MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Switch takes over Command-Tab and gives each window its own place in the picker, where macOS shows one entry per app. Windows appear most recent first, with thumbnails, and typing a few letters of an app's name or a window's title narrows the list. Return switches and Escape cancels.

- Windows on other Spaces carry an OTHER SPACE badge, full-screen windows are listed too, and picking one takes you there.
- Option-backtick cycles only the windows of the front app.
- The picker can be a grid or a single-column list, and extra hotkeys limit it to the current Space or display.
- Shift-Command-W, Q and H close a window, quit its app or hide it without leaving the picker.
- Apps such as a virtual machine or remote desktop can be set to pass the hotkeys through while they are in front.

The 0.3.23 disk image holds a Universal app for Apple silicon and Intel that needs macOS 14 and is notarized. The code is under the Functional Source License, which forbids competing commercial use; each version becomes MIT-licensed two years after release, and the current code converts on May 6, 2028.

Switch needs the Accessibility permission to catch Command-Tab. Screen Recording is needed only for thumbnails, so turning them off removes that request. The developer says there are no analytics and no account, and that the only network request is a daily update check you can disable.
