---
name: "macGist"
summary: "Sends your clipboard to a GitHub Gist and replaces the clipboard with the Gist URL."
category: "Developer tools"
tags:
  - github
  - gist
  - clipboard
repository: "https://github.com/Bunn/macGist"
website: "https://github.com/Bunn/macGist"
license: "MIT"
licenseUrl: "https://github.com/Bunn/macGist/blob/master/LICENSE"
download: "https://github.com/Bunn/macGist/releases/download/1.5/macGist.app.zip"
freeDownload: true
maintenance: unmaintained
maintenanceNote: "No commit since March 2020 (checked 2026-11-06)."
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Bunn/macGist"
  - "https://github.com/Bunn/macGist/blob/master/LICENSE"
  - "https://github.com/Bunn/macGist/releases/download/1.5/macGist.app.zip"
---

macGist takes whatever is on your clipboard, creates a GitHub Gist from it and puts the Gist URL back on the clipboard. The README warns that the URL replaces the previous clipboard contents. You can log in with a GitHub account to create authenticated gists, browse your gist list, and turn upload notifications on or off (off by default).

The download is an Intel (x86_64) app with a minimum of macOS 10.12 according to its Info.plist, and it is ad-hoc signed rather than notarized, so macOS blocks the first launch until you allow it in System Settings. The README calls the build unsigned. The last commit is from March 2020.
