---
name: "Fanny"
summary: "Shows fan speeds and CPU and GPU temperatures from the menu bar, a floating window and widgets."
category: "Utilities"
tags:
  - system-monitoring
  - widgets
  - menu-bar
  - temperature
repository: "https://github.com/DanielStormApps/Fanny"
website: "https://www.fannywidget.com/"
license: "MIT"
licenseUrl: "https://github.com/DanielStormApps/Fanny/blob/master/LICENSE"
download: "https://github.com/DanielStormApps/Fanny/releases/latest"
macos: "27"
arch: apple-silicon
notarized: true
homebrew: "fanny"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-28"
icon: "./assets/icon.png"
sources: ["https://github.com/DanielStormApps/Fanny", "https://github.com/DanielStormApps/Fanny/blob/master/LICENSE", "https://github.com/DanielStormApps/Fanny/blob/master/README.md", "https://github.com/DanielStormApps/Fanny/releases", "https://github.com/DanielStormApps/SMC", "https://www.fannywidget.com/"]
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/DanielStormApps/Fanny/blob/master/Fanny/fanny/Assets.xcassets/AppIcon.appiconset/512@2x.png"
    credit: "Daniel Storm"
    license: "MIT; upstream app icon, trademarks retained"
---

Fanny reports how your Mac's fans are running and how hot the processor and graphics chip are. Click its menu bar icon for a menu of the current readings, or open a floating window that stays on screen while you work.

For each fan you see four numbers: the current speed, the speed the system is aiming for, and the minimum and maximum it allows. Fanny also counts the fans and shows CPU and GPU temperatures.

Beyond the menu and the floating window, Fanny offers widgets built with WidgetKit in sizes from small to extra large, so you can pin the readings to the desktop. It also supports Siri and Shortcuts, which lets you ask for a reading by voice or build one into an automation. Earlier versions lived in Notification Center as FannyWidget; the current app is a menu bar app instead.

The readings come from the Mac's System Management Controller. Fanny's README credits SMC, a read-only Swift wrapper for that controller which the same developer publishes as a separate MIT-licensed project.

Version 26.1.0 arrived in November 2026 and requires macOS 27 or later on an Apple silicon Mac. Fanny is free, written in Swift and released under the MIT license. It can also be installed with Homebrew.
