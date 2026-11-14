# Paver mobile apps (Android + iOS)

Like the desktop app in `../desktop`, the phone apps are thin, secure wrappers that open the hosted
Paver web app (https://paver-ashy.vercel.app). They are built with [Capacitor](https://capacitorjs.com). All data stays on the
server; nothing is stored on the phone. If the phone is offline, the app shows a bilingual
"can't connect" page (`www/offline.html`) with a retry button.

| Setting | Value | Where to change |
| --- | --- | --- |
| App ID / bundle ID | `com.qudralabs.paver` (changeable **before** the first store upload, permanent after) | `capacitor.config.json` → `appId`, then `npx cap sync` (Android also: `android/app/build.gradle` → `applicationId`/`namespace`) |
| Hosted app URL | `https://paver-ashy.vercel.app` | `capacitor.config.json` → `server.url` and `allowNavigation`, plus `www/*.html` |
| Icon & splash | `assets/` (same artwork as the desktop app) | replace files, run `npm run assets` |

Links to other websites open in the phone's browser, not inside the app.

## Build an Android test APK

Needs Node 22+, JDK 21 and the Android SDK (Android Studio installs both).

```bash
cd mobile
npm ci
npm run android:debug   # → android/app/build/outputs/apk/debug/app-debug.apk
```

The GitHub Actions workflow `.github/workflows/mobile-android.yml` builds the same APK on every push
that touches `mobile/` and attaches it to the run as an artifact.

## Google Play release

1. Create an upload keystore once and keep it safe (losing it blocks updates):
   `keytool -genkeypair -v -keystore upload.jks -alias upload -keyalg RSA -keysize 2048 -validity 10000`
2. Add repo secrets `ANDROID_KEYSTORE_BASE64` (`base64 -w0 upload.jks`), `ANDROID_KEYSTORE_PASSWORD`,
   `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`.
3. Actions → **Android app** → Run workflow → download the `.aab` artifact and upload it in Play Console.
   The version code is the workflow run number, so every upload is higher than the last.

## iOS

The Xcode project is in `ios/` (Swift Package Manager, no CocoaPods). iOS apps can only be built on a
Mac with Xcode and an Apple Developer account:

```bash
cd mobile && npm ci && npx cap sync ios && npx cap open ios
```

In Xcode: pick your team under Signing & Capabilities, then Product → Archive → Distribute.
Note: Apple sometimes rejects apps that only show a website (guideline 4.2). If that happens,
native features (push reminders, camera upload of documents, Face ID) are the usual fix.
