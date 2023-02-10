let {mainWindow} = require('../../main');

// 切换调试控制台
exports.devToolSwitch = function () {
  if (mainWindow.webContents.isDevToolsOpened()) {
    mainWindow.webContents.closeDevTools();
  } else {
    mainWindow.webContents.openDevTools();
  }
};

// mainWindow reload
exports.mainWindowReload = function () {
  mainWindow.reload();
};
