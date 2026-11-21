---
name: "mPASTE"
summary: "Makes Command-V paste plain text in every app, stripping link trackers and extra spaces, then restores the clipboard."
category: "Utilities"
tags: ["clipboard", "plain-text", "menu-bar", "keyboard-shortcuts", "privacy"]
repository: "https://github.com/starbudweiser/mPASTE"
website: "https://starbudweiser.github.io/wshowcase/#mPASTE"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mPASTE/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mPASTE/releases/latest"
macos: "14"
arch: both
notarized: true
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources: ["https://github.com/starbudweiser/mPASTE", "https://github.com/starbudweiser/mPASTE/blob/main/LICENSE", "https://github.com/starbudweiser/mPASTE/releases/tag/v1.0.3", "https://github.com/starbudweiser/mPASTE/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The mPASTE overview window: plain-text paste active with a count of cleaned pastes, an empty last-paste box and switches for the four cleaning rules.", "source": "https://github.com/starbudweiser/mPASTE/blob/main/docs/screenshot.png", "credit": "mPASTE authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mPASTE/blob/main/docs/screenshot.png", "credit": "mPASTE authors", "license": "MIT (mPASTE repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mPASTE/blob/main/assets/mPASTE_1024.png", "credit": "mPASTE authors", "license": "MIT (mPASTE repository)"}]
icon: ./assets/icon.png
---

mPASTE changes what Command-V pastes. Each time you press it, the app cleans the text on the clipboard, pastes the result and then puts the original clipboard back, formatting included. Option-Command-V pastes with the formatting kept, and Control-Option-P pauses or resumes the cleaning.

Four rules can be switched on or off:

- Paste as plain text, without fonts, colours or styles.
- Remove tracking parameters from links, such as utm_ tags, fbclid and gclid.
- Trim extra spaces.
- Turn curly quotes into straight ones.

Some apps need their formatting, so Pages, Keynote and Numbers are excluded by default and the list can be edited. The overview shows the last cleaned paste and how many pastes have been cleaned.

mPASTE intercepts the keyboard shortcut, so it needs the Accessibility permission. It can install itself as a background agent that starts at login. The agent is a user LaunchAgent that needs no administrator rights, and it can be removed from the app or with `mPASTE --service` on the command line. The idea comes from Pure Paste by Sindre Sorhus, with no code shared.

The app has a monochrome menu bar icon, an interface in French, English, Spanish and Italian, and updates from GitHub releases. The release is a universal build for Apple silicon and Intel Macs, requires macOS 14, and is Developer ID signed and notarized.
