/* SENS//FORGE 桌面版主进程
 * 加载完全离线的 index.html，无任何网络依赖 */
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 980,
    minHeight: 640,
    backgroundColor: '#04060c',
    icon: path.join(__dirname, 'icon.ico'),
    autoHideMenuBar: true,
    title: 'SENS//FORGE — FPS灵敏度转换工坊',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  // 冒烟测试模式：静默打开、校验换算逻辑后自动退出
  if (process.env.SMOKE_TEST) {
    win.hide();
    win.webContents.on('did-finish-load', async () => {
      try {
        const title = win.webContents.getTitle();
        const formula = await win.webContents.executeJavaScript(
          "document.querySelector('#result-formula').textContent.slice(0,60)"
        );
        const games = await win.webContents.executeJavaScript(
          "document.querySelectorAll('#compare-list .cmp-short').length"
        );
        console.log('SMOKE_TITLE=' + title);
        console.log('SMOKE_FORMULA=' + formula);
        console.log('SMOKE_GAMES=' + games);
      } catch (e) {
        console.log('SMOKE_ERROR=' + e.message);
      }
      setTimeout(() => app.quit(), 500);
    });
  }

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
