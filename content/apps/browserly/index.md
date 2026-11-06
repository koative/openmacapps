---
name: "Browserly"
summary: "Menu bar app that sends each link to the browser you choose, based on your own URL rules."
category: "Internet"
tags:
  - browser
  - default-browser
  - url-routing
  - menu-bar
repository: "https://github.com/andyzasl/browserly"
website: "https://github.com/andyzasl/browserly"
license: "MIT"
licenseUrl: "https://github.com/andyzasl/browserly/blob/main/LICENSE"
download: "https://github.com/andyzasl/browserly/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/andyzasl/browserly"
  - "https://github.com/andyzasl/browserly/blob/main/LICENSE"
  - "https://github.com/andyzasl/browserly/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/andyzasl/browserly/main/Sources/Browserly/Resources/AppIcon.icns"
    credit: "Andrei Zaslavskii"
    license: "MIT; upstream app icon, trademarks retained"
---

Browserly registers as the default browser and forwards each link to the browser you pick. Rules match the link's domain, a regular expression over the full URL, or the app that sent the link. A rule can target a specific Chrome, Edge or Brave profile or open a private window. It also unwraps redirect links from Teams, Outlook, Proofpoint and Slack. It suits people who split work and personal browsing across different browsers or profiles.

It needs macOS 14 or later and runs as a universal binary for Apple silicon and Intel. The README says the app is not notarized, so macOS blocks the first launch; it tells you to remove the quarantine flag with `xattr`, or to build from source. Rules are stored in a JSON file under Application Support.
