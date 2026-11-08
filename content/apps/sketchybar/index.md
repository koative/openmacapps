---
name: "SketchyBar"
summary: "A scriptable status bar replacement whose items, graphs and popups are defined by shell configuration."
category: "Utilities"
tags: ["menu-bar", "customization", "scripting", "shell"]
repository: "https://github.com/FelixKratz/SketchyBar"
website: "https://felixkratz.github.io/SketchyBar/"
license: "GPL-3.0"
licenseUrl: "https://github.com/FelixKratz/SketchyBar/blob/master/LICENSE.md"
download: "https://felixkratz.github.io/SketchyBar/setup"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/FelixKratz/SketchyBar", "https://github.com/FelixKratz/SketchyBar/blob/master/LICENSE.md", "https://felixkratz.github.io/SketchyBar/setup", "https://raw.githubusercontent.com/FelixKratz/SketchyBar/master/README.md", "https://felixkratz.github.io/SketchyBar/config/events", "https://felixkratz.github.io/SketchyBar/config/components", "https://github.com/FelixKratz/SketchyBar/releases"]
screenshots: []
---

SketchyBar draws its own status bar, at the top of the screen by default or at the bottom, and builds it from `sketchybar` commands and shell scripts. You run `sketchybar --add` and `--set` to place icons, labels and scripts, and any item can be added, changed or removed while the bar is running. To use it in place of the macOS menu bar, you set the system bar to hide automatically.

- Graph items plot data points that a script pushes to them.
- Space items stand for Mission Control spaces.
- Alias items mirror an item from the macOS menu bar.
- Slider items show progress and can be clicked or dragged to set a value.
- Popup menus open on demand.

Items subscribe to events, and the bar runs their script when one fires. Events cover a front app switch, a space change, volume, brightness and power source changes, sleep and wake, and mouse clicks, hovers and scrolls. The Wi-Fi event has not worked since macOS Sonoma, and the media event is deprecated on macOS 26. Scripts can also poll at a fixed interval.

Setup goes through the developer's Homebrew tap, and `brew services` starts the bar at login. Configuration lives in `~/.config/sketchybar`, beginning from a deliberately sparse example config and plugin scripts. The bar needs the default "Displays have separate Spaces" setting turned on. Its default font is Hack Nerd Font, a separate install if icons go missing. Building from source produces a Universal binary for Apple silicon and Intel. Separate projects add a Lua API and a C header for talking to the bar.

SketchyBar began as a fork of spacebar and was rewritten from scratch. Its idea comes from the status bar that yabai once included. It is licensed under the GPL 3.0.
