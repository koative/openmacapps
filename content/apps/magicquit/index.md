---
name: "MagicQuit"
summary: "Quits apps you have not used for hours, or when their last window closes, from a small menu bar utility."
category: "Utilities"
tags:
  - app-management
  - menu-bar
repository: https://github.com/BigBerny/magicquit
website: https://github.com/BigBerny/magicquit
license: "GPL-3.0"
licenseUrl: https://github.com/BigBerny/magicquit/blob/main/LICENSE
download: https://github.com/BigBerny/magicquit/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/BigBerny/magicquit
  - https://github.com/BigBerny/magicquit/blob/main/LICENSE
  - https://github.com/BigBerny/magicquit/releases
  - https://raw.githubusercontent.com/BigBerny/magicquit/main/README.md
  - https://github.com/BigBerny/magicquit/releases/tag/v2.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/BigBerny/magicquit/main/MagicQuit/Assets.xcassets/AppIcon.appiconset/512.png
    credit: "BigBerny"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

MagicQuit quits apps you are no longer using, working from the menu bar. It has two mechanisms, and each one is optional per app.

Idle quit closes any app you have not touched for a set time. The default is eight hours, and the setting moves in fixed steps between 15 minutes and 48 hours. Quit on last window close makes an app exit when you close its final window, the way Windows behaves: close the last Preview document and Preview goes away too.

Both features cover every regular app, and you keep a short list of exceptions rather than opting apps in. Music, Spotify, Podcasts and VLC start out excluded from window-close quitting, so playback carries on after you close their windows.

The menu bar icon opens a list of running apps with the time each has left. A checkbox beside an app turns idle quitting off for it, and a reset button restarts its timer. Settings also cover launch at login.

MagicQuit quits apps the same way Command-Q does and never force-kills them, so an app with unsaved changes asks you to save first. Counting windows, including minimized ones, uses the Accessibility API, so the window-close feature asks for Accessibility permission when you first enable it. Idle quit needs no permission.

The 2.0 release is a ZIP holding a Universal app for Apple silicon and Intel, notarized with a Developer ID, and it requires macOS 14 or later. The README's license section says MIT, while the LICENSE file in the repository holds the GPLv3 text.
