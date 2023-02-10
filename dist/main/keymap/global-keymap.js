let {globalShortcut} = require('electron');
let {devToolSwitch, mainWindowReload} = require('../util/main-window-util');
let {mainWindowMenuSwitch} = require('../menu/main-window-menu');

// Alt切换菜单栏是否显示
globalShortcut.register('Alt+M', mainWindowMenuSwitch);

// Ctrl + Shift + R reload
globalShortcut.register('Ctrl+Shift+R', mainWindowReload);

// Ctrl + Shift + i 切换调试控制台
globalShortcut.register('Ctrl+Shift+I', devToolSwitch);
