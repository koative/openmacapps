---
name: "Itsytv"
summary: "An Apple TV remote for the Mac menu bar with a d-pad, keyboard control, text input and now-playing details."
category: "Utilities"
tags:
  - menu-bar
  - media-controls
  - keyboard-shortcuts
repository: "https://github.com/nickustinov/itsytv-macos"
website: "https://itsytv.app"
license: "MIT"
licenseUrl: "https://github.com/nickustinov/itsytv-macos/blob/main/LICENSE"
download: "https://github.com/nickustinov/itsytv-macos/releases"
freeDownload: true
homebrew: "itsytv"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/nickustinov/itsytv-macos"
  - "https://github.com/nickustinov/itsytv-macos/blob/main/LICENSE"
  - "https://github.com/nickustinov/itsytv-macos/releases"
  - "https://itsytv.app"
  - https://github.com/nickustinov/itsytv-macos/blob/main/README.md
  - https://github.com/nickustinov/itsytv-macos/releases/tag/v1.6.2
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/nickustinov/itsytv-macos/main/itsytv/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512.png"
    credit: "Nick Ustinov"
    license: "MIT; upstream app icon, trademarks retained"
---

Itsytv turns the Mac into a remote for an Apple TV on the same network. Click its menu bar icon and a small floating panel opens with a round d-pad, select, home, back and play/pause, and you can drive the TV from the keyboard as well.

- Arrow keys, Return, Backspace, Escape and Space map to remote buttons.
- Text fields on the Apple TV can be typed into directly from the Mac.
- A now-playing view shows artwork, title, progress and playback controls.
- An app launcher shows the installed apps in a grid you can rearrange.

Several Apple TVs can be paired, each with its own global hotkey and remembered panel position. Pairing uses a four-digit PIN shown on the TV, and the credentials go into the macOS Keychain. AppleScript commands and a Shortcuts action let scripts pause or play and open the panel.

Itsytv needs an Apple TV 4th generation or later on tvOS 15 or newer. If no PIN appears, the README lists the AirPlay and restriction settings to change on the TV. Volume works only when the Apple TV controls the TV over HDMI-CEC; learned infrared codes do not.

The Mac app needs macOS 14 or later. The 1.6.2 disk image holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. The Mac app is free from GitHub and Homebrew. The Mac App Store version is a one-time purchase that also covers iPhone and iPad.
