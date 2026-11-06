---
name: "Voltip"
summary: "Push-to-talk dictation: hold a hotkey, speak, and the text lands at the cursor, via cloud or on-device speech."
category: "Productivity"
tags:
  - voice-typing
  - dictation
  - speech-to-text
  - cross-platform
alternativeTo:
  - wispr-flow
repository: "https://github.com/sunerpy/voltip"
website: "https://voltip.firlab.app/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/sunerpy/voltip/blob/main/LICENSE"
download: "https://github.com/sunerpy/voltip/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/sunerpy/voltip"
  - "https://github.com/sunerpy/voltip/blob/main/LICENSE"
  - "https://github.com/sunerpy/voltip/releases"
  - "https://voltip.firlab.app/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/sunerpy/voltip/main/apps/desktop/src-tauri/icons/icon.png"
    credit: "Sunerpy"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

Voltip is a dictation app for macOS, Windows, Linux and Android. On the computer you hold a hotkey, speak, and release it, and the text is pasted into whichever app has focus. Speech goes to a cloud provider you configure, or is recognized on the machine with a downloaded model, and an optional AI step can clean up the wording. An Android phone can also act as a microphone and keyboard for the computer over an end-to-end encrypted relay.

The Mac builds are .dmg packages for Apple silicon and Intel, and the README says they need macOS 11 or later. They are signed with the project's own certificate and are not notarized, so the first start is blocked: on macOS 15 and later, open System Settings > Privacy & Security and click Open Anyway. Release builds include a default recognition and clean-up service so dictation works before you configure anything; you can switch to another provider or to an on-device model at any time, and audio goes only to the service you choose.
