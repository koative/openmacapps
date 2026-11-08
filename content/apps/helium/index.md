---
name: "Helium"
summary: "A Chromium-based browser with a bundled ad blocker and self-hostable supporting services, currently in beta."
category: "Internet"
tags:
  - browser
  - privacy
  - chromium
  - cross-platform
alternativeTo:
  - google-chrome
  - opera
  - vivaldi
repository: https://github.com/imputnet/helium
website: https://helium.computer
license: "GPL-3.0 AND BSD-3-Clause"
licenseUrl: https://github.com/imputnet/helium/blob/main/LICENSE
download: https://helium.computer
freeDownload: true
homebrew: "helium-browser"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/imputnet/helium", "https://www.chromium.org/chromium-projects/", "https://github.com/imputnet/helium/blob/main/LICENSE", "https://github.com/imputnet/helium/blob/main/LICENSE.ungoogled_chromium", "https://raw.githubusercontent.com/imputnet/helium/main/README.md", "https://helium.computer", "https://github.com/imputnet/helium-macos", "https://github.com/imputnet/helium-macos/releases", "https://github.com/imputnet/helium-macos/releases/tag/0.21.1.1", "https://formulae.brew.sh/cask/helium-browser", "https://www.google.com/chrome/"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/imputnet/helium-macos/main/resources/assets/app.icns
    credit: "imputnet and Helium contributors"
    license: "GPL-3.0 repository asset; Helium name and logo retained by the project"
---

Helium browses the web on Chromium with ads, trackers, cookie banners and third-party cookies blocked from the first page you open. The blocker is the project's own fork of uBlock Origin, with its filters, defaults and CNAME uncloaking. Helium also adds noise to some web APIs to make fingerprinting harder.

- Typed `!bang` shortcuts jump straight to a site's search, resolved on your Mac.
- Vertical tabs, split view, tab groups and tab hibernation.
- Four layouts with toolbar options and colour themes, plus a frameless mode.
- Chromium extensions work and can be imported from your old browser.

Extension downloads, filter lists, updates and crash reports go through Helium services. Each kind of request needs your approval first, and the services are open source, so you can host your own. Requests to the Chrome Web Store pass through them anonymized. The developer says Helium makes no web requests on first launch.

Some things are missing. Widevine DRM is not supported, so some streaming services will not play. There is no built-in password manager, no sync and no mobile version, and the browser is still in beta.

Chromium is the open-source project behind Google Chrome. Helium keeps that engine but removes every Google service dependency, and it does not call Google services directly.

Mac builds come from helium.computer or the helium-macos releases, as separate DMGs for Apple silicon and Intel. In the 0.21.1.1 Apple silicon download, Helium.app is Developer ID-signed and notarized while the DMG itself is not. The build needs macOS 13 or later and updates itself while Helium services are enabled. Helium's own code is GPL-3.0; code imported from ungoogled-chromium keeps its BSD-3-Clause license.
