---
name: "Deckle"
summary: "Lays a faint, click-through paper-grain texture over the whole screen, controlled from the menu bar."
category: "Utilities"
tags:
  - menu-bar
  - display
  - reading
  - customization
repository: https://github.com/Kelvanic/deckle
website: https://kelvanic.com/products/deckle/
license: "MIT"
licenseUrl: https://github.com/Kelvanic/deckle/blob/dev/LICENSE
download: https://github.com/Kelvanic/deckle/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Kelvanic/deckle
  - https://github.com/Kelvanic/deckle/blob/dev/LICENSE
  - https://github.com/Kelvanic/deckle/releases
  - https://raw.githubusercontent.com/Kelvanic/deckle/dev/README.md
  - https://github.com/Kelvanic/deckle/releases/tag/v2.0.0
  - https://kelvanic.com/products/deckle/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Kelvanic/deckle/dev/docs/icon.png
    credit: "Deckle contributors (Kelvanic)"
    license: "MIT; upstream project asset, trademarks retained"
---

Deckle lays a faint paper texture over every display, or a smooth dimming veil if you prefer no grain. Click the italic d in the menu bar, choose one of 26 built-in papers, and set the intensity between 5 and 45 percent. Every click passes straight through the overlay to the app underneath.

- Desk setups save up to eight named mixes of paper, intensity, grain and matte finish, with Read, Write and Unwind as starting points.
- Paper Mill builds custom papers while previewing them on your real desktop, and exports them as JSON files you can import again later.
- Per-app rules hide the paper while chosen apps are in front, or show it only for those apps.
- Option-Command-P toggles the paper from any app, and a snooze pauses it for up to two hours.
- `deckle://` URLs switch it on, change paper or set intensity from Shortcuts, Raycast, cron or Terminal.

Each display gets its own overlay, and you can exclude any of them. An option hides the texture from screenshots and recordings, though some screen-sharing apps may still capture it. Opt-in paper pets, a cat and a fish, can wander the screen too.

Deckle needs macOS 13 or later. The DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and a Homebrew cask comes from the developer's own tap. Deckle looks for new versions on GitHub roughly once a day and installs them unattended only if you turn that on.

The README says plainly that Deckle is a matte texture, not a calibrated blue-light filter, and that it cannot change how reflective the glass is.
