const { ipcRenderer } = require('electron');
const timer = require('./timer')

let linkSobre = document.querySelector('#link-sobre');
let btnPlay = document.querySelector('.botao-play')
let linkTime = document.querySelector('.tempo') 

let sourceImgs = ['img/play-button.svg','img/stop-button.svg']
let play = false

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
})

btnPlay.addEventListener('click', function(){
    sourceImgs.reverse()
    btnPlay.src = sourceImgs[0]

    if(play){
        timer.stopTimer()
        play = false
    }else{
        timer.startTimer(linkTime)
        play = true
    }

})

