---
name: "ApolloShell"
summary: "Adds a Linux-style sidebar with a dock, a launcher, a widget dashboard and a control centre to macOS 26."
category: "Utilities"
tags: ["launcher", "dock", "customization"]
repository: "https://github.com/Silvertree2010/ApolloShell"
website: "https://silvertree2010.github.io/ApolloShell/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/Silvertree2010/ApolloShell/blob/main/LICENSE"
download: "https://github.com/Silvertree2010/ApolloShell/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Silvertree2010/ApolloShell", "https://github.com/Silvertree2010/ApolloShell/blob/main/LICENSE", "https://raw.githubusercontent.com/Silvertree2010/ApolloShell/main/README.md", "https://silvertree2010.github.io/ApolloShell/", "https://github.com/Silvertree2010/ApolloShell/releases", "https://github.com/Silvertree2010/ApolloShell/releases/tag/v0.1.8"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Silvertree2010/ApolloShell/main/Support/AppIcon.icns", "credit": "Silvertree2010", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

ApolloShell adds panels along the edges of the Mac screen, styled after Caelestia and other Linux desktop shells. Finder and the window manager keep working as before; the shell sits around them.

- The left sidebar is built from blocks you add, remove and reorder: a power button, status icons, a clock and Spaces.
- The sidebar's dock shows pinned and running apps, with the clicks, menus, drag and drop and badges of Apple's Dock.
- Option-Space opens a launcher that ranks the apps you use most.
- A dashboard drops from the top edge with pages of widgets for weather, calendar, system stats, playback and a timer.
- A control centre in the bottom-right corner covers sound, Wi-Fi, dark mode, Night Shift, keep-awake and a colour picker.

The look comes from one CSS file in Application Support. It sets colours, gradients, fonts and sizes through `--apollo-*` tokens, and saving it restyles the shell at once. Panels are arranged in Nexus, the settings app.

ApolloShell needs macOS 26 Tahoe on Apple silicon or Intel. This is an early release built on private macOS interfaces, and a system update can break parts of it. The disk image is not notarized, so the first launch has to be allowed in Privacy & Security; Homebrew builds it from source instead. The disk image build updates itself through Sparkle. It shares no code with Caelestia.
