---
name: "Betaflight App"
summary: "Configuration and management app for flight controllers running Betaflight, for multirotor and fixed-wing aircraft."
category: "Utilities"
tags:
  - drones
  - flight-controller
  - cross-platform
repository: https://github.com/betaflight/betaflight-configurator
website: https://betaflight.com
license: "GPL-3.0"
licenseUrl: https://github.com/betaflight/betaflight-configurator/blob/master/LICENSE
download: https://github.com/betaflight/betaflight-configurator/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/betaflight/betaflight-configurator
  - https://github.com/betaflight/betaflight-configurator/blob/master/LICENSE
  - https://github.com/betaflight/betaflight-configurator/releases
  - https://app.betaflight.com
  - https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/README.md
  - https://betaflight.com
  - https://github.com/betaflight/betaflight-configurator/releases/tag/2026.6.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/src/images/bf_icon.icns
    credit: "Betaflight contributors"
    license: "GPL-3.0 repository asset; Betaflight name and logo retained by the project"
---

Betaflight App connects to a flight controller running the Betaflight firmware, so you can configure and manage a drone or fixed-wing aircraft from a computer. The README names quadcopters, hexacopters, octocopters and fixed-wing aircraft among the supported types. Until its rename it was Betaflight Configurator, and the repository still carries that name.

The project now publishes the app mainly as a progressive web app at app.betaflight.com. Standalone builds stay on GitHub releases for macOS, Windows, Linux and Android, and the Betaflight site announces an iPhone version in public beta. A snapshot of the unstable web version is open for testing, and the README warns that it can corrupt flight controller settings.

The interface is translated into several languages. It picks the system language when a translation exists, and you can choose another on the first screen.

Release 2026.6.2 has separate disk images for Apple silicon and Intel, and the Apple silicon one is not notarized. On first launch macOS may call the app damaged, and the README explains how to open it anyway.

The firmware the app configures is used on racing and freestyle quads as well as filming, long-range, micro and wing builds.
