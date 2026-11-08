---
name: KeyCastr
summary: "Shows your keystrokes and mouse clicks on screen during demos, presentations and screen recordings."
category: Utilities
tags:
  - presentations
  - keyboard
  - screen-recording
repository: https://github.com/keycastr/keycastr
website: https://github.com/keycastr/keycastr
license: BSD-3-Clause
licenseUrl: https://github.com/keycastr/keycastr/blob/main/LICENSE.md
download: https://github.com/keycastr/keycastr/releases
freeDownload: true
homebrew: "keycastr"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/keycastr/keycastr
  - https://github.com/keycastr/keycastr/blob/main/LICENSE.md
  - https://github.com/keycastr/keycastr/blob/main/README.md
  - https://github.com/keycastr/keycastr/releases
  - https://raw.githubusercontent.com/keycastr/keycastr/main/README.md
  - https://github.com/keycastr/keycastr/releases/tag/v0.11.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/keycastr/keycastr/blob/1e552a150afdf8f73fa4a12ba3cca1bbf09eb6ab/keycastr/KeyCastr-512.png
    credit: QuintB and KeyCastr contributors
    license: BSD-3-Clause; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

KeyCastr draws the keys you press on screen while you record a screencast, present or pair with someone. You choose how much it shows: command keys only, every key pressed with a modifier, or every keystroke. Mouse clicks can be shown as well.

The overlay starts at the bottom left of the display, and you drag the text to move it. Two visualizers come with the app, Default and Svelte, and developers can build their own on top of KeyCastr.

macOS has to let KeyCastr receive input events. On macOS 10.15 and later it appears under Input Monitoring in the Security & Privacy settings after its first launch. On older systems you add it under Accessibility. When nothing shows up, the usual causes are a missing permission or a window placed off screen.

Any app in those lists can read all of your input. The developers say KeyCastr's only network traffic is Sparkle's update check, and password fields that apps mark as secure never appear in the overlay.

The GitHub release is a ZIP holding a Universal app for Apple silicon and Intel, notarized, which runs on macOS 10.13 or later. KeyCastr has been free on the Mac since 2009 and uses the BSD 3-Clause license.
