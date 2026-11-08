---
name: "AltTab"
summary: "Shows every open window as a thumbnail behind one shortcut, so you can switch to a specific window rather than an app."
category: "Productivity"
tags: ["window-management", "keyboard", "native", "app-switcher"]
repository: "https://github.com/lwouis/alt-tab-macos"
website: "https://alt-tab.app"
license: "GPL-3.0"
licenseUrl: "https://github.com/lwouis/alt-tab-macos/blob/master/LICENCE.md"
download: "https://github.com/lwouis/alt-tab-macos/releases"
freeDownload: true
homebrew: "alt-tab"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/lwouis/alt-tab-macos", "https://github.com/lwouis/alt-tab-macos/blob/master/LICENCE.md", "https://alt-tab.app", "https://alt-tab.app/features", "https://alt-tab.app/pricing", "https://alt-tab.app/faq", "https://github.com/lwouis/alt-tab-macos/releases/tag/v11.10.1"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot.webp", "alt": "AltTab window switcher showing previews of open Mac windows.", "source": "https://raw.githubusercontent.com/lwouis/alt-tab-macos/master/docs/readme/screenshot-source.webp", "credit": "AltTab contributors"}]
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/lwouis/alt-tab-macos/master/resources/icons/app/app.png", "credit": "AltTab contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}, {"path": "./assets/screenshot.webp", "source": "https://raw.githubusercontent.com/lwouis/alt-tab-macos/master/docs/readme/screenshot-source.webp", "credit": "AltTab contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

AltTab is a window switcher that lists every open window rather than every app. Press its shortcut, Option-Tab by default, and thumbnails of your windows appear. Release the keys to bring the selected one forward, or keep the switcher open and browse; the selected window is shown full size behind it before you commit.

The built-in Command-Tab cycles through apps, so two documents in the same app share one entry. AltTab gives each window its own thumbnail, including minimized and hidden windows and those on other Spaces or screens, each with a badge saying where it is. Hovering a thumbnail lets you close, minimize or full-screen that window without switching to it. Shortcuts can be limited to one app, Space or screen, virtual machines and remote desktops can be kept out of the list, and a three-finger swipe opens the switcher. A command-line tool lists and focuses windows from scripts.

The switcher itself is free. AltTab Pro, a one-time purchase, adds window search, icon and title-list styles, auto-sized thumbnails and up to nine shortcuts; all of it can be tried for 14 days. The source is GPL-3.0, and the Pro license applies to the signed builds the developer distributes. The developer says the app has no telemetry or tracking. A Pro license is re-checked with the developer's server from time to time, and a failed check does not lock the app.

AltTab needs macOS 12 or later. The download is a universal zip for Apple silicon and Intel, signed with a Developer ID and notarized by Apple. It asks for Accessibility permission to switch windows and Screen Recording permission to draw thumbnails; without the second it still switches, but shows no previews.
