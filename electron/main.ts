import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let win: BrowserWindow;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        darkTheme: true,
        autoHideMenuBar: true
    });

    win.loadFile(path.join(__dirname, '../my-modpack-launcher/index.html'));
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
});