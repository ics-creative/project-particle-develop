var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var client = null;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    client = require('electron-connect').client;
}
electron.crashReporter.start();
var mainWindow = null;
app.on("window-all-closed", function () {
    if (process.platform != "darwin") {
        app.quit();
        console.log("other");
    }
});
app.on("ready", function () {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL("file://" + __dirname + "/src/index.html");
    mainWindow.webContents.openDevTools();
    if (client) {
        client.create(mainWindow);
    }
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
});
