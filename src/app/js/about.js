const { ipcRenderer } = require('electron')


let btnCloseAbout = document.querySelector('#btn-close')

btnCloseAbout.addEventListener('click', function () {
    ipcRenderer.send('fechar-janela-sobre')
})