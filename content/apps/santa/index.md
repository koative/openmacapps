---
name: "Santa"
summary: "A binary and file access authorization system for macOS that can monitor or block executables by signature or path."
category: "Privacy & security"
tags:
  - security
  - monitoring
  - code-signing
repository: "https://github.com/northpolesec/santa"
website: "https://northpole.dev"
license: "Apache-2.0"
licenseUrl: "https://github.com/northpolesec/santa/blob/main/LICENSE"
download: "https://github.com/northpolesec/santa/releases"
freeDownload: true
homebrew: "santa"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/northpolesec/santa"
  - "https://github.com/northpolesec/santa/blob/main/LICENSE"
  - "https://github.com/northpolesec/santa/releases"
  - "https://github.com/google/santa"
  - "https://northpole.dev"
  - "https://raw.githubusercontent.com/northpolesec/santa/main/README.md"
  - "https://raw.githubusercontent.com/google/santa/main/README.md"
  - "https://github.com/northpolesec/santa/releases/tag/2026.9"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/northpolesec/santa/main/Source/gui/Resources/Assets.xcassets/AppIcon.appiconset/santa-icon_256x256.png"
    credit: "North Pole Security and Santa contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Santa decides which programs may run on a Mac and records every launch. An administrator sets rules and Santa enforces them through a system extension, so you can allow or block software across a whole fleet or simply see what runs on one machine.

Santa has two main modes. In monitor mode, the default, everything runs except binaries marked as blocked, and each launch is logged. In lockdown mode only binaries on the allow list run. Unknown and denied binaries are stored in a local events database for later review.

- Rules can match a code signature by CDHash, certificate, Team ID or signing ID, so one rule can cover a whole publisher or every version of a signed binary.
- The most specific rule wins, which lets you allow a publisher but block one of its binaries.
- Path rules use regular expressions and have the lowest precedence.
- Santa refuses rules that would block the certificate behind launchd, or block Santa itself.

A GUI agent tells the user when something is blocked, and `santactl` manages the system from the command line. Rules can be set locally or synced from a server such as North Pole Security's Workshop, Moroz, Rudolph or Zentral. The project is open about the limits: Santa only stops executables, not scripts, and does not cover libraries loaded with `dlopen` or `DYLD_INSERT_LIBRARIES`.

Google stopped maintaining its original repository in 2025 and names this North Pole Security fork as one to move to. In release 2026.9, the installer package inside the DMG is Developer ID-signed and notarized, and installs a Universal app for Apple silicon and Intel Macs on macOS 14 or later.
