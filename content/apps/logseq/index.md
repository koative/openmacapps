---
name: "Logseq"
summary: "Connect daily notes and ideas through an outliner with backlinks and linked references."
category: "Writing"
tags: ["notes", "outliner", "knowledge-base", "note-taking"]
alternativeTo: ["obsidian"]
repository: "https://github.com/logseq/logseq"
website: "https://logseq.com/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/logseq/logseq/blob/master/LICENSE.md"
download: "https://github.com/logseq/logseq/releases"
freeDownload: true
homebrew: "logseq"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/logseq/logseq", "https://github.com/logseq/logseq/blob/master/LICENSE.md", "https://github.com/logseq/logseq/blob/master/README.md", "https://github.com/logseq/logseq/releases", "https://raw.githubusercontent.com/logseq/logseq/master/README.md", "https://github.com/logseq/docs/blob/master/db-version.md", "https://github.com/logseq/logseq/releases/tag/2.0.2", "https://logseq.com", "https://obsidian.md/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/logseq/logseq/blob/master/resources/icon.png", "credit": "Logseq contributors", "license": "AGPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Logseq keeps your notes as an outline of blocks that link to each other. You write on a daily journal page, reference any page or block by typing its name in `[[ ]]`, and every page collects the places that mention it under Linked References.

Version 2, the current beta, stores each graph in a database, and much of the app now runs on tags. Tag a block `#Person` and give the tag properties such as a birthday; every block with that tag shows those fields and can be listed in a table view.

- Tasks, journal pages and flashcards are tags too, so you can add your own properties to them.
- Dates typed as `[[Next Friday]]` or with the date picker create the matching journal page.
- Queries, built with a query builder or typed by hand, show their results as a view inside a page.
- Plugins from the in-app marketplace extend the editor, and an optional MCP server lets AI clients connect to a graph.

The beta warns that data loss is possible. On the desktop it keeps the last 12 automatic backups in a `backups` folder inside the graph, and graphs export as SQLite files. The importer converts Markdown graphs from the older 0.10 releases, which remain on GitHub. Desktop builds come as separate DMGs for Apple silicon and Intel.

Syncing graphs between devices through Logseq Sync is a paid feature, and it can also be self-hosted. Obsidian also links notes with backlinks, but it stores them as plain Markdown files in a local folder, while Logseq 2 keeps each graph in a database. Logseq's code is AGPL-licensed.
