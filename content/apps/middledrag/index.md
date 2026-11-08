---
name: MiddleDrag
summary: "Turns three-finger trackpad taps and drags into middle clicks and middle-button drags."
category: Utilities
tags:
  - trackpad
  - gestures
  - middle-click
repository: https://github.com/NullPointerDepressiveDisorder/MiddleDrag
website: https://middledrag.app/
license: MIT
licenseUrl: https://github.com/NullPointerDepressiveDisorder/MiddleDrag/blob/main/LICENSE
download: https://github.com/NullPointerDepressiveDisorder/MiddleDrag/releases
freeDownload: true
homebrew: "middledrag"
featured: false
added: 2026-10-17
verified: 2026-11-08
sources:
  - https://github.com/NullPointerDepressiveDisorder/MiddleDrag
  - https://github.com/NullPointerDepressiveDisorder/MiddleDrag/blob/main/LICENSE
  - https://github.com/NullPointerDepressiveDisorder/MiddleDrag/blob/main/README.md
  - https://github.com/NullPointerDepressiveDisorder/MiddleDrag/releases
  - https://raw.githubusercontent.com/NullPointerDepressiveDisorder/MiddleDrag/main/README.md
  - https://middledrag.app/
  - https://github.com/NullPointerDepressiveDisorder/MiddleDrag/releases/tag/v1.4.3
assets:
  - path: ./assets/icon.png
    source: https://github.com/NullPointerDepressiveDisorder/MiddleDrag/blob/3cb680cbb9b2d43666150c8f78a8a2ef60b37f62/MiddleDrag/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: MiddleDrag contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

MiddleDrag turns a three-finger tap on the trackpad into a middle click and a three-finger drag into a middle-button drag. In a browser that means opening links in background tabs or closing a tab with a tap. In 3D and CAD apps such as Blender or FreeCAD, the drag pans and orbits the viewport.

Mission Control, Exposé and the other system gestures keep working. MiddleDrag reads raw touch data through Apple's private MultitouchSupport framework before the system gesture recognizer sees it, then posts synthetic middle-mouse events. Tap lightly: a hard press can still trigger Mission Control.

The app sits in the menu bar as a hand icon, and its menu holds the settings.

- An on/off switch for gesture recognition.
- Drag sensitivity, from 0.5x to 2x cursor speed.
- A rule that ignores touches with four or more fingers.
- Launch at login.

MiddleDrag needs the Accessibility permission, and it works with built-in MacBook trackpads and the Magic Trackpad. Each update counts as a new app to macOS, so if gestures stop after an update, switch MiddleDrag off and on again under Privacy & Security > Accessibility.

MiddleDrag requires macOS 15 Sequoia or later. Releases come as a PKG installer containing a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. Each download carries a GitHub artifact attestation you can check with the `gh` command. The app updates itself and sends crash reports to the developer.
