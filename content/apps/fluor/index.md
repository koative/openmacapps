---
name: "Fluor"
summary: "Switches the function keys between Apple's standard key functions and F1 to F12 depending on the active app."
category: "Utilities"
tags:
  - keyboard
  - menu-bar
  - keyboard-customization
repository: https://github.com/Pyroh/Fluor
website: https://github.com/Pyroh/Fluor
license: "MIT"
licenseUrl: https://github.com/Pyroh/Fluor/blob/main/LICENSE
download: https://github.com/Pyroh/Fluor/releases
freeDownload: true
homebrew: "fluor"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Pyroh/Fluor
  - https://github.com/Pyroh/Fluor/blob/main/LICENSE
  - https://github.com/Pyroh/Fluor/releases
  - https://formulae.brew.sh/cask/fluor
  - https://raw.githubusercontent.com/Pyroh/Fluor/main/README.md
  - https://github.com/Pyroh/Fluor/releases/tag/2.5.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Pyroh/Fluor/main/Fluor/Assets.xcassets/AppIcon.appiconset/256.png
    credit: "Pierre Tacchi"
    license: "MIT; upstream project asset, trademarks retained"
---

Fluor sets the Mac's function keys per app. In one app the top row keeps Apple's standard functions; switch to another and it sends F1 to F12 instead. Fluor changes the mode as the active app changes, and its menu bar icon shows which mode is on.

Click the icon to set the default mode, which Fluor applies whenever it runs. The same menu shows the frontmost app and its rule, which you can change on the spot. Apps without a rule follow the default. Turning Fluor off puts the keyboard back the way it was before Fluor launched.

- The Rules Editor lists every rule, where you can change or delete them, and adds new ones through a file picker.
- The Running Applications panel sets rules for any open app, which helps with apps such as Steam games that the Rules Editor sometimes cannot select.
- Rules made in either panel show up in the other, and setting an app back to the default removes its rule.

Fluor is not sandboxed, which keeps it out of the App Store, so you install it from the GitHub DMG or the Homebrew cask. Version 2.5.1, from July 2022, is the latest release. It is a Universal app for Apple silicon and Intel, needs macOS 11 or later, and the app inside the DMG is Developer ID-signed and notarized. Fluor is free under the MIT license and includes code from fntoggle.
