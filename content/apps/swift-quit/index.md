---
name: "Swift Quit"
summary: "Quits Mac apps automatically when you close their last window, with per-app include and exclude lists."
category: "Utilities"
tags:
  - app-management
  - automation
repository: https://github.com/onebadidea/swiftquit
website: https://github.com/onebadidea/swiftquit
license: GPL-3.0
licenseUrl: https://github.com/onebadidea/swiftquit/blob/main/LICENSE
download: https://github.com/onebadidea/swiftquit/releases
freeDownload: true
homebrew: "swift-quit"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
sources: ["https://github.com/onebadidea/swiftquit", "https://github.com/onebadidea/swiftquit/blob/main/LICENSE", "https://github.com/onebadidea/swiftquit/releases", "https://swiftquit.com", "https://formulae.brew.sh/cask/swift-quit", "https://raw.githubusercontent.com/onebadidea/swiftquit/main/README.md", "https://github.com/onebadidea/swiftquit/releases/tag/v1.5"]
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/onebadidea/swiftquit/main/Swift%20Quit/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "onebadidea and Swift Quit contributors"
    license: "GPL-3.0 repository asset; name and logo retained by the project"
---

Swift Quit changes what the red close button does. Close the last window of an app and the app quits, so it no longer sits in the Dock with nothing open. You can apply that to every app, limit it to a list you choose, and exclude apps that should keep running with no windows.

Setup takes a few steps. After moving the app to Applications, you Control-click it and choose Open, then add Swift Quit to the Accessibility list in System Settings and enable it. A setting can make it start automatically.

Upgrading has a catch: remove the old copy from the Accessibility list before you add the new one. The README warns that some users have seen windows close when they did not expect it, and it tells you to use the app at your own risk.

The code is under the GPL version 3. Version 1.5, from March 2023, is the latest release. It is a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and it requires macOS 11. You can download it from GitHub or install the `swift-quit` Homebrew cask.
