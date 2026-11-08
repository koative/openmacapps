---
name: StrokeMouse
summary: Runs shortcuts, opens apps, controls windows or starts scripts when you draw a gesture with the mouse or trackpad.
category: Productivity
tags:
- gestures
- mouse
- trackpad
- automation
repository: https://github.com/Licoy/StrokeMouse
website: https://strokemouse.com
license: AGPL-3.0
licenseUrl: https://github.com/Licoy/StrokeMouse/blob/main/LICENSE
download: https://strokemouse.com/en/download
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/Licoy/StrokeMouse
- https://github.com/Licoy/StrokeMouse/blob/main/LICENSE
- https://github.com/Licoy/StrokeMouse/releases
- https://strokemouse.com/en/download
- https://raw.githubusercontent.com/Licoy/StrokeMouse/main/README.md
- https://github.com/Licoy/StrokeMouse/releases/tag/v0.0.41
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/Licoy/StrokeMouse/main/StrokeMouse/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-256%402x.png
  credit: Licoy and StrokeMouse contributors
  license: AGPL-3.0; upstream project asset, trademarks retained
---

StrokeMouse turns a drawn shape into a command. Hold the right, middle or a side mouse button, trace a stroke, and on release the action bound to that shape runs. On a trackpad you hold one modifier key, Fn by default, and move the pointer instead.

- Actions include keyboard shortcuts, opening an app or a URL, window commands such as Maximize or Close, media keys, Mission Control and Space switching, and shell or AppleScript commands.
- Each gesture is either global or limited to apps you pick, and global gestures can be switched off in chosen apps.
- You record one to five samples per gesture, and the closest sample wins.
- Pressing a middle or side button once, without drawing, can trigger an action too.
- The gesture library lives in a JSON file under Application Support, and selected gestures can be exported and imported as JSON.

Experimental touch gestures cover 40 classes of three- to five-finger taps, clicks and swipes, plus pinches and rotations. They load Apple's private MultitouchSupport framework at runtime, so a macOS update can break them; mouse strokes and modifier drawing keep working when that happens. External Magic Trackpads are supported on a best-effort basis.

StrokeMouse needs Accessibility access and macOS 14 or later. Releases come as separate Apple silicon and Intel builds, Developer ID-signed and notarized since version 0.0.40, and the app updates itself through Sparkle. Because a gesture can run any shell command or AppleScript, the developer asks you to add only scripts you trust.
