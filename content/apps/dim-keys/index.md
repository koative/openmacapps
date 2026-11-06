---
name: "Dim Keys"
summary: "Menu bar app that caps the MacBook keyboard backlight and sets the ambient light level at which it turns on."
category: "Utilities"
tags:
  - keyboard
  - brightness
  - menu-bar
  - backlight
repository: "https://github.com/dmartoon/MacBook-Keyboard-Backlight-Limiter"
website: "https://dimkeys.com"
license: "MIT"
licenseUrl: "https://github.com/dmartoon/MacBook-Keyboard-Backlight-Limiter/blob/main/LICENSE"
download: "https://github.com/dmartoon/MacBook-Keyboard-Backlight-Limiter/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/dmartoon/MacBook-Keyboard-Backlight-Limiter"
  - "https://github.com/dmartoon/MacBook-Keyboard-Backlight-Limiter/blob/main/LICENSE"
  - "https://github.com/dmartoon/MacBook-Keyboard-Backlight-Limiter/releases"
  - "https://dimkeys.com"
---

Dim Keys is a menu bar app for MacBooks with a backlit keyboard. It sets a maximum brightness for the keyboard backlight and drives the backlight from the ambient light sensor, with a Low, Med or High sensitivity that decides the light level at which the keys turn on. It was called Keyboard Backlight Limiter before version 1.2.0, and its settings carried over. It suits people who want the keys lit in a dark room but never at full brightness.

Requires macOS 13 or later on a MacBook with an ambient light sensor, on Apple silicon or Intel. Releases are universal and signed and notarized. The author says the app was developed and verified on macOS 26 only. It depends on a private Apple framework, so it cannot be distributed through the Mac App Store, and macOS takes control of the backlight again when the app quits. The app overrides other writes to the same setting, which the author notes may conflict with the keyboard's own inactivity timeout.
