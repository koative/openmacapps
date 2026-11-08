---
name: ungoogled-chromium
summary: Chromium without its dependencies on Google web services, plus optional privacy
  and control tweaks.
category: Internet
tags:
- browser
- privacy
- chromium
alternativeTo:
- google-chrome
- opera
- vivaldi
repository: https://github.com/ungoogled-software/ungoogled-chromium
website: https://github.com/ungoogled-software/ungoogled-chromium
license: BSD-3-Clause
licenseUrl: https://github.com/ungoogled-software/ungoogled-chromium/blob/master/LICENSE
download: https://github.com/ungoogled-software/ungoogled-chromium-macos/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
sources:
- https://github.com/ungoogled-software/ungoogled-chromium
- https://github.com/ungoogled-software/ungoogled-chromium/blob/master/LICENSE
- https://github.com/ungoogled-software/ungoogled-chromium-macos/releases
- https://formulae.brew.sh/cask/ungoogled-chromium
- https://ungoogled-software.github.io/ungoogled-chromium-binaries/
- https://raw.githubusercontent.com/ungoogled-software/ungoogled-chromium/master/README.md
- https://raw.githubusercontent.com/ungoogled-software/ungoogled-chromium-macos/master/README.md
- https://ungoogled-software.github.io/ungoogled-chromium-wiki/faq
- https://github.com/ungoogled-software/ungoogled-chromium-macos/releases/tag/156.0.8078.79-1.1
- https://www.google.com/chrome/
---

ungoogled-chromium is Chromium with the code that talks to Google's web services taken out. The project aims to keep the default Chromium experience as close as possible, but background requests to web services are removed, and many Google domains in the source are rewritten to a non-existent `qjz9zk` domain the browser refuses to contact. Pre-built binaries are also stripped from the source tree.

Some losses come with that. Safe Browsing is disabled, and turning off the intranet redirect detector breaks captive portal detection, though captive portals themselves still load. The project's own additions are mostly off until you switch them on:

- extra `chrome://flags` entries and command-line switches
- a "No Search" option for the address bar
- a field for a custom search suggestions URL
- pop-ups forced into tabs, and full URLs shown unformatted in the address bar

Google Chrome offers the Chrome Web Store, Safe Browsing and an update every four weeks. ungoogled-chromium cannot install from the Web Store page. You download an extension's CRX file through a special URL or add the chromium-web-store extension, and extensions do not update on their own without it.

Mac builds come from a separate ungoogled-chromium-macos repository, as DMGs for Apple silicon and Intel, or as the `ungoogled-chromium` Homebrew cask. The app installs as Chromium. The macOS maintainer notarizes the builds with a Developer ID and plans to keep doing so through October 2027. The project's patches and tooling are BSD-3-Clause.
