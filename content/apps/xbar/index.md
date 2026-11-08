---
name: xbar
summary: "Shows the output of any script in the macOS menu bar, refreshed on a schedule set in the file name."
category: Utilities
tags:
  - menu-bar
  - plugins
  - scripting
repository: https://github.com/matryer/xbar
website: https://xbarapp.com
license: MIT
licenseUrl: https://github.com/matryer/xbar/blob/main/LICENSE.txt
download: https://github.com/matryer/xbar/releases
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release since October 2021 and no commit since September 2024."
homebrew: "xbar"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/matryer/xbar", "https://github.com/matryer/xbar/blob/main/LICENSE.txt", "https://github.com/matryer/xbar/blob/main/README.md", "https://github.com/matryer/xbar/releases", "https://raw.githubusercontent.com/matryer/xbar/main/README.md", "https://xbarapp.com", "https://raw.githubusercontent.com/matryer/xbar-plugins/main/CONTRIBUTING.md", "https://github.com/matryer/xbar/releases/tag/v2.1.7-beta"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/matryer/xbar/blob/d624239058997c80118eaebe2e7f8331b3c765e0/app/build/appicon.png
    credit: xbar contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

xbar runs scripts you choose and turns whatever they print into menu bar items. A script in any language that prints one line puts that line in the menu bar, and lines after a `---` separator appear in its dropdown menu.

The schedule lives in the file name: `date.1m.sh` reruns every minute, and `10s`, `2h` or `1d` work the same way. Plugins sit in `~/Library/Application Support/xbar/plugins`. From the Plugins window you can browse hundreds of shared plugins, from network details to battery levels, and install them into that folder.

Parameters after a `|` on any output line control the item:

- `href=` opens a URL, and `shell=` runs a command with arguments.
- `color=`, `font=` and `size=` change how the text looks.
- `key=` adds a keyboard shortcut.
- `refresh=true` reruns the plugin after a click.
- `templateImage=` sets a base64-encoded icon in black and transparent pixels.

xbar is a rewrite of BitBar in Go, built with Wails. BitBar users move their old plugins into the new folder to keep them. The current download, 2.1.7-beta from October 2021, is a Universal app that is Developer ID-signed and notarized. Its app bundle declares macOS 10.13 as the minimum, while the README asks for 10.15 Catalina or newer. It is open source under the MIT license.
