---
name: "Apolo"
summary: "A free image optimizer that compresses and converts photos to WebP, AVIF or JPEG XL, with a CLI and an MCP server."
category: "Media"
tags:
  - images
  - compression
  - cross-platform
  - mcp
repository: "https://github.com/webcafeina/Apolo"
website: "https://apolo.webcafeina.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/webcafeina/Apolo/blob/main/LICENSE"
download: "https://github.com/webcafeina/Apolo/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/webcafeina/Apolo"
  - "https://github.com/webcafeina/Apolo/blob/main/LICENSE"
  - "https://github.com/webcafeina/Apolo/releases/latest"
  - "https://apolo.webcafeina.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/webcafeina/Apolo/main/src-tauri/icons/icon.icns"
    credit: "Webcafeína"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Apolo compresses images and converts them to WebP, AVIF, JPEG XL, JPEG and PNG on your own computer. It shows the original and the result side by side with a quality score, can search for the lowest quality that still looks right, and processes whole folders. It suits anyone who publishes images on the web and wants to see what they lose before saving. The same engine is available as a terminal tool and as an MCP server, so an AI agent such as Claude can optimise files for you.

The macOS build is a universal DMG for macOS 11 or later, on Apple silicon or Intel. The README says the installers are not signed, so the first launch has to be allowed under System Settings, Privacy & Security, and it does not claim notarization. The app is also published for Windows and Linux. The engines it bundles keep their own licences, which the README lists.
