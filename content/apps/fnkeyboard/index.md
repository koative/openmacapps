---
name: "FnKeyboard"
summary: "Menu bar app with clickable F1–F12 keys that trigger the Mac's brightness, media and volume functions."
category: "Utilities"
tags:
  - accessibility
  - keyboard
  - menu-bar
  - function-keys
repository: "https://github.com/kotique123/FnKeyboard"
website: "https://github.com/kotique123/FnKeyboard"
license: "MIT"
licenseUrl: "https://github.com/kotique123/FnKeyboard/blob/main/LICENSE"
download: "https://github.com/kotique123/FnKeyboard/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kotique123/FnKeyboard"
  - "https://github.com/kotique123/FnKeyboard/blob/main/LICENSE"
  - "https://github.com/kotique123/FnKeyboard/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/kotique123/FnKeyboard/main/Assets.xcassets/AppIcon.appiconset/icon_128%402x.png"
    credit: "FnKeyboard contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

FnKeyboard puts the Mac's F1–F12 keys in the menu bar as a popover of keycaps. Clicking a key fires the system action it stands for, such as brightness, media controls or volume, and the app also reports which function keys are physically held down. It is for people who use the function row for those controls and want them on screen instead.

It needs macOS 13 or later, according to the README. The release DMGs come in Apple silicon and Intel builds. On first launch the app asks for Input Monitoring (Accessibility) permission, because it reads key events through an event tap and posts simulated keys. It is not sandboxed, since the event tap and HID APIs do not work inside the App Sandbox. The README says the app makes no network connections and does not store keystrokes. It does not say whether the release builds are notarized.
