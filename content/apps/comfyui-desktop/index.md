---
name: "Comfy Desktop"
summary: "A desktop package for building and running node-based ComfyUI workflows."
category: "AI"
tags: ["image-generation", "node-editor", "local-ai"]
repository: "https://github.com/Comfy-Org/Comfy-Desktop"
website: "https://www.comfy.org"
license: "AGPL-3.0-or-later"
licenseUrl: "https://github.com/Comfy-Org/Comfy-Desktop/blob/main/LICENSE"
download: "https://www.comfy.org/download"
freeDownload: true
homebrew: "comfy"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Comfy-Org/Comfy-Desktop", "https://github.com/Comfy-Org/Comfy-Desktop/blob/main/LICENSE", "https://github.com/Comfy-Org/desktop", "https://www.comfy.org/download", "https://raw.githubusercontent.com/Comfy-Org/Comfy-Desktop/main/README.md"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Comfy-Org/desktop/blob/main/assets/UI/Comfy_Logo_x256.png", "credit": "ComfyUI Desktop contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Comfy Desktop sets up ComfyUI on your Mac and starts it for you, so you can build node-based image and video workflows without installing Python, PyTorch or Git by hand. On first launch it walks you through creating an install, downloads a ready environment, and opens ComfyUI when you press launch.

Each install is separate, with its own ComfyUI version, models and custom nodes, and you can keep as many as you like side by side.

- Updates to ComfyUI and its custom nodes happen in place, per install, without a terminal or a fresh download of the environment.
- A snapshot backs up an install so you can roll back after an update or a custom node breaks it.
- Existing portable, Git or older desktop installs of ComfyUI can be adopted and migrated where they are.
- Repositories clone through a small bundled Python with `pygit2`, so a Mac without Git still works.

The app updates itself as well. Once an install is set up, ComfyUI can run with no internet connection. Models take most of the disk space, and the download page suggests planning a dedicated drive as a library grows.

On the Mac, Comfy Desktop runs on Apple silicon only. The download page notes that more graphics memory allows bigger models and larger batches. Comfy Desktop is dual-licensed: AGPL-3.0 or later, or a commercial license from Comfy Org.
