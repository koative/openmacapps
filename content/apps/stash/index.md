---
name: "Stash"
summary: "Open-source menu bar hider for macOS 27 that collapses status items behind one arrow using a private allowlist API."
category: "Utilities"
tags:
  - menu-bar
  - window-management
  - display
alternativeTo:
  - bartender
repository: "https://github.com/brentc22/stash"
website: "https://github.com/brentc22/stash"
license: "MIT"
licenseUrl: "https://github.com/brentc22/stash/blob/main/LICENSE"
download: "https://github.com/brentc22/stash/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/brentc22/stash"
  - "https://github.com/brentc22/stash/blob/main/LICENSE"
  - "https://github.com/brentc22/stash/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/brentc22/stash/main/Resources/Stash.icns"
    credit: "Brent Ceulemans (Stash)"
    license: "MIT; upstream app icon, trademarks retained"
---

Stash hides macOS menu bar icons behind a single arrow: one click collapses the bar, and another brings everything back. In settings you choose for each app whether it stays visible, is hidden, or is always hidden. Optional rules remove Wi-Fi while it is connected, and a presentation mode keeps only essential items during screen mirroring or a Zoom meeting. Stash holds an allowlist through the private MenuBarClientCore framework, the mechanism macOS uses for assessment mode, rather than the window tricks older menu bar tools relied on. It suits people who want control over a crowded menu bar on macOS 27.

It requires macOS 27. The README says the app is not notarized, so after installing from Homebrew or the zip you clear the quarantine flag with `xattr` or allow it in System Settings. It must run from /Applications, or its own arrow does not appear. Hiding works per app rather than per icon, icons cannot be reordered, and a macOS update could break the private framework it depends on. Releases are ad-hoc signed, so the Accessibility permission used by the optional hover and filter features has to be granted again after each update.
