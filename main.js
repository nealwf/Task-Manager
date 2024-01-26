const { app, BrowserWindow, ipcMain, Sortable } = require('electron')
const path = require("node:path")

const createWindow = () => {
  const win = new BrowserWindow({
    x: 0,
    y: 0,
    useContentSize: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true
    },
  })

  win.loadFile("tasks.html")
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})