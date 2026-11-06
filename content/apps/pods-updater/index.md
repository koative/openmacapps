---
name: "Pods Updater"
summary: "Mac app that lists newer or older CocoaPods releases for the versions pinned in a Podfile, so you can update them."
category: "Developer tools"
tags:
  - cocoapods
  - dependency-management
  - xcode
repository: "https://github.com/kizitonwose/PodsUpdater"
website: "https://github.com/kizitonwose/PodsUpdater"
license: "MIT"
licenseUrl: "https://github.com/kizitonwose/PodsUpdater/blob/master/LICENSE.md"
download: "https://github.com/kizitonwose/PodsUpdater/releases/download/1.0.3/Pods.Updater.app.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "No commit since March 2019 (checked 2026-11-06)."
icon: "./assets/icon.png"
sources:
  - "https://github.com/kizitonwose/PodsUpdater"
  - "https://github.com/kizitonwose/PodsUpdater/blob/master/LICENSE.md"
  - "https://github.com/kizitonwose/PodsUpdater/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/kizitonwose/PodsUpdater/master/Pods%20Updater/Assets.xcassets/AppIcon.appiconset/icon_512%402x.png"
    credit: "Kizito Nwose"
    license: "MIT; upstream app icon, trademarks retained"
---

Pods Updater reads the CocoaPods declared in a Podfile and lists their releases, newer or older, so you can move a dependency to the version you choose. The README notes that `pod outdated` shows only the newest release of each pod, which hides the other releases in the same major version. It is for developers who pin exact versions in a Podfile and want to decide when to take breaking changes.

Each pod must be declared with an exact version, such as `pod 'Name', '1.2.3'`. For pods declared with operators or no version, the app can read the installed versions from Podfile.lock and save a compatible Podfile. The README offers a zip from the releases page or a source build in Xcode. It gives no macOS version and no notarization details. The last commit is from March 2019.
