---
name: "Aman Check"
summary: "Checks a used Mac's locks, battery, SSD and sensors, guides hardware tests, and exports a dated PDF or JSON report."
category: "Utilities"
tags:
  - hardware
  - diagnostics
  - battery
  - used-mac
repository: "https://github.com/MidZai/aman_check"
website: "https://midzai.github.io/aman_check/"
license: "MIT"
licenseUrl: "https://github.com/MidZai/aman_check/blob/main/LICENSE"
download: "https://github.com/MidZai/aman_check/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/MidZai/aman_check"
  - "https://github.com/MidZai/aman_check/blob/main/LICENSE"
  - "https://github.com/MidZai/aman_check/releases"
  - "https://midzai.github.io/aman_check/"
---

Aman Check is a macOS app for checking a used Mac before buying or selling it. It runs on the machine being sold and reads what can be measured: Activation Lock and other locks, battery cycles and capacity, SSD health, configuration and fan sensors. It then guides the person through tests of the display, keyboard, trackpad, speakers, camera and ports, and records each result as good, to watch, a problem or not tested. The output is a dated PDF or JSON report, written in plain language for people who are not technical.

The app needs macOS 13 or later and is a universal build for Apple silicon and Intel. It is not notarized, so macOS blocks the first launch: allow it in System Settings under Privacy & Security, or on macOS 13 and 14 open it with Control-click and Open. At this level it makes no network connection and sends nothing. The author verified it on an Intel MacBook Pro with a T2 chip, and says some Apple silicon and desktop sensor readings are not yet verified. The optional online publishing feature is not deployed and is hidden in the app. On desktop Macs the keyboard and trackpad tests are optional.
