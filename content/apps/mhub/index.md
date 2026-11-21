---
name: "mHUB"
summary: "Installs, updates and opens the DESKTOP MAC TOOLKIT apps from one menu bar icon, checking each download's signature first."
category: "Utilities"
tags: ["app-management", "updates", "menu-bar", "code-signing", "launcher"]
repository: "https://github.com/starbudweiser/mHUB"
website: "https://github.com/starbudweiser/mHUB"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mHUB/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mHUB/releases/latest"
macos: "15"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources: ["https://github.com/starbudweiser/mHUB", "https://github.com/starbudweiser/mHUB/blob/main/LICENSE", "https://github.com/starbudweiser/mHUB/releases/tag/v1.1.2", "https://github.com/starbudweiser/mHUB/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The mHUB library window: toolkit apps as cards with their update status and Open and Settings buttons, categories in the sidebar, and the details of the selected app on the right.", "source": "https://github.com/starbudweiser/mHUB/blob/main/docs/screenshot.png", "credit": "mHUB authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mHUB/blob/main/docs/screenshot.png", "credit": "mHUB authors", "license": "MIT (mHUB repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mHUB/blob/main/assets/icon-1024.png", "credit": "mHUB authors", "license": "MIT (mHUB repository)"}]
icon: ./assets/icon.png
---

mHUB gathers the apps of the DESKTOP MAC TOOLKIT, the author's collection of Mac utilities, behind one menu bar icon and one window. The catalogue lists 28 apps in version 1.1.2. The library shows each one with a short description, the installed and latest versions, and buttons to open it or bring up its settings. A red dot on the menu bar icon means updates are waiting.

Installing or updating an app downloads its release from the app's public GitHub repository. Before anything is replaced, mHUB verifies the code signature, requires the expected Developer ID team and runs a Gatekeeper check. It never replaces an app that is open. Apps are installed in ~/Applications/Applications Personnelles.

The catalogue ships inside mHUB and is refreshed from GitHub, but a downloaded catalogue cannot change the signing team or the repository owner of an app. Checks run once a day unless you switch to manual mode, and updates can install by themselves. The hub updates itself the same way.

The Settings button works with any listed app: mHUB launches the app if needed and presses its Settings menu item through the Accessibility permission, so the app needs no special support. Most of the other toolkit apps also have their own pages in this catalogue.

The app can sit in the Dock, the menu bar or both, and its interface is in French, English, Spanish and Italian. The release is built for Apple silicon, requires macOS 15, and is Developer ID signed and notarized.
