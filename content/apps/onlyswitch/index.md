---
name: OnlySwitch
summary: Collect everyday macOS toggles and shortcuts into a configurable menu.
category: Utilities
tags:
  - menu-bar
  - shortcuts
  - system-controls
repository: https://github.com/jacklandrin/OnlySwitch
website: https://onlyswitch.click/
license: MIT
licenseUrl: https://github.com/jacklandrin/OnlySwitch/blob/main/LICENSE
download: https://github.com/jacklandrin/OnlySwitch/releases
freeDownload: true
homebrew: "only-switch"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/jacklandrin/OnlySwitch
  - https://github.com/jacklandrin/OnlySwitch/blob/main/LICENSE
  - https://github.com/jacklandrin/OnlySwitch/blob/main/README.md
  - https://github.com/jacklandrin/OnlySwitch/releases
  - https://github.com/jacklandrin/OnlySwitch/releases/latest/download/OnlySwitch.dmg
assets:
  - path: ./assets/icon.png
    source: https://github.com/jacklandrin/OnlySwitch/blob/87290300321c93a62fee0eb9454bb31ce856825c/OnlySwitch/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: OnlySwitch contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

OnlySwitch collects dozens of small Mac toggles into one menu bar list, so you do not need a separate utility for each. Click its icon and you can hide desktop icons, switch dark mode, keep the Mac awake, show hidden files, empty the Trash or mute the microphone. You choose which switches appear and in what order, and you can bind any of them to a keyboard shortcut.

Beyond the switches, optional tabs add larger tools:

- Sound Mixer sets volume per app, and on macOS 14.4 or later adds a 10-band equalizer and output routing for each app.
- Brightness controls external monitors over DDC/CI, with a software overlay when hardware control fails.
- Schedules run switches or Shortcuts at set times, for example emptying the Trash every Saturday morning.
- Xcode Cleaner scans caches such as DerivedData, and App Uninstaller finds an app's related files; both ask you to confirm before anything is removed.

Evolution lets you build your own switches and buttons from shell or AppleScript code. Each script must pass a test before it can be saved. You can also import macOS Shortcuts, place controls on the desktop as widgets, or drive the Mac from an iPhone with the OnlyRemote companion app. Some newer features, such as Only Agent, which writes AppleScript from a typed request, need macOS 26 and an AI provider you set up yourself.

The current release needs macOS 14 or later. The downloaded DMG is notarized by Apple. Versions 2.5.6 and older cannot update themselves, so install a fresh copy if you are still on one.
