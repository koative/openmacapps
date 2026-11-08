---
name: "Ghostty"
summary: "Runs shells in GPU-rendered windows, tabs and splits built from standard macOS interface elements."
category: "Developer tools"
tags: ["terminal", "shell", "native", "terminal-emulator"]
repository: "https://github.com/ghostty-org/ghostty"
website: "https://ghostty.org"
license: "MIT"
licenseUrl: "https://github.com/ghostty-org/ghostty/blob/main/LICENSE"
download: "https://ghostty.org/download"
freeDownload: true
homebrew: "ghostty"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ghostty-org/ghostty", "https://github.com/ghostty-org/ghostty/blob/main/LICENSE", "https://ghostty.org/download", "https://ghostty.org/docs/features", "https://ghostty.org/docs/about"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/ghostty-org/ghostty/blob/main/images/icons/icon_256.png", "credit": "Ghostty contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Ghostty runs your shell in a terminal window that you can split or tab to keep several sessions in view. Tabs, splits and windows use standard macOS interface elements rather than custom-drawn ones, and the terminal screen is drawn on the GPU with Metal.

Settings live in a plain-text configuration file instead of a preferences window. From there you set fonts, colors, key bindings and one of hundreds of bundled themes, which can switch with the system light or dark appearance. Other Mac features include:

- a quick terminal that slides down below the menu bar on a hotkey
- an AppleScript dictionary for scripting windows, tabs and input
- Quick Look lookups with a three-finger tap or force click
- secure keyboard entry when a password prompt appears

For programs running inside it, Ghostty follows xterm behaviour and supports newer protocols such as the Kitty graphics and keyboard protocols, so tools that use them can show images or read richer key input. Font ligatures, emoji and grapheme clusters render as single characters.

The download page offers a universal binary for Apple silicon and Intel Macs and lists macOS 13 Ventura or later as the requirement. Ghostty also runs on Linux, where it uses GTK and OpenGL; Windows is not supported. The app is free, needs no account, and is released under the MIT license. The project also publishes libghostty, a library for embedding the terminal in other apps, which is a separate product from this desktop application.
