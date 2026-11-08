---
name: "Tungsten Edge"
summary: "A per-window taskbar for the bottom of the screen, with one clickable card per open window."
category: "Productivity"
tags: ["window-management", "dock", "taskbar"]
repository: "https://github.com/moonbai-studio/tungsten-edge"
website: "https://tungstenedge.app"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/moonbai-studio/tungsten-edge/blob/master/LICENSE"
download: "https://tungstenedge.app"
freeDownload: true
homebrew: "tungsten-edge"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/moonbai-studio/tungsten-edge", "https://github.com/moonbai-studio/tungsten-edge/blob/master/LICENSE", "https://tungstenedge.app", "https://raw.githubusercontent.com/moonbai-studio/tungsten-edge/master/README.md", "https://tungstenedge.app/download/latest", "https://github.com/moonbai-studio/tungsten-edge/releases/tag/v0.18.4"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/moonbai-studio/tungsten-edge/master/assets/icon.png", "credit": "moonbai-studio", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Tungsten Edge puts a taskbar along the bottom of the screen with one card for each open window, so getting back to a particular document takes a single click. Apps with only one window shrink to an icon. A card with a greyed title belongs to a window that is minimized or whose app is hidden, and clicking it brings the window back.

- An app drawer at the right end holds apps you rarely use and can keep pinned favorites, like a launcher.
- Folders pinned beside the Trash open as a fan, grid or list, the way Dock stacks do.
- With two or more displays, one bar can follow the pointer, or every display can get its own bar that lists only the windows on it.
- The bar stays visible by default or hides at the bottom edge after a delay you set, and Option-Shift-Command-D switches between the two.
- A slider in the status menu sets the Dock's wake delay as well, down to never showing it.

The DMG from the official site holds a Universal app for macOS 12 or later; the 0.18.4 build was Developer ID-signed and notarized. Downloads are free until version 1.0, when the app becomes a one-time purchase. People on the founding-user email list before then keep it free.

Listing and switching windows requires the Accessibility permission, which the app asks for on first launch. To keep the bar from flashing when a window enters full screen, it watches clicks, key presses and trackpad gestures for four specific triggers. The developer says other input is never recorded or sent, and the listener can be switched off under Advanced.
