---
name: "Topit"
summary: "Keeps any window floating above the others so you can watch or reference it while you work."
category: "Utilities"
tags:
  - window-management
repository: https://github.com/lihaoyun6/Topit
website: https://github.com/lihaoyun6/Topit
license: "AGPL-3.0"
licenseUrl: https://github.com/lihaoyun6/Topit/blob/main/LICENSE
download: https://github.com/lihaoyun6/Topit/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/lihaoyun6/Topit
  - https://github.com/lihaoyun6/Topit/blob/main/LICENSE
  - https://github.com/lihaoyun6/Topit/releases
  - https://raw.githubusercontent.com/lihaoyun6/Topit/main/README.md
  - https://github.com/lihaoyun6/Topit/releases/tag/0.1.5
  - https://lihaoyun6.github.io/topit/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/lihaoyun6/Topit/main/Topit/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "lihaoyun6"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

Topit keeps a window from any app floating above all the others. Open the window selector, or switch to picking with the mouse and click the window you want; Escape cancels. The pinned window stays live, so you can move it, resize it and work in it. You can pin as many windows as you like.

Topit captures windows with ScreenCaptureKit, which needs the Screen Recording permission, and controls them through the Accessibility permission. ScreenCaptureKit keeps the CPU overhead down, but many pinned windows can still drain the battery faster. A setting caps the capture frame rate.

- Hotkeys pin or unpin the frontmost window or the one under the pointer, open the selector and unpin everything.
- A pinned window activates on a click, a double click or when the pointer hovers over it, whichever you choose.
- Prevent Focus Switching stops a pinned window from taking over typing when the pointer crosses it; activating it then takes a double click.
- Ducking hides other pinned windows that overlap the one you are using.
- AppleScript commands open the selector, toggle the frontmost or under-pointer window and unpin all windows.

Topit needs macOS 13 or later. The app is not notarized. Its site explains that older copies stopped opening when the developer's free signing certificate was revoked after one year, and that installing the latest release fixes this. Version 0.1.5, released in December 2024, added the AppleScript support and is the latest. While Topit is running, macOS holds back notifications from every app, and Topit itself points out that the limit comes from macOS.
