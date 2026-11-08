---
name: "Platypus"
summary: "Wraps shell, Python, Ruby and other scripts in Mac app bundles with droplets, menus or progress windows."
category: "Developer tools"
tags:
  - scripting
  - automation
  - packaging
repository: https://github.com/sveinbjornt/Platypus
website: https://sveinbjorn.org/platypus
license: "BSD-3-Clause"
licenseUrl: https://github.com/sveinbjornt/Platypus/blob/master/LICENSE.txt
download: https://sveinbjorn.org/platypus
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/sveinbjornt/Platypus
  - https://github.com/sveinbjornt/Platypus/blob/master/LICENSE.txt
  - https://sveinbjorn.org/platypus
  - https://github.com/sveinbjornt/Platypus/releases
  - https://raw.githubusercontent.com/sveinbjornt/Platypus/master/README.md
  - https://sveinbjorn.org/files/software/platypus.zip
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sveinbjornt/Platypus/master/Icons/PlatypusAppIcon.icns
    credit: "Sveinbjorn Thordarson"
    license: "BSD-3-Clause; upstream project asset, trademarks retained"
---

Platypus takes a script and builds a Mac application around it, so a shell or Python tool can be opened with a double-click. You pick the script and its interpreter, choose how the app shows what the script is doing, and set the name, icon, identifier, version and the file types it accepts. Platypus then writes an app bundle that holds the script and a small binary that runs it.

- Interpreters include sh, Python, Perl, Ruby, PHP, Swift, Tcl, AWK, JavaScript, Dart and AppleScript, and you can name any other.
- The generated app can show a progress bar, a text window with the script's output, a droplet, an HTML view rendered by WebKit or a status menu item.
- Files or text dropped on the app reach the script as arguments.
- Apps can run their script with root privileges, register for URL schemes, post notifications or run in the background without a Dock icon.

Support files can be bundled next to the script from the same window, and a whole configuration can be saved as a profile and reused. The editor is built in, or you can hand the script to an outside editor. A `platypus` command-line tool does the same work in build scripts and CI.

The developer started Platypus around 2003, and version 5.5.0 shipped in December 2025. It is a Universal app for Apple silicon and Intel, needs macOS 11 or later, and comes as a ZIP of about 3.5 MB. The developer states that the download is signed with a Developer ID and notarized.
