---
name: Atoll
summary: "Turns the MacBook notch into a panel for media controls, system stats, timers and other quick tools."
category: Utilities
tags:
  - notch
  - media-controls
  - widgets
repository: https://github.com/Ebullioscopic/Atoll
website: https://getatoll.app
license: GPL-3.0
licenseUrl: https://github.com/Ebullioscopic/Atoll/blob/dev/LICENSE
download: https://github.com/Ebullioscopic/Atoll/releases
freeDownload: true
homebrew: "atoll"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/Ebullioscopic/Atoll
  - https://github.com/Ebullioscopic/Atoll/blob/dev/LICENSE
  - https://github.com/Ebullioscopic/Atoll/blob/dev/ReadMe.md
  - https://github.com/Ebullioscopic/Atoll/releases
  - https://raw.githubusercontent.com/Ebullioscopic/Atoll/dev/ReadMe.md
  - https://getatoll.app
  - https://github.com/Ebullioscopic/Atoll/releases/tag/v2.3.3
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Ebullioscopic/Atoll/dev/DynamicIsland/Assets.xcassets/AppIcon.appiconset/Atoll_1024%20(2).png
    credit: Atoll contributors
    license: GPL-3.0; upstream project asset, trademarks retained
screenshots: []
---

Atoll turns the space around a MacBook's notch into a panel that stays small until you hover near it, then expands; click in and tabs lead to media, stats, timers, clipboard history and more. With hover-to-open turned off, a two-finger swipe down opens it and a swipe up closes it.

- Media controls work with Apple Music, Spotify, Cider and other players. Once you turn on media gestures in Settings, horizontal swipes on the music pane skip tracks or seek 10 seconds.
- Live Activities cover playback, Focus, screen recording, privacy indicators, battery charging and, in beta, downloads.
- The Stats tab shows CPU, GPU, memory, network and disk usage.
- Lock screen widgets show media, timers, charging, Bluetooth devices and weather.
- Other tools include a color picker, calendar previews and a Shelf for files, which you can fill from Terminal with `open -a Atoll`.

Atoll is made for MacBook Pro models with a notch. Version 2.3.3 ships as a DMG holding a Universal app, signed with a Developer ID and notarized, and it needs macOS 14.6 or later.

Layout, animation style, hover behaviour and global shortcuts are set in Settings. Atoll asks for permissions as its features need them: Accessibility, Camera, Calendar, Screen Recording or Music. Once you have allowed Accessibility or Screen Recording, restart Atoll so the change applies.
