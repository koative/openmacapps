---
name: "mFix"
summary: "Windows 11-style window management for macOS 26: snap layouts, an Alt+Tab-style switcher and Windows-like habits."
category: "Utilities"
tags:
  - window-management
  - customization
  - keyboard-shortcuts
  - menu-bar
repository: "https://github.com/Zingzy/mFix"
website: "https://github.com/Zingzy/mFix"
license: "MIT"
licenseUrl: "https://github.com/Zingzy/mFix/blob/main/LICENSE"
download: "https://github.com/Zingzy/mFix/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Zingzy/mFix"
  - "https://github.com/Zingzy/mFix/blob/main/LICENSE"
  - "https://github.com/Zingzy/mFix/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/Zingzy/mFix/releases/download/v0.1.2/mFix.dmg
    credit: mFix contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mFix brings Windows 11 window behavior to the Mac: Windows-style keys for snapping windows to halves and quarters, a Snap Assist step that offers windows for the empty half, an Alt+Tab switcher that shows a preview of every window, and a few other Windows habits. It is for people who switch between Windows and macOS and want the same keys on both. The README says the Windows borrowing is deliberate, and the app is free and MIT-licensed.

It requires macOS 26 and is not notarized, because the project skips Apple's notarization fee; the first launch needs Open Anyway or the xattr command given in the README. It asks for Accessibility and Screen Recording, the latter for window previews. It relies on private macOS functions for some features, so a system update could break them. The README says mFix has no networking code, telemetry, update checks or accounts.
