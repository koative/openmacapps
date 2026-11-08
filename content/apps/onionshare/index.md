---
name: OnionShare
summary: "Shares and receives files, hosts a static site or runs a chat room over Tor onion services, with no separate server or account."
category: Privacy & security
tags:
- tor
- file-sharing
- privacy
- cross-platform
repository: https://github.com/onionshare/onionshare
website: https://onionshare.org/
license: GPL-3.0-or-later
licenseUrl: https://github.com/onionshare/onionshare/blob/main/LICENSE.txt
download: https://onionshare.org/
freeDownload: true
homebrew: "onionshare"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/onionshare/onionshare
- https://github.com/onionshare/onionshare/blob/main/LICENSE.txt
- https://github.com/onionshare/onionshare/releases
- https://onionshare.org/
- https://raw.githubusercontent.com/onionshare/onionshare/main/README.md
- https://raw.githubusercontent.com/onionshare/onionshare/main/desktop/onionshare/__init__.py
- https://raw.githubusercontent.com/onionshare/onionshare/main/CHANGELOG.md
- https://docs.onionshare.org/2.6.3/en/features.html
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/onionshare/onionshare/main/desktop/onionshare/resources/onionshare-512.png
  credit: OnionShare project
  license: GPL-3.0 repository asset; OnionShare name and logo retained by the project
---

OnionShare runs a small web server on your Mac and publishes it as a Tor onion service. You copy the .onion address and its private key, send both over a channel you trust, and the other person opens the address in Tor Browser. Each job gets its own tab:

- A share tab sends files and folders. By default the service shuts down after the first complete download; unticking that option lets several people download and pick single files.
- A receive tab turns the Mac into an anonymous drop box for files, text messages or both. By default, submissions go to an OnionShare folder in your home folder, sorted by upload time, and a webhook can alert you.
- A website tab serves static HTML, CSS, JavaScript and images. Server-side code and databases are not supported, so WordPress will not run.
- A chat tab opens a room where everyone gets a random name. The documentation says nothing in the room is logged.

Version 2.7 added a download mode for fetching another OnionShare share inside the app. The macOS disk image is on the official site, signed with a PGP signature you can check, and Homebrew installs it as a cask.

Your computer is the server, so the address stops answering when you quit OnionShare or the Mac sleeps. For a drop box or site that should stay up, the documentation recommends a separate computer that is always on. Uploads arrive as they are: OnionShare does nothing to defend against malicious files, and its documentation suggests Dangerzone for converting untrusted documents into safe PDFs.
