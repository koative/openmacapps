---
name: TaskExplorer
summary: "Shows running processes with their signatures, loaded libraries and network connections."
category: Privacy & security
tags:
  - processes
  - security
  - system-monitoring
alternativeTo:
  - task-manager
repository: https://github.com/objective-see/TaskExplorer
website: https://objective-see.com/products/taskexplorer.html
license: GPL-3.0
licenseUrl: https://github.com/objective-see/TaskExplorer/blob/main/LICENSE
download: https://github.com/objective-see/TaskExplorer/releases
freeDownload: true
homebrew: "taskexplorer"
featured: false
added: 2026-10-17
verified: '2026-11-08'
sources:
  - https://github.com/objective-see/TaskExplorer
  - https://github.com/objective-see/TaskExplorer/blob/main/LICENSE
  - https://github.com/objective-see/TaskExplorer/blob/main/README.md
  - https://github.com/objective-see/TaskExplorer/releases
  - https://objective-see.com/products/taskexplorer.html
  - https://raw.githubusercontent.com/objective-see/TaskExplorer/main/README.md
  - https://github.com/objective-see/TaskExplorer/releases/tag/v3.1.0
  - https://learn.microsoft.com/en-us/shows/inside/task-manager
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/TaskExplorer/blob/438c254e88b86a70c00a051828faafed21078bd4/App/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: TaskExplorer contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

TaskExplorer lists every process on the Mac as it starts and exits, and selecting one shows its loaded dylibs, open files and network connections. An inspector on the right adds the path, arguments, user, parent, hashes and full code-signing details.

- Each process shows whether it is signed by Apple, by a Developer ID, ad-hoc or not at all.
- With your own free VirusTotal key, file hashes are checked and flagged items turn red. The files themselves are never uploaded.
- A filter field takes text and keywords such as `#3rdparty`, `#adhoc`, `#listening` and `#root`, and `#everything` searches dylibs, files and connections too.
- An assistant in the sidebar answers questions such as which processes listen on the network. It runs on Apple Intelligence, a local Ollama model, or your own Claude or ChatGPT key.
- A JSON export of everything is available in the app and through the bundled command-line tool.

Version 3 is built on Endpoint Security, so it needs a system extension and Full Disk Access, both approved in System Settings, and the app must run from /Applications. With Claude or ChatGPT selected, process names, paths and arguments go to that provider. The on-device assistant needs macOS 26 and Apple silicon.

Task Manager is the Windows tool for watching and ending processes. On the Mac, Activity Monitor fills that role, while TaskExplorer centres its live process list on code signing, loaded libraries and VirusTotal results.

Version 3.1.0 is a Universal ZIP for Apple silicon and Intel, notarized, and needs macOS 14. TaskExplorer 2.1.0 remains for macOS 11 to 13.
