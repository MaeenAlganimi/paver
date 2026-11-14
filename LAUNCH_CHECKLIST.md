# Paver — launch checklist (owner actions)

Done on `launch-readiness`: Electron 45 + auto-update via GitHub Releases, CI/release workflows, new desktop icon set (png/ico/icns) and matching favicons, OG/robots/sitemap, bilingual 404 page, honest "sample data" wording on screenshots, draft EN/AR privacy and terms. Typecheck, lint and build pass locally.

## Blocking
- [ ] **GitHub billing lock**: fix at https://github.com/settings/billing, then re-run CI (`gh run rerun --failed`). No workflow can run until then.
- [ ] **Legal placeholders** in `src/legal.ts` (35 `[...]` markers): legal entity name and address, effective date, governing law / courts, data protection law, retention period, storage region, database/hosting provider, liability cap, pricing, shutdown notice, change-notice method, confirm no analytics and no sale of data, contact email (confirm `qudralabs.team@gmail.com`). Then set `LEGAL_DRAFT = false`. Have a lawyer review.
- [ ] **Domain**: pick the final domain(s). Then update `APP_ORIGIN` in `desktop/main.cjs` (currently `paver-ashy.vercel.app`), the canonical/OG URLs in `index.html`, `public/sitemap.xml`, `public/robots.txt`, and the web app link in `src/main.tsx`.
- [ ] **Hosted app security** (repo `construction-ERP-system`, see its PR #13): rotate the committed database password and `NEXTAUTH_SECRET`, stop committing `.env` and the `backups/` JSON.

## Release
- [ ] Merge this PR, then tag `v1.0.1` to build installers with the new icon and auto-updater. v1.0.0 users must download 1.0.1 manually once; later updates are automatic.
- [ ] After the new release, update `src/manifest.json` sizes/SHA256 to the new assets.
- [ ] Decide whether to delete the old `Paver-win-x64.zip` asset from v1.0.0.
- [ ] Windows code-signing certificate (optional but removes SmartScreen warnings). macOS build needs a Mac + Apple Developer ID.

## Nice to have
- [ ] Link privacy/terms from the hosted app's login and signup pages.
- [ ] Re-capture the OG image with the new icon if you want them to match.

## Mobile apps (mobile/)

- [ ] Confirm the app ID (`com.qudralabs.*`) before the first store upload — it can't change afterwards.
- [ ] Google Play: developer account (one-time $25), create an upload keystore, add the 4 `ANDROID_*` secrets, run the "Android app" workflow, upload the `.aab`. Play also needs a privacy policy URL (the `/privacy` page), screenshots and a content rating form.
- [ ] Apple App Store: Apple Developer Program ($99/year) and a Mac with Xcode to build `mobile/ios`. Apple may reject apps that only show a website (guideline 4.2) — plan a native feature (push reminders, camera upload) if that happens.
- [ ] Clear the GitHub billing lock so the Android workflow can run.
