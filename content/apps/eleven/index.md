---
name: "Eleven"
summary: "Reverse-engineering app for binaries and Android APKs, where an AI coding agent you bring reads, renames and patches code."
category: "Developer tools"
tags:
  - reverse-engineering
  - debugging
  - coding-agents
repository: "https://github.com/Zfinix/eleven"
website: "https://eleven.chizi.app"
license: "Apache-2.0"
licenseUrl: "https://github.com/Zfinix/eleven/blob/main/LICENSE"
download: "https://github.com/Zfinix/eleven/releases/download/v0.1.13/Eleven-0.1.13-arm64.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Zfinix/eleven"
  - "https://github.com/Zfinix/eleven/blob/main/LICENSE"
  - "https://github.com/Zfinix/eleven/releases"
  - "https://eleven.chizi.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Zfinix/eleven/blob/main/app/script/macos-icon/Eleven.icns"
    credit: "Zfinix (Eleven contributors)"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Eleven opens Mach-O, ELF and PE binaries, Android APKs and GPU kernels, and shows pseudocode, assembly, cross-references and strings. An agent that speaks the Agent Client Protocol works in the same window: it can open functions, rename them, add notes and propose byte patches, which you accept or decline. Disassembly comes from Ghidra through REA, or from Rizin. It suits reverse engineers who want an agent in the loop.

The README gives macOS 14 or later on Apple silicon as the requirement and says the app is signed and notarized by Apple. On first run it installs or reuses Rizin, Ghidra 12.x with Java 21, and an agent adapter as needed, so you need an agent such as Claude, Codex or Gemini. The README says Eleven is free and accepts sponsorship.
