---
name: "Applite"
summary: "Installs, updates and removes Homebrew Cask apps from a store-style window, bringing its own Homebrew if you have none."
category: "Utilities"
tags: ["app-management", "updates", "uninstaller", "homebrew", "package-manager"]
repository: "https://github.com/milanvarady/Applite"
website: "https://applite.app"
license: "MIT"
licenseUrl: "https://github.com/milanvarady/Applite/blob/main/LICENSE.txt"
download: "https://github.com/milanvarady/Applite/releases"
freeDownload: true
homebrew: "applite"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/milanvarady/Applite", "https://github.com/milanvarady/Applite/blob/main/LICENSE.txt", "https://raw.githubusercontent.com/milanvarady/Applite/main/README.md", "https://applite.app", "https://github.com/milanvarady/Applite/releases", "https://github.com/milanvarady/Applite/releases/tag/v1.4.2"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/milanvarady/Applite/main/Applite/AppIcon.icon/Assets/apple-touch-icon-hollow.svg", "credit": "Milán Várady and Applite contributors", "license": "MIT; upstream project asset, trademarks retained; rendered from the upstream SVG"}]
screenshots: []
---

Applite works like an app store for Mac software that is not in the Mac App Store. You browse by category or search the whole Homebrew Cask catalog, click Install, and the app lands in place without a disk image to drag. One Update All button updates everything it manages.

Homebrew does the work underneath, but you never open Terminal. On first launch Applite installs its own copy of Homebrew in its Application Support folder, and it needs no Xcode Command Line Tools. If you already use Homebrew, point Applite at your existing prefix in Settings.

- Uninstalling can remove an app's settings and support files along with it.
- Brewfile export and import, with a checklist, set up the same apps on a new Mac.
- Casks from custom taps can be installed.
- HTTP, HTTPS and SOCKS5 proxies are supported.

Command-line formulae and background services are left out on purpose. Applite only handles apps, shown with icons, categories and a search field. If you also manage developer tools through Homebrew, you keep using `brew` for those.

The developer says the app has no accounts, analytics or telemetry. It is translated into seven languages.

Version 1.4.2 is a DMG with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. It needs macOS 14 or later and is free under the MIT license.
