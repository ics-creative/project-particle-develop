var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var client = null;
var windowStateKeeper = require('electron-window-state');
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
    var mainWindowState = windowStateKeeper({
        defaultWidth: 960,
        defaultHeight: 800
    });
    var mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height
    });
    mainWindow.loadURL("file://" + __dirname + "/src/index.html");
    if (client) {
        client.create(mainWindow);
    }
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
});
//# sourceMappingURL=index.js.map