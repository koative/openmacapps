---
name: LockIME
summary: Locks or switches your keyboard input source for the whole Mac, for single apps or for websites.
category: Utilities
tags:
  - keyboard
  - languages
  - input
  - keyboard-customization
repository: https://github.com/oomol-lab/LockIME
website: https://github.com/oomol-lab/LockIME
license: GPL-3.0
licenseUrl: https://github.com/oomol-lab/LockIME/blob/main/LICENSE
download: https://github.com/oomol-lab/LockIME/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/oomol-lab/LockIME
  - https://github.com/oomol-lab/LockIME/blob/main/LICENSE
  - https://github.com/oomol-lab/LockIME/blob/main/README.md
  - https://raw.githubusercontent.com/oomol-lab/LockIME/main/README.md
  - https://github.com/oomol-lab/LockIME/releases
  - https://github.com/oomol-lab/LockIME/releases/tag/v1.7.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/oomol-lab/LockIME/blob/89f2cb258e5f83949d5f0e33561a91a353a26230/Sources/LockIME/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: LockIME contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

LockIME keeps your keyboard on the input source you choose. When you or another app changes it, LockIME switches straight back. The lock can cover the whole Mac, single apps or websites open in your browser.

A rule for an app or a website either locks a source or switches to it once when that app or page comes to the front, after which you can change it freely. The global default can lock, switch once, or do nothing and leave the work to your per-app and per-website rules.

- Programs started from a bare executable, such as the java process behind Minecraft, can have rules while they run.
- Website rules match a domain with its subdomains, an exact domain, a keyword or a regular expression, in a priority order you set by dragging.
- Global shortcuts turn LockIME on and off and cycle through input sources.
- A log keeps the last 24 hours of switches, with the reason for each.
- Rules export to a `.lockime` file, and importing shows the additions, conflicts and removals before applying them.
- A `lockime://` URL scheme, off by default, lets scripts and Shortcuts control the app.

Some programs, games among them, keep forcing their own input source. LockIME spots the back-and-forth, pauses for a moment and notes it in the log. An Ignore or Switch to rule for that program settles it.

Core locking needs no system permissions. Website rules depend on an optional enhanced mode, which requires Accessibility access.

LockIME requires macOS 14 or later. Apple silicon and Intel Macs get separate DMGs of under 3 MB, and both DMGs of version 1.7.1 are notarized. The app updates itself through Sparkle, and its interface switches between nine languages without a restart.
