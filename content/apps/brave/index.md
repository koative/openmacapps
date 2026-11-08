---
name: "Brave"
summary: "A Chromium-based browser with built-in controls for advertisements and trackers."
category: "Internet"
tags: ["browser", "privacy", "web"]
alternativeTo: ["google-chrome", "opera", "vivaldi"]
repository: "https://github.com/brave/brave-browser"
website: "https://brave.com"
license: "MPL-2.0"
licenseUrl: "https://github.com/brave/brave-browser/blob/master/LICENSE"
download: "https://brave.com/download"
freeDownload: true
homebrew: "brave-browser"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/brave/brave-browser", "https://github.com/brave/brave-browser/blob/master/LICENSE", "https://brave.com/download", "https://github.com/brave/brave-core", "https://brave.com/shields/", "https://brave.com/leo/", "https://brave.com/firewall-vpn/", "https://brave.com/brave-rewards/", "https://support.brave.app/hc/en-us/articles/360021357112-What-are-the-system-requirements-to-install-Brave", "https://support.brave.app/hc/en-us/articles/18347246446733-Changes-to-macOS-desktop-browser-requirements", "https://www.chromium.org/chromium-projects/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/brave/brave-core/master/app/theme/brave/mac/app.icns", "credit": "Brave Software, Inc.", "license": "Trademark/logo of Brave Software, Inc.; not covered by the MPL-2.0 code license (brand assets: https://brave.com/brave-branding-assets/); used unmodified (converted from .icns and resized only) to identify the app in a non-commercial directory"}]
---

Brave blocks third-party ads and trackers on every page without an add-on, in a browser built on Chromium. A Shields icon in the address bar shows what was blocked on the current site. When a page breaks, you switch blocking off for that site alone.

Shields does more than hide ads:

- It applies filter lists from EasyList, EasyPrivacy, uBlock Origin and Brave's own lists, with a Standard and a stricter Aggressive mode.
- It blocks cross-site cookies and gives embedded third parties temporary storage that is deleted afterwards.
- It randomizes the browser details that sites use to fingerprint visitors, so the values change between sessions.
- It warns before you open pages flagged for phishing or malware.

Google Chrome comes from the same open-source Chromium project, so the engine underneath is shared. Brave's difference is that blocking is built in.

Brave needs macOS 13 Ventura or later. Older Macs are limited to earlier releases, listed per macOS version. The browser code lives in the brave-core repository under MPL-2.0.

Several services come built in. Leo is an AI assistant you reach from the address bar, free without an account, with a paid Premium tier. Brave VPN is a paid subscription. Brave Rewards pays tokens for viewing Brave's own ads, but it does nothing until you set it up.
