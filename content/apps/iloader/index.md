---
name: "iloader"
summary: "Sideloads SideStore and other IPA files onto a connected iPhone or iPad and manages the pairing files those apps need."
category: "Utilities"
tags:
  - ios
  - iphone
  - ipad
  - sideloading
  - cross-platform
repository: https://github.com/nab138/iloader
website: https://iloader.app
license: "MIT"
licenseUrl: https://github.com/nab138/iloader/blob/main/LICENSE
download: https://github.com/nab138/iloader/releases/latest
homebrew: "iloader"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/nab138/iloader
  - https://github.com/nab138/iloader/blob/main/LICENSE
  - https://github.com/nab138/iloader/blob/main/LICENSE-BRANDING
  - https://github.com/nab138/iloader/releases
  - https://raw.githubusercontent.com/nab138/iloader/main/README.md
  - https://iloader.app
  - https://github.com/nab138/iloader/releases/tag/v2.4.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/nab138/iloader/blob/main/src-tauri/icons/icon.icns
    credit: "nab138; icon by Transistor"
    license: "Not covered by the MIT code license; iloader branding notice (LICENSE-BRANDING) allows use with a link to https://iloader.app and no implied endorsement; trademarks retained"
---

iloader gets SideStore onto an iPhone or iPad from your Mac. Connect the device by USB, sign in with your Apple Account, and choose an action; for SideStore, iloader installs the app, imports the certificate and places the RPPairing and Lockdown pairing files it needs. It can also install LiveContainer together with SideStore, or any other IPA file.

- Pairing files can be placed into other apps that need them, such as StikDebug and Protokolle.
- The development certificates and app IDs on your Apple Account are listed, and you can revoke them.
- Common errors come with suggested fixes, and a log viewer shows what went wrong, with a Debug level for more detail.
- The interface is translated into many languages.

The tradeoff is your Apple Account password. iloader handles the credentials itself to sign apps, and its developer advises caution with this kind of software. The source is public, and the releases are built by GitHub Actions from that code. Only the GitHub releases and iloader.app are official downloads; the Homebrew cask is maintained by the community.

The current line receives only important bug fixes while a rewrite, iloader-next, is in development. Version 2.4.1 is a Universal DMG for Apple silicon and Intel that needs macOS 10.13 or later, signed with a Developer ID and notarized. The code is MIT-licensed. The iloader name and artwork fall under a separate branding notice.
