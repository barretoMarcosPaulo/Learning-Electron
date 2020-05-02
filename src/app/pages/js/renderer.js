const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector('#link-sobre');
let btnPlay = document.querySelector('.botao-play')
let sourceImgs = ['img/play-button.svg','img/stop-button.svg']

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
})

btnPlay.addEventListener('click', function(){
    sourceImgs.reverse()
    btnPlay.src = sourceImgs[0]
})

