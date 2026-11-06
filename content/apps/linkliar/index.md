---
name: "LinkLiar"
summary: "Menu bar app that changes the hardware addresses of Wi-Fi and Ethernet interfaces, randomly or to a set value."
category: "Privacy & security"
tags:
  - privacy
  - network
  - menu-bar
repository: "https://github.com/halo/LinkLiar"
website: "https://halo.github.io/LinkLiar/"
license: "MIT"
licenseUrl: "https://github.com/halo/LinkLiar/blob/master/LICENSE.txt"
download: "https://github.com/halo/LinkLiar/releases/download/3.0.3/LinkLiar.app.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/halo/LinkLiar"
  - "https://github.com/halo/LinkLiar/blob/master/LICENSE.txt"
  - "https://github.com/halo/LinkLiar/releases"
  - "https://github.com/halo/LinkLiar/releases/download/3.0.3/LinkLiar.app.zip"
  - "https://halo.github.io/LinkLiar/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/halo/LinkLiar/releases/download/3.0.3/LinkLiar.app.zip"
    credit: "halo (LinkLiar contributors)"
    license: "MIT; upstream app icon, trademarks retained"
---

LinkLiar lives in the status menu and changes the MAC address of your Wi-Fi and Ethernet interfaces, so networks see a different hardware address. It can use a random address, re-randomize the address, or use one you set manually. It asks for administrator rights once. It suits people who want to keep their Mac's real hardware address from being seen on shared or public networks.

The last prebuilt app is version 3.0.3 from October 2021. It is a universal build that declares macOS 10.12 or later, although the README also lists macOS Sierra. Gatekeeper rejects it because it is signed with a development certificate and is not notarized, so the first launch must be allowed in System Settings. Homebrew disabled its LinkLiar cask on 2026-09-01 for failing the Gatekeeper check. The newer 4.0.0 tag from August 2025 ships source code only and targets macOS 14.0. The README also lists limits: a Mac with its Wi-Fi turned off cannot change the Wi-Fi address, and 2018 MacBooks cannot change theirs because of a macOS bug.
