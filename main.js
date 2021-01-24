const {BrowserWindow, app, Menu} = require('electron');
const {createConnection} = require('./database')
const { ipcMain } = require('electron')

createConnection();
let mainWindow;
let addWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('src/index.html')

mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//crear ventana
function createAddWindow(file) {
    addWindow = new BrowserWindow({
        width: 400,
        height: 300,
        autoHideMenuBar: true,
        resizable: false,
        modal: true,
        webPreferences: {
          nodeIntegration: true
        }
    })

    addWindow.webContents.openDevTools()
    addWindow.loadFile(file)
}


//plantilla de menu
var menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
        submenu: [
            {
                label: 'Comisaria Virtual',
                click(){
                    createAddWindow('src/login.html');
                }
            },
            {label: 'Datos empresa'},
            {type: 'separator'},
            {
                label: 'Salir',
                click(){
                    app.quit();
                }
            }
        ]
    }
])

//aplicando plantilla a ventana
Menu.setApplicationMenu(menu);

//recibiendo eventos
ipcMain.on('show-login', (event, arg) => {
    createAddWindow('src/login.html');
})

module.exports = {createAddWindow};
