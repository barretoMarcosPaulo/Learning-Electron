const { ipcRenderer, shell,  } = require('electron')
const process = require('process')


let version = document.querySelector('electron-version')
let btnCloseAbout = document.querySelector('#btn-close')
let linkGitHub = document.querySelector("#link-github")


window.onload = function(){
    version.textContent = process.versions.electron
}

btnCloseAbout.addEventListener('click', function () {
    ipcRenderer.send('fechar-janela-sobre')
})


linkGitHub.addEventListener('click', function(){
    shell.openExternal('https://github.com/barretoMarcosPaulo')
})