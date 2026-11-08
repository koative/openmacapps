---
name: "Sloth"
summary: "Lists every file, socket, pipe and device that running processes have open, in a searchable window."
category: "Developer tools"
tags:
  - files
  - processes
  - network
  - inspection
repository: https://github.com/sveinbjornt/Sloth
website: https://sveinbjorn.org/sloth
license: "BSD-3-Clause"
licenseUrl: https://github.com/sveinbjornt/Sloth/blob/master/LICENSE.txt
download: https://sveinbjorn.org/sloth
freeDownload: true
homebrew: "sloth"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/sveinbjornt/Sloth", "https://github.com/sveinbjornt/Sloth/blob/master/LICENSE.txt", "https://raw.githubusercontent.com/sveinbjornt/Sloth/master/README.md", "https://sveinbjorn.org/sloth", "https://github.com/sveinbjornt/Sloth/releases/tag/3.6"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sveinbjornt/Sloth/master/assets/SlothIcon.iconset/icon_256x256.png
    credit: "Sveinbjorn Thordarson"
    license: "BSD-3-Clause; upstream app icon, trademarks retained"
---

Sloth runs lsof for you and turns its output into a searchable outline of the files, folders, sockets, pipes and devices each process has open. You can see at a glance which app is using which file.

- Filter by name, access mode, volume, type or location, or with a regular expression.

- Sort by process name, file count, process ID, user ID or bundle identifier.
- Check the status, protocol, port and IP version of each socket.
- Follow the pipes and Unix sockets that connect two processes.

Select an item and an inspector window shows its macOS and Unix details. The context menu holds file operations for it. To scan with root privileges, you authenticate inside the app.

Version 3.6 is a ZIP of about 1.3 MB with a universal app for macOS 11 or later, signed with a Developer ID and notarized. Version 3.4 still runs on macOS 10.13 to 10.15, and 3.2 on 10.9 to 10.12; both are on the author's site. Sloth has been developed and maintained since 2004.
