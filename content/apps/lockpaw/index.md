---
name: "Lockpaw"
summary: "Covers every screen with a hotkey while builds and AI coding agents keep running underneath."
category: "Utilities"
tags: ["privacy", "keyboard-shortcuts", "notifications", "menu-bar"]
repository: "https://github.com/sorkila/lockpaw"
website: "https://getlockpaw.com"
license: "MIT"
licenseUrl: "https://github.com/sorkila/lockpaw/blob/main/LICENSE"
download: "https://github.com/sorkila/lockpaw/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/sorkila/lockpaw", "https://github.com/sorkila/lockpaw/blob/main/LICENSE", "https://github.com/sorkila/lockpaw/releases", "https://github.com/sorkila/lockpaw/blob/main/README.md", "https://getlockpaw.com", "https://github.com/sorkila/lockpaw/releases/tag/v1.7.2"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/sorkila/lockpaw/main/Lockpaw/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "Erik Nielsen and Lockpaw contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Lockpaw covers every display when you press Command-Shift-L, and the Mac keeps running underneath without sleeping or disconnecting its displays. Builds, downloads, SSH sessions and AI coding agents carry on. Press the shortcut again or rest a finger on Touch ID to uncover it. A password field on the cover is the fallback, and you can record your own shortcut.

- Displays you plug in while it is locked get covered as well.
- Hooks for Claude Code, Codex, Cursor, Gemini CLI, Copilot CLI and Aider make the cover glow when an agent stops for permission or finishes, and a notification names the agent and project. The bundled `lockpaw` command installs those hooks, and any other tool can call `lockpaw ping`.
- Agent pings can be forwarded to ntfy, Pushover or a webhook if you turn that on.
- Shortcuts and Spotlight get a Lock Screen action. There is deliberately no unlock action.
- The cover can show each display's wallpaper, or fade to black after a while.

Keeping agents running with the lid closed is opt-in. It adds a helper you approve once, which turns off sleep while the screen is covered. Unlocking restores normal sleep, and so does the battery dropping to 20% or the Mac getting hot.

Someone who means to get in still can. `pkill Lockpaw` ends it, and synthetic input from AppleScript or the Accessibility API is not blocked, so Control-Command-Q remains the real lock. The developer says Lockpaw collects no analytics and needs no account.

Lockpaw requires macOS 14 or later and the Accessibility permission. The DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized.
