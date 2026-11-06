---
name: "Uptick"
summary: "A Mac app updater that finds updates from the App Store, Sparkle, Electron and Homebrew, then verifies and installs them."
category: "Utilities"
tags:
  - updates
  - homebrew
  - native
repository: "https://github.com/chengffei/uptick"
website: "https://chengffei.github.io/uptick/"
license: "GPL-3.0"
licenseUrl: "https://github.com/chengffei/uptick/blob/main/LICENSE"
download: "https://github.com/chengffei/uptick/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/chengffei/uptick"
  - "https://github.com/chengffei/uptick/blob/main/LICENSE"
  - "https://github.com/chengffei/uptick/releases/latest"
  - "https://chengffei.github.io/uptick/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/chengffei/uptick/main/Resources/AppIcon.icns"
    credit: "Uptick contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Uptick reads the version of every app in Applications and asks each app's own update channel whether a newer release exists: the Mac App Store, Sparkle appcasts, Electron feeds or Homebrew casks. When a source numbers versions differently from the app, Uptick asks you to verify the download instead of guessing. Updates are installed by replacing the old app after the new copy's signature and developer are checked. App Store apps open their store page instead. It suits people who want one place to see which Mac apps are behind, whatever installed them.

Uptick requires macOS 14 or later. The README says it is signed but not notarized, so the first launch has to be allowed under System Settings, Privacy & Security; its install script avoids that prompt. The project describes itself as early, and the interface is in English and Simplified Chinese.
