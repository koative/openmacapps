---
name: "Profisor"
summary: "Menu bar viewer for local provisioning profiles that flags expired ones and applies a matching profile to the Xcode project."
category: "Developer tools"
tags:
  - menu-bar
  - developer-utilities
  - xcode
  - native
repository: "https://github.com/yefga/Profisor"
website: "https://github.com/yefga/Profisor"
license: "MIT"
licenseUrl: "https://github.com/yefga/Profisor/blob/main/LICENSE"
download: "https://github.com/yefga/Profisor/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/yefga/Profisor"
  - "https://github.com/yefga/Profisor/blob/main/LICENSE"
  - "https://github.com/yefga/Profisor/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/yefga/Profisor/blob/main/Profisor/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-mac-512x512@1x.png"
    credit: "Yefga Torra"
    license: "MIT; upstream app icon, trademarks retained"
---

Profisor lists the provisioning profiles on your Mac in a menu bar popover. It ranks each one against the current Xcode project's bundle ID and team, flags expired and soon-to-expire profiles, and applies a profile to the project with a confirmation for risky changes and a one-click revert. It can copy a profile's name, UUID, bundle ID, team ID or file path for Tuist, XcodeGen or manual signing. It suits Apple-platform developers who switch between profiles often.

Requires macOS 12 Monterey or later, on Apple silicon or Intel. The README says all scanning and matching happen on the Mac with no network requests. It does not claim notarization; on first launch, when macOS warns about an unidentified developer, the README says to right-click the app and choose Open.
