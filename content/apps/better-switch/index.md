---
name: "Better Switch"
summary: "Restores a minimized or closed window when you switch to its app with Command-Tab, plus a shake-to-minimize gesture."
category: "Utilities"
tags:
  - window-management
  - keyboard-shortcuts
  - menu-bar
  - accessibility
repository: "https://github.com/owenzhao/Better-Switch"
website: "https://github.com/owenzhao/Better-Switch"
license: "MIT"
licenseUrl: "https://github.com/owenzhao/Better-Switch/blob/main/LICENSE"
download: "https://github.com/owenzhao/Better-Switch/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/owenzhao/Better-Switch"
  - "https://github.com/owenzhao/Better-Switch/blob/main/LICENSE"
  - "https://github.com/owenzhao/Better-Switch/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/owenzhao/Better-Switch/main/Media.xcassets/AppIcon.appiconset/icon_512pt%402x.png"
    credit: "Owen Zhao"
    license: "MIT; upstream app icon, trademarks retained"
---

Better Switch is a menu bar utility for Command-Tab and Command-backtick. When you switch to an app that has no visible window, it restores one of that app's minimized windows, or asks macOS to reopen the app if it has none. Apps with a usable visible window are left alone. A shake gesture on a window's title bar minimizes the other windows on the desktop, hides apps whose windows cannot be minimized, and restores everything on a second shake. It is for people who minimize windows or close them and then find an empty app after switching back.

Requires macOS 15 or later and Accessibility permission, which you grant in System Settings when prompted. The release zip is Developer ID signed and notarized by Apple. Updates come through Sparkle. Caveats from the README: when an app is hidden as a fallback, its windows on other desktops are hidden too; full-screen windows and special panels are skipped; and a window that cannot be matched safely is left alone.
