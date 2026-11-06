---
name: "swipeType"
summary: "Swipe-typing engine and macOS app that matches swipe paths to words using dynamic time warping."
category: "Utilities"
tags:
  - keyboard
  - writing
  - native
repository: "https://github.com/ZimengXiong/swipeType"
website: "https://swipetype.zimengxiong.com"
license: "MIT"
licenseUrl: "https://github.com/ZimengXiong/swipeType/blob/master/LICENSE"
download: "https://github.com/ZimengXiong/swipeType/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/ZimengXiong/swipeType"
  - "https://github.com/ZimengXiong/swipeType/blob/master/LICENSE"
  - "https://github.com/ZimengXiong/swipeType/releases"
  - "https://swipetype.zimengxiong.com"
---

swipeType is a swipe-typing engine for QWERTY keyboards. It compares the path traced over the keys with pre-computed word paths using dynamic time warping, limits the warping to a band so lookups stay fast across a dictionary of more than 300,000 words, and ranks the closest matches. The repository contains the Rust engine, a web interface and the macOS app. It suits developers who want to study or reuse the engine, and people who want to try swipe typing on a Mac.

The bundle declares macOS 13.0 or later and runs on arm64 only. The DMG is signed ad hoc and not notarized, so macOS blocks the first launch until you allow it in System Settings. The latest release, v0.1.4, dates from February 2026.
