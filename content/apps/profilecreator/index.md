---
name: "ProfileCreator"
summary: "A graphical editor for building standard or customized macOS configuration profiles."
category: "Utilities"
tags:
  - configuration-profiles
  - mdm
  - system-administration
repository: https://github.com/ProfileCreator/ProfileCreator
website: https://github.com/ProfileCreator/ProfileCreator
license: "MIT"
licenseUrl: https://github.com/ProfileCreator/ProfileCreator/blob/master/LICENSE
download: https://github.com/ProfileCreator/ProfileCreator/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/ProfileCreator/ProfileCreator
  - https://github.com/ProfileCreator/ProfileCreator/blob/master/LICENSE
  - https://github.com/ProfileCreator/ProfileCreator/releases
  - https://formulae.brew.sh/cask/profilecreator
  - https://github.com/ProfileManifests/ProfileManifests
  - https://raw.githubusercontent.com/ProfileCreator/ProfileCreator/master/README.md
  - https://github.com/ProfileCreator/ProfileCreator/releases/tag/0.3.7
  - https://github.com/ProfileCreator/ProfileCreator/wiki/Benefits-of-ProfileCreator
  - https://github.com/ProfileCreator/ProfileCreator/wiki/Switch-Profile-Payload-Styles
  - https://github.com/ProfileCreator/ProfileCreator/wiki/Export-a-.plist
  - https://github.com/ProfileCreator/ProfileCreator/wiki/Supported-Payloads
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ProfileCreator/ProfileCreator/master/ProfileCreator/ProfileCreator/Core/Assets.xcassets/AppIcon.appiconset/256.png
    credit: "ProfileCreator contributors"
    license: "MIT repository asset; trademarks retained"
---

ProfileCreator builds configuration profiles, the files Mac administrators upload to device management to apply settings and restrictions. You pick a payload, add only the preferences you intend to manage with the plus button, and fill in their values. Everything else in the payload stays unmanaged.

That is the main difference from Profile Manager, Apple Configurator 2 and MDM consoles. When you turn on a payload there, many of its preferences switch on with it and often cannot be left out.

- You can switch the editor between the form view and the XML the profile will contain.
- Third-party apps such as Google Chrome have their own payloads, so you do not have to look up their preference keys.
- When a preference depends on another one, the editor says so. Preferences with unresolved dependencies are left out of the exported profile.
- Exported profiles can be signed with a certificate from the Keychain, which makes them read-only.
- Third-party payloads can be written in MCX style or exported as a plain `.plist` for an MDM's Custom Settings payload.

The payloads and preferences come from the separate ProfileManifests project, and new settings are contributed there. ProfileCreator's wiki marks some payloads as having known issues or not yet implemented. The app requires macOS 11 or later. Version 0.3.7, from December 2024, is a Universal app for Apple silicon and Intel, distributed as a DMG.
