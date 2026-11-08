---
name: "IconChanger"
summary: "Changes macOS app and folder icons from a GUI or command line, with automatic restore after app updates."
category: "Utilities"
tags:
  - icons
  - customization
  - finder
repository: "https://github.com/Bengerthelorf/macIconChanger"
website: "https://app.snaix.homes/iconchanger/"
license: "MIT"
licenseUrl: "https://github.com/Bengerthelorf/macIconChanger/blob/main/LICENSE"
download: "https://github.com/Bengerthelorf/macIconChanger/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Bengerthelorf/macIconChanger"
  - "https://github.com/Bengerthelorf/macIconChanger/blob/main/LICENSE"
  - "https://github.com/Bengerthelorf/macIconChanger/releases"
  - "https://app.snaix.homes/iconchanger/"
  - "https://raw.githubusercontent.com/Bengerthelorf/macIconChanger/main/README.md"
  - "https://github.com/Bengerthelorf/macIconChanger/releases/tag/v1.5.0"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Bengerthelorf/macIconChanger/main/IconChanger/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512.png"
    credit: "Ryan Zhu"
    license: "MIT; upstream app icon, trademarks retained"
---

IconChanger replaces the icon of an app or folder on your Mac and puts it back after an app update resets it. You search macOSicons.com by app name, preview the choice in a copy of your Dock, and apply it.

- Local .icns, PNG and JPEG files work as icons too.
- Favourites and history keep icons you have used, and aliases map an app name to a better search term.
- A background service reapplies cached icons on a schedule or when an app updates, and Restore Default removes a custom icon from one app.
- An iconchanger command-line tool sets and restores icons from scripts.
- Export and import move aliases, cached icons and settings to another Mac.

Searching macOSicons.com needs that site's API key, which you add under Settings, Advanced. The interface is translated into 30 languages.

IconChanger needs macOS 13 or later and administrator privileges. Version 1.5.0 is a Universal app for Apple silicon and Intel with only an ad hoc signature, so Gatekeeper rejects it until you allow it in System Settings. Homebrew can install it from the developer's tap. The project grew out of earlier IconChanger versions by underthestars-zhy and lcandy2.
