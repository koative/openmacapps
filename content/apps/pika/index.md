---
name: "Pika"
summary: "Pick colours from anywhere on screen, copy them in common formats, and check foreground and background contrast."
category: "Design"
tags:
  - color
  - accessibility
  - keyboard-shortcuts
repository: "https://github.com/superhighfives/pika"
website: "https://superhighfives.com/pika"
license: "MIT"
licenseUrl: "https://github.com/superhighfives/pika/blob/main/LICENSE.md"
download: "https://superhighfives.com/pika"
freeDownload: true
homebrew: "pika"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/superhighfives/pika"
  - "https://github.com/superhighfives/pika/blob/main/LICENSE.md"
  - "https://superhighfives.com/pika"
  - "https://github.com/superhighfives/pika/releases"
  - "https://github.com/superhighfives/pika/blob/main/README.md"
  - "https://github.com/superhighfives/pika/releases/tag/2.0.2"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/superhighfives/pika/main/Pika/Assets/Assets.xcassets/AppIcon.appiconset/256x256%402x.png"
    credit: "Charlie Gleason and Pika contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Pika samples two colours from anywhere on screen, a foreground and a background, and shows the contrast between them next to their values, ready to copy. Press Command-D to pick the foreground, Shift-Command-D for the background, or Option-Command-D to pick both in a row from any app.

- Contrast is checked with WCAG 2, which gives a ratio, or with APCA, which gives an Lc value that weighs text size and weight.
- Seven formats are available, from Hex and RGB through LAB and OKLCH to OpenGL, in sRGB or Display P3. Contrast is always worked out in sRGB.
- You can click a value to type a new one, scrub it by dragging or with a two-finger scroll, or step it with the arrow keys.
- Picks keep a history with colour names, undo and redo.

The basic picker uses the macOS sampler. The Pro picker adds a live loupe and needs the Screen Recording permission. Pressing X swaps foreground and background, which helps when you sampled them in the wrong order.

Most shortcuts work only while Pika is in front, but show/hide and the pair pick are global and can be reassigned in settings. A `pika://` URL scheme covers picking, copying, format changes, swapping and history, and it can copy both colours as text or JSON, so scripts and launchers can drive it.

Pika 2.0.2 needs macOS 14 or later. The DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. It is also on the App Store.
