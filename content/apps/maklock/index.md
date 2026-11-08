---
name: "MakLock"
summary: "Locks chosen apps behind Touch ID, Apple Watch or a password, with auto-lock on idle or sleep."
category: "Privacy & security"
tags:
  - security
  - privacy
  - menu-bar
repository: https://github.com/dutkiewiczmaciej/MakLock
website: https://dutkiewiczmaciej.github.io/MakLock/
license: "MIT"
licenseUrl: https://github.com/dutkiewiczmaciej/MakLock/blob/main/LICENSE
download: https://github.com/dutkiewiczmaciej/MakLock/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/dutkiewiczmaciej/MakLock
  - https://github.com/dutkiewiczmaciej/MakLock/blob/main/LICENSE
  - https://github.com/dutkiewiczmaciej/MakLock/releases
  - https://github.com/dutkiewiczmaciej/MakLock/blob/main/README.md
  - https://github.com/dutkiewiczmaciej/MakLock/releases/tag/v1.0.1
  - https://dutkiewiczmaciej.github.io/MakLock/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/dutkiewiczmaciej/MakLock/main/MakLock/Resources/Assets.xcassets/AppIcon.appiconset/icon_512.png
    credit: "Maciej Dutkiewicz"
    license: "MIT; upstream project asset, trademarks retained"
---

MakLock puts an authentication step in front of individual apps, so someone else at your Mac can't simply open Messages or another app you keep private. You pick the apps to protect in its settings. When one of them is launched, or when you switch back to it while it is already running, a blurred overlay covers it on every display until you unlock with Touch ID, a nearby Apple Watch or a backup password.

- It locks the protected apps again after a period of idle time, and when the Mac sleeps and wakes.
- Quitting an app with Command-Q clears the unlock, so the next launch asks again.
- It can quit protected apps that sit unused, which keeps their notifications from showing, and can close them when the Mac goes to sleep.
- Apple Watch unlock uses wrist detection and needs watchOS 9 or later. When the watch leaves range, the apps lock again.

The developer says MakLock is distributed outside the App Store because a sandboxed app could not manage the overlay and other apps' processes this way. It lives in the menu bar with no Dock icon, updates itself through Sparkle and needs macOS 13 or later. The 1.0.1 DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and the developer's Homebrew tap offers it as a cask.

Some safeguards keep you from locking yourself out. Terminal, Xcode, Activity Monitor and other system tools can never be locked, and the overlay goes away by itself after 60 seconds without input. Command-Option-Shift-Control-U dismisses every overlay at once, which also means anyone who knows the shortcut can get past it.
