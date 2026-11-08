---
name: Pesty
summary: Keeps your clipboard history in a color-coded strip at the bottom of the screen, with pinboards for clips you reuse.
category: Productivity
tags:
  - clipboard
  - pinboards
  - search
  - clipboard-manager
alternativeTo:
  - paste
repository: https://github.com/momenbasel/pesty
website: https://www.moamenbasel.com/pesty/
license: MIT
licenseUrl: https://github.com/momenbasel/pesty/blob/main/LICENSE
download: https://github.com/momenbasel/pesty/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
sources:
  - https://github.com/momenbasel/pesty
  - https://github.com/momenbasel/pesty/blob/main/LICENSE
  - https://github.com/momenbasel/pesty/blob/main/README.md
  - https://github.com/momenbasel/pesty/releases
  - https://github.com/momenbasel/pesty/releases/tag/v1.3.0
  - https://www.moamenbasel.com/pesty/
  - https://pasteapp.io/
assets:
  - path: ./assets/icon.png
    source: https://github.com/momenbasel/pesty/blob/b3f77987503945b7a9c0ea496a93768f5a7f6acc/docs/assets/icon.png
    credit: Pesty contributors
    license: MIT; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/momenbasel/pesty/blob/b3f77987503945b7a9c0ea496a93768f5a7f6acc/docs/assets/screenshot-strip.png
    credit: Pesty contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: Pesty clipboard strip with copied-content cards and pinboard navigation.
    source: https://github.com/momenbasel/pesty/blob/b3f77987503945b7a9c0ea496a93768f5a7f6acc/docs/assets/screenshot-strip.png
    credit: Pesty contributors
icon: ./assets/icon.png
---

Press Shift-Command-V and Pesty raises a strip of clipboard cards along the bottom edge of whichever screen you are working on. Move along it with the arrow keys or start typing to search, then press Return to paste the clip into the app you came from. Command-1 to Command-9 paste one of the first nine cards directly, and adding Shift pastes plain text.

Each card has a header tinted by the app it was copied from, with that app's icon, the content type, the copy time and a preview. Pesty records plain and rich text, links, images, files and colors. Clips you reuse go into pinboards: named, color-tagged collections that never expire. Command-Shift-P pauses recording while the strip is open, and clips that password managers mark as concealed are skipped.

The free build comes from GitHub as a DMG or from Homebrew. It is a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and needs macOS 14 or later. Pasting into other apps needs the Accessibility permission. iCloud Drive sync between your Macs is off by default. The Mac App Store edition is the same app for a one-time fee; it is sandboxed, so it copies the clip and you press Command-V yourself.

Paste, which inspired the design, also syncs to iPhone and iPad. Pesty runs only on the Mac, and the developer says it has no clipboard servers or analytics.
