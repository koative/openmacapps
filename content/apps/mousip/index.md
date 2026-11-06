---
name: "Mousip"
summary: "Switches Spaces and full-screen apps when you tilt a mouse wheel sideways; a middle click can open Mission Control."
category: "Utilities"
tags:
  - mouse
  - window-management
  - desktop
  - menu-bar
repository: "https://github.com/daveleone/mousip"
website: "https://github.com/daveleone/mousip"
license: "MIT"
licenseUrl: "https://github.com/daveleone/mousip/blob/main/LICENSE"
download: "https://github.com/daveleone/mousip/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/daveleone/mousip"
  - "https://github.com/daveleone/mousip/blob/main/LICENSE"
  - "https://github.com/daveleone/mousip/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/daveleone/mousip/releases/download/v0.4.0/Mousip.dmg"
    credit: "The Mousip Authors"
    license: "MIT; upstream app icon, trademarks retained"
---

Mousip turns a sideways tilt of a notched scroll wheel into a move to the next or previous Space, including full-screen apps. It posts the Mission Control shortcuts you already have, and tilted events are consumed so apps do not scroll sideways; holding Option lets them through. An optional middle click on an empty spot opens Mission Control. It was built for the HP 480 mouse but works with any mouse that reports wheel tilt as horizontal scrolling. Trackpads and the Magic Mouse are left alone.

It needs macOS 13 or later and the Accessibility permission, which macOS asks for on first launch. The release DMG is a universal build. Releases are ad-hoc signed and not notarized, so the first launch must be allowed in System Settings. The "Move left/right a space" shortcuts must stay enabled in Keyboard settings, or nothing switches.
