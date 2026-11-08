---
name: "SubEthaEdit"
summary: "A plain-text and code editor with real-time collaborative editing over the network."
category: "Writing"
tags: ["text-editor", "collaboration", "code-editor", "native"]
repository: "https://github.com/subethaedit/SubEthaEdit"
website: "https://subethaedit.net"
license: "MIT"
licenseUrl: "https://github.com/subethaedit/SubEthaEdit/blob/develop/LICENSE.txt"
download: "https://github.com/subethaedit/SubEthaEdit/releases"
freeDownload: true
homebrew: "subethaedit"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/subethaedit/SubEthaEdit", "https://github.com/subethaedit/SubEthaEdit/blob/develop/LICENSE.txt", "https://github.com/subethaedit/SubEthaEdit/releases", "https://subethaedit.net", "https://github.com/subethaedit/SubEthaEdit/releases/tag/SubEthaEdit-MacFull-5.2.4", "https://github.com/subethaedit/SubEthaEdit/commits/develop"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/subethaedit/SubEthaEdit/develop/SubEthaEdit-Mac/artwork/FileIcons.xcassets/see-appicon.appiconset/256.png", "credit": "SubEthaEdit contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

SubEthaEdit is a text and code editor that several people can type into at once. Invite someone to a document and you both write in it live, follow each other through the text or point at a passage by selecting it, and you can change a participant's access permissions. Anyone on the local network can join, and with port forwarding you can share a link with people elsewhere on the internet. Change highlighting shows who wrote what, and on your own files it marks what you changed since opening them.

As a solo editor it covers the usual ground:

- Syntax highlighting modes ship for languages including C, Go, Python, Ruby, JavaScript, LaTeX, Markdown and TOML, and you can write your own.
- Search and replace takes several regex flavors and can be limited to a selection.
- Block editing lets you Option-click several lines and type on all of them.
- HTML gets a live web preview that reloads when linked CSS or JavaScript files are saved.
- The `see` command-line tool lets you pipe text in and out or use SubEthaEdit as your shell editor, and AppleScript support covers automation.

Autocomplete draws on mode keywords and on every document you have open. Undo works in small steps rather than lumping many edits together.

The project site calls it the app that started collaborative editing, now back as free, open-source software under the MIT license. The latest release, 5.2.4 from January 2022, needs macOS 10.13 or later. Its ZIP holds a Universal app for Apple silicon and Intel that is Developer ID-signed and notarized. Commits on the develop branch continued into November 2025.
