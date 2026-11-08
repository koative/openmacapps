---
name: "ProfilesManager"
summary: "Browses, inspects, installs and exports iOS and macOS provisioning profiles, with Quick Look previews for app bundles."
category: "Developer tools"
tags:
  - ios
  - xcode
  - code-signing
  - quick-look
repository: https://github.com/shaojiankui/ProfilesManager
website: https://github.com/shaojiankui/ProfilesManager
license: "MIT"
licenseUrl: https://github.com/shaojiankui/ProfilesManager/blob/master/LICENSE
download: https://github.com/shaojiankui/ProfilesManager/releases
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release or commit since September 2024."
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/shaojiankui/ProfilesManager
  - https://github.com/shaojiankui/ProfilesManager/blob/master/LICENSE
  - https://github.com/shaojiankui/ProfilesManager/releases
  - https://raw.githubusercontent.com/shaojiankui/ProfilesManager/master/README.md
  - https://github.com/shaojiankui/ProfilesManager/releases/tag/2.7
  - https://github.com/shaojiankui/ProfilesManager/commits/master
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/shaojiankui/ProfilesManager/master/ProfilesManager/Images.xcassets/AppIcon.appiconset/Icon_256x256.png
    credit: "shaojiankui"
    license: "MIT; upstream project asset, trademarks retained"
---

ProfilesManager shows every provisioning profile on your Mac in one tree, so you can read a `.mobileprovision` file's fields, such as its developer certificates. A full-text search box filters the list, and clicking a column header sorts it.

- Right-clicking a profile reveals it in Finder, moves it to the trash or exports a copy.
- Right-clicking an entry under DeveloperCertificates saves that certificate as a `.cer` file.
- Profiles installed by double-clicking are stored under their UUID. A rename command gives the file the same readable name the App Store uses.
- You can drag several profiles onto the window at once to install them.

Dragging an `.ipa` onto the window shows the profile embedded in the app and its Info.plist. A button in the top-left corner installs or removes a Quick Look plug-in. With it, pressing Space on an `.ipa`, `.xcarchive`, `.appex`, `.mobileprovision` or `.provisionprofile` file in Finder previews its contents.

Some actions, such as reveal and delete, work on a multi-selection. A reset button resets the window's size and position.

Version 2.7 from September 2024 is a ZIP containing a Universal app for Apple silicon and Intel, built for OS X 10.11 or later. The README is in English and Chinese, and its second half walks through the parts of a typical provisioning profile in Chinese.
