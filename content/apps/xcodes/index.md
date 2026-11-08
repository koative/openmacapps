---
name: "Xcodes"
summary: "Downloads, installs and switches between multiple Xcode versions from a single window."
category: "Developer tools"
tags: ["xcode", "development", "native"]
repository: "https://github.com/XcodesOrg/XcodesApp"
website: "https://xcodes.app"
license: "MIT"
licenseUrl: "https://github.com/XcodesOrg/XcodesApp/blob/main/LICENSE"
download: "https://github.com/XcodesOrg/XcodesApp/releases"
freeDownload: true
homebrew: "xcodes-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/XcodesOrg/XcodesApp", "https://github.com/XcodesOrg/XcodesApp/blob/main/LICENSE", "https://github.com/XcodesOrg/XcodesApp/releases", "https://raw.githubusercontent.com/XcodesOrg/XcodesApp/main/README.md", "https://github.com/XcodesOrg/XcodesApp/releases/tag/v4.1.1b41", "https://xcodes.app"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/XcodesOrg/XcodesApp/main/Xcodes/Resources/Assets.xcassets/AppIcon.appiconset/xcodes.app-icon256.png", "credit": "Robots and Pencils and XcodesOrg contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Xcodes lists every Xcode release, downloads the one you pick, installs it and lets you make any installed version active with one click. The list comes from Xcode Releases or the Apple Developer website, and each entry shows release notes, supported macOS versions, SDKs and compilers.

Downloading needs an Apple ID, and sign-in works with security keys and password manager autofill. Xcodes downloads through aria2 with up to 16 connections and resumes an install after a network error. An optional experiment unpacks the XIP archive with unxip, which can be up to 70 percent faster but may use a lot of memory.

- Platforms and runtimes for iOS, watchOS, tvOS and visionOS install from the same window.
- Since Xcode 26 you can choose the Apple silicon or Universal variant of Xcode and of each runtime.
- The interface is translated into 20 languages besides English.
- The app updates itself from its own menu.

Runtimes from iOS 18, tvOS 18, watchOS 11 and visionOS 2 onward need Xcode 16.1 beta 3 or newer to be active. Installing the Apple silicon runtime variant needs Xcode 26 active.

Version 4.1.1 requires macOS 14.6 or later. The release ZIP holds a Universal app, Developer ID-signed and notarized, and it does not need Xcode installed first. The project, first released under a Robots and Pencils copyright, now lives under XcodesOrg alongside the `xcodes` command-line tool for scripted installs.
