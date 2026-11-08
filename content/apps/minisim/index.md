---
name: "MiniSim"
summary: "Lists iOS simulators and Android emulators in the menu bar and starts them with a click or a global shortcut."
category: "Developer tools"
tags: ["menu-bar", "simulators", "mobile-development"]
repository: "https://github.com/okwasniewski/MiniSim"
website: "https://www.minisim.app"
license: "MIT"
licenseUrl: "https://github.com/okwasniewski/MiniSim/blob/main/LICENSE"
download: "https://github.com/okwasniewski/MiniSim/releases"
freeDownload: true
homebrew: "minisim"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/okwasniewski/MiniSim", "https://github.com/okwasniewski/MiniSim/blob/main/LICENSE", "https://github.com/okwasniewski/MiniSim/releases", "https://raw.githubusercontent.com/okwasniewski/MiniSim/main/README.md", "https://www.minisim.app", "https://github.com/okwasniewski/MiniSim/releases/tag/v0.10.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/okwasniewski/MiniSim/main/MiniSim/Assets.xcassets/AppIcon.appiconset/256.png", "credit": "Oskar Kwaśniewski", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

MiniSim gathers every iOS simulator and Android emulator on your Mac into one menu bar list. Click a device to boot it, or press Option-Shift-E from any app to open the menu. It finds devices through `xcrun` and the Android SDK's emulator tool, so Xcode and Android Studio need to be set up first.

For an iOS simulator, the menu copies the device name or UDID, or deletes a simulator you no longer need. Android emulators get more options.

- Cold boot an emulator when it misbehaves.
- Launch it with audio off, so it does not disrupt music playing through your headphones.
- Toggle TalkBack accessibility on an emulator.
- Copy its name or ADB id for command-line work, or paste the Mac clipboard into it.

Running devices are marked in the list, and MiniSim can focus a device's window through the Accessibility API. You can also set default launch flags. If you would rather drive MiniSim from the keyboard, a Raycast extension controls it.

Version 0.10.0 is a ZIP holding a Universal app for Apple silicon and Intel. It is signed with a Developer ID, notarized, and needs macOS 12 or later. The website's download button leads to a Gumroad page, and the GitHub releases and the minisim Homebrew cask are the other routes.
