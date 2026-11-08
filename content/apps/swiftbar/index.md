---
name: SwiftBar
summary: Turns the output of your own scripts into menu bar items and drop-down menus, with a built-in plugin repository.
category: Utilities
tags:
  - menu-bar
  - plugins
  - scripting
repository: https://github.com/swiftbar/SwiftBar
website: https://swiftbar.app
license: MIT
licenseUrl: https://github.com/swiftbar/SwiftBar/blob/main/LICENSE
download: https://github.com/swiftbar/SwiftBar/releases
freeDownload: true
homebrew: "swiftbar"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/swiftbar/SwiftBar
  - https://github.com/swiftbar/SwiftBar/blob/main/LICENSE
  - https://github.com/swiftbar/SwiftBar/blob/main/README.md
  - https://github.com/swiftbar/SwiftBar/releases
  - https://raw.githubusercontent.com/swiftbar/SwiftBar/main/README.md
  - https://github.com/swiftbar/SwiftBar/releases/tag/v2.1.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/swiftbar/SwiftBar/blob/13f0fd8b3e322c28c95dcfaea47aef41c5705d02/SwiftBar/Resources/Assets.xcassets/AppIcon.appiconset/mac_256.png
    credit: SwiftBar contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

SwiftBar runs scripts you write and shows what they print in the menu bar. Lines before the first `---` become the menu bar title, and the lines after it fill the drop-down menu. A single `echo` line is already a working plugin.

On first launch SwiftBar asks for a plugin folder and tries to load every file in it as a plugin, written in any language. It makes new files executable when needed. The file name sets the refresh interval, so `date.1m.sh` runs every minute, and a cron-style schedule can go in the script's metadata instead.

- Parameters after a `|` give each line its own color, font, SF Symbol, image or tooltip.
- Menu items can open a URL, run a script in the background or in Terminal, or refresh the plugin.
- Streamable plugins keep running and replace the item each time they print `~~~`.
- Shortcuts plugins take their output from a shortcut chosen in settings, and ephemeral items can be created through a URL scheme.

The plugin format comes from BitBar and xbar, so plugins written for those apps run in SwiftBar too. The Get Plugins menu item opens a bundled repository of ready-made ones. Items start in no fixed order, and you can Command-drag them into place; SwiftBar remembers the position until the plugin file is renamed.

SwiftBar requires macOS 12 Monterey or later. The GitHub release is a ZIP containing a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and it is free under the MIT license. Homebrew installs it as well.
