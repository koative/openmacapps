---
name: "OpenSnek"
summary: "Native macOS app that configures supported Razer mice over USB or Bluetooth, so Razer Synapse is not needed."
category: "Utilities"
tags:
  - razer
  - mouse
  - hardware
  - bluetooth
repository: "https://github.com/gh123man/OpenSnek"
website: "https://github.com/gh123man/OpenSnek"
license: "Apache-2.0"
licenseUrl: "https://github.com/gh123man/OpenSnek/blob/main/LICENSE"
download: "https://github.com/gh123man/OpenSnek/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/gh123man/OpenSnek"
  - "https://github.com/gh123man/OpenSnek/blob/main/LICENSE"
  - "https://github.com/gh123man/OpenSnek/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/gh123man/OpenSnek/main/OpenSnek/App/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "OpenSnek contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

OpenSnek adjusts DPI, lighting, button mappings and onboard profiles on supported Razer mice, connected by USB or Bluetooth, without Synapse or Windows. For some keyboards, keypads and charging accessories it controls lighting only. The project was built by reverse engineering the device protocols, and its README keeps a table of which models are validated by the maintainers and which by contributors. It suits Mac users with a supported Razer mouse who want to avoid Synapse.

It requires macOS 14 or later. The DMG is Developer ID signed and notarized. USB control needs Input Monitoring permission for OpenSnek under System Settings > Privacy & Security. Support varies by model: the README says, for example, that the Naga V3 Pro's scroll-wheel modes cannot be read or changed by the app.
