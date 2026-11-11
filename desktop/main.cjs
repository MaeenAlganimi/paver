const { app, BrowserWindow, shell, session } = require('electron');
const path = require('node:path');
// ---------------------------------------------------------------------------
// APP_ORIGIN: the hosted Paver web app this desktop wrapper opens.
// This is the single place to change it (for example once a custom domain is
// chosen). Only this exact origin is allowed to load inside the app window;
// every other link opens in the system browser.
// ---------------------------------------------------------------------------
const APP_ORIGIN = 'https://paver-ashy.vercel.app';
// Auto-update: checks this repository's GitHub Releases (see "publish" in package.json)
// and installs a newer version the next time the app quits. Only runs in packaged builds.
function setupAutoUpdates() {
  if (!app.isPackaged) return;
  let autoUpdater;
  try { ({ autoUpdater } = require('electron-updater')); } catch (error) { console.error('Auto-update unavailable:', error.message); return; }
  autoUpdater.on('error', (error) => console.error('Auto-update error:', error && error.message));
  const check = () => autoUpdater.checkForUpdatesAndNotify().catch((error) => console.error('Update check failed:', error && error.message));
  check();
  setInterval(check, 6 * 60 * 60 * 1000).unref();
}

if (!app.requestSingleInstanceLock()) app.quit();
else {
  let window;
  app.on('second-instance', () => { if (window) { if (window.isMinimized()) window.restore(); window.focus(); } });
  function trusted(url) { try { const parsed = new URL(url); return parsed.origin === APP_ORIGIN; } catch { return false; } }
  function openExternal(url) { try { const parsed = new URL(url); if (parsed.protocol === 'https:' || parsed.protocol === 'mailto:') shell.openExternal(url); } catch {} }
  function showOffline() { if (window && !window.isDestroyed()) window.loadFile(path.join(__dirname, 'offline.html'), { query: { retry: APP_ORIGIN } }); }
  function createWindow() {
    window = new BrowserWindow({ width: 1280, height: 820, minWidth: 360, minHeight: 560, title: 'Paver', icon: path.join(__dirname, 'assets/icon.png'), backgroundColor: '#111710', show: false, webPreferences: { preload: path.join(__dirname, 'preload.cjs'), contextIsolation: true, sandbox: true, nodeIntegration: false, webviewTag: false, devTools: false } });
    window.once('ready-to-show', () => window.show());
    window.webContents.setWindowOpenHandler(({url}) => { if (!trusted(url)) openExternal(url); return { action: 'deny' }; });
    window.webContents.on('will-navigate', (event, url) => { if (!trusted(url)) { event.preventDefault(); openExternal(url); } });
    window.webContents.on('did-fail-load', (_event, code, _desc, _url, isMainFrame) => { if (isMainFrame && code !== -3) showOffline(); });
    window.webContents.on('render-process-gone', () => showOffline());
    session.defaultSession.setPermissionRequestHandler((_wc, _permission, callback) => callback(false));
    session.defaultSession.setPermissionCheckHandler(() => false);
    window.loadURL(APP_ORIGIN).catch(showOffline);
  }
  app.whenReady().then(() => { createWindow(); setupAutoUpdates(); });
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
  app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
}
