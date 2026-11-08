---
name: Mos
summary: Smooths mouse-wheel scrolling and sets its direction apart from the trackpad, with per-app settings and button bindings.
category: Utilities
tags:
  - mouse
  - scrolling
  - smooth-scrolling
repository: https://github.com/Caldis/Mos
website: https://mos.caldis.me/
license: CC-BY-NC-4.0
licenseUrl: https://github.com/Caldis/Mos/blob/master/LICENSE
download: https://github.com/Caldis/Mos/releases
freeDownload: true
homebrew: "mos"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/Caldis/Mos", "https://github.com/Caldis/Mos/blob/master/LICENSE", "https://github.com/Caldis/Mos/blob/master/README.md", "https://github.com/Caldis/Mos/blob/master/README.enUS.md", "https://mos.caldis.me/", "https://github.com/Caldis/Mos/releases", "https://github.com/Caldis/Mos/releases/tag/4.2.1"]
sourceAvailability: source-available
licenseNotes: CC BY-NC 4.0 allows sharing and adaptation with attribution but restricts commercial use. It is not an open-source software license.
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Caldis/Mos/master/Mos/Assets.xcassets/AppIcon.appiconset/Base-256.png", "credit": "Mos contributors", "license": "CC-BY-NC-4.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Mos takes over the wheel of an ordinary mouse and turns its coarse steps into smooth, gliding movement, while the trackpad keeps its own behaviour. You set the step size, gain and duration in its settings, or switch on a mode that imitates trackpad scrolling.

- Vertical and horizontal scrolling each get their own smoothing and reverse switches, so the wheel can run opposite to the trackpad.
- Hotkeys you choose can speed up scrolling, swap the axis, or pause smoothing for a moment.
- Every app can inherit the global settings or override scrolling, shortcuts and button bindings.
- Any mouse button, key or custom event can be recorded and bound to a system action, a shortcut, an app, a script or a file.
- Built-in actions cover Mission Control, Spaces, screenshots, Finder and document editing.
- Logitech buttons work through Bolt and Unifying receivers or direct Bluetooth, including Logitech-specific actions.

Mos sits in the menu bar. macOS may prompt for the Accessibility permission when Mos first opens; without it, Mos cannot read or rewrite scroll events.

The current release runs on macOS 10.13 or later as a Universal app for Apple silicon and Intel. It comes as a ZIP, and the app inside is Developer ID-signed and notarized. Homebrew users can install the `mos` cask.

The code is published under CC BY-NC 4.0, which forbids commercial use, so OpenMacApps lists Mos as source available. The developer also asks that nobody upload it to the App Store.
