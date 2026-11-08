---
name: "Pasteboard Viewer"
summary: "Shows what apps put on the macOS system pasteboards, refreshed live as it changes."
category: "Developer tools"
tags: ["clipboard", "inspection", "development", "native"]
repository: "https://github.com/sindresorhus/Pasteboard-Viewer"
website: "https://sindresorhus.com/pasteboard-viewer"
license: "MIT"
licenseUrl: "https://github.com/sindresorhus/Pasteboard-Viewer/blob/main/license"
download: "https://apps.apple.com/app/id1499215709"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/sindresorhus/Pasteboard-Viewer", "https://github.com/sindresorhus/Pasteboard-Viewer/blob/main/license", "https://apps.apple.com/app/id1499215709", "https://sindresorhus.com/pasteboard-viewer", "https://github.com/sindresorhus/Pasteboard-Viewer/blob/main/readme.md"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/sindresorhus/Pasteboard-Viewer/main/Stuff/AppIcon-readme.png", "credit": "Sindre Sorhus", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

When you copy something in your own app, Pasteboard Viewer shows what actually landed on the system pasteboards, item by item. The contents refresh live, so you can copy again in your app and watch the result change.

- Text, RTF and images get a preview, and so does anything Quick Look can render.
- The up and down arrow keys switch between pasteboard items.
- Right-clicking an entry in the sidebar copies its type identifier.
- Stay in Front, in the Window menu, keeps the window above your app while you test.

The current App Store release requires macOS 26, and the same project ships versions for iOS and visionOS. Older Mac builds stay on GitHub, going back to version 1.5.1 for macOS 10.15. If you cannot use the App Store, a separate download of version 2.12.0 is offered; it does not update itself, and the developer replaces it about once a year.

Obsolete types that have a modern equivalent, such as `NSStringPboardType` and `NSFilenamesPboardType`, are hidden. The app is meant for programmers checking what their code puts on `NSPasteboard` or `UIPasteboard`, and it is not a clipboard manager.
