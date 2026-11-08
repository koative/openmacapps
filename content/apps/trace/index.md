---
name: Trace
summary: A keyboard launcher for macOS that also snaps windows, opens quick links and offers push-to-talk dictation.
category: Productivity
tags:
- launcher
- window-management
- keyboard-shortcuts
- dictation
alternativeTo:
- alfred
- raycast
repository: https://github.com/arjunkomath/trace
website: https://trace.techulus.xyz/
license: MIT
licenseUrl: https://github.com/arjunkomath/trace/blob/main/LICENSE
download: https://github.com/arjunkomath/trace/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/arjunkomath/trace
- https://github.com/arjunkomath/trace/blob/main/LICENSE
- https://github.com/arjunkomath/trace/releases
- https://raw.githubusercontent.com/arjunkomath/trace/main/README.md
- https://trace.techulus.xyz/
- https://github.com/arjunkomath/trace/releases/tag/v1.16.0
- https://www.raycast.com/
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/arjunkomath/trace/main/docs/trace.png
  credit: Arjun Komath
  license: MIT-licensed repository asset; no separate icon terms stated
---

Press Option-Space and Trace opens a search field over whatever you are doing. Type a few letters of an app's name, and a fuzzy search ranks the matching apps. The hotkey can be changed, and the same window carries a set of extra tools:

- Window snapping to halves, thirds or custom positions, with global shortcuts you set yourself.
- Quick links that open a file, folder or website with one key.
- A search through the menu bar commands of the app you were just in.
- A calculator, an emoji picker with more than 1,550 emojis, and your calendar events.
- Live CPU and memory use for running apps, a keep-awake command and a camera preview for checking how you look before a call.

Dictation is opt-in. Turn it on in settings and pick a hotkey, then hold it while you speak; when you let go, the transcription is pasted into the active app. Apple's Speech framework does the transcribing on the Mac, and the developer says Trace saves neither the audio nor the text.

Settings stay on the Mac. You can back them up to a sync server you run yourself, entering its URL and a bearer token in settings.

Trace needs macOS 26 along with the Accessibility and Apple Events permissions. Dictation also asks for the microphone and speech recognition. The website lists Apple silicon, and the app in the 1.16.0 release DMG is Developer ID-signed and notarized. You can also install Trace from the developer's Homebrew tap.

Raycast also opens from a hotkey, and it grows through a store of thousands of extensions and a built-in AI assistant. Trace builds its tools into one free, MIT-licensed app.
