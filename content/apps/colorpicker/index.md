---
name: "Colorpicker"
summary: "A colour window for picking, adjusting and saving colours, with a screen eyedropper and an option to pin it above other apps."
category: "Design"
tags:
  - color
  - cross-platform
repository: "https://github.com/Toinane/colorpicker"
website: "https://github.com/Toinane/colorpicker"
license: "GPL-3.0"
licenseUrl: "https://github.com/Toinane/colorpicker/blob/master/LICENSE"
download: "https://github.com/Toinane/colorpicker/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/Toinane/colorpicker"
  - "https://github.com/Toinane/colorpicker/blob/master/LICENSE"
  - "https://github.com/Toinane/colorpicker/releases"
  - https://raw.githubusercontent.com/Toinane/colorpicker/master/README.md
  - https://github.com/Toinane/colorpicker/releases/tag/2.3.0
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/Toinane/colorpicker/master/build/icon.icns"
    credit: "Toinane and Colorpicker contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Colorpicker keeps a small colour window open next to your other apps. You set a colour with sliders and code fields, or pick one off the screen. Press Command-S and it goes into Colorsbook for later.

The window's menu holds the rest:

- Pin keeps Colorpicker in front of other windows while you switch between apps.
- Picker opens an eyedropper that reads a colour from anywhere on the desktop.
- Shading shows three bars, for hue, natural tones and lightness, to find a nearby shade.
- Colorsbook stores saved colours, sorts them into categories and finds them again.
- Focus mode hides the sliders and makes the menu more transparent, which helps when you compare colours.
- Random picks a colour for you.

Colorpicker is built with Electron and released for macOS, Windows and Linux, and release 2.3.0 ships separate Mac disk images for Apple silicon and Intel. Both need macOS 12. Its source is under the GPL-3.0 license, and the developer takes optional donations through itch.io.

Magic Color is unfinished. For now it shows the first hex or RGB code it finds on the clipboard.
