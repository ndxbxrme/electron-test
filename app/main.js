const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
let mainWindow = null;
const ready = async () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
};
app.on('ready', ready);
app.on('window-all-closed', () => process.platform==='darwin' || app.quit());
app.on('activate', () => mainWindow || ready());