---
name: "far2l"
summary: "A Linux and macOS port of the FAR Manager v2 two-panel file manager, with editor, viewer and plugins."
category: "Utilities"
tags:
  - file-manager
  - files
  - terminal
  - cross-platform
repository: https://github.com/elfmz/far2l
website: https://github.com/elfmz/far2l
license: "GPL-2.0"
licenseUrl: https://github.com/elfmz/far2l/blob/master/LICENSE.txt
download: https://github.com/elfmz/far2l/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/elfmz/far2l
  - https://github.com/elfmz/far2l/blob/master/LICENSE.txt
  - https://github.com/elfmz/far2l/releases
  - https://formulae.brew.sh/cask/far2l
  - https://github.com/elfmz/far2l/blob/master/README.md
  - https://github.com/elfmz/far2l/releases/tag/v_2.9.1
  - https://formulae.brew.sh/formula/far2l-tty
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/elfmz/far2l/master/far2l/DE/Far.icns
    credit: "far2l contributors"
    license: "GPL-2.0 repository asset; name and logo retained by the project"
---

far2l gives you a keyboard-driven, two-panel file manager on Unix systems. It is a fork of FAR Manager v2 for Windows, made for Linux and also working on macOS. You see two folders side by side, copy and move files between them, and open files in the built-in viewer and editor without leaving the panels.

Much of the work happens in plugins, which the README lists among the working ones:

- NetRocks opens SFTP, SCP, FTP, FTPS, SMB, NFS, WebDAV and AWS S3 locations in a panel.
- multiarc handles archives, and the experimental arclite can be switched on in the plugin settings.
- Advanced compare, Calculator, hexitor and ImageViewer cover smaller jobs.
- An optional Python plugin adds scripting.

far2l runs either inside a terminal or in a window of its own. In a terminal it needs few dependencies, but ordinary terminals pass only the essential key combinations; iTerm2, kitty and far2l's own terminal pass them all. The graphical mode is built on wxWidgets and takes every shortcut.

The project still calls itself beta and says you use it at your own risk. Release 2.9.1 carries two macOS disk images, an Intel build for macOS 10.15 and a Universal one for macOS 11.2, going by their file names. That Universal app is not notarized. A smaller terminal-only version is in Homebrew as far2l-tty, without Python plugins or SMB. The code is GPLv2 with an exception that permits linking with OpenSSL.
