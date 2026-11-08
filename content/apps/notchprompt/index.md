---
name: Notchprompt
summary: A teleprompter that scrolls your script beside the notch while you present or record.
category: Productivity
tags:
  - teleprompter
  - presentations
  - notch
repository: https://github.com/saif0200/notchprompt
website: https://notchprompt.vercel.app
license: MIT
licenseUrl: https://github.com/saif0200/notchprompt/blob/main/LICENSE
download: https://github.com/saif0200/notchprompt/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: 2026-11-08
sources:
  - https://github.com/saif0200/notchprompt
  - https://github.com/saif0200/notchprompt/blob/main/LICENSE
  - https://github.com/saif0200/notchprompt/blob/main/README.md
  - https://github.com/saif0200/notchprompt/releases
  - https://github.com/saif0200/notchprompt/releases/tag/v1.1.3
assets:
  - path: ./assets/icon.png
    source: https://github.com/saif0200/notchprompt/blob/bbe1e19a8610986efd3a6c0ff52966d8138ad577/notchprompt/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Notchprompt contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Notchprompt is a teleprompter that sits beside the MacBook notch, at the top of the screen. You read your script from there while you give a presentation or record a video.

It runs from the menu bar, where it shows up as "NP". You import a plain-text script, start it, and the text scrolls in a small floating panel with its own start, pause, reset and jump-back controls. An optional countdown gives you a moment before the scrolling begins.

- Speed, font size and the panel's width and height are all adjustable.
- Option-Command shortcuts start and pause the script, reset it, jump back five seconds, change the speed and toggle privacy mode.
- Scripts can be exported again as plain text.
- A privacy mode tries to keep the panel out of screen shares and recordings.

That privacy mode relies on a macOS window-sharing setting, and the README calls it best-effort and dependent on the app doing the capturing, so test it with your own recording or meeting software first.

Notchprompt needs macOS 14 or later. The 1.1.3 release has separate DMGs for Apple silicon and Intel Macs. The builds are not signed or notarized, so macOS may block the first launch; the README explains how to allow it through Privacy & Security.
