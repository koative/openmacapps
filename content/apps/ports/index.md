---
name: "Ports"
summary: "Lists the network ports open on your Mac from the menu bar, marks the ones other devices can reach, and kills their processes."
category: "Developer tools"
tags:
  - menu-bar
  - network
  - ports
  - developer-tools
repository: "https://github.com/CorvidLabs/Ports"
website: "https://github.com/CorvidLabs/Ports"
license: "MIT"
licenseUrl: "https://github.com/CorvidLabs/Ports/blob/main/LICENSE"
download: "https://github.com/CorvidLabs/Ports/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
sources:
  - "https://github.com/CorvidLabs/Ports/blob/main/README.md"
  - "https://github.com/CorvidLabs/Ports/releases/tag/0.1.0"
  - "https://github.com/CorvidLabs/Ports"
  - "https://github.com/CorvidLabs/Ports/blob/main/LICENSE"
  - "https://github.com/CorvidLabs/Ports/releases"
---

Click the network icon Ports adds to the menu bar to see the open ports on your Mac, grouped by what is using them: development tools, web servers, databases, games, media, chat and call apps, and macOS services. Each row gives the port number, protocol, process name and process ID. It also says whether the port is local-only, marked 127, or reachable from other devices on your network, marked with an asterisk.

A colored dot rates each port. Green means a known process on localhost, blue a recognized app, orange anything exposed to the network and gray a process Ports does not recognize. Click a row for details, hover over it to kill its process or pin the port, and right-click for more actions.

The only release so far, 0.1.0 from January 2026, is a ZIP with an Apple silicon (arm64) app signed with a Developer ID. It declares macOS 13 or later, and there is no Intel build. The README shows how to build and run it yourself with `swift build`.

Command-R refreshes the list, Command-F jumps to search, where you can find a port by number or name, and Escape clears the search. Ports builds the list from the output of `lsof`, can start at login, and checks GitHub for new releases.
