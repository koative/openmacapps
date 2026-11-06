---
name: "Pulse"
summary: "Notch-glow monitor for Better Stack, Atlassian Statuspage and custom HTTP health checks, with a hover panel for live status."
category: "Utilities"
tags:
  - notch
  - monitoring
  - menu-bar
repository: "https://github.com/jsattler/Pulse"
website: "https://jsattler.github.io/Pulse"
license: "MIT"
licenseUrl: "https://github.com/jsattler/Pulse/blob/main/LICENSE"
download: "https://github.com/jsattler/Pulse/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jsattler/Pulse"
  - "https://github.com/jsattler/Pulse/blob/main/LICENSE"
  - "https://github.com/jsattler/Pulse/releases"
  - "https://jsattler.github.io/Pulse"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jsattler/Pulse/releases/download/v2026.1/Pulse-2026.1-arm64.dmg"
    credit: "Joshua Sattler"
    license: "MIT; upstream app icon, trademarks retained"
---

Pulse draws a colour-coded glow around the MacBook notch that shows the state of the services you watch: green when all is well, yellow when one is degraded, red during an outage. Hovering over the notch opens a panel with the live status of each service. Services come from Better Stack, Atlassian Statuspage or plain HTTP health checks, defined in a JSON file under your home folder that reloads when it changes. It suits people who run a handful of hosted services and want a signal at a glance rather than a dashboard open all day.

The README asks for macOS 15 or later. The DMG is notarized, so it opens without a Gatekeeper override. Its binary is universal, running on Intel and Apple silicon, although the file name says arm64. The TCP, incident.io and Status.io providers are listed as planned, not available. The project says it has no tracking or analytics.
