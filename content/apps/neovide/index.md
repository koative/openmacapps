---
name: "Neovide"
summary: "A graphical front end for Neovim with smooth scrolling, animated cursor movement and GPU-rendered text."
category: "Developer tools"
tags: ["vim", "code-editor", "text-editor", "cross-platform"]
repository: "https://github.com/neovide/neovide"
website: "https://neovide.dev"
license: "MIT"
licenseUrl: "https://github.com/neovide/neovide/blob/main/LICENSE"
download: "https://github.com/neovide/neovide/releases"
homebrew: "neovide-app"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-08"
sources: ["https://github.com/neovide/neovide", "https://github.com/neovide/neovide/blob/main/LICENSE", "https://github.com/neovide/neovide/releases", "https://neovide.dev/installation.html", "https://raw.githubusercontent.com/neovide/neovide/main/README.md", "https://neovide.dev/features.html", "https://neovide.dev/configuration.html"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/neovide/neovide/blob/main/assets/neovide-1024.png", "credit": "Neovide contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

Neovide runs Neovim in a Mac window of its own. You edit exactly as you would in Terminal, with the same keys, configuration and plugins, while Neovide draws the text and adds effects a terminal cannot show.

- Scrolling moves the buffer pixel by pixel, without jumping a line at a time.
- The cursor slides to its new position with a smear trail, and optional effects such as Railgun or Ripple change how it moves.
- Split windows animate when the layout changes.
- Floating windows get a blurred background, and fonts render with ligatures and emoji fallback.

Neovide is only the front end. Neovim 0.12 or later has to be installed and on your `PATH`. Started from Finder or the Dock, Neovide looks for `nvim` through your login shell, or you can give the full path as `neovim-bin` in its config file.

It can also attach to a Neovim that is already running. Start `nvim --headless --listen` with a TCP address or a Unix socket, then open Neovide with `--server` pointing at it. Forward that socket over SSH and the editor on a remote machine appears in a local window. Closing the window leaves that Neovim session running.

Rendering uses OpenGL. Releases include separate DMGs for Apple silicon and Intel Macs, and the Apple silicon app is notarized.
