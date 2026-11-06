---
name: "FutureOS"
summary: "Local-first AI agent with desktop and terminal front ends, sandboxed tool approvals, and a Rust core."
category: "AI"
tags:
  - ai-client
  - terminal
  - local-first
repository: "https://github.com/futuregene/future-os"
website: "https://future-os.cn"
license: "MIT"
licenseUrl: "https://github.com/futuregene/future-os/blob/main/LICENSE"
download: "https://github.com/futuregene/future-os/releases/download/v2.0.1/FutureOS_2.0.1_aarch64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/futuregene/future-os"
  - "https://github.com/futuregene/future-os/blob/main/LICENSE"
  - "https://github.com/futuregene/future-os/releases"
  - "https://future-os.cn"
---

FutureOS runs one agent backend that several front ends share: a desktop app, a terminal UI, a CLI, mobile apps and chat bots. Sessions, memory and skills are the same whichever front end you use. You can bring your own model keys in a local auth.json file, or sign in to the FutureOS provider. Tool access (file reads and writes, shell) can be set to manual approval, sandboxed or automatic, and the README names macOS Seatbelt as the sandbox on Mac.

The Mac download is an Apple silicon DMG. The README's install script installs an official signed build, but this entry does not state a minimum macOS version or whether the DMG is notarized. Remote access to other machines needs a FutureOS account on the official relay, with end-to-end encryption; a self-hosted relay avoids the account. The LICENSE file is MIT, and the project's third-party notices list an Apache-2.0 component.
