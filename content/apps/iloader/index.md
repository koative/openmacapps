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
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/nab138/iloader
  - https://github.com/nab138/iloader/blob/main/LICENSE
  - https://github.com/nab138/iloader/blob/main/LICENSE-BRANDING
  - https://github.com/nab138/iloader/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/nab138/iloader/blob/main/src-tauri/icons/icon.icns
    credit: "nab138; icon by Transistor"
    license: "Not covered by the MIT code license; iloader branding notice (LICENSE-BRANDING) allows use with a link to https://iloader.app and no implied endorsement; trademarks retained"
---

iloader is a desktop helper for getting SideStore, and optionally LiveContainer, onto an iPhone or iPad. You plug the device in over USB, sign in with an Apple Account, and the app signs and installs SideStore, imports the certificate and places the pairing files it needs. It can also install any other IPA file.

It manages pairing files for tools such as SideStore and StikDebug, and lists the development certificates and app IDs on your Apple Account so you can revoke old ones. When something fails, it suggests likely fixes and keeps logs you can share.

You have to give iloader your Apple Account credentials, which it uses to sign apps through Apple's developer services; the project says its GitHub releases and iloader.app are the only official downloads. A universal macOS build is published. The iloader name and artwork are covered by a separate branding notice rather than the MIT code license.
