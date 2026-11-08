---
name: "VSCodium"
summary: "Builds Microsoft's open-source VS Code repository into MIT-licensed editor releases with telemetry turned off."
category: "Developer tools"
tags: ["code-editor", "extensions", "cross-platform"]
alternativeTo: ["visual-studio-code", "phpstorm", "ultraedit", "sublime-text"]
repository: "https://github.com/VSCodium/vscodium"
website: "https://vscodium.com"
license: "MIT"
licenseUrl: "https://github.com/VSCodium/vscodium/blob/master/LICENSE"
download: "https://github.com/VSCodium/vscodium/releases"
freeDownload: true
homebrew: "vscodium"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/VSCodium/vscodium", "https://github.com/VSCodium/vscodium/blob/master/LICENSE", "https://github.com/VSCodium/vscodium/releases", "https://github.com/VSCodium/vscodium/blob/master/README.md", "https://github.com/VSCodium/vscodium/blob/master/docs/index.md", "https://github.com/VSCodium/vscodium/blob/master/docs/extensions.md", "https://github.com/VSCodium/vscodium/releases/tag/1.143.17232", "https://github.com/microsoft/vscode/blob/main/README.md"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/VSCodium/vscodium/blob/master/icons/stable/codium_cnl.svg", "credit": "VSCodium contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.svg"
---

VSCodium gives you the Visual Studio Code editor built straight from Microsoft's open-source repository. You edit, navigate and debug code in it and add extensions, as in VS Code itself.

The project is a set of build scripts. They clone Microsoft's `vscode` repository, build it every day a new upstream release appears, and publish the results on GitHub. Microsoft adds its own product configuration to its builds, covering telemetry, the extension gallery and branding, and ships them under a proprietary license. VSCodium leaves that configuration out. Its binaries are MIT-licensed, and the project says telemetry is turned off.

Extensions are the main practical change. The Visual Studio Marketplace terms limit its extensions to Microsoft's products, so VSCodium installs from Open VSX instead. Some extensions, including certain Microsoft debugging tools, carry licenses that only allow the official builds, and they do not run here. The documentation lists the known cases, with workarounds where they exist, and explains how to point the editor at another gallery.

VSCodium needs macOS 12 or later. Releases include separate DMG and ZIP builds for Apple silicon and Intel; the Apple silicon build is Developer ID-signed and notarized. It is also available through Homebrew with `brew install --cask vscodium`.

Visual Studio Code is the same editor with Microsoft's marketplace, branding and telemetry included. Moving across means reinstalling extensions from Open VSX and checking any that refuse to run.
