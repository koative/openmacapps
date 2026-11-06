# Third-party notices and asset provenance

## Source and documentation

SSMV's source code, scripts, examples, and documentation are provided under the
[MIT License](LICENSE). The initial implementation was developed with AI
assistance and reviewed before publication. No external Swift packages are included. Mermaid JavaScript and its supporting
assets are redistributed as described below.

## Apple platform components

The app links to macOS-provided AppKit, Foundation, and UniformTypeIdentifiers.
The on-demand diagram renderer also uses system WebKit. Tests use PDFKit and Swift Testing. System fonts and toolbar/sidebar
symbols are requested through Apple APIs at runtime; their binaries and symbol
artwork are not redistributed in this repository. These platform components
remain subject to Apple's terms, not SSMV's MIT license.

The [Xcode and Apple SDKs Agreement](https://www.apple.com/legal/sla/docs/xcode.pdf),
section 2.10, governs system-provided images. SSMV uses them in its macOS UI,
not as its app icon or logo. macOS screenshots show the app's actual UI.

## App icon

`macos/Resources/AppIcon-source.png` was generated for this project with OpenAI's image
generation tool. `macos/Resources/AppIcon-prompt.txt` records its provenance and final
packaging geometry; `macos/scripts/build-icon.sh` creates the macOS renditions. No
Apple SF Symbol export, third-party font file, or third-party icon image was
used as the source asset. The generated design incorporates a conventional
Markdown-style M and downward arrow.

The independently published [Markdown Mark by Dustin Curtis](https://github.com/dcurtis/markdown-mark)
is dedicated to the public domain under [CC0](https://github.com/dcurtis/markdown-mark/blob/master/LICENSE).
Its files were not copied into this project; this reference documents the
established motif rather than claiming authorship of the Markdown Mark.

To the extent the maintainers hold rights in the generated artwork, it is
available under this repository's MIT License. This is not a claim that
AI-generated artwork has exclusive copyright or trademark protection.
[OpenAI's terms](https://openai.com/policies/row-terms-of-use/) assign output
rights between OpenAI and the user to the extent permitted by law, while
retaining the user's responsibility for third-party rights. Neither Apple,
OpenAI, nor the Markdown Mark's creator endorses SSMV.

## Windows platform components

The Windows development project restores Microsoft.WindowsAppSDK.WinUI 1.8.260803003
and Microsoft.Windows.CppWinRT 2.0.250303.1 from NuGet. These packages and their
transitive dependencies retain their own licenses; SSMV's MIT license does not
relicense the Windows SDK or runtime. The Windows core parser uses only the C++
standard library. No third-party Markdown parser source is vendored.

Windows App SDK package license terms govern redistribution of runtime files.
C++/WinRT includes its own license in the package. Before publishing a Windows
release, retain the restored packages' license/notice files and review the actual
runtime files included.
Windows builds are currently development artifacts, not signed release packages.


## Windows installer and C++ runtime

The development installer is built with [NSIS 3.12](https://nsis.sourceforge.io/Download).
NSIS's installer code and standard plug-ins use the zlib/libpng license, except
components identified separately in its [license appendix](https://nsis.sourceforge.io/Docs/AppendixI.html).
Compression modules have their own terms; the LZMA module includes a linking
exception. NSIS is a packaging tool and does not change the license of SSMV's code.

The installer stages unmodified release Microsoft Visual C++ runtime DLLs from
Visual Studio's architecture-specific `VC\Redist\MSVC` directory alongside the
app. Microsoft lists the redistributable files and restrictions in
[Distributable Code for Visual Studio 2022](https://learn.microsoft.com/en-us/visualstudio/releases/2022/redistribution#visual-c-runtime-files).
Redistribution remains subject to the license terms of the builder's validly
licensed Visual Studio installation; debug runtime files are not redistributable.
These Microsoft binaries are not covered by SSMV's MIT License. The portable app
build and installer payload have different CRT packaging requirements.

This notice identifies the packaging dependencies and their governing sources.
It does not certify every future Windows release or replace review of its actual
payload, retained notices and applicable Microsoft license terms.


## Mermaid diagrams

SSMV redistributes the unmodified Mermaid 12.2.0 ESM bundle and its lazy-loaded
chunks, with local KaTeX styles and fonts. These assets retain their upstream
licenses, not SSMV's MIT license. See [asset provenance](shared/mermaid/README.md)
and the [dependency license inventory](shared/mermaid/licenses/inventory.json).
The complete retained notices are shipped alongside the renderer.

Mermaid, KaTeX and KaTeX fonts use MIT terms. The dependency closure also includes
ISC, BSD-3-Clause, Apache-2.0 and Unlicense components. DOMPurify permits either
Apache-2.0 or MPL-2.0; this distribution uses Apache-2.0. ELK/elkjs uses EPL-2.0;
its license and exact-version source availability notice are retained under
[licenses/elkjs@0.9.3](shared/mermaid/licenses/elkjs@0.9.3).

The inventory conservatively covers the upstream release's runtime dependency
closure, including modules that may be removed by upstream bundling. It is not
a claim that every listed package executes in SSMV. No third-party cloud
rendering service is used. The Windows diagram host uses Microsoft's WebView2
Runtime, which remains subject to Microsoft's terms.
