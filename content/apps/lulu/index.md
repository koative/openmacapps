---
name: "LuLu"
summary: "Firewall that alerts you to outgoing network connections and lets you allow or block each app."
category: "Privacy & security"
tags: ["firewall", "network", "native"]
alternativeTo: ["little-snitch"]
repository: "https://github.com/objective-see/LuLu"
website: "https://objective-see.org/products/lulu.html"
license: "GPL-3.0"
licenseUrl: "https://github.com/objective-see/LuLu/blob/master/LICENSE.md"
download: "https://github.com/objective-see/LuLu/releases"
freeDownload: true
homebrew: "lulu"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/objective-see/LuLu", "https://github.com/objective-see/LuLu/blob/master/LICENSE.md", "https://objective-see.org/products/lulu.html", "https://github.com/objective-see/LuLu/releases/tag/v4.5.7", "https://www.obdev.at/products/littlesnitch/index.html"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/objective-see/LuLu/master/LuLu/App/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "LuLu contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

LuLu stops at every new outgoing network connection on your Mac and asks whether to allow it. The alert names the program and the address it is trying to reach. Allow or block, and a rule is saved for that program.

The alert can show more before you decide. It shows the program's code signing details and its process hierarchy, and a button opens the file's results on VirusTotal. Expanding the alert gives finer rules: limit one to the current destination instead of the whole program, or make it last only for the process's lifetime or a set number of hours and minutes.

At setup LuLu offers to allow Apple programs and software already installed without alerting you. Those rules, your own and its default system rules all appear in a Rules window, where you can filter, edit or add rules by hand, with a regular expression for the remote address if needed. Signed programs are matched by their code signing identifier, so a rule survives when the app moves or updates. The status bar menu also opens Netiquette, Objective-See's network monitor, packaged inside LuLu.

Installation needs your approval of LuLu's system extension and network filter in System Settings. LuLu requires macOS 10.15 or later. Objective-See recommends the latest macOS and at least 15.3 on Sequoia, because of networking bugs in Apple's framework. The DMG and the Universal app inside are Developer ID-signed and notarized.

Little Snitch also alerts when an app wants to connect and lets you allow or deny it. It is paid; without a license key it runs in a three-hour demo mode that can be restarted, and its Network Monitor expires after 30 days. LuLu is free under GPL-3.0 from Objective-See.
