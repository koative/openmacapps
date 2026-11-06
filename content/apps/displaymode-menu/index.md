---
name: "DisplayMode Menu"
summary: "Menu bar utility for switching display resolutions and refresh rates, with Apple Shortcuts actions."
category: "Utilities"
tags:
  - display
  - menu-bar
  - shortcuts
repository: "https://github.com/peaz/displaymodemenu"
website: "https://github.com/peaz/displaymodemenu"
license: "Apache-2.0"
licenseUrl: "https://github.com/peaz/displaymodemenu/blob/main/LICENSE.txt"
download: "https://github.com/peaz/displaymodemenu/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/peaz/displaymodemenu"
  - "https://github.com/peaz/displaymodemenu/blob/main/LICENSE.txt"
  - "https://github.com/peaz/displaymodemenu/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/peaz/displaymodemenu/main/DisplayModeMenu/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Ken Ng"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

DisplayMode Menu lists the modes of each connected display in the menu bar. You can save favourites in its Settings, and each display gets a submenu filtered to 60 Hz and above by default. Clicking a mode switches the display at once, and clicking a display name copies it for use in a shortcut. It also adds a Set Display Mode action to Shortcuts, which accepts either a `width,height,refresh,HiDPI` string or the older `WIDTHxHEIGHT@REFRESH` form, with an optional display name. It suits people who regularly need a specific mode, such as a HiDPI resolution that macOS does not offer by default.

Requires macOS 13 or later. The README says the release is signed and notarized, so first launch should not need the Open Anyway step; it gives an `xattr` command if macOS still warns. Building from source needs Xcode 14 or later.
