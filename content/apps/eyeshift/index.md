---
name: "Eyeshift"
summary: "Moves keyboard focus to the screen, window or split pane you look at, using only your Mac's webcam."
category: "Utilities"
tags:
  - accessibility
  - window-management
  - webcam
  - keyboard
repository: "https://github.com/itssarthak/eyeshift"
website: "https://sarthakchhabra.com/eyeshift/"
license: "MIT"
licenseUrl: "https://github.com/itssarthak/eyeshift/blob/main/LICENSE"
download: "https://github.com/itssarthak/eyeshift/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/itssarthak/eyeshift"
  - "https://github.com/itssarthak/eyeshift/blob/main/LICENSE"
  - "https://github.com/itssarthak/eyeshift/releases/latest"
  - "https://sarthakchhabra.com/eyeshift/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/itssarthak/eyeshift/releases/latest/download/Eyeshift-0.1.0.zip"
    credit: "Sarthak Chhabra"
    license: "MIT; upstream app icon from AppIcon.icns in Eyeshift.app, trademarks retained"
---

Eyeshift is a menu bar app that watches the webcam, estimates where you are looking, and moves keyboard focus there: to another screen, to another window on the same screen, or to a pane in editors and terminals such as iTerm2, Terminal, Ghostty, VS Code, Cursor, Zed and Xcode. It does not move focus while you type, use the mouse or look at the keyboard, and it can learn from your clicks and typing. It is an open-source alternative to the paid Glance Switch, for people who want to start typing without clicking first. The README says camera frames are processed in memory with Apple's Vision framework and discarded.

It needs macOS 14 or later on Apple silicon or Intel, and a webcam; a second camera is optional. Setup asks for Camera and Accessibility permissions and about 45 seconds of calibration per screen. Accuracy is roughly thumbnail-sized, so it picks a screen or pane but cannot point at a word. The zip is not notarized and is ad-hoc signed, so the first launch must be allowed in System Settings; the README says to right-click the app and choose Open. Learning from clicks and typing can be turned off in Settings.
