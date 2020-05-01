const { app } = require('electron')
const { BrowserWindow } = require('electron')
const { ipcMain } = require('electron')

app.allowRendererProcessReuse = true

app.on('ready', ()=>{
    let mainWindow = new BrowserWindow({
        width:600,
        height:400,
        webPreferences:{
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(`file://${__dirname}/app/pages/index.html`)
})

app.on('window-all-closed',()=>{
    app.quit()
})

let aboutWindow = null
ipcMain.on('abrir-janela-sobre',()=>{
    if(aboutWindow == null){
     
        aboutWindow = new BrowserWindow({
            width: 300,
            height: 200,
            alwaysOnTop: true
        })

        aboutWindow.on('closed', ()=>{
            aboutWindow = null
        })
        
        aboutWindow.loadURL(`file://${__dirname}/app/pages/about.html`)
    }
})