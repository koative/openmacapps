---
name: "Gõ Nhanh"
summary: "A Vietnamese typing tool for Telex and VNI that restores English words typed by mistake and remembers per-app settings."
category: "Utilities"
tags: ["keyboard", "input", "languages", "menu-bar", "cross-platform"]
repository: "https://github.com/khaphanspace/gonhanh.org"
website: "https://gonhanh.org"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/khaphanspace/gonhanh.org/blob/main/LICENSE"
download: "https://github.com/khaphanspace/gonhanh.org/releases"
homebrew: "gonhanh"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/khaphanspace/gonhanh.org", "https://github.com/khaphanspace/gonhanh.org/blob/main/LICENSE", "https://github.com/khaphanspace/gonhanh.org/releases", "https://github.com/khaphanspace/gonhanh.org/blob/main/docs/install-macos.md"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/khaphanspace/gonhanh.org/blob/main/platforms/macos/Assets.xcassets/AppIcon.appiconset/icon_256.png", "credit": "Gõ Nhanh contributors", "license": "BSD-3-Clause; upstream project asset, trademarks retained"}]
---

Gõ Nhanh is a Vietnamese typing tool that lives in the menu bar. It supports the Telex and VNI input styles, places tone marks by the modern spelling rules, and toggles with Control-Space. When Telex turns an English word into Vietnamese by accident, such as `text` becoming `têt`, it restores the English spelling when you press Space, or when you press Escape.

It can remember whether Vietnamese should be on or off in each app, steps aside automatically when you switch to another input source such as Japanese or Korean, expands typed abbreviations, and has a per-app delay setting for editors where characters get dropped. The project says it is free with no paid tier, shows no ads and works offline.

The app needs Accessibility permission in System Settings before it can type. If macOS refuses to open it after a manual install, the project's troubleshooting note suggests running `xattr -cr /Applications/GoNhanh.app`. Linux and Windows versions are in beta.
