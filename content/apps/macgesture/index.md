---
name: "MacGesture"
summary: "Turns mouse gestures drawn anywhere on your Mac into keyboard shortcuts, with rules filtered per app."
category: "Utilities"
tags:
  - mouse
  - gestures
  - keyboard-shortcuts
repository: https://github.com/MacGesture/MacGesture
website: https://github.com/MacGesture/MacGesture
license: "GPL-3.0"
licenseUrl: https://github.com/MacGesture/MacGesture/blob/develop/LICENSE
download: https://github.com/MacGesture/MacGesture/releases
freeDownload: true
homebrew: "macgesture"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/MacGesture/MacGesture
  - https://raw.githubusercontent.com/MacGesture/MacGesture/develop/README.md
  - https://github.com/MacGesture/MacGesture/blob/develop/LICENSE
  - https://github.com/MacGesture/MacGesture/releases
  - https://github.com/MacGesture/MacGesture/releases/tag/3.2.0
  - https://formulae.brew.sh/cask/macgesture
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/MacGesture/MacGesture/develop/MacGesture/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-256.png
    credit: "MacGesture contributors"
    license: "GPL-3.0 repository asset; trademarks retained"
---

MacGesture lets you hold the right mouse button, draw a stroke and have the Mac press a keyboard shortcut for you. It works in every app, so a downward drag can open a new tab in Safari or Chrome and a down-then-right drag can close it.

Each rule pairs a gesture with a shortcut and an app filter. Gestures are short letter strings: L, U, R and D for the four directions, Z for a left click, and lowercase u and d for the scroll wheel. Wildcards `?` and `*` are allowed, and the first matching rule wins. Filters use bundle identifiers with wildcards, so `*safari|*chrome` limits a rule to two browsers, and a leading `!` excludes an app.

A per-rule option fires the shortcut on every match while the button is still held. With that, you can drag up and then turn the wheel to step through tabs one at a time. Settings can be exported and imported from the General panel when you move to a new Mac.

Version 3.2.0 is a Universal ZIP that needs macOS 10.13 or later. The app checks for updates itself and is also available as a Homebrew cask.

The README lists a few known snags. Right click may stop working in some Java apps such as WebStorm, and some system-wide shortcuts can be assigned only after you switch them off in System Settings for a moment.
