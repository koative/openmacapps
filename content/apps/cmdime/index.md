---
name: "CmdIME"
summary: "Input-source switcher: tap a modifier key or press a shortcut to jump straight to any installed input method."
category: "Utilities"
tags:
  - keyboard
  - keyboard-shortcuts
  - menu-bar
  - input
repository: "https://github.com/ShunmeiCho/cmd-ime"
website: "https://shunmeicho.github.io/cmd-ime/"
license: "MIT"
licenseUrl: "https://github.com/ShunmeiCho/cmd-ime/blob/main/LICENSE"
download: "https://github.com/ShunmeiCho/cmd-ime/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ShunmeiCho/cmd-ime"
  - "https://github.com/ShunmeiCho/cmd-ime/blob/main/LICENSE"
  - "https://github.com/ShunmeiCho/cmd-ime/releases"
  - "https://shunmeicho.github.io/cmd-ime/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/ShunmeiCho/cmd-ime/releases/download/v0.18.4/CmdIME.zip"
    credit: "Shunmei Cho"
    license: "MIT; upstream app icon, trademarks retained"
---

CmdIME gives each of your input sources its own key. For example, a tap of Left Command can select English, Right Command Chinese and Right Shift Japanese. It checks that macOS actually switched and retries when it did not, and shows a small indicator near the text caret. After a password field, it can switch back to the input source you were using, where macOS would otherwise leave ABC selected. It suits people who switch between several languages many times a day.

It requires an Apple silicon Mac running macOS 13 or later; Intel Macs are not supported. The README calls it a preview build. The release is signed but not notarized, so the first launch has to be allowed in System Settings, and a zip downloaded in a browser can be blocked as damaged. The README's one-line installer is the smoother path.
