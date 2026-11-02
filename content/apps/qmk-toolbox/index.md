---
name: "QMK Toolbox"
summary: "Flashes QMK and other firmware onto custom keyboards, detecting boards in bootloader mode and showing their debug console."
category: "Utilities"
tags:
  - keyboard
  - firmware
  - flashing
  - usb
  - native
repository: https://github.com/qmk/qmk_toolbox
website: https://qmk.fm/toolbox
license: "MIT"
licenseUrl: https://github.com/qmk/qmk_toolbox/blob/master/LICENSE.md
download: https://github.com/qmk/qmk_toolbox/releases
homebrew: "qmk-toolbox"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/qmk/qmk_toolbox
  - https://github.com/qmk/qmk_toolbox/blob/master/LICENSE.md
  - https://github.com/qmk/qmk_toolbox#installation
  - https://github.com/qmk/qmk_toolbox/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/qmk/qmk_toolbox/blob/master/macos/QMK%20Toolbox/Assets.xcassets/AppIcon.appiconset/icon-256x256.png
    credit: "QMK"
    license: "MIT; upstream project asset, trademarks retained"
---

QMK Toolbox is the companion app of the QMK keyboard firmware project. You pick a compiled firmware file, put the keyboard into bootloader mode, and the Toolbox recognises the board and writes the firmware, optionally doing so automatically as soon as a board appears.

It bundles the usual command-line flashers for DFU, Caterina, HalfKay, BootloadHID, Atmel SAM-BA and other bootloaders, along with a few ISP programmers, so you do not have to install them separately. It also shows text that a keyboard prints over its HID debug console, which helps when testing your own firmware.

The macOS build requires macOS 12 or later and is offered as an installer package or a zipped app.
