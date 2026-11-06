---
name: "MicKeeper"
summary: "Stops AirPods and iPhones from taking over the Mac microphone, and can lock the input level."
category: "Utilities"
tags:
  - audio
  - microphone
  - bluetooth
repository: "https://github.com/fratayaydn/mickeeper"
website: "https://fratayaydn.github.io/mickeeper/"
license: "MIT"
licenseUrl: "https://github.com/fratayaydn/mickeeper/blob/main/LICENSE"
download: "https://github.com/fratayaydn/mickeeper/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/fratayaydn/mickeeper"
  - "https://github.com/fratayaydn/mickeeper/blob/main/LICENSE"
  - "https://github.com/fratayaydn/mickeeper/releases/latest"
  - "https://fratayaydn.github.io/mickeeper/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/fratayaydn/mickeeper/main/Resources/AppIcon.icns"
    credit: "fratayaydn"
    license: "MIT; upstream app icon, trademarks retained"
---

When AirPods or other Bluetooth headphones connect, macOS often makes them the microphone too. As soon as an app uses the microphone, the headphones switch to call mode and sound mono and muffled. MicKeeper is a background agent that switches the input back to the microphone you were using, or the built-in one. You can also pick one microphone to keep as the input, and optionally put the input level back when an app changes it. It suits people who use AirPods for calls and want their audio kept at full quality. The agent has no menu bar icon, and it sleeps until macOS reports a change.

It needs an Apple silicon Mac running macOS 13 or later. The DMG is signed with a Developer ID and notarized by Apple. Updates are on by default: once a day and after a restart, the app asks GitHub for the latest release and installs a newer, notarized one. You can turn that off in its settings. Apps that choose their own microphone, such as Zoom, follow MicKeeper only when they are set to the system default.
