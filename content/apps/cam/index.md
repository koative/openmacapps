---
name: "CAM"
summary: "Records short camera sessions with research participants and saves each clip as an mp4 named from ID, session and task."
category: "Media"
tags:
  - camera
  - video
  - minimal
repository: "https://github.com/hanayik/CAM"
website: "https://github.com/hanayik/CAM"
license: "MIT"
licenseUrl: "https://github.com/hanayik/CAM/blob/master/LICENSE"
download: "https://github.com/hanayik/CAM/releases/download/1.0.15/CAM-darwin-x64.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
maintenance: unmaintained
maintenanceNote: "No release since October 2018."
icon: "./assets/icon.png"
sources:
  - "https://github.com/hanayik/CAM"
  - "https://github.com/hanayik/CAM/blob/master/LICENSE"
  - "https://github.com/hanayik/CAM/releases/download/1.0.15/CAM-darwin-x64.zip"
  - "https://raw.githubusercontent.com/hanayik/CAM/master/readme.md"
  - "https://raw.githubusercontent.com/hanayik/CAM/master/app.html"
  - "https://raw.githubusercontent.com/hanayik/CAM/master/core.js"
  - "https://raw.githubusercontent.com/hanayik/CAM/master/package.json"
  - "https://github.com/hanayik/CAM/releases/tag/1.0.15"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/hanayik/CAM/master/icon.png"
    credit: "Taylor Hanayik"
    license: "MIT; upstream app icon, trademarks retained"
---

CAM records short video tasks with research participants so they can be scored or analysed later. It was made for the CSTAR research group and keeps its window as bare as possible.

When CAM opens, it shows the camera preview straight away. Type a participant ID, a session and a task into the three fields, and the app shows the file name it will use, built from those values and a date stamp. Recording starts only when you click the red button.

The preview disappears during recording so it does not distract the participant. Click the red square to stop, and the clip is saved as an .mp4 by a copy of ffmpeg bundled with the app.

CAM saves to a Dropbox folder if it finds one, then to Box. You can turn cloud saving off in the menu bar, and recordings then go to ~/Library/Application Support/CAM/data/.

CAM is an Electron app built for macOS only. The last release, 1.0.15 from October 2018, is an Intel build for macOS 10.9 or later, signed with a Developer ID.
