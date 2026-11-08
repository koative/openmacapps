---
name: "Notchly"
summary: "Turns the MacBook notch into a small panel for media controls, battery status and Codex alerts."
category: "Utilities"
tags:
  - notch
  - media-controls
  - notifications
repository: https://github.com/Notchly/Notchly
website: https://notchly.xyz/
license: "MIT"
licenseUrl: https://github.com/Notchly/Notchly/blob/main/LICENSE
download: https://github.com/Notchly/Notchly/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Notchly/Notchly
  - https://raw.githubusercontent.com/Notchly/Notchly/main/README.md
  - https://github.com/Notchly/Notchly/blob/main/LICENSE
  - https://github.com/Notchly/Notchly/releases
  - https://github.com/Notchly/Notchly/releases/tag/v1.2.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Notchly/Notchly/main/Notchly/Resources/Assets.xcassets/AppIcon.appiconset/logo_256x256.png
    credit: "Notchly contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Notchly fills the black space around the MacBook notch with things you check many times a day: what is playing, how much battery is left, and whether a coding agent is waiting on you. Swipe gestures in the notch handle quick interactions.

What it shows:

- Now-playing controls for Spotify, Apple Music and other supported media sources.
- Battery level and charging state, with a low-battery threshold you set.
- Music controls on the lock screen.
- An animation when a Focus mode changes.

With more than one monitor you choose how it behaves on the primary display. Settings also cover launch at login, a lock sound and how long the music preview stays up.

If you work with Codex, Notchly can show an alert in the notch when a session needs your approval or has finished a task. You switch this on under Settings → Codex, choose whether each kind of alert plays a sound, and restart Codex so its local Stop hook can report finished tasks. Controlling Spotify or Apple Music from the notch may prompt macOS to ask for Automation permission.

The project says it collects no personal data. It needs macOS 14.6 or later and ships one DMG that runs on both Apple silicon and Intel Macs. The 1.2.2 build is signed with a Developer ID and notarized by Apple, and Sparkle handles updates.
