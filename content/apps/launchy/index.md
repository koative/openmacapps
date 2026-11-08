---
name: Launchy Launchpad
summary: A Launchpad-style app grid with a fullscreen view, a compact floating palette, folders and instant search.
category: Utilities
tags:
  - launcher
  - app-launching
  - keyboard-shortcuts
  - customization
repository: https://github.com/Punshnut/macos-launchy
website: https://feuerbacher.me/projects/launchy
license: AGPL-3.0
licenseUrl: https://github.com/Punshnut/macos-launchy/blob/dev/LICENSE
download: https://github.com/Punshnut/macos-launchy/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Punshnut/macos-launchy
  - https://github.com/Punshnut/macos-launchy/blob/dev/LICENSE
  - https://github.com/Punshnut/macos-launchy/blob/dev/README.md
  - https://github.com/Punshnut/macos-launchy/releases
  - https://feuerbacher.me/projects/launchy
  - https://feuerbacher.me/projects/launchy.html
  - https://raw.githubusercontent.com/Punshnut/macos-launchy/dev/README.md
  - https://github.com/Punshnut/macos-launchy/releases/tag/v2026.9.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Punshnut/macos-launchy/dev/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-Any.png
    credit: Punshnut (Launchy Launchpad)
    license: AGPL-3.0 repository asset; Launchy name and logo retained by the project
---

Launchy Launchpad opens a grid of your apps with a global shortcut, Command-Shift-Space by default, either full screen or as a smaller floating palette called Floaty mode. Another shortcut flips between the two without losing the layout, and a hot corner works for mouse-only use.

It scans /Applications, /System/Applications and, if you want, ~/Applications, caches the icons and fills pages of up to 7 by 5 apps. Typing filters the grid at once. Search matches anywhere in an app's name or bundle ID, ignores case and accents, and accepts the English name or the one in your system language. Return opens the top match.

- Right-clicking a tile renames, hides or moves it, or shows it in Finder.
- Option-drag builds a folder; Shift-drag swaps two tiles without reshuffling the rest.
- Launch at login is an option, and the Dock and menu bar icons can be hidden separately.
- The interface has VoiceOver labels and ships in 40 languages.

On macOS 26 it uses the Liquid Glass look. Version 2026.9.0 is a Universal app for Apple silicon and Intel that requires macOS 13, signed with a Developer ID and notarized. It updates itself.

The license changed on 11 September 2026. Releases from that date on are AGPL-3.0, and earlier versions stay under the MIT license they shipped with.
