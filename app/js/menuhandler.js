const $=require('jquery');
const { remote } = require('electron');

var win = remote.getCurrentWindow();
win.$ = win.jQuery = require('jquery');
$('#minimize').click(function(){
    win.minimize();
});

$('#maximize').click(function(){
    if(!win.isMaximized()){
        win.maximize();
    }
    else
    {
        win.unmaximize();
    }
});

$('#close').click(function(){
   win.close();
});