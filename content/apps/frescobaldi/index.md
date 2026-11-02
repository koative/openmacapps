---
name: "Frescobaldi"
summary: "A LilyPond sheet music editor with a linked score preview, a score wizard, MIDI playback and music editing tools."
category: "Media"
tags:
  - notation
  - music
  - text-editor
  - lilypond
  - cross-platform
repository: https://github.com/frescobaldi/frescobaldi
website: https://www.frescobaldi.org
license: "GPL-2.0-or-later"
licenseUrl: https://github.com/frescobaldi/frescobaldi/blob/master/LICENSE
download: https://github.com/frescobaldi/frescobaldi/releases
homebrew: "frescobaldi"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/frescobaldi/frescobaldi
  - https://github.com/frescobaldi/frescobaldi/blob/master/LICENSE
  - https://github.com/frescobaldi/frescobaldi/releases
  - https://github.com/frescobaldi/frescobaldi/wiki/How-to-install-Frescobaldi-on-Mac-OS-X
  - https://www.frescobaldi.org
assets:
  - path: ./assets/icon.png
    source: https://github.com/frescobaldi/frescobaldi/blob/master/frescobaldi/icons/org.frescobaldi.Frescobaldi.icns
    credit: "Frescobaldi contributors"
    license: "GPL-2.0-or-later; upstream project asset, trademarks retained"
---

Frescobaldi is an editor for LilyPond, the text-based music engraving system. You type music in LilyPond's language with syntax highlighting, completion and automatic indentation, run LilyPond with a shortcut, and see the engraved score beside the source. Clicking a note in the score jumps to its place in the text and the other way round, and errors link straight to the offending line.

It also has tools aimed at music rather than plain text: a score wizard for setting up new pieces, transposition, conversion between relative and absolute pitch entry, rhythm changes, lyric hyphenation, quick insertion of articulations and dynamics, MIDI playback for proof-listening and MIDI input for entering notes. ABC, MIDI and MusicXML files can be imported through LilyPond's own converters.

Frescobaldi does not include LilyPond, which has to be installed separately. The macOS releases come as signed disk images for Apple silicon and for Intel.
