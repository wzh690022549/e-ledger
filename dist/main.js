let {app, BrowserWindow} = require('electron');
let path = require("path");

// 主窗口
let mainWindow = null;

// 创建主窗口
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: "./static/img/icon.png",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  });
  // 对外暴露主窗口方便主进程使用
  exports.mainWindow = mainWindow;
  mainWindow.loadFile('index.html').catch(e => console.log(e));
  mainWindow.on('close', () => mainWindow = null);
}

// 注册管理
function registerManager() {
  // 注册菜单管理
  require('./main/menu/menu-manager');
  // 注册按键管理
  require('./main/keymap/keymap-manager');
}

// 启动时创建主窗口
app.on('ready', ()=>{
  createWindow();
  registerManager();
});
app.on('window-all-closed', app.quit);
