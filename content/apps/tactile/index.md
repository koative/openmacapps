---
name: Tactile
summary: Ticks a Force Touch trackpad whenever the pointer moves over a button, link
  or other clickable element.
category: Utilities
tags:
- trackpad
- accessibility
- menu-bar
repository: https://github.com/Mason363/Tactile
website: https://tactile.masn.studio
license: MIT
licenseUrl: https://github.com/Mason363/Tactile/blob/main/LICENSE
download: https://github.com/Mason363/Tactile/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/Mason363/Tactile
- https://github.com/Mason363/Tactile/blob/main/LICENSE
- https://github.com/Mason363/Tactile/releases
- https://tactile.masn.studio
- https://raw.githubusercontent.com/Mason363/Tactile/main/README.md
- https://github.com/Mason363/Tactile/releases/tag/v1.1.5
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/Mason363/Tactile/main/Tactile/Assets.xcassets/AppIcon.appiconset/icon_256.png
  credit: Mason Chen
  license: MIT; upstream project asset, trademarks retained
---

Tactile makes the trackpad tick under your finger when the pointer reaches something you can click: a button, link, checkbox, menu or tab. It reads the same accessibility tree VoiceOver uses, so the cue arrives in any app that exposes one, without depending on the hover color an app may draw.

- Each kind of element can have its own waveform, picked from presets such as double taps, ramps or a heartbeat, or composed step by step.
- Close buttons and controls labeled Delete, Remove or Reset play a separate warning feel.
- Visual aids for low vision add an outline around the hovered control, a colored circle under the cursor, a crosshair and a label showing the element's type and where it sits.
- Alerts turn sound into touch: incoming FaceTime, Zoom or Teams calls ring on the trackpad, and an optional mode lets you feel the music the Mac is playing.
- Keyboard shortcuts, modifiers or every key press can tick as well.

Tactile needs a Force Touch trackpad, the Accessibility permission and macOS 14.6 or later; feeling music also needs System Audio Recording. An optional enhanced mode drives the haptic actuator through a private framework and falls back to standard haptics if that fails. The 1.1.5 disk image and its Universal app are notarized, and updates arrive through Sparkle.

Some web pages build buttons out of plain page elements that never reach the accessibility tree. An optional Chrome extension reads the page itself so those controls tick too. When the mouse is still, Tactile does no work at all.
