const {app,BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

var APP_DIR = '/app/';

function createWindow(){
    win = new BrowserWindow({
        width:1000,
        height:600,
        frame:false
    });

    win.openDevTools({detach:true})

    win.loadURL(url.format({
        pathname:path.join(__dirname,APP_DIR,'index.html'),
        protocol:'file:',
        slashes:true
    }));
}
app.on('ready',createWindow);
app.on('window-all-closd', () => {

    if(process.platform !== 'darwin'){
        app.quit();
}
});

