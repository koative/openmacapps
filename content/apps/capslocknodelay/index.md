---
name: 'CapsLockNoDelay'
summary: 'Removes the delay macOS adds when you press Caps Lock, running in the background with no window.'
category: 'Utilities'
tags:
  - keyboard
  - input
  - keyboard-customization
repository: https://github.com/gkpln3/CapsLockNoDelay
website: https://github.com/gkpln3/CapsLockNoDelay
license: MIT
licenseUrl: https://github.com/gkpln3/CapsLockNoDelay/blob/main/LICENSE
download: https://github.com/gkpln3/CapsLockNoDelay/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since December 2022."
icon: ./assets/icon.png
sources:
  - https://github.com/gkpln3/CapsLockNoDelay
  - https://github.com/gkpln3/CapsLockNoDelay/blob/main/LICENSE
  - https://github.com/gkpln3/CapsLockNoDelay/releases
  - https://formulae.brew.sh/cask/capslocknodelay
  - https://raw.githubusercontent.com/gkpln3/CapsLockNoDelay/main/README.md
  - https://github.com/gkpln3/CapsLockNoDelay/releases/tag/V1.0.8
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gkpln3/CapsLockNoDelay/main/CapsLockNoDelay/Assets.xcassets/AppIcon.appiconset/icon-512x512-1.png
    credit: 'Guy Kaplan (CapsLockNoDelay)'
    license: 'MIT repository asset; icon retained by the project'
---

When you press Caps Lock, macOS waits a short moment before the key takes effect. CapsLockNoDelay removes that delay for as long as it is running, so the key responds as soon as you press it.

The app has no window or settings. It runs in the background, and you can see it in Activity Monitor. To keep it working, add it to Login Items yourself and grant it Accessibility permission, plus Input Monitoring where macOS lists the app.

Before installing anything, try the alternative the README now recommends first. Running `hidutil property --set '{"CapsLockDelayOverride":0}'` in Terminal turns off the same delay without the app, and the README says to fall back to the app only if that does not work.

The latest release, v1.0.8, came out in December 2022. Its DMG holds a Universal app for Apple silicon and Intel with a minimum of macOS 10.15. The app is not notarized, so Gatekeeper blocks the first launch. The author reports that it still works on macOS Sequoia 15.5. You can also install it with `brew install --cask capslocknodelay`.
