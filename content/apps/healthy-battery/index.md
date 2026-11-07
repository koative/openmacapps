---
name: "Healthy Battery"
summary: "Open-source menu bar app that sets an 80–100% charge limit on Apple silicon MacBooks and tracks battery health."
category: "Utilities"
tags:
  - menu-bar
  - system-monitoring
  - battery
repository: "https://github.com/berkinefeavci/healthy-battery"
website: "https://healthybatteryapp.com"
license: "MIT"
licenseUrl: "https://github.com/berkinefeavci/healthy-battery/blob/main/LICENSE"
download: "https://github.com/berkinefeavci/healthy-battery/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/berkinefeavci/healthy-battery"
  - "https://github.com/berkinefeavci/healthy-battery/blob/main/LICENSE"
  - "https://github.com/berkinefeavci/healthy-battery/releases/latest"
  - "https://healthybatteryapp.com"
assets:
  - path: ./assets/icon.png
    source: https://github.com/berkinefeavci/healthy-battery/releases/download/v1.4.2/Healthy-Battery-1.4.2.dmg
    credit: Healthy Battery contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Healthy Battery is a menu bar app for MacBook battery care. It drives macOS's own charge limit between 80 and 100 percent in 5-point steps, offers a one-click Top Up to 100 percent for a trip, and shows live power flow between the adapter, battery, CPU and display. It keeps charge and health history for up to 400 days, runs scheduled actions and Shortcuts, and can set the MagSafe LED. It is for people who want to limit battery wear without a subscription or an account.

It requires an Apple silicon Mac. The author tested it on macOS 27 on a single Mac model; other macOS versions and models are untested. Release builds are signed and notarized. Some features, such as power-mode switching and the MagSafe LED, use a privileged helper that asks for administrator approval once. The charge limit depends on Apple's private PowerUI framework, which a macOS update could break. The project states that a successful limit write means macOS accepted the setting, not that charging current was measured to stop. The experimental adapter-cut features work only while the Mac is awake.
