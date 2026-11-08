---
name: "Rio"
summary: "Runs your shell in a Rust-built terminal with split panels, native macOS tabs, Vi mode and inline image protocols."
category: "Developer tools"
tags: ["terminal", "shell", "cross-platform", "terminal-emulator"]
repository: "https://github.com/raphamorim/rio"
website: "https://rioterm.com"
license: "MIT"
licenseUrl: "https://github.com/raphamorim/rio/blob/main/LICENSE"
download: "https://github.com/raphamorim/rio/releases"
freeDownload: true
homebrew: "rio"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/raphamorim/rio", "https://github.com/raphamorim/rio/blob/main/LICENSE", "https://github.com/raphamorim/rio/releases", "https://raw.githubusercontent.com/raphamorim/rio/main/README.md", "https://rioterm.com/", "https://rioterm.com/docs/install/macos", "https://rioterm.com/docs/config", "https://rioterm.com/docs/features", "https://rioterm.com/docs/features/rio-is-fast", "https://rioterm.com/docs/features/retroarch-shaders", "https://rioterm.com/docs/features/navigation", "https://rioterm.com/docs/features/vi-mode", "https://rioterm.com/docs/features/hints", "https://github.com/raphamorim/rio/releases/tag/v0.5.29", "https://rioterm.com/docs/features/adaptive-theme"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/raphamorim/rio/blob/main/misc/logo-2024.svg", "credit": "Rio contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.svg"
---

Rio is the window your shell runs in: you open it, get a prompt, and run the same command-line tools you use anywhere else. Everything about it is set in `~/.config/rio/config.toml`, from fonts and colors to key bindings.

- Split panels are on by default, and navigation can use Rio's own tabs, macOS native tabs or no tabs at all.
- Vi mode, toggled with Option-Shift-Space, selects and copies text from the keyboard.
- Hints put keyboard shortcuts over URLs, file paths and other patterns on screen.
- Images display inline through the Sixel, iTerm2 and Kitty graphics protocols, and the Kitty keyboard protocol is supported.
- An adaptive theme follows the system's light or dark appearance.

Rio is written in Rust. Its renderer, Sugarloaf, uses the native Metal backend in the default macOS build. RetroArch CRT shader filters are listed among the features, but on the Mac they need a build compiled with the wgpu backend.

The release disk image holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, with macOS 10.15.7 as the minimum. Canary builds on the same releases page are not notarized, so macOS blocks them until you allow them in Privacy & Security. Rio is also packaged as a Homebrew cask and in MacPorts, and it is MIT-licensed.
