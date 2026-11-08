---
name: "Kap"
summary: "Capture a small moment on your screen and share it as a clip."
category: "Media"
tags: ["screen-recording", "video", "sharing", "screen-recorder"]
repository: "https://github.com/wulkano/Kap"
website: "https://getkap.co"
license: "MIT"
licenseUrl: "https://github.com/wulkano/Kap/blob/main/LICENSE.md"
download: "https://github.com/wulkano/Kap/releases"
freeDownload: true
homebrew: "kap"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/wulkano/Kap", "https://github.com/wulkano/Kap/blob/main/LICENSE.md", "https://getkap.co", "https://raw.githubusercontent.com/wulkano/Kap/main/README.md", "https://github.com/wulkano/Kap/blob/main/docs/plugins.md", "https://github.com/wulkano/Kap/releases"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot.png", "alt": "Kap showing its recording export interface.", "source": "https://getkap.co/_next/static/media/kap-app-preview.8d20470a.png", "credit": "Kap contributors"}]
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/wulkano/Kap/main/renderer/public/static/kap-icon.png", "credit": "Kap contributors", "license": "MIT; upstream project asset, trademarks retained"}, {"path": "./assets/screenshot.png", "source": "https://getkap.co/_next/static/media/kap-app-preview.8d20470a.png", "credit": "Kap contributors", "license": "Upstream project website asset; trademarks retained"}]
---

Kap records part of your screen and turns it into a short clip you can send. Click its menu bar icon, drag out the area you want, press record, and click the icon again to stop. While it records, Option-click the icon to pause, or right-click it for more options.

The recording then opens in an editor window where you trim it and pick the output. Kap exports GIF, MP4, WebM and APNG, with audio if you want it, and it can highlight your clicks so a viewer can follow along.

Plugins are npm packages that you browse and install from the Plugins pane in Preferences. Share plugins add targets to the export menu, such as uploading to Giphy or Streamable. Edit plugins process the trimmed recording before it is converted, for example to reverse it. Record plugins sit in the Plugins submenu of the cropper's context menu and hook into stages of the recording. Anyone can publish one to npm with a `kap-` prefix and the `kap-plugin` keyword.

Kap needs macOS 12 or later. Apple silicon and Intel get separate downloads; the Apple silicon build is notarized. Homebrew installs it with `brew install --cask kap`. Version 3.6.0, from October 2022, is still the latest release.
