---
name: "Keyty"
summary: "Puts keystrokes, shortcuts and mouse clicks on screen as an overlay for demos, tutorials and streams."
category: "Utilities"
tags: ["keyboard", "mouse", "presentations", "screen-recording"]
repository: "https://github.com/keytyapp/Keyty"
website: "https://keyty.app"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/keytyapp/Keyty/blob/main/LICENSE"
download: "https://github.com/keytyapp/Keyty/releases"
freeDownload: true
homebrew: "keyty"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/keytyapp/Keyty", "https://github.com/keytyapp/Keyty/blob/main/LICENSE", "https://github.com/keytyapp/Keyty/releases", "https://keyty.app", "https://raw.githubusercontent.com/keytyapp/Keyty/main/README.md", "https://raw.githubusercontent.com/keytyapp/Keyty/main/Docs/PRIVACY.md", "https://github.com/keytyapp/Keyty/releases/tag/v1.8.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/keytyapp/Keyty/main/Assets/Application/AppIcon/AppIcon.png", "credit": "Serhii Bykov and Keyty contributors", "license": "BSD-3-Clause; upstream project asset, trademarks retained"}]
screenshots: []
---

Keyty puts the keys you press and the clicks you make on screen, so people watching a recording, a livestream or a live demo can see which shortcut you just used. Each shortcut, special key or typed character appears in an overlay and fades after a set time.

- Overlay styles, themes, colours, size and fade timing are adjustable, and a history option leaves a trail of recent input.
- Filters can hide media keys, special keys, mouse events or keystrokes that carry a modifier.
- A ring can follow the pointer, with its own shape, colour, size and thickness, and a pointer icon overlay can sit beside it.
- Click ripples mark each click, and scrolling is shown too.
- You pick the display, the anchor point on screen, the margin and the direction new entries stack in.

Release 1.8.0 added toggles for each visualizer in the status menu, a global switch for all input visualizations and timing settings for the mouse effects.

Keyty 1.8.0 needs macOS 11 or later. Its DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. It is also available as a Homebrew cask.

Showing input means reading it. The GitHub build asks for the Accessibility permission, while App Store builds use Input Monitoring instead. Typed text appears in the overlay along with shortcuts, so switch the visualizations off before you type anything private on camera. The developer says input is processed on the Mac and never recorded or uploaded, with Sparkle update checks as the only network traffic besides links you open.
