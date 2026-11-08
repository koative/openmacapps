---
name: "HapticKey"
summary: "Answers Touch Bar key taps with trackpad haptic feedback, a sound or a screen flash."
category: "Utilities"
tags: ["touch-bar", "trackpad", "keyboard", "accessibility"]
repository: "https://github.com/niw/HapticKey"
website: "https://github.com/niw/HapticKey"
license: "MIT"
licenseUrl: "https://github.com/niw/HapticKey/blob/master/LICENSE"
download: "https://github.com/niw/HapticKey/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/niw/HapticKey", "https://github.com/niw/HapticKey/blob/master/LICENSE", "https://github.com/niw/HapticKey/releases", "https://raw.githubusercontent.com/niw/HapticKey/master/README.md", "https://github.com/niw/HapticKey/releases/tag/0.7.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/niw/HapticKey/master/HapticKey/Resources/Assets.xcassets/AppIcon.appiconset/256x256.png", "credit": "Yoshimasa Niwa and HapticKey contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

On a MacBook with a Touch Bar, tapping Escape or a function key gives no physical click. HapticKey supplies one. It vibrates the trackpad when you tap, reacting either to Escape and the F keys or to every tap on the Touch Bar. A sound or a screen flash, like a terminal's visual bell, can come with it.

It watches Touch Bar events through a CGEventTap and drives the trackpad with private functions in Apple's MultitouchSupport framework. Because it listens to system events, it may ask for Accessibility permission. The README names Escape in Vim as the case where the missing feedback hurts most.

Version 0.7.0 from October 2021 is still the latest release, a Universal app for Apple silicon and Intel that asks for macOS 10.12 or later. Release builds are not signed, so you allow the app in Security & Privacy settings before it opens. The code has kept moving since then, with a French translation added in 2025, but no newer build exists.

Only MacBooks with a Touch Bar can use it.
