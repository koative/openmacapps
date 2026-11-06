---
name: "Plugd"
summary: "Runs FORScan Ford diagnostics on a Mac through Wine, with guided setup and USB or Bluetooth OBD adapter mapping."
category: "Utilities"
tags:
  - wine
  - diagnostics
  - obd2
  - automotive
repository: "https://github.com/lncch/Plugd"
website: "https://plugd.almoayyad.dev"
license: "MIT"
licenseUrl: "https://github.com/lncch/Plugd/blob/main/LICENSE"
download: "https://github.com/lncch/Plugd/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/lncch/Plugd"
  - "https://github.com/lncch/Plugd/blob/main/LICENSE"
  - "https://github.com/lncch/Plugd/releases/latest"
  - "https://plugd.almoayyad.dev"
---

Plugd sets up Wine and FORScan, the Windows diagnostic software used for Ford, Lincoln, Mercury and Mazda cars, so it can run on a Mac. It downloads the official FORScan installer from forscan.org, maps a USB or paired Bluetooth OBD-II adapter to the serial port FORScan expects, and keeps license keys and As-Built backups in a folder that FORScan sees as drive O:. It also adds a menu bar status item, a live dashboard that can be recorded to CSV, and warnings for a low car battery or a missing backup. It is for owners who would otherwise need a Windows PC to change settings.

It requires macOS 12 or later on Apple silicon or Intel; the menu bar and start-at-login options need macOS 13 or later. Setup installs Rosetta and needs a compatible adapter. The site lists a USB ELM327 with a CH340 chip as tested, and says Wi-Fi adapters and Bluetooth Classic adapters such as the OBDLink MX+ are not yet tested. The DMG is notarized by Apple. Caveats: FORScan itself is not included, and changing settings needs FORScan's Extended license, which the site says has a free trial. A failed write can break a module, so back up first. The site lists tests on a single car.
