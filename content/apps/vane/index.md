---
name: "Vane"
summary: "Native macOS browser on WebKit with sidebar tabs, Spaces and Split View; in active development."
category: "Internet"
tags:
  - browser
  - native
  - privacy
alternativeTo:
  - arc
repository: "https://github.com/notnaki/vane"
website: "https://notnaki.github.io/vane/"
license: "MIT"
licenseUrl: "https://github.com/notnaki/vane/blob/main/LICENSE"
download: "https://github.com/notnaki/vane/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/notnaki/vane"
  - "https://github.com/notnaki/vane/blob/main/LICENSE"
  - "https://github.com/notnaki/vane/releases"
  - "https://notnaki.github.io/vane/"
---

Vane is a browser built with Swift and AppKit around Apple's WebKit engine, so pages render as they do in Safari. Its interface puts tabs in a sidebar and groups them into Spaces, with Favourites, pinned tabs, Split View, a reader mode with an offline article queue, and Easels for notes and captures. Profiles keep separate data, passwords are kept in the Keychain, and an EasyList-subset content blocker is included. It is for people who like sidebar-and-Spaces browsing and want a native app that stays close to WebKit.

It requires macOS 26 or later. The README calls the project in active development and says to read its limitations before using Vane as your only browser: passkeys are pending Apple approval, folder uploads are blocked on macOS 27.0.x, autofill and extension support are partial, and some features use private WebKit APIs that may change with macOS releases. Releases are built through a signing and notarization workflow, but the README says a notarized candidate and clean-Mac install checks are still needed before distribution claims hold. Backups are unencrypted and do not sync between Macs. The code is MIT licensed.
