---
name: "Tagara"
summary: "Offline push-to-talk dictation for Apple silicon: hold Option, speak, release, and text appears at the cursor."
category: "Productivity"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - offline
  - privacy
alternativeTo:
  - wispr-flow
repository: "https://github.com/mateusfonsek/tagara"
website: "https://mateusfonsek.github.io/tagara/"
license: "MIT"
licenseUrl: "https://github.com/mateusfonsek/tagara/blob/main/LICENSE"
download: "https://github.com/mateusfonsek/tagara/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mateusfonsek/tagara"
  - "https://github.com/mateusfonsek/tagara/blob/main/LICENSE"
  - "https://github.com/mateusfonsek/tagara/releases"
  - "https://mateusfonsek.github.io/tagara/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/mateusfonsek/tagara/main/docs/images/icon.png"
    credit: "Mateus Fonseca"
    license: "MIT; upstream app icon, trademarks retained"
---

Tagara turns the right Option key into a push-to-talk button for dictation. You hold the key, speak, and release; the speech is transcribed on the Mac by the Parakeet Ultra model running on the Neural Engine, and the text is pasted where the cursor is while your previous clipboard contents are restored. Double-tapping the key starts hands-free dictation. It suits people who dictate into terminals, chat apps and browsers and want the audio to stay on the machine. The README says audio is never written to disk and never leaves the Mac.

The README says it needs macOS 15 or later on Apple silicon, Microphone and Accessibility permission, and about 650 MB of disk space, mostly for the voice model that the app downloads once from Hugging Face. It is not signed with an Apple developer certificate or notarized, and the README lists Developer ID signing and notarization as planned work. The README's Terminal installer avoids the first-launch block that a downloaded DMG triggers. It highlights Portuguese and English.
