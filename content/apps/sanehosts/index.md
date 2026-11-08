---
name: "SaneHosts"
summary: "Switches the Mac's hosts file between blocklist profiles to block ads, trackers and distracting sites in every app."
category: "Privacy & security"
tags: ["privacy", "profiles", "network", "source-available"]
repository: "https://github.com/sane-apps/SaneHosts"
website: "https://sanehosts.com"
license: "PolyForm-Shield-1.0.0"
sourceAvailability: "source-available"
licenseNotes: "PolyForm Shield 1.0.0 lets you use and modify the source but prohibits using it to provide a product or service that competes with SaneHosts, including free alternatives."
licenseUrl: "https://github.com/sane-apps/SaneHosts/blob/main/LICENSE"
download: "https://github.com/sane-apps/SaneHosts/releases"
freeDownload: false
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/sane-apps/SaneHosts", "https://github.com/sane-apps/SaneHosts/blob/main/LICENSE", "https://github.com/sane-apps/SaneHosts/releases", "https://raw.githubusercontent.com/sane-apps/SaneHosts/main/README.md", "https://sanehosts.com", "https://github.com/sane-apps/SaneHosts/releases/tag/v1.1.26", "https://github.com/sane-apps/SaneHosts/releases/tag/v1.1.25"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/sane-apps/SaneHosts/main/SaneHosts/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "SaneApps", "license": "PolyForm-Shield-1.0.0; upstream project asset, trademarks retained"}]
screenshots: []
---

SaneHosts edits the Mac's /etc/hosts file for you, so ad, tracker and distraction domains stop resolving in every app. You pick a protection level or build a profile from blocklists, activate it, and approve the change with Touch ID or your password.

There are five preset levels, and the first four build on each other. Essentials covers ads, trackers and malware. Family Safe adds adult and gambling sites, Focus Mode adds social media, and Privacy Shield adds telemetry and advanced trackers. Kitchen Sink is the largest set. The site puts them at roughly 170,000 to 700,000 entries.

- More than 200 blocklists, among them Steven Black, Hagezi, AdGuard and OISD, can be imported, along with any list at an HTTPS address.
- Profiles can be merged with duplicates removed, exported as standard .hosts files and switched from the menu bar.
- Each activation flushes the DNS cache, and the app keeps three backups per profile.
- Search copes with profiles of over 100,000 entries, and a health indicator shows whether each blocklist source is reachable.

Hosts data lives in ~/Library/Application Support/SaneHosts. According to the developer, a small number of anonymous product events, such as launch, version and license status, may be sent.

SaneHosts needs macOS 14 or later. The version 1.1.26 ZIP on GitHub holds a notarized Universal app for Apple silicon and Intel. Every feature works for 14 days, then protection turns off until you buy the app once. The source is published under PolyForm Shield 1.0.0, which bars using it to build a competing product.

Blocking works by domain, so an ad hosted on the page's own domain still loads, and empty ad boxes stay on the page; a browser extension can deal with those. The Turn Off Protection command stops blocking.
