---
name: "SmoothWheel"
summary: "Smooths a mouse wheel's notched scrolling while leaving the trackpad alone, with presets, wheel direction and app exclusions."
category: "Utilities"
tags:
  - mouse
  - scrolling
  - smooth-scrolling
  - menu-bar
repository: "https://github.com/AntonMazur/SmoothWheel"
website: "https://smoothwheel.vercel.app"
license: "MIT"
licenseUrl: "https://github.com/AntonMazur/SmoothWheel/blob/main/LICENSE"
download: "https://github.com/AntonMazur/SmoothWheel/releases/latest"
macos: "13"
arch: apple-silicon
notarized: false
freeDownload: true
featured: false
added: "2026-11-20"
verified: "2026-11-20"
sources:
  - "https://github.com/AntonMazur/SmoothWheel"
  - "https://github.com/AntonMazur/SmoothWheel/blob/main/LICENSE"
  - "https://github.com/AntonMazur/SmoothWheel/releases/latest"
  - "https://github.com/AntonMazur/SmoothWheel/releases/tag/v0.3.17"
  - "https://github.com/AntonMazur/SmoothWheel/blob/main/docs/INSTALL.md"
  - "https://smoothwheel.vercel.app"
screenshots:
  - src: ./assets/scrolling-settings.jpg
    alt: "SmoothWheel's Scrolling tab with smoothing switched on, the Precise, Balanced and Relaxed presets, speed and smoothing sliders, and Reverse direction."
    source: https://github.com/AntonMazur/SmoothWheel/blob/992b694d8f7965c7c4aac361615940df90167b02/docs/screenshots/scrolling-settings.jpg
    credit: SmoothWheel contributors
  - src: ./assets/app-exclusions.jpg
    alt: "SmoothWheel's App exclusions tab, where chosen apps keep their original scrolling."
    source: https://github.com/AntonMazur/SmoothWheel/blob/992b694d8f7965c7c4aac361615940df90167b02/docs/screenshots/app-exclusions.jpg
    credit: SmoothWheel contributors
assets:
  - path: ./assets/scrolling-settings.jpg
    source: https://github.com/AntonMazur/SmoothWheel/blob/992b694d8f7965c7c4aac361615940df90167b02/docs/screenshots/scrolling-settings.jpg
    credit: SmoothWheel contributors
    license: MIT
  - path: ./assets/app-exclusions.jpg
    source: https://github.com/AntonMazur/SmoothWheel/blob/992b694d8f7965c7c4aac361615940df90167b02/docs/screenshots/app-exclusions.jpg
    credit: SmoothWheel contributors
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/AntonMazur/SmoothWheel/blob/992b694d8f7965c7c4aac361615940df90167b02/docs/assets/app-icon.png
    credit: SmoothWheel contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

SmoothWheel turns the stepped scrolling of a regular mouse wheel into a glide. It sits in the menu bar and only reshapes wheel events. Scrolling on a trackpad is continuous already, so it passes through unchanged.

The Scrolling tab holds the controls:

- three presets, Precise, Balanced and Relaxed
- separate sliders for scroll speed and for how long the motion eases out
- a wheel direction you can reverse without touching the trackpad's
- a Playground tab to try the feel before using it elsewhere

Apps added under App exclusions keep their own scrolling. Holding Option skips the smoothing for a moment, and scrolling with Control or Command held passes through for zoom shortcuts. Smoothing starts switched off at each launch, so you turn it on from the menu bar.

Mos, already in this catalog, also smooths the wheel and adds button bindings. SmoothWheel does less and leaves trackpad input untouched.

The app needs macOS 13 or later and the Accessibility permission. Version 0.3.17 is an Apple silicon build, ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings. The developer says it makes no network requests and has tested it with a Razer mouse, while compatibility across many apps is still being checked.
