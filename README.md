# Paver

**Website & free download:** https://paver-site.vercel.app

Paver is a construction operations workspace for projects, sites, materials, purchasing, workforce, budgets and reporting. This repository is the public product site and a small desktop wrapper; the hosted application source is maintained separately in a private repository.

## Public website

The static marketing site is built with Vite, React and TypeScript. It includes product information, product screens with sample data, privacy notes, FAQs and desktop download links. It uses the shared Paver studio theme, responsive layouts and reduced motion.

Run it locally with Node.js 20 or newer:

```sh
npm ci
npm run dev
```

Build and check it with `npm run lint`, `npm run typecheck` and `npm run build`.

## Hosted application and desktop downloads

[Open the Paver web app](https://paver-ashy.vercel.app).

The Electron desktop app is a secure wrapper around the hosted web app. It loads `https://paver-ashy.vercel.app`, set once in the `APP_ORIGIN` constant at the top of `desktop/main.cjs`; it does not include the private application source or implement its business logic. The wrapper uses context isolation, Chromium sandboxing, no Node integration, restricted navigation, system-browser handling for external links, a single-instance lock and an offline retry screen.

The current desktop builds are unsigned:

- **Windows:** setup installer (`Paver-Setup-x64.exe`). Windows is a one-click setup `.exe` (per-user install, Start Menu and desktop shortcuts, uninstall from Settings → Apps). Builds are not code-signed, so SmartScreen may warn: choose More info → Run anyway.
- **Linux:** x86_64 AppImage (`Paver-x86_64.AppImage`).
- **macOS:** coming later; it requires a Mac build.

Download links use stable GitHub release asset URLs for this repository and will work after the artifacts are attached to a public GitHub release. The exact locally built artifacts and their SHA256 checksums are recorded in `desktop/release/manifest.json` (build output, gitignored) and its committed copy at `src/manifest.json`.

Build from `desktop/` with `npm ci`, then `npm run dist:linux`. The Windows installer is compiled with the native Linux `makensis` from [`desktop/installer.nsi`](desktop/installer.nsi) (no Wine needed): build `win-unpacked` with electron-builder, then run `makensis -DPRODUCT=... -DAPPID=... -DVERSION=1.0.0 -DSRC=<win-unpacked> -DOUTFILE=<Setup.exe> desktop/installer.nsi`. macOS is not built here.

### Releases and auto-updates

Pushing a tag such as `v1.0.1` (it must match `version` in `desktop/package.json`) runs `.github/workflows/release.yml`, which builds the Windows setup installer (with electron-builder's NSIS target) and the Linux AppImage on GitHub Actions and attaches them, with the `latest.yml` / `latest-linux.yml` update metadata, to that tag's GitHub release. Installed apps use `electron-updater` to check this repository's GitHub Releases and install a newer version when the app quits. Apps installed from v1.0.0 do not include the updater, so those users need to install the next version manually once.

## Privacy and project scope

The product screens on the public website use sample data, not real customer data. The site does not bundle the private app source. The desktop wrapper sends users to the hosted service; review that service's privacy and security practices before entering sensitive information.

This public repository was built with AI assistance. It contains the public marketing site and desktop shell only, not Paver's private business logic.
