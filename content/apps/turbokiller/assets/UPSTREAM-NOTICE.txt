# Third-Party Notices

TurboKiller includes third-party software that was not originally authored by NicoTech Studio.

## DisableTurboBoost.64bits.kext

TurboKiller redistributes a historical copy of:

`DisableTurboBoost.64bits.kext`

Bundle identifier:

`com.rugarciap.DisableTurboBoost`

Pinned executable SHA-256:

`f81f003ccd5827122a41c39bddb78e4ffff37d84718a647dbd5fc3c6a92f987c`

The bundled Kext was obtained from the historical `rugarciap/Turbo-Boost-Switcher` project.

Copyright for that upstream project is held by Rubén García Pérez and contributors. The upstream project is distributed under GNU General Public License version 2, with source notices permitting version 2 or later.

Turbo Boost Switcher credits the `nanoant/DisableTurboBoost.kext` project, originally written by Adam Strzelecki, as the origin of the Turbo Boost kernel-extension implementation.

TurboKiller redistributes the historical Kext unchanged and does not claim authorship of it.

## DisableTurboBoost.kext

Original project:

`nanoant/DisableTurboBoost.kext`

Copyright:

Copyright (c) 2012 Adam Strzelecki

License notice:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

## Provenance

TurboKiller pins every file in the historical bundle by SHA-256, including
`Contents/Info.plist~`. That original backup-style file must be preserved because
it affects the bundle's historical signature-exception hash. See
[bundle integrity](docs/kext-integrity.md) for all pinned hashes.

The upstream projects above are referenced for provenance and licensing. TurboKiller does not claim that rebuilding current upstream source will reproduce the bundled historical binary byte-for-byte.
