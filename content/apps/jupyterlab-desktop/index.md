---
name: "JupyterLab Desktop"
summary: "The official desktop app for JupyterLab, with a bundled Python environment, saved sessions and remote server connections."
category: "Developer tools"
tags:
  - jupyter
  - python
  - data-analysis
  - science
  - cross-platform
repository: https://github.com/jupyterlab/jupyterlab-desktop
website: https://github.com/jupyterlab/jupyterlab-desktop
license: "BSD-3-Clause"
licenseUrl: https://github.com/jupyterlab/jupyterlab-desktop/blob/master/LICENSE
download: https://github.com/jupyterlab/jupyterlab-desktop/releases
homebrew: "jupyterlab-app"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/jupyterlab/jupyterlab-desktop
  - https://github.com/jupyterlab/jupyterlab-desktop/blob/master/LICENSE
  - https://github.com/jupyterlab/jupyterlab-desktop/releases
  - https://github.com/jupyterlab/jupyterlab-desktop/blob/master/python-env-management.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/jupyterlab/jupyterlab-desktop/master/dist-resources/icon.png
    credit: "Project Jupyter Contributors"
    license: "BSD-3-Clause; upstream project asset, Jupyter trademarks retained"
---

JupyterLab Desktop packages the JupyterLab notebook environment as a regular Mac app, so you can open notebooks and project folders without starting a server from the terminal. Double-clicking an `.ipynb` file opens it, recent sessions can be restored with their settings, and a `jlab` command opens folders, files or remote servers from the shell.

The app ships with a Python environment installer and includes a manager for creating conda or venv environments and choosing which one each project uses. It can also connect to a JupyterLab server that is already running on your Mac or elsewhere.

Separate installers are available for Apple silicon and Intel Macs, and the project lists macOS 12 or later as the requirement.
