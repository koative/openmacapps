---
name: "MakeItHome"
summary: "Switches apps with live previews and opens a zone of widgets when you push the cursor past a screen edge."
category: "Productivity"
tags:
  - app-switcher
  - widgets
  - clipboard
  - notes
repository: https://github.com/Geckos-Ink/MakeItHome
website: https://github.com/Geckos-Ink/MakeItHome
license: "MPL-2.0"
licenseUrl: https://github.com/Geckos-Ink/MakeItHome/blob/main/LICENSE
download: https://github.com/Geckos-Ink/MakeItHome/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Geckos-Ink/MakeItHome
  - https://github.com/Geckos-Ink/MakeItHome/blob/main/LICENSE
  - https://github.com/Geckos-Ink/MakeItHome/releases
  - https://apps.apple.com/us/app/makeithome-screen-extender/id6444596296?mt=12
  - https://raw.githubusercontent.com/Geckos-Ink/MakeItHome/main/README.md
  - https://github.com/Geckos-Ink/MakeItHome/releases/tag/release-2.1.3
  - https://github.com/Geckos-Ink/MakeItHome-AppExtension-Demo
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Geckos-Ink/MakeItHome/main/MakeItHome/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: "Riccardo Cecchini"
    license: "MPL-2.0; upstream app icon, trademarks retained"
---

MakeItHome turns the area just past your screen's edges into a place for switching apps. Push the cursor beyond a border and an "overscreen" slides in with the running apps and live previews of their windows. Click a preview and that exact window comes forward, so you can move between apps without the Dock or Command-Tab.

- You can lock an app to a screen edge, and it stays there on every Space.
- The top edge opens a Widgets Zone, and you choose which of its built-in widgets to show: a notes and to-do list, a calendar with a month view and daily agenda, and a clipboard history that holds text, rich text, images and files.
- Your own web widgets can be added to the same zone, and a web search started there opens its full-page results in an overlay.
- With several displays, the overscreen follows the arrangement of your monitors.

Other apps can add their own interactive area to their card through the App Extension API. The developer publishes a demo app for it, and the companion MakeItHome Web extension shows Safari tab previews this way.

The app needs the Screen Recording and Accessibility permissions. The developer says window captures are processed on the Mac and are never written to disk or sent over the internet.

MakeItHome requires macOS 12.3 or later. The 2.1.3 release on GitHub is a ZIP holding a Universal app for Apple silicon and Intel; the same version is sold on the Mac App Store.
