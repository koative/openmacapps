---
name: "LumaRing"
summary: "Small ring-shaped switcher for jumping between apps, windows and browser tabs, and for running app shortcuts."
category: "Utilities"
tags:
  - window-switcher
  - app-switcher
  - browser-tabs
  - keyboard-shortcuts
repository: "https://github.com/potatoQi/LumaRing"
website: "https://github.com/potatoQi/LumaRing"
license: "MIT"
licenseUrl: "https://github.com/potatoQi/LumaRing/blob/main/LICENSE"
download: "https://github.com/potatoQi/LumaRing/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/potatoQi/LumaRing/blob/main/README.md"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.9"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.0"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.1"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.2"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.3"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.4"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.6"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.7"
  - "https://github.com/potatoQi/LumaRing/releases/tag/v0.1.8"
  - "https://github.com/potatoQi/LumaRing"
  - "https://github.com/potatoQi/LumaRing/blob/main/LICENSE"
  - "https://github.com/potatoQi/LumaRing/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/potatoQi/LumaRing/main/Resources/LumaRingIcon-1.3.icns"
    credit: "LumaRing contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Press Option-Tab and LumaRing opens a ring of your running apps; point at one and release to switch to it. Hover over an app and an outer arc shows its windows, or its tabs in Chrome and Edge, with a preview before you switch. Icons carry a count when an app has several windows or tabs.

- From the keyboard, Tab and Shift-Tab move around the ring, Return picks the selection and Escape closes the ring without switching.
- A window or tab can be closed from the ring with its × button, and dragging an app's icon out of the ring quits that app.
- Each app can have its own ring of named shortcut actions, set up in Settings. Double-tap the left Option key with the ring open to move between that ring and the app ring.
- Holding Option shows a ring of favorite apps.
- A three- or four-finger trackpad tap can open the ring. The developer calls this gesture experimental and notes that it uses a private macOS multitouch interface.

LumaRing needs macOS 14 or later, and the DMG, about 3 MB, holds a Universal app for Apple silicon and Intel. It is self-signed and not notarized, so the first launch has to be allowed under Privacy & Security. Switching needs Accessibility access, window previews need Screen Recording and browser tabs need Automation permission. Updates come through Sparkle, and the README also lists a Homebrew cask in the developer's own tap.

The ring uses Liquid Glass on macOS 26 and a frosted material on older systems; on macOS 26 you can also pick Regular or Clear Liquid Glass from the menu bar menu. Its interface comes in English and Simplified Chinese.
