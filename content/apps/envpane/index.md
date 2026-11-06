---
name: "EnvPane"
summary: "Preference pane that sets environment variables for GUI and terminal apps and applies changes without logging out."
category: "Utilities"
tags:
  - developer-utilities
  - development
  - customization
repository: "https://github.com/hschmidt/EnvPane"
website: "https://github.com/hschmidt/EnvPane"
license: "Apache-2.0"
licenseUrl: "https://github.com/hschmidt/EnvPane/blob/master/LICENSE"
download: "https://github.com/hschmidt/EnvPane/releases/download/releases%2F0.8/EnvPane-0.8.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/hschmidt/EnvPane"
  - "https://github.com/hschmidt/EnvPane/blob/master/LICENSE"
  - "https://github.com/hschmidt/EnvPane/releases"
---

EnvPane adds an Environment Variables pane to System Settings. It stores the variables in ~/.MacOSX/environment.plist, and a launchd agent bundled with it loads them into the user session, so both GUI apps and terminal sessions see them. Changes take effect without logging out, but running apps must be restarted to pick them up. The README notes that it cannot set PATH or DYLD_ variables, and it suits developers who want a variable visible to every app.

The README says it requires macOS 12 Monterey or later and ships universal binaries for Intel and Apple silicon. The 0.8 build is signed with a Developer ID but not notarized, so macOS quarantines it. The README's install steps remove the quarantine attribute with xattr, and it advises installing the pane for the current user only.
