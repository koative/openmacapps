---
name: "MaCursor"
summary: "Replaces and edits macOS system cursors with themes, per-app cursors, cursor trails and gesture actions."
category: "Utilities"
tags:
  - mouse
  - customization
  - themes
  - menu-bar
repository: "https://github.com/writronic/MaCursor"
website: "https://github.com/writronic/MaCursor"
license: "GPL-3.0"
licenseUrl: "https://github.com/writronic/MaCursor/blob/main/LICENSE"
download: "https://github.com/writronic/MaCursor/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/writronic/MaCursor"
  - "https://github.com/writronic/MaCursor/blob/main/LICENSE"
  - "https://github.com/writronic/MaCursor/releases"
  - "https://raw.githubusercontent.com/writronic/MaCursor/main/README.md"
  - "https://github.com/writronic/MaCursor/releases/tag/v2.7.5"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/writronic/MaCursor/main/MaCursor/Images.xcassets/AppIcon.appiconset/icon_256x256.png"
    credit: "Writronic"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

MaCursor replaces the pointers macOS draws with artwork you make or with themes from its gallery of more than 80. Double-click a `.cursor` file to import it, apply it from the library, and the Restore button puts the stock arrow back.

- The theme editor holds 1×, 2×, 5× and 10× images per cursor, with a draggable hotspot and a live preview where your own pointer takes on the cursor being edited.
- Convert Theme rebuilds a Windows `.cur`/`.ani` folder, a Linux Xcursor theme or a Mousecape `.cape` file as a `.cursor` theme and lists the mapping for review.
- Each app can get its own theme, and themes can change on a day and night schedule or with Light and Dark mode.
- Cursor size goes from 0.5× to 4×, with an optional shadow and a mirrored left-hand mode.

Beyond cursors, it adds Finder right-click commands, focus that follows the pointer, drawn mouse gestures that run shortcuts or open apps, pointer trails, and a translator frame. The translator uses Apple Translation on macOS 15 or later, or your own DeepL, OpenAI, Gemini or Claude key. Most of these run through a login helper that also keeps your theme after restarts, and several need Accessibility access.

Apps that paint their own pointer, such as games, Blender and websites with CSS cursors, keep it. MaCursor needs macOS 13 or later. The 2.7.5 DMG holds a Universal app for Apple silicon and Intel and is notarized by Apple.
