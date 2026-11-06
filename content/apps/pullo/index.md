---
name: "Pullo"
summary: "GitHub pull requests and Actions runs in the MacBook notch, with your own tabs and several accounts."
category: "Developer tools"
tags:
  - git
  - notch
  - menu-bar
  - notifications
repository: "https://github.com/jordan-cod/pullo"
website: "https://pullo.jrdan.dev"
license: "MIT"
licenseUrl: "https://github.com/jordan-cod/pullo/blob/main/LICENSE"
download: "https://github.com/jordan-cod/pullo/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jordan-cod/pullo"
  - "https://github.com/jordan-cod/pullo/blob/main/LICENSE"
  - "https://github.com/jordan-cod/pullo/releases"
  - "https://pullo.jrdan.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/jordan-cod/pullo/main/Resources/AppIcon.icns"
    credit: "Gabriel Jordan"
    license: "MIT; upstream app icon, trademarks retained"
---

Pullo shows your GitHub pull requests and Actions runs in the notch, or at the top of the menu bar on Macs without one. CI results, approvals, comments and review requests slide out as alerts. Opening the app lists pull requests and runs, lets you follow each step of a run, re-run failed jobs, or cancel stuck ones, and keeps a separate list for each account. It suits developers who review and ship code on GitHub and want that activity in view without a browser tab.

It requires macOS 14 or later on Apple silicon. It uses the GitHub CLI for sign-in: install `gh`, run `gh auth login`, and Pullo borrows the token from `gh` without storing it. The README says there is no server and no sign-up, and that Pullo changes something on GitHub only when you ask, such as re-running a job. Beta builds are opt-in under Settings, Updates. The app was previously named DevNotch.
