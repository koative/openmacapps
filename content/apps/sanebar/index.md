---
name: "SaneBar"
summary: "Hides menu bar icons you rarely need and reveals them from a searchable panel or second bar."
category: "Utilities"
tags:
  - menu-bar
  - organization
  - customization
alternativeTo:
  - bartender
repository: https://github.com/sane-apps/SaneBar
website: https://sanebar.com/
license: "MIT"
licenseUrl: https://github.com/sane-apps/SaneBar/blob/main/LICENSE
download: https://sanebar.com/
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/sane-apps/SaneBar
  - https://github.com/sane-apps/SaneBar/blob/main/LICENSE
  - https://sanebar.com/
  - https://github.com/sane-apps/SaneBar/releases/tag/sunset
  - https://github.com/sane-apps/SaneBar/releases
  - https://raw.githubusercontent.com/sane-apps/SaneBar/main/README.md
  - https://www.macbartender.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sane-apps/SaneBar/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "SaneApps"
    license: "MIT; upstream app icon, trademarks retained"
---

SaneBar moves menu bar icons you rarely use into a hidden section and keeps the ones you need in view. Command-drag icons to sort them, then click the SaneBar icon or press Command-Backslash to show or hide the rest. Hidden icons go away again after a delay.

Hidden apps can also be browsed in a floating Icon Panel or a full-width second bar under the real menu bar, and you can double-click one to open it. Find Icon searches every menu bar item by name and clicks it for you, even one hidden behind the notch.

- An Always Hidden section holds icons that never appear on their own.
- Triggers show icons on low battery, a Wi-Fi network, a Focus change, an app launch or an external display.
- Profiles save separate layouts, and hidden icons can be locked behind Touch ID or a password.
- Per-icon hotkeys open a single app's menu, and AppleScript commands cover automation.

Managing the menu bar needs the Accessibility permission. SaneBar runs on macOS 14 through 26 on Apple silicon only. On macOS 27 it can't hide icons and shows a notice pointing to the system's own Menu Bar settings. The developer made it free under the MIT license after Apple's menu bar changes in macOS 27, and the community now maintains it through pull requests. The downloaded build is notarized and updates itself through Sparkle.

Bartender covers the same ground with search, hotkeys and triggers, and its version 7 is built for macOS 27. SaneBar's first-run setup can import a Bartender layout.
