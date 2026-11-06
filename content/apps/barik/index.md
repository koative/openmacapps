---
name: "Barik"
summary: "Replaces the macOS menu bar with a customizable bar of widgets, and shows spaces for yabai or AeroSpace users."
category: "Utilities"
tags:
  - menu-bar
  - window-management
  - tiling
repository: "https://github.com/mocki-toki/barik"
website: "https://github.com/mocki-toki/barik"
license: "MIT"
licenseUrl: "https://github.com/mocki-toki/barik/blob/main/LICENSE"
maintenance: "unmaintained"
maintenanceNote: "Author no longer has time to maintain it actively; last release February 2025 (checked 2026-11-06)."
download: "https://github.com/mocki-toki/barik/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mocki-toki/barik"
  - "https://github.com/mocki-toki/barik/blob/main/LICENSE"
  - "https://github.com/mocki-toki/barik/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/mocki-toki/barik/releases/download/0.5.1/Barik.zip"
    credit: "Simon Butenko"
    license: "MIT; upstream app icon, trademarks retained"
---

Barik is a menu bar replacement with widgets for the time, battery, network and Now Playing (Spotify and Apple Music). If you use yabai or AeroSpace for tiling, it also shows the current spaces with their numbers or keys, so you can see which key switches to which space. Widgets, their order and the look are set in a TOML file, `~/.barik-config.toml`, which is created on first launch. It suits people who tile windows and want a compact bar at the top of the screen.

Barik needs macOS 14.6 or later and is a universal build. It is not notarized, so the first launch must be allowed in System Settings. To use it as the menu bar, the system menu bar has to be hidden. The author writes that they no longer have time to maintain the project actively and invites forks; the last release is from February 2025. Menu items such as File and Edit are not shown.
