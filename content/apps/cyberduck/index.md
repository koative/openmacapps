---
name: Cyberduck
summary: Browses FTP, SFTP and WebDAV servers and cloud storage such as Amazon S3 and Google Drive in one Mac window.
category: Internet
tags:
  - file-transfer
  - cloud
  - sftp
alternativeTo:
  - winscp
  - transmit
repository: https://github.com/iterate-ch/cyberduck
website: https://cyberduck.io
license: GPL-3.0
licenseUrl: https://github.com/iterate-ch/cyberduck/blob/master/LICENSE.txt
download: https://github.com/iterate-ch/cyberduck/releases
freeDownload: true
homebrew: "cyberduck"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/iterate-ch/cyberduck
  - https://github.com/iterate-ch/cyberduck/blob/master/LICENSE.txt
  - https://cyberduck.io
  - https://raw.githubusercontent.com/iterate-ch/cyberduck/master/README.md
  - https://cyberduck.io/download/
  - https://docs.cyberduck.io/cyberduck/
  - https://panic.com/transmit/
  - https://winscp.net/eng/index.php
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/iterate-ch/cyberduck/master/cyberduck-application.png
    credit: Cyberduck contributors
    license: GPL-3.0; upstream project asset, trademarks retained
---

Cyberduck opens a remote server or a cloud storage account in a browser window. You drag files into it to upload them and drag them out to download. The same window handles FTP, SFTP, WebDAV and SMB servers, as well as Amazon S3, Backblaze B2, Azure, Google Drive, Dropbox and OneDrive.

- Synchronization compares a local folder with a remote one and previews which files will change before anything happens.
- Interrupted uploads and downloads resume, and files can be copied straight from one server to another.
- Pressing Space shows a Quick Look preview of a remote file without downloading it first.
- Remote text and binary files open in an external editor of your choice.
- Bookmarks can be filtered, dragged to the Finder, and used as drop targets for uploads.

SFTP connections read your existing OpenSSH configuration and support public key and two-factor authentication. Passwords are kept in the macOS Keychain. Cryptomator vaults add client-side encryption that scrambles each file and its name before upload. Cyberduck needs no registration or account of its own.

The macOS download is a ZIP that needs macOS 10.13 or later on Intel or Apple silicon. It shows a donation prompt after installs and updates until you enter a registration key, which contributors receive. The same app is also sold on the Mac App Store.

WinSCP covers similar protocols but is built for Windows. Transmit, from Panic, is a paid Mac app organized around a dual-pane window. Cyberduck is GPL-licensed and also comes for Windows and as a command-line client.
