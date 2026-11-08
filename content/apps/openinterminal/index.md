---
name: "OpenInTerminal"
summary: "Open the current Finder folder or file in your terminal or editor from the toolbar, menu bar or a shortcut."
category: "Developer tools"
tags:
  - finder
  - terminal
  - shortcuts
repository: https://github.com/Ji4n1ng/OpenInTerminal
website: https://github.com/Ji4n1ng/OpenInTerminal
license: "MIT"
licenseUrl: https://github.com/Ji4n1ng/OpenInTerminal/blob/master/LICENSE
download: https://github.com/Ji4n1ng/OpenInTerminal/releases
freeDownload: true
homebrew: "openinterminal"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Ji4n1ng/OpenInTerminal
  - https://github.com/Ji4n1ng/OpenInTerminal/blob/master/LICENSE
  - https://github.com/Ji4n1ng/OpenInTerminal/releases
  - https://formulae.brew.sh/cask/openinterminal
  - https://raw.githubusercontent.com/Ji4n1ng/OpenInTerminal/master/README.md
  - https://github.com/Ji4n1ng/OpenInTerminal/blob/master/Resources/README-Config.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Ji4n1ng/OpenInTerminal/master/OpenInTerminal/Assets.xcassets/logo.imageset/AppIcon-iOS-Default-512x512%401x.png
    credit: "Jianing Wang and OpenInTerminal contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

OpenInTerminal saves the step of opening a terminal and typing `cd` to reach the folder you are looking at in Finder. Click its Finder toolbar button, its menu bar item or a context menu entry, and the current folder or selected file opens in the terminal or editor you picked.

The list of supported apps is long. On the terminal side it covers Terminal, iTerm, Alacritty, kitty, WezTerm, Warp, Tabby, Hyper and Ghostty. For editors there are TextEdit, Xcode, VS Code, VSCodium, Sublime Text, BBEdit, Nova, Cursor, the JetBrains IDEs, Zed and Emacs, among others. You can also add other apps, such as a Git client, although the project warns that not every app accepts this.

The full app has a preferences window and global keyboard shortcuts, which you can limit to work only when Finder is in front. It can also copy the current path with escaping and group its context menu items into a submenu. Two smaller companions, OpenInTerminal-Lite and OpenInEditor-Lite, drop the settings and keyboard shortcuts and simply open one app with a single click from the toolbar.

None of the three apps is signed any more, so on first launch you have to clear the quarantine flag or approve the app in Privacy & Security. On macOS 15 and later, the Finder extension also has to be switched on by hand before its menu items appear. Version 2.3.9 fixed a command injection flaw triggered by crafted folder names, so stay on a current release.
