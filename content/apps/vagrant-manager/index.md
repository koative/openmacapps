---
name: "Vagrant Manager"
summary: "Menu bar app that lists and manages your Vagrant virtual machines from one place."
category: "Developer tools"
tags:
  - virtual-machines
  - virtualization
  - menu-bar
repository: "https://github.com/lanayotech/vagrant-manager"
website: "https://github.com/lanayotech/vagrant-manager"
license: "MIT"
licenseUrl: "https://github.com/lanayotech/vagrant-manager/blob/develop/LICENSE.md"
maintenance: "unmaintained"
maintenanceNote: "No release since December 2019 (checked November 2026)."
download: "https://github.com/lanayotech/vagrant-manager/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/lanayotech/vagrant-manager"
  - "https://github.com/lanayotech/vagrant-manager/blob/develop/LICENSE.md"
  - "https://github.com/lanayotech/vagrant-manager/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/lanayotech/vagrant-manager/releases/download/2.7.1/vagrant-manager-2.7.1.dmg"
    credit: "Lanayo Technology"
    license: "MIT; upstream app icon, trademarks retained"
---

Vagrant Manager is an OS X menu bar app that lists your Vagrant machines in one place so you can manage them from there. It detects machines that have already been set up with vagrant init. You can bookmark a machine so it stays listed after it is destroyed, or add one by pointing to its Vagrantfile. It suits developers who run several Vagrant machines.

The README requires OS X 10.8 Mountain Lion or later, with VirtualBox and Vagrant installed and their commands on your PATH. Parallels users also need prlctl on the PATH. The build is Intel only (x86_64) and is ad-hoc signed rather than notarized, so macOS blocks it by default; allow the first launch in System Settings. The latest release is from December 2019.
