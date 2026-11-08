---
name: MTMR
summary: Replace the MacBook Pro Touch Bar with your own layout of buttons, widgets and scripts defined in a JSON file.
category: Utilities
tags:
- touch-bar
- customization
- keyboard
repository: https://github.com/Toxblh/MTMR
website: https://mtmr.app/
license: MIT
licenseUrl: https://github.com/Toxblh/MTMR/blob/master/LICENSE
download: https://github.com/Toxblh/MTMR/releases
freeDownload: true
homebrew: "mtmr"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/Toxblh/MTMR
- https://github.com/Toxblh/MTMR/blob/master/LICENSE
- https://github.com/Toxblh/MTMR/releases
- https://raw.githubusercontent.com/Toxblh/MTMR/master/README.md
- https://github.com/Toxblh/MTMR/releases/tag/v0.27
- https://github.com/Toxblh/MTMR/commits/master
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/Toxblh/MTMR/master/MTMR/Assets.xcassets/AppIcon.appiconset/logo-1024.png
  credit: Anton Palgunov (Toxblh)
  license: MIT-licensed repository asset; no separate icon terms stated
---

MTMR, short for My TouchBar My Rules, replaces the default Touch Bar on a MacBook Pro with a strip you build yourself. You describe each item in a JSON file, `items.json` in MTMR's Application Support folder, and the app draws the bar from it.

- System keys: Escape, brightness, keyboard illumination, volume and mute, plus previous, play and next for media.
- Widgets for the clock, battery, CPU load, currency rates, weather, input source, music, Night Shift, Do Not Disturb, dark mode, a pomodoro timer, network activity and upcoming calendar events.
- A Dock widget that opens an app with a half-long press and quits it with a full-long press.
- Custom buttons whose title comes from an AppleScript or shell script, refreshed on an interval you set, and groups of items that you leave again with a close button.

Two-finger and three-finger slides on the Touch Bar can change volume and brightness, and you can bind your own two-, three- or four-finger swipes to an AppleScript or a shell command. Grant MTMR the Accessibility permission first. Without it, Esc, volume, brightness and the other system keys do nothing. If you would rather not write JSON by hand, community presets are shared in a separate repository, and the README links a visual editor called MTMR Designer.

The newest release, 0.27 from November 2020, is an Intel-only build that asks for macOS 10.12.2 or later. Support for Apple silicon as a universal binary was merged into the repository in 2026 but has not shipped in a release yet. The app is only useful on MacBook Pro models that have a Touch Bar.
