---
name: "SlowQuitApps"
summary: "Makes you hold Command-Q for a moment before an app quits, so a stray keypress does not close it."
category: "Utilities"
tags: ["keyboard-shortcuts", "menu-bar"]
repository: "https://github.com/dteoh/SlowQuitApps"
website: "https://github.com/dteoh/SlowQuitApps"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/dteoh/SlowQuitApps/blob/master/LICENSE"
download: "https://github.com/dteoh/SlowQuitApps/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release or commit since December 2020."
sources: ["https://github.com/dteoh/SlowQuitApps", "https://github.com/dteoh/SlowQuitApps/blob/master/LICENSE", "https://github.com/dteoh/SlowQuitApps/releases", "https://github.com/dteoh/SlowQuitApps/blob/master/README.md", "https://raw.githubusercontent.com/dteoh/SlowQuitApps/master/README.md", "https://github.com/dteoh/SlowQuitApps/releases/tag/v0.8.1", "https://github.com/dteoh/SlowQuitApps/commits/master"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/dteoh/SlowQuitApps/master/SlowQuitApps/Images.xcassets/AppIcon.appiconset/256pt%401x.png", "credit": "fancyme for SlowQuitApps", "license": "GPL-2.0-or-later; upstream project asset, trademarks retained"}]
screenshots: []
---

SlowQuitApps makes Command-Q wait. While it runs, you have to hold the shortcut for one second before an app quits, and an overlay in the middle of the screen counts down as you hold. Let go early and nothing happens, which protects you when you meant to press Command-W. The developer compares it to the "Warn Before Quitting" option in Google Chrome, applied to every app.

You change its behaviour with `defaults write com.dteoh.SlowQuitApps` in Terminal, then quit and relaunch the app:

- `delay` sets the hold time in milliseconds.
- `whitelist` holds bundle IDs of apps that receive Command-Q straight away.
- `invertList` flips that list, so only the listed apps get the delay.
- `displayOverlay` turns the countdown overlay off.

Installing through the developer's Homebrew tap adds an `sqa` command that wraps these settings. The app needs the Accessibility permission, and the README says that after each upgrade you have to remove SlowQuitApps from the Accessibility list and add it back.

The last release, 0.8.1 from December 2020, is a ZIP holding a Universal app for Apple silicon and Intel with macOS 10.14 as its declared minimum. The README says the app is developed on Mojave and only Mojave is supported, and it keeps versions 0.5.0 and 0.4.0 for older systems.
