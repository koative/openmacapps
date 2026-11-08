---
name: "AirBattery"
summary: "Shows battery levels of your iPhone, iPad, Apple Watch and Bluetooth accessories in the Dock, menu bar or widgets."
category: "Utilities"
tags:
  - battery
  - menu-bar
  - widgets
  - dock
repository: "https://github.com/lihaoyun6/AirBattery"
website: "https://lihaoyun6.github.io/airbattery/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/lihaoyun6/AirBattery/blob/main/LICENSE"
download: "https://github.com/lihaoyun6/AirBattery/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/lihaoyun6/AirBattery", "https://github.com/lihaoyun6/AirBattery/blob/main/LICENSE", "https://raw.githubusercontent.com/lihaoyun6/AirBattery/main/README.md", "https://lihaoyun6.github.io/airbattery/", "https://github.com/lihaoyun6/AirBattery/releases", "https://github.com/lihaoyun6/AirBattery/releases/tag/1.6.3"]
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/lihaoyun6/AirBattery/main/AirBattery/Assets.xcassets/AppIcon.appiconset/icon_256x256%402x.png"
    credit: "lihaoyun6"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

AirBattery gathers battery levels from your other Apple devices and accessories and shows them on the Mac. Click its Dock icon or menu bar icon, or add one of its widgets, to see every level at once.

An iPhone or iPad has to trust the Mac first. Connect it by cable once while AirBattery is running, then keep it on the same network. A paired Apple Watch is read through its iPhone when that iPhone is found over Wi-Fi or USB, though not over Bluetooth. With a setting turned on, an iPhone or cellular iPad can also report over Bluetooth alone. AirPods, Magic devices and some other Bluetooth keyboards, mice and headphones are read directly, which is why the app asks for Bluetooth access.

- Nearcast shows the batteries of your other Macs on the local network, and their accessories.
- Widgets come in several sizes, the largest showing eight devices.
- Low-battery alerts can be set for any device.
- Devices can be hidden from the menus and shown again later.

A warning sign next to a device means it has not reported for over ten minutes. The app talks to iPhones through bundled libimobiledevice tools.

AirBattery needs macOS 11 or later and comes as a Universal disk image. It is not notarized, so macOS blocks the first launch until you allow it.
