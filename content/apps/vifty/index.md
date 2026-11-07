---
name: "Vifty"
summary: "Menu bar fan control and charger-power monitor for Apple Silicon MacBook Pros, aimed at builds and AI agents."
category: "Utilities"
tags:
  - fan-control
  - menu-bar
  - system-monitoring
alternativeTo:
  - macs-fan-control
repository: "https://github.com/Reedtrullz/Vifty"
website: "https://github.com/Reedtrullz/Vifty"
license: "MIT"
licenseUrl: "https://github.com/Reedtrullz/Vifty/blob/main/LICENSE"
download: "https://github.com/Reedtrullz/Vifty/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Reedtrullz/Vifty"
  - "https://github.com/Reedtrullz/Vifty/blob/main/LICENSE"
  - "https://github.com/Reedtrullz/Vifty/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/Reedtrullz/Vifty/releases/download/v1.4.8/Vifty-v1.4.8.zip
    credit: Vifty contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Vifty is a menu bar app for Apple silicon MacBook Pros. It shows temperatures, fan speeds, thermal pressure and USB-C or MagSafe power flow, and it sets fan speed in Auto, fixed-RPM or temperature-curve modes. A bounded command-line tool, `viftyctl`, lets build scripts and local AI coding agents request temporary cooling that expires on its own. Fan writes go through a root LaunchDaemon helper, and when hardware looks unfamiliar, the Mac stays under macOS Auto. It suits developers who run long builds or local models on a laptop.

It requires macOS 15.0 or later and an Apple silicon MacBook Pro. The README says compatibility has been validated on one model, MacBookPro18,1, and that Apple can change the private SMC interface without notice. The v1.4.8 zip is Developer ID signed and notarized. Developer ID builds check GitHub's release list once a day unless you opt out, and the README says there are no analytics. Codex usage display is optional.
