---
name: "Peninsula"
summary: "Turns the MacBook notch into a window switcher, notification badge area, file tray and countdown timer."
category: "Productivity"
tags: ["notch", "window-management", "keyboard-shortcuts"]
repository: "https://github.com/celve/Peninsula"
website: "https://github.com/celve/Peninsula"
license: "GPL-3.0"
licenseUrl: "https://github.com/celve/Peninsula/blob/main/LICENSE"
download: "https://github.com/celve/Peninsula/releases"
freeDownload: true
homebrew: "peninsula"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/celve/Peninsula", "https://github.com/celve/Peninsula/blob/main/LICENSE", "https://raw.githubusercontent.com/celve/Peninsula/main/README.md", "https://github.com/celve/Peninsula/releases", "https://github.com/celve/Peninsula/releases/tag/v0.1.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/celve/Peninsula/main/Peninsula/Assets.xcassets/AppIcon.appiconset/Peninsula.png", "credit": "Peninsula contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Peninsula puts a set of small panels behind the MacBook notch. Click the notch to open it, click again to move to the next panel, and click anywhere else to close it.

- A window switcher replaces Command-Tab. Hold Command and press Tab to step forward, Shift to step back, or Escape to cancel; letting go of Command picks the app.
- A second shortcut, set in the apps view, opens the switcher with a search field. Type part of a window's name and press Return.
- The notification panel watches apps you add. When one gets a notification, its icon appears beside the notch for a few seconds, then the total count, which you can click.
- The tray holds files temporarily, and the timer counts down from a typed value such as "2h15m" or from scroll wheels.

Each part credits an earlier project. The switcher code comes mainly from AltTab, the notch panels from NotchDrop and the notification counts from Doll.

Peninsula needs the Accessibility permission to list apps and read notification counts. The current release, 0.1.0 from September 2025, is a ZIP holding a Universal app for Apple silicon and Intel that requires macOS 14 or later. It is signed with a Developer ID and notarized. Even so, the README asks you to approve it in Privacy & Security on first launch.
