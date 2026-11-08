---
name: "Hidden Bar"
summary: "Hides the menu bar icons you rarely need behind an arrow that you click to show them again."
category: "Utilities"
tags: ["menu-bar", "minimal", "native"]
alternativeTo: ["bartender"]
repository: "https://github.com/dwarvesf/hidden"
website: "https://github.com/dwarvesf/hidden"
license: "MIT"
licenseUrl: "https://github.com/dwarvesf/hidden/blob/develop/LICENSE"
download: "https://github.com/dwarvesf/hidden/releases"
freeDownload: true
homebrew: "hiddenbar"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/dwarvesf/hidden", "https://github.com/dwarvesf/hidden/blob/develop/LICENSE", "https://raw.githubusercontent.com/dwarvesf/hidden/develop/README.md", "https://raw.githubusercontent.com/dwarvesf/hidden/develop/docs/MANUAL.md", "https://github.com/dwarvesf/hidden/releases/tag/v1.11.1", "https://www.macbartender.com"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot.png", "alt": "Hidden Bar menu bar divider and application icons.", "source": "https://raw.githubusercontent.com/dwarvesf/hidden/develop/img/screen1.png", "credit": "Hidden Bar contributors"}]
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/dwarvesf/hidden/develop/hidden/Assets.xcassets/AppIcon.appiconset/icon_256%401x.png", "credit": "Hidden Bar contributors", "license": "MIT; upstream project asset, trademarks retained"}, {"path": "./assets/screenshot.png", "source": "https://raw.githubusercontent.com/dwarvesf/hidden/develop/img/screen1.png", "credit": "Hidden Bar contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

Hidden Bar adds an arrow to the menu bar. Hold Command and drag the icons you rarely use to its left, then click the arrow to collapse them out of sight or bring them back.

- Auto collapse hides the icons again after a delay you pick.
- A global shortcut expands or collapses the bar from any app.
- An always-hidden section keeps icons out of view even when the bar is expanded. Option-click the arrow to reveal it.
- Terminal settings add hover-to-expand and custom auto-collapse delays.

A new menu bar icon always appears at the far left, so a freshly installed or updated app can land in the hidden zone. Drag it to the right of the divider once and macOS remembers the spot. On macOS 27 the direct-download build hides icons by a new method that needs the Accessibility permission. There, hiding works per app, and the clock, Wi-Fi, Sound and Control Center always stay visible.

Hidden Bar needs macOS 13 Ventura or later. Version 1.10 stays on the releases page for macOS 10.13 to 12. The GitHub ZIP holds a Universal app, Developer ID-signed and notarized. The Mac App Store version is sandboxed, so it cannot use the macOS 27 hiding method.

Bartender also tidies the menu bar and adds search, triggers and custom hotkeys, and it is paid after a trial period. Hidden Bar is MIT-licensed and keeps to the arrow, the divider and the always-hidden section.
