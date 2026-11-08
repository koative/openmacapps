---
name: Clipy
summary: "Keeps your clipboard history and saved snippets in menus that open with keyboard shortcuts."
category: Productivity
tags:
  - clipboard
  - snippets
  - keyboard-shortcuts
  - clipboard-manager
alternativeTo:
  - paste
repository: https://github.com/Clipy/Clipy
website: https://clipy-app.com
license: MIT
licenseUrl: https://github.com/Clipy/Clipy/blob/develop/LICENSE
download: https://github.com/Clipy/Clipy/releases
freeDownload: true
homebrew: "clipy"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/Clipy/Clipy
  - https://github.com/Clipy/Clipy/blob/develop/LICENSE
  - https://github.com/Clipy/Clipy/blob/develop/README.md
  - https://github.com/Clipy/Clipy/releases
  - https://clipy-app.com
  - https://raw.githubusercontent.com/Clipy/Clipy/develop/README.md
  - https://raw.githubusercontent.com/Clipy/Clipy/develop/PRIVACY.md
  - https://github.com/Clipy/Clipy/releases/tag/1.4.1
  - https://pasteapp.io/
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Clipy/Clipy/develop/Clipy/Resources/Assets.xcassets/AppIcon.appiconset/256.png
    credit: Clipy contributors
    license: MIT; upstream project asset, trademarks retained
screenshots: []
---

Clipy keeps a history of what you copy and a separate menu of saved snippets. Press Shift-Command-V for the main menu, Control-Command-V for the history alone, or Shift-Command-B for the snippets, then pick an entry to paste it.

The history holds plain text, images and other clipboard formats. Snippets are pieces of text you save once and paste at any time from their own menu.

Every shortcut can be changed in Settings. The shortcut that opens Settings, Control-Option-Shift-Command-V, can be changed but not removed, so you can still reach Settings with the menu bar icon hidden. Clipy needs the Accessibility permission, which macOS ties to the app's code signature.

History, snippets and preferences are stored on the Mac, and the privacy policy says Clipy does not send copied content or snippets to any server. The only network traffic it lists is Sparkle update checks to clipy-app.com and Firebase analytics and crash reports. Both Firebase features are on by default and can be turned off in Preferences. Encryption of the local history is not promised, and the policy recommends FileVault for Macs holding sensitive data.

Clipy is a remake of ClipMenu. It requires macOS 13 or later, comes as a DMG with a Universal app, notarized, and is free under the MIT license.

Paste keeps an unlimited, searchable history and syncs it across Mac, iPhone and iPad. Clipy stays on one Mac and works from menus.
