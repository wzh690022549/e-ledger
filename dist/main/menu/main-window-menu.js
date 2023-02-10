let {Menu} = require('electron');

// 记录原始菜单
let applicationMenu = Menu.getApplicationMenu();
// 移除菜单栏
hideMenu();

// 主窗口菜单隐藏标志
let showFlag = false;

function hideMenu() {
  Menu.setApplicationMenu(null);
}

function showMenu() {
  Menu.setApplicationMenu(applicationMenu);
}

// 提供主窗口菜单显示隐藏切换函数
exports.mainWindowMenuSwitch = function () {
  if (showFlag) {
    hideMenu();
  } else {
    showMenu();
  }
  showFlag = !showFlag;
};
