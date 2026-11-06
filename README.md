# Paver

Paver is a construction operations workspace for projects, sites, materials, purchasing, workforce, budgets and reporting. This repository is the public product site and a small desktop wrapper; the hosted application source is maintained separately in a private repository.

## Public website

The static marketing site is built with Vite, React and TypeScript. It includes product information, clearly labeled illustrative interface mockups, privacy notes, FAQs and desktop download links. It supports light and dark themes, responsive layouts, keyboard-accessible controls and reduced motion.

Run it locally with Node.js 20 or newer:

```sh
npm ci
npm run dev
```

Build and check it with `npm run lint`, `npm run typecheck` and `npm run build`.

## Hosted application and desktop downloads

[Open the Paver web app](https://paver-ashy.vercel.app).

The Electron desktop app is a secure wrapper around the hosted web app. It loads `https://paver-ashy.vercel.app`; it does not include the private application source or implement its business logic. The wrapper uses context isolation, Chromium sandboxing, no Node integration, restricted navigation, system-browser handling for external links, a single-instance lock and an offline retry screen.

The current desktop builds are unsigned:

- **Windows:** portable x64 ZIP (`Paver-win-x64.zip`). Windows SmartScreen may show a warning.
- **Linux:** x86_64 AppImage (`Paver-x86_64.AppImage`).
- **macOS:** coming later; it requires a Mac build.

Download links use stable GitHub release asset URLs for this repository and will work after the artifacts are attached to a public GitHub release. The exact locally built artifacts and their SHA256 checksums are recorded in `desktop/release/manifest.json` (build output, gitignored) and its committed copy at `src/manifest.json`.

Build from `desktop/` with `npm ci`, then `npm run dist:linux` or `npm run dist:win:zip`. An NSIS Windows installer was attempted but electron-builder requires Wine on this Linux host; Wine is unavailable, so the portable ZIP is offered instead. macOS is not built here.

## Privacy and project scope

The public website uses fictional labels and sample values in interface illustrations. No real customer data or authenticated product screenshots are included. The site does not bundle the private app source. The desktop wrapper sends users to the hosted service; review that service's privacy and security practices before entering sensitive information.

This public repository was built with AI assistance. It contains the public marketing site and desktop shell only, not Paver's private business logic.
