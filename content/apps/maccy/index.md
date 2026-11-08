---
name: "Maccy"
summary: "Keeps a searchable history of what you copy, opened from the menu bar with a keyboard shortcut."
category: "Productivity"
tags: ["clipboard", "keyboard", "native", "clipboard-manager"]
alternativeTo: ["paste"]
repository: "https://github.com/p0deje/Maccy"
website: "https://maccy.app"
license: "MIT"
licenseUrl: "https://github.com/p0deje/Maccy/blob/master/LICENSE"
download: "https://github.com/p0deje/Maccy/releases"
freeDownload: true
homebrew: "maccy"
featured: true
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/p0deje/Maccy", "https://github.com/p0deje/Maccy/blob/master/LICENSE", "https://maccy.app", "https://github.com/p0deje/Maccy/blob/master/README.md", "https://github.com/p0deje/Maccy/releases", "https://apps.apple.com/us/app/maccy/id1527619437", "https://pasteapp.io/pricing", "https://pasteapp.io/", "https://github.com/p0deje/Maccy/releases/tag/2.8.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/p0deje/Maccy/master/Maccy/Assets.xcassets/AppIcon.appiconset/AppIcon%20%28Big%20Sur%29-256w.png", "credit": "Maccy contributors", "license": "MIT; upstream project asset, trademarks retained"}, {"path": "./assets/screenshot.png", "source": "https://raw.githubusercontent.com/p0deje/Maccy/master/Designs/Instructions.png", "credit": "Maccy contributors", "license": "MIT; upstream project documentation asset, trademarks retained"}]
screenshots: [{"src": "./assets/screenshot.png", "alt": "Upstream annotated Maccy screenshot explaining search, pinning and clipboard actions.", "source": "https://raw.githubusercontent.com/p0deje/Maccy/master/Designs/Instructions.png", "credit": "Maccy contributors"}]
---

Maccy records what you copy, apart from copy types it ignores by default, and keeps it in a list in the menu bar. Press Shift-Command-C, type a few letters to filter the history, and press Return to put the chosen item back on the clipboard.

- Option-Return pastes the item straight into the frontmost app, and adding Shift pastes it without formatting. Automatic pasting needs the Accessibility permission.
- Pinned items stay at the top of the list with their own keyboard shortcut.
- You can delete items one at a time or clear the whole unpinned history.
- Option-clicking the menu bar icon pauses recording, and Option-Shift-click skips only the next copy.

By default Maccy skips clipboard types that apps mark as concealed, transient or auto-generated, which password managers use. You can add more types in settings, for example to ignore copies arriving through Universal Clipboard. The developer says the history is stored on the Mac.

Paste also keeps a searchable clipboard history. It adds pinboards for reusable clips and syncs across Mac, iPhone and iPad, sold as a subscription or a lifetime plan. Maccy keeps a plain list behind a hotkey, stored locally.

Maccy requires macOS 14 or later. The GitHub release is a ZIP containing a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. That build is free under the MIT license, and the same app is sold on the Mac App Store. Look-alike websites distribute malware under Maccy's name. Its only official site is maccy.app.
