---
name: "Home Assistant"
summary: "The official Home Assistant companion app for Mac, with your dashboards, notifications and Mac sensors."
category: "Utilities"
tags: ["smart-home", "home-assistant", "notifications"]
repository: "https://github.com/home-assistant/iOS"
website: "https://companion.home-assistant.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/home-assistant/iOS/blob/main/LICENSE.md"
download: "https://apps.apple.com/us/app/home-assistant/id1099568401"
homebrew: "home-assistant"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/home-assistant/iOS", "https://github.com/home-assistant/iOS/blob/main/LICENSE.md", "https://apps.apple.com/us/app/home-assistant/id1099568401", "https://github.com/home-assistant/iOS/releases", "https://companion.home-assistant.io/docs/getting_started/", "https://companion.home-assistant.io/docs/core/sensors"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/home-assistant/iOS/blob/main/Sources/App/Resources/Assets.xcassets/AppIcon.appiconset/1024-mac.png", "credit": "Home Assistant", "license": "Apache-2.0 code license; Home Assistant name and logo are trademarks, rights retained"}]
---

This is the Mac version of the Home Assistant companion app, built from the same open-source project as the iPhone and iPad apps. It opens your Home Assistant dashboards in a native window with a customizable toolbar, can add buttons for your own entities, and receives notifications sent by your automations.

The app can also report details about the Mac back to Home Assistant as sensors, such as the active network connection or whether a Focus mode is on, so automations can react to them. Not every sensor is enabled by default.

You need a Home Assistant server of your own; the app does nothing on its own. It requires macOS 13.3 or later and is available free from the Mac App Store, with matching builds also attached to the project's GitHub releases.
