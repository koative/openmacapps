---
name: 'Xit'
summary: 'A Git client with a commit graph, searchable history, blame and file previews, and a sidebar of branches and stashes.'
category: 'Developer tools'
tags:
  - git
  - version-control
  - git-client
alternativeTo:
  - tower
  - fork
repository: https://github.com/Uncommon/Xit
website: https://github.com/Uncommon/Xit
license: 'Apache-2.0'
licenseUrl: https://github.com/Uncommon/Xit/blob/main/COPYING
download: https://github.com/Uncommon/Xit/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/Uncommon/Xit
  - https://github.com/Uncommon/Xit/blob/main/COPYING
  - https://github.com/Uncommon/Xit/releases
  - https://github.com/Uncommon/Xit/blob/main/README.md
  - https://github.com/Uncommon/Xit/releases/tag/1.0b18
  - https://github.com/Uncommon/Xit/releases.atom
  - https://fork.dev/
assets:
  - path: ./assets/icon.png
    source: https://github.com/Uncommon/Xit/releases/download/1.0b18/Xit.1.0b18.zip
    credit: 'David Catmull and Xit contributors'
    license: 'Apache-2.0 project asset; Xit name and icon retained by the author'
---

Xit opens a Git repository in a window where you read its history, look at what changed and commit. The history list draws the graph of commits and branches. You can search it by author, message or hash, and step back and forward through the commits you have selected.

For the working tree and for any past commit, the file list shows just the changed files or, in outline view, the full folder tree. A selected file appears as a diff, as plain text, in Quick Look or as blame. The blame view colours lines that changed together and links each one back to its commit.

- The sidebar lists branches, remotes, tags, submodules and stashes.
- The staging view keeps workspace and staged files in separate lists, with an option to amend the last commit.
- Toolbar buttons fetch, push and pull, with menus for picking a particular remote or branch.
- Commands clone repositories, reset, and delete untracked or ignored files, and a toolbar Stash button holds the stash commands.
- Signed commits and tags are marked with an icon, which shows only that a signature exists, without verifying it.

Xit began as a rewrite of GitX and is still in beta, and its releases are published as pre-releases. Fork, a paid Git client, already offers visual interactive rebase and a merge-conflict resolver. Xit's README lists interactive rebase and better handling of merge conflicts among its ideas for later.

The 1.0b18 ZIP from April 2026 holds an Apple silicon build that needs macOS 26, signed ad hoc rather than with a Developer ID. The code is under the Apache 2.0 license.
