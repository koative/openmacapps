---
name: "mPIE"
summary: "Opens a ring menu under the pointer to launch apps, switch between them, send shortcuts and control music."
category: "Productivity"
tags: ["launcher", "app-switcher", "keyboard-shortcuts", "mouse", "music", "menu-bar"]
repository: "https://github.com/starbudweiser/mPIE"
website: "https://starbudweiser.github.io/wshowcase/#mPIE"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mPIE/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mPIE/releases/latest"
macos: "14"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources: ["https://github.com/starbudweiser/mPIE", "https://github.com/starbudweiser/mPIE/blob/main/LICENSE", "https://github.com/starbudweiser/mPIE/releases/tag/v1.0.2", "https://github.com/starbudweiser/mPIE/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The mPIE ring open on the Launcher module, with app icons around the circle, the Messages slice highlighted and the bar of four modules below.", "source": "https://github.com/starbudweiser/mPIE/blob/main/docs/screenshot.png", "credit": "mPIE authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mPIE/blob/main/docs/screenshot.png", "credit": "mPIE authors", "license": "MIT (mPIE repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mPIE/blob/main/assets/mPIE.png", "credit": "mPIE authors", "license": "MIT (mPIE repository)"}]
icon: ./assets/icon.png
---

mPIE opens a ring of slices under the pointer and runs the one you release over. Hold Option-Space, or Option with the middle mouse button, move toward a slice and let go. A quick press leaves the ring open so you can click a slice instead. Esc closes it. The ring has four modules, and Tab, the scroll wheel or the keys 1 to 4 switch between them.

- Launcher holds up to 16 apps, folders or files, placed clockwise from the top.
- Open apps lists running apps, most recently used first, minus any you exclude.
- Controller sends keyboard shortcuts to the frontmost app, with sets for Finder, Safari, Xcode, DaVinci Resolve, Blender and others, or a set you build.
- Music plays, pauses, skips, shuffles and repeats tracks in Apple Music or Spotify, and shows the title and artwork.

Presets in the settings fill the launcher from ready-made groups such as development, video, office or design apps. Only apps installed on the Mac are kept. A preset also sets how the ring opens: keyboard and mouse, keyboard only, mouse only, or tap then click. You can change the trigger key, the modifier and the mouse button that open it, or turn the mouse trigger off entirely.

The idea comes from Pieoneer, and mPIE shares no code or assets with it. The Controller needs the Accessibility permission, and the music remote asks for Automation access the first time it is used. The app runs from the menu bar, its interface is in French, English, Spanish and Italian, and it checks GitHub releases for updates. The release is built for Apple silicon, requires macOS 14, and is Developer ID signed and notarized.
