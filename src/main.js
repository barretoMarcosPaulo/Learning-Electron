const { app } = require('electron')
const { BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const { Tray, Menu } = require('electron')
const data = require('./data')
const template = require('./template')

app.allowRendererProcessReuse = true
let tray = null;

app.on('ready', ()=>{
    let mainWindow = new BrowserWindow({
        width:600,
        height:400,
        webPreferences:{
            nodeIntegration: true
        },
    })
    
    tray = new Tray(__dirname+'/app/pages/img/icon-tray.png')
    let temp = template.generate()
    let trayMenu = Menu.buildFromTemplate(temp)
    tray.setContextMenu(trayMenu)
    
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
            height: 220,
            alwaysOnTop: true,
            resizable: false,
            frame: false,
            webPreferences: {
                nodeIntegration: true
            },
        })

        aboutWindow.on('closed', ()=>{
            aboutWindow = null
        })
        
        aboutWindow.loadURL(`file://${__dirname}/app/pages/sobre.html`)
    }
})

ipcMain.on('fechar-janela-sobre',()=>{
    aboutWindow.close()
})


ipcMain.on('stop-timer', (event, course , time)=>{
    data.salvaDados(course,time)
})