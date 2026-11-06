---
name: "HealthAtlas"
summary: "Privacy-first dashboard for local Apple Health exports that shows trends and patterns without uploading anything."
category: "Utilities"
tags:
  - health
  - privacy
  - data-visualization
repository: "https://github.com/Schrotty74/HealthAtlas"
website: "https://github.com/Schrotty74/HealthAtlas"
license: "GPL-3.0"
licenseUrl: "https://github.com/Schrotty74/HealthAtlas/blob/main/LICENSE"
download: "https://github.com/Schrotty74/HealthAtlas/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Schrotty74/HealthAtlas"
  - "https://github.com/Schrotty74/HealthAtlas/blob/main/LICENSE"
  - "https://github.com/Schrotty74/HealthAtlas/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Schrotty74/HealthAtlas/main/HealthAtlas/Assets.xcassets/AppIcon.appiconset/icon-1024x1024.png"
    credit: "HealthAtlas contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

HealthAtlas imports a local Apple Health export, either `Export.xml` or a ZIP archive containing it, and turns the data types you select into overview cards, a shared timeline, trend views from 7 days to one year, period comparisons and a local PDF report. Its insights are descriptive: coverage, recording patterns and local snapshots, not diagnoses or health ratings. The app starts empty, keeps imported data in memory for the session and includes a synthetic demo export. It suits people who want to look at their own Apple Health history without uploading it.

The README and release page do not state a minimum macOS version. Releases are ad-hoc signed and not notarized, so macOS may require Open Anyway for the specific build under System Settings > Privacy & Security. The only network request is an optional, user-set check of the public GitHub release list. HealthAtlas is a visualisation tool, not medical software.
