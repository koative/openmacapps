---
name: Sol
summary: Launches apps from a search field and adds clipboard history, an emoji picker, window management and small tools.
category: Productivity
tags:
- launcher
- app-launching
- clipboard
- window-management
- shortcuts
alternativeTo:
- alfred
- raycast
repository: https://github.com/ospfranco/sol
website: https://sol.ospfranco.com
license: MIT
licenseUrl: https://github.com/ospfranco/sol/blob/main/LICENSE
download: https://github.com/ospfranco/sol/releases
freeDownload: true
homebrew: "sol"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
- https://github.com/ospfranco/sol
- https://github.com/ospfranco/sol/blob/main/LICENSE
- https://github.com/ospfranco/sol/releases
- https://formulae.brew.sh/cask/sol
- https://raw.githubusercontent.com/ospfranco/sol/main/README.md
- https://sol.ospfranco.com
- https://github.com/ospfranco/sol/releases/tag/2.1.364
- https://www.raycast.com/pro
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/ospfranco/sol/main/macos/sol-macOS/Assets.xcassets/AppIcon.appiconset/icon_256@1x.png
  credit: Oscar Franco
  license: MIT repository asset; Sol name and icon retained by the author
---

Sol opens a search field over whatever you are doing, finds the app or file you type, and launches it. The same field runs quick maths and translation and imports your browser bookmarks, so links to sites you use often come up next to apps.

- A clipboard manager keeps your copy history, opened with Shift-Command-V.
- The emoji picker, on Control-Command-Space, hides emoji that your macOS version cannot show and can apply a preferred skin tone.
- Window management moves and resizes windows from the keyboard.
- A scratchpad holds quick notes you can reach from anywhere.
- Calendar integration lists upcoming events in the launcher and shows the next one in the menu bar.

Smaller tools kill processes, show your IP address, retrieve a Wi-Fi password and switch between light and dark mode. Others generate UUIDs, NanoIDs and lorem ipsum or format JSON before pasting it. Custom shortcuts, AppleScript commands and a script runner let you add your own actions, and media keys can be routed to Spotify or Apple Music. The chosen skin tone is saved in `~/.config/sol/config.json`.

Raycast fills the same launcher role and adds a store of community extensions, with AI and cloud sync sold as a Pro plan. Sol is MIT-licensed.

Sol needs macOS 14 or later. The GitHub release is a ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.
