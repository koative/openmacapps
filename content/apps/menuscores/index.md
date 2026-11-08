---
name: 'MenuScores'
summary: 'Live sports scores pinned to the menu bar or notch, with alerts when pinned games start and end.'
category: 'Utilities'
tags:
  - menu-bar
  - notch
  - notifications
repository: https://github.com/daniyalmaster693/MenuScores
website: https://menuscores.vercel.app
license: 'GPL-3.0'
licenseUrl: https://github.com/daniyalmaster693/MenuScores/blob/main/LICENSE
download: https://github.com/daniyalmaster693/MenuScores/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/daniyalmaster693/MenuScores
  - https://github.com/daniyalmaster693/MenuScores/blob/main/LICENSE
  - https://github.com/daniyalmaster693/MenuScores/releases
  - https://menuscores.vercel.app
  - https://github.com/daniyalmaster693/MenuScores/blob/main/README.md
  - https://github.com/daniyalmaster693/MenuScores/blob/main/LEAGUES.md
  - https://github.com/daniyalmaster693/MenuScores/releases/tag/2.3.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/daniyalmaster693/MenuScores/main/MenuScores/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png
    credit: 'daniyalmaster693 and MenuScores contributors'
    license: 'GPL-3.0 repository asset; project name and icon retained by the author'
---

MenuScores keeps a live game in view while you work on something else. Click its radio-waves icon in the menu bar, hover over a league to see its games, and pick one to pin to the menu bar or the notch. A game can also be opened on ESPN from the same list.

The project lists more than 60 leagues across 13 sports, from the NHL, NBA and NFL to college leagues, the Premier League and the Champions League. You choose which leagues appear in the Settings window.

- Favourite teams: star teams in the Favorites tab and their games pin themselves once they go live, then clear when they finish.
- Priority order: when several favourites play at once, the higher-ranked team gets the pin.
- Notifications: an optional alert when a pinned game starts or ends, after you grant permission.
- Notch view: shows game details and recent plays, and expands on its own when the score changes.

Auto-pinning works with every league except ATP, WTA and UFC. A manually pinned game gives way to an auto-pinned one, and a cleared auto pin stays cleared until the app restarts.

The app needs macOS 13 or later, and the 2.3.2 DMG holds a Universal binary for Apple silicon and Intel. The build is not signed with a Developer ID, so macOS may refuse it on first launch until you choose Open Anyway under Privacy & Security. A Homebrew tap from the author is another way to install it.
