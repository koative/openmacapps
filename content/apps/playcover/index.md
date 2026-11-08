---
name: "PlayCover"
summary: "Runs iPhone and iPad apps on Apple silicon Macs, with touch controls mapped to keyboard, mouse and game controllers."
category: "Games"
tags: ["gaming", "controllers", "keyboard", "remapping"]
repository: "https://github.com/PlayCover/PlayCover"
website: "https://playcover.io"
license: "GPL-3.0"
licenseUrl: "https://github.com/PlayCover/PlayCover/blob/develop/LICENSE"
download: "https://github.com/PlayCover/PlayCover/releases"
freeDownload: true
homebrew: "playcover-community"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/PlayCover/PlayCover", "https://github.com/PlayCover/PlayCover/blob/develop/LICENSE", "https://github.com/PlayCover/PlayCover/releases", "https://raw.githubusercontent.com/PlayCover/PlayCover/develop/README.md", "https://playcover.github.io/PlayBook/", "https://playcover.github.io/PlayBook/getting_started/download_ipa.html", "https://playcover.github.io/PlayBook/keymapping/using_making_keymaps.html", "https://playcover.github.io/PlayBook/settings/graphics.html", "https://playcover.github.io/PlayBook/other_features/ipa_library.html", "https://playcover.github.io/PlayBook/miscellaneous/blocked_apps.html", "https://github.com/PlayCover/PlayCover/releases/tag/3.1.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/PlayCover/PlayCover/develop/PlayCover/Assets.xcassets/AppIcon.appiconset/256R256x1.png", "credit": "PlayCover contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

PlayCover runs iPhone and iPad apps on an Apple silicon Mac by wrapping each one in a layer that presents it as an iPad. You map on-screen touch controls to the keyboard, mouse and game controllers, which matters most for mobile games with no Mac version. It began as a way to run Genshin Impact and now runs a much wider range of apps, though some fail or have bugs.

You bring your own `.ipa` files, and they must be decrypted before PlayCover accepts them. The IPA Library can also install apps from source lists you add, either a web link or a local JSON file.

- The keymapping editor opens with Command-K inside a running app, and the Option key turns the active keymap on or off. While it is on, the pointer stays locked to the app window.
- Keymaps for many games can be imported, and you can export your own.
- Graphics settings change the resolution and the device model the app sees, which can unlock features some apps reserve for certain iPads.
- An account manager, jailbreak-detection bypass and an export to Sideloadly are also included.

PlayCover blocks some apps by bundle ID. Competitive games such as PUBG Mobile and Call of Duty: Mobile are on that list because they can detect the Mac setup as a jailbroken or modified client and ban the account.

The app needs an Apple silicon Mac with macOS 12 or later and does not run on Intel. Release 3.1.0 is Developer ID-signed and notarized, and the project recommends its 4.0.0 pre-release from October 2026 as the newer build.
