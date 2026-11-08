---
name: DockDoor
summary: Shows live window previews when you hover over an app in the Dock, plus a window switcher on Option-Tab.
category: Productivity
tags:
  - dock
  - window-management
  - previews
  - app-switcher
repository: https://github.com/ejbills/DockDoor
website: https://dockdoor.net
license: GPL-3.0-or-later
licenseUrl: https://github.com/ejbills/DockDoor/blob/main/LICENSE
download: https://github.com/ejbills/DockDoor/releases
freeDownload: true
homebrew: "dockdoor"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/ejbills/DockDoor
  - https://github.com/ejbills/DockDoor/blob/main/LICENSE
  - https://github.com/ejbills/DockDoor/blob/main/README.md
  - https://github.com/ejbills/DockDoor/releases
  - https://raw.githubusercontent.com/ejbills/DockDoor/main/README.md
  - https://raw.githubusercontent.com/ejbills/DockDoor/main/LICENSE
  - https://github.com/ejbills/DockDoor/releases/tag/1.42.2
assets:
  - path: ./assets/icon.png
    source: https://github.com/ejbills/DockDoor/blob/3e08721ec56c6747dba04561ab57b03ec254d785/Assets/Assets.xcassets/AppIcon.appiconset/AppIcon-iOS-Default-256x256%401x.png
    credit: DockDoor contributors
    license: GPL-3.0-or-later; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.webp
    source: https://github.com/ejbills/DockDoor/blob/3e08721ec56c6747dba04561ab57b03ec254d785/resources/web/previews-poster.webp
    credit: DockDoor contributors
    license: GPL-3.0-or-later; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.webp
    alt: DockDoor showing live previews of application windows above the macOS Dock.
    source: https://github.com/ejbills/DockDoor/blob/3e08721ec56c6747dba04561ab57b03ec254d785/resources/web/previews-poster.webp
    credit: DockDoor contributors
icon: ./assets/icon.png
---

Hover over an app in the Dock and DockDoor shows each of its open windows as a live thumbnail. Click one to bring that window forward. The previews include windows on other desktops and other displays, as well as minimized and hidden ones, and each has buttons to close, minimize, go full screen or quit. Middle-clicking a thumbnail shuts that window and leaves you where you were.

The keyboard gets two switchers. Holding Option and pressing Tab lists every open window, not one entry per app, and you can type to search; the shortcut can be changed in Settings. During Command-Tab, DockDoor adds the highlighted app's windows above the system switcher.

- Hovering a Dock folder shows its contents, which you can sort and open.
- An app playing audio shows player controls, and Spotify or Apple Music tracks come with lyrics that follow the song.
- Two-finger swipes on a preview minimize or maximize a window, and shaking a preview minimizes the others.
- Command-right-click on a Dock icon quits the app, and adding Option force quits it.
- AppleScript and a command-line tool can drive the previews and the switcher.

The Dock itself stays in place, and DockDoor lives in the menu bar. The developer says it has no servers, analytics or crash reporting, and debug logs stay on the Mac unless you export them.

DockDoor needs macOS 13 Ventura or later. The DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and it updates itself. DockDoor Pro, sold separately by the same developer, swaps the Dock for its own. Every feature of the open-source app is free.
