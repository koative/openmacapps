---
name: "GitBlamePR"
summary: "Mac app that shows the pull request that last changed each line of a file, with an Xcode source editor extension."
category: "Developer tools"
tags:
  - git
  - github
  - xcode
  - developer-utilities
repository: "https://github.com/maoyama/GitBlamePR"
website: "https://github.com/maoyama/GitBlamePR"
license: "MIT"
licenseUrl: "https://github.com/maoyama/GitBlamePR/blob/master/LICENSE"
download: "https://github.com/maoyama/GitBlamePR/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "No release since July 2020 and no commit since August 2020, as checked on 2026-11-06."
icon: "./assets/icon.png"
sources:
  - "https://github.com/maoyama/GitBlamePR"
  - "https://github.com/maoyama/GitBlamePR/blob/master/LICENSE"
  - "https://github.com/maoyama/GitBlamePR/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/maoyama/GitBlamePR/releases/download/v0.7.0/GitBlamePR.app.zip"
    credit: "Makoto Aoyama"
    license: "MIT; app icon from the v0.7.0 release, trademarks retained"
---

GitBlamePR shows, next to each line of a file, the pull request that last changed it. It is written in SwiftUI and bundles an Xcode Source Editor extension, so a file open in Xcode can be opened in GitBlamePR, and it defines a gitblamepr:// URL scheme for opening a file from the command line. It fits developers who want to see which pull request introduced a line, and who work in Xcode.

It requires macOS 10.15 Catalina or later. The release contains only an Intel (x86_64) build. The app is signed with a Developer ID and notarized by Apple, so it opens without an override. The project has not been updated since 2020, so it may not work well with recent macOS releases.
