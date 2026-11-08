---
name: "Docky"
summary: "A configurable Dock replacement with widgets, folders, a window switcher with live previews and a built-in launcher."
category: "Utilities"
tags:
  - dock
  - launcher
  - widgets
  - app-switcher
  - customization
repository: https://github.com/josejuanqm/docky
website: https://getdocky.com
license: "GPL-3.0"
licenseUrl: https://github.com/josejuanqm/docky/blob/main/LICENSE
download: https://getdocky.com
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/josejuanqm/docky
  - https://github.com/josejuanqm/docky/blob/main/LICENSE
  - https://github.com/josejuanqm/docky/releases
  - https://getdocky.com
  - https://raw.githubusercontent.com/josejuanqm/docky/main/README.md
  - https://github.com/josejuanqm/docky/releases/tag/v0.9.7
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/josejuanqm/docky/main/docs/images/logo.png
    credit: "josejuanqm and Docky contributors"
    license: "GPL-3.0 repository asset; Docky name and icon retained by the author"
---

Docky is a Dock you build yourself. It can run next to the macOS Dock, mirror it or take its place, and you fill a single strip with apps, folders, spacers, dividers and widgets, then drag them into the order you want.

- Built-in widgets include Calendar, Reminders, Batteries, System, Weather and Now Playing. Several can share one tile as a Smart Stack that cycles through them, and community `.dockywidget` bundles add more.
- Folders group apps, nest inside one another, support Quick Look, take dragged items and can show running apps inline.
- A Command-Tab-style switcher shows live window previews, and hovering over a tile previews its windows.
- A fullscreen, searchable launcher works from the keyboard and can have its own global shortcut.

You can also replace the icon of any pinned or running app, switch between themes and configuration profiles, and add scripted actions built on AppleScript and menu clicks. Window handling and previews depend on two permissions, Accessibility and Screen Recording. Because it relies on private macOS interfaces, the developer says it cannot be distributed through the Mac App Store.

The project is in beta. It requires macOS 14 or later, and the 0.9.7 DMG holds a Universal app for Apple silicon and Intel that is Developer ID-signed and notarized. Sparkle delivers updates inside the app, and a Homebrew cask is available from the developer's tap. Docky has no paid tier.
