---
name: "Cakebrew"
summary: "A graphical front end for searching, installing and updating Homebrew formulae."
category: "Developer tools"
tags: ["homebrew", "package-manager"]
repository: "https://github.com/brunophilipe/Cakebrew"
website: "https://www.cakebrew.com"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/brunophilipe/Cakebrew/blob/main/LICENSE"
download: "https://github.com/brunophilipe/Cakebrew/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release or commit since March 2021."
sources: ["https://github.com/brunophilipe/Cakebrew", "https://github.com/brunophilipe/Cakebrew/blob/main/LICENSE", "https://github.com/brunophilipe/Cakebrew/releases", "https://github.com/brunophilipe/Cakebrew/blob/main/README.md", "https://www.cakebrew.com", "https://github.com/brunophilipe/Cakebrew/releases/tag/v1.3"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/brunophilipe/Cakebrew/main/Cakebrew/Images.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "Bruno Philipe and Cakebrew contributors", "license": "GPL-3.0-or-later; upstream project asset, trademarks retained"}]
screenshots: []
---

Cakebrew puts Homebrew in a window, so you can search for a formula and install it without typing `brew` commands. From the same window you can uninstall or upgrade formulae, tap and untap repositories, update Homebrew itself and run its cleanup tool. The project site adds Homebrew Doctor for finding problems and Homebrew Bundle support for exporting and importing a list of formulae.

The interface is translated into English, Portuguese, German and Simplified Chinese. Cakebrew started from Vincent Saluzzo's Homebrew-GUI project. Most of that code has since been rewritten, but his commits remain in the history.

Cakebrew only drives a Homebrew install that is already on the Mac, so you still need Homebrew itself. If you run into problems with zsh as your shell, the README points to a wiki page with the fix.

Version 1.3, released in March 2021, is the latest, and the last commit to the repository dates from the same month. Its ZIP holds a Universal app for Apple silicon and Intel that is signed with a Developer ID and notarized, with a minimum of OS X 10.10. You can also install it with `brew install --cask cakebrew`.
