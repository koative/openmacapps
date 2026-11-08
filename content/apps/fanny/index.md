---
name: "Fanny"
summary: "Shows fan speeds and CPU and GPU temperatures in Notification Center or the menu bar."
category: "Utilities"
tags:
  - system-monitoring
  - widgets
  - temperature
repository: "https://github.com/DanielStormApps/Fanny"
website: "https://www.fannywidget.com/"
license: "MIT"
licenseUrl: "https://github.com/DanielStormApps/Fanny/blob/master/LICENSE"
download: "https://github.com/DanielStormApps/Fanny/releases/download/2.3.0/FannyWidget.zip"
homebrew: "fanny"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources: ["https://github.com/DanielStormApps/Fanny", "https://github.com/DanielStormApps/Fanny/blob/master/LICENSE", "https://github.com/DanielStormApps/Fanny/blob/master/README.md", "https://github.com/DanielStormApps/Fanny/releases", "https://github.com/DanielStormApps/Fanny/releases/tag/2.3.0", "https://github.com/DanielStormApps/SMC", "https://www.fannywidget.com/"]
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/DanielStormApps/Fanny/blob/master/Fanny/fanny/Assets.xcassets/AppIcon.appiconset/512@2x.png"
    credit: "Daniel Storm"
    license: "MIT; upstream app icon, trademarks retained"
---

Fanny reports how your Mac's fans are running and how hot the processor and graphics chip are. Open Notification Center, or click its menu bar icon, and a compact panel lists the stats.

For each fan you see four numbers: the current speed, the speed the system is aiming for, and the minimum and maximum it allows. The panel also counts the fans and shows CPU and GPU temperatures.

The readings come from the Mac's System Management Controller. Fanny's README credits SMC, a read-only Swift wrapper for that controller which the same developer publishes as a separate MIT-licensed project.

Version 2.3.0 arrived in February 2026, the first release since 2.2.2 in April 2020. Its ZIP holds an app built only for Intel, with no Apple silicon code, and it sets macOS 10.13 as its minimum. The app is Developer ID-signed and notarized. Fanny is free under the MIT license, and its website offers the same download.
