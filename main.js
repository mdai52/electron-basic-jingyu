
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
   
  })
  win.loadURL('https://chat.aimobo.cn')
}
app.whenReady().then(createWindow)