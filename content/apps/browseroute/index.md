---
name: "Browseroute"
summary: "Default-browser router that opens each clicked web link in a chosen browser, using host and path rules."
category: "Utilities"
tags:
  - browser
  - links
  - menu-bar
  - routing
repository: "https://github.com/TerrifiedBug/browseroute"
website: "https://browseroute.terrifiedbug.com"
license: "MIT"
licenseUrl: "https://github.com/TerrifiedBug/browseroute/blob/main/LICENSE"
download: "https://github.com/TerrifiedBug/browseroute/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/TerrifiedBug/browseroute"
  - "https://github.com/TerrifiedBug/browseroute/blob/main/LICENSE"
  - "https://github.com/TerrifiedBug/browseroute/releases"
  - "https://browseroute.terrifiedbug.com"
---

Browseroute registers as the default web browser and hands each `http` and `https` link to the browser you choose. Rules match a host suffix, a host glob or a host plus path glob, and are tried from top to bottom; a link that matches nothing goes to a Default browser you mark. It can also appear as an Open With option in Finder for common document and image types. It suits people who keep work and personal accounts in separate browsers and want links to open in the right one.

Requires macOS 14 or later. Builds are signed with a Developer ID certificate and notarized by Apple. Turn on Launch at Login so that routing stays instant instead of starting the app on every click. Default-browser registration works only when the app runs from `/Applications`, and the popover has a switch that pauses rule matching.
