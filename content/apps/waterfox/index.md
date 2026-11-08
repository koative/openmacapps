---
name: "Waterfox"
summary: "An independent Firefox-based browser with its own defaults and release choices."
category: "Internet"
tags: ["browser", "extensions", "web"]
alternativeTo: ["google-chrome", "opera", "vivaldi"]
repository: "https://github.com/BrowserWorks/waterfox"
website: "https://www.waterfox.com"
license: "MPL-2.0"
licenseUrl: "https://github.com/BrowserWorks/waterfox/blob/current/toolkit/content/license.html"
download: "https://www.waterfox.com/download/"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/BrowserWorks/waterfox", "https://github.com/BrowserWorks/waterfox/blob/current/toolkit/content/license.html", "https://www.waterfox.com/download/", "https://www.waterfox.com/", "https://raw.githubusercontent.com/BrowserWorks/waterfox/current/README.md", "https://vivaldi.com/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/BrowserWorks/waterfox/current/waterfox/browser/branding/firefox.icns", "credit": "BrowserWorks Ltd", "license": "Trademark of BrowserWorks Ltd; branding file is MPL-2.0 but grants no trademark rights to the Waterfox name or logo (waterfox/browser/branding/LICENSE); used unmodified (256px representation extracted) only to identify the app in a non-commercial directory"}]
---

Open sites and Firefox WebExtensions in Waterfox, which runs on the same Gecko engine as Firefox. The changes are in what ships around the engine: browser telemetry is removed, and several privacy and layout features are built in.

- An ad blocker is on by default and stops adverts, trackers, pop-ups and overlays before they load. Filter lists and per-site exceptions are adjustable, and partner ads in search can be turned off.
- Private tabs sit next to regular ones in the same window. Their site data is cleared when you close the last private tab.
- DNS lookups are encrypted and sent through an Oblivious HTTP relay. The relay sees who asked but not the query, and the resolver sees the query but not who asked.
- Tree tabs nest each page under the one that opened it, and a whole branch can be collapsed or dragged at once.
- A status bar at the bottom shows the full address of a hovered link and the loading progress.

You can also switch between browser styles, colour palettes and horizontal or vertical tabs. Bookmarks and other data can be imported from another browser, although Chrome-only extensions do not transfer automatically. Security fixes from Mozilla arrive in regular updates on the Firefox ESR model.

Waterfox needs no account. BrowserWorks Ltd, owned by founder Alex Kontos, develops it and funds it through search partnerships, donations and an optional private search subscription. The developer says it collects no personal data. The macOS download is a Universal disk image for Apple silicon and Intel and requires macOS 10.15 or later.

Vivaldi also blocks ads and trackers and lets you customise its interface, and it adds a built-in mail client and calendar. Waterfox stays a browser on the Firefox engine.
