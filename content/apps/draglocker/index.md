---
name: "DragLocker"
summary: "Enables drag lock for any mouse, so a drag continues after you release the button, with per-app and per-button settings."
category: "Utilities"
tags:
  - mouse
  - accessibility
  - drag-and-drop
repository: "https://github.com/taikun114/DragLocker"
website: "https://draglocker.taikun.design/"
license: "MIT"
licenseUrl: "https://github.com/taikun114/DragLocker/blob/main/LICENSE"
download: "https://github.com/taikun114/DragLocker/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/taikun114/DragLocker"
  - "https://github.com/taikun114/DragLocker/blob/main/LICENSE"
  - "https://github.com/taikun114/DragLocker/releases/latest"
  - "https://draglocker.taikun.design/"
---

macOS has drag lock only for the trackpad, so a drag ends when you release the mouse button. DragLocker keeps the drag going after release for any connected mouse. You choose which buttons (left, right or the scroll-wheel button) trigger the lock, whether a hold time or a drag distance starts it, and whether a small icon near the pointer shows the lock state. Settings can differ per app, so the lock can be limited to some apps or excluded from others. It is for people who drag files or windows with a regular mouse.

It requires macOS 14 (Sonoma) or later on Intel or Apple silicon; the release is a universal build. The README does not say whether the GitHub build is notarized, so check the first-launch prompt. The app needs Accessibility permission because it overrides mouse events. Caveats: the GitHub build has no automatic updates, which the Mac App Store version at $2.99 includes; the author says the app was developed with generative AI tools and bugs may remain; and it may conflict with other apps that also override mouse events.
