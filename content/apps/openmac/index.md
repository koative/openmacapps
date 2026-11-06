---
name: "OpenMac"
summary: "Local HTTP server that exposes macOS OCR, translation, page capture, face detection, barcode reading and speech as JSON."
category: "Developer tools"
tags:
  - ocr
  - translation
  - local-first
repository: "https://github.com/echosoar/openmac"
website: "https://github.com/echosoar/openmac"
license: "MIT"
licenseUrl: "https://github.com/echosoar/openmac/blob/main/LICENSE"
download: "https://github.com/echosoar/openmac/releases/download/v0.4/openmac-0.4.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/echosoar/openmac"
  - "https://github.com/echosoar/openmac/blob/main/LICENSE"
  - "https://github.com/echosoar/openmac/releases/tag/v0.4"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/echosoar/openmac/main/Assets.xcassets%20%20%20%20.xcassets/AppIcon.appiconset/AppIcon1024.png"
    credit: "OpenMac contributors (echosoar)"
    license: "MIT; upstream app icon, trademarks retained"
---

OpenMac runs a local HTTP server, by default on `localhost:8080`, and turns macOS features into JSON endpoints. They cover text recognition, translation, rendered page HTML from a headless WebKit view, face and facial landmark detection, QR and barcode reading, and text-to-speech. There is also a web search endpoint that queries engines such as Bing and Google. It is for developers who want these system services inside their own scripts and pipelines.

The Xcode project targets macOS 13.0, and the README says the translation endpoint requires macOS 15 or later. The README does not state notarization or a Developer ID signature, so the first launch may need approval in System Settings. Several endpoints fetch any URL you pass to them and the README describes no authentication, so keep the port off shared networks. The project is free and MIT-licensed.
