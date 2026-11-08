---
name: Mac Mouse Fix
summary: "Maps trackpad gestures, smooth scrolling and keyboard shortcuts onto the buttons and wheel of a third-party mouse."
category: Utilities
tags:
  - mouse
  - scrolling
  - shortcuts
repository: https://github.com/noah-nuebling/mac-mouse-fix
website: https://macmousefix.com
license: LicenseRef-Mac-Mouse-Fix
sourceAvailability: source-available
licenseNotes: "The custom MMF License restricts publishing derived executables:
  it generally prohibits charging for them and requires preserving the original
  monetization systems, with an exception for substantial improvements that
  qualify as a separate derivative work. It is not an unrestricted open-source
  license."
licenseUrl: https://github.com/noah-nuebling/mac-mouse-fix/blob/master/License
download: https://macmousefix.com
freeDownload: false
homebrew: "mac-mouse-fix"
icon: ./assets/icon.png
sources:
  - https://github.com/noah-nuebling/mac-mouse-fix
  - https://github.com/noah-nuebling/mac-mouse-fix/blob/master/License
  - https://macmousefix.com
  - https://raw.githubusercontent.com/noah-nuebling/mac-mouse-fix/master/Readme.md
  - https://github.com/noah-nuebling/mac-mouse-fix/releases/tag/3.1.0
assets:
  - path: ./assets/icon.png
    source: https://github.com/noah-nuebling/mac-mouse-fix/blob/master/Shared/Resources/Assets/SharedAssets.xcassets/AppIconRound.appiconset/128%402x.png
    credit: Noah Nuebling
    license: MMF License; attribution retained; trademarks retained
featured: false
added: 2026-10-17
verified: "2026-11-08"
---

Mac Mouse Fix maps the buttons and wheel of a third-party mouse to the gestures of an Apple trackpad. You hold a side button and drag or scroll, and macOS reacts as if you had swiped or pinched with several fingers.

- Holding button 4 and dragging opens Mission Control, switches desktops or shows App Exposé, depending on the direction.
- Holding button 5 and scrolling zooms in apps such as Safari and Preview; dragging sideways goes back or forward a page.
- Clicking button 4 looks up a word or opens Quick Look, and clicking button 5 runs Smart Zoom.
- Any click, double click or click-and-drag can send a keyboard shortcut, including brightness, volume and media keys.

Scrolling has three smoothness levels. High adds momentum and a bounce at the end of a page, Regular uses short animations, and Off keeps the system behaviour but moves a fixed number of lines per wheel step. The mouse's scroll direction can be set separately from the trackpad's, and holding a modifier key gives precise scrolling or zoom.

The full gesture set needs a mouse with five buttons. Some mice made for vendor drivers such as Logitech Options do not expose all their buttons, and the Apple Magic Mouse is not supported. A double-click action on a button delays that button's single click slightly.

Version 3.1.0 supports macOS 10.15 Catalina or later; Mac Mouse Fix 2 covers macOS 10.11 and stays free. Version 3 has a 30-day trial counted only on days you use it, then a one-time purchase with no subscription. The GitHub ZIP holds a Universal app, notarized. The source is published under the developer's own license, which limits selling derived builds.
