const { ipcRenderer } = require('electron');
const timer = require('./timer')
const data = require('../../../data')

let linkSobre = document.querySelector('#link-sobre');
let btnPlay = document.querySelector('.botao-play')
let linkTime = document.querySelector('.tempo') 
let course = document.querySelector('.curso')
let btnAddCourse = document.querySelector('.botao-adicionar')


let sourceImgs = ['img/play-button.svg','img/stop-button.svg']
let play = false

window.onload = ()=>{
    data.recuperarDados(course.textContent)
        .then((dados)=>{
            linkTime.textContent=dados.tempoDeEstudo
        })
}

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
})

btnPlay.addEventListener('click', function(){
    sourceImgs.reverse()
    btnPlay.src = sourceImgs[0]

    if(play){
        timer.stopTimer(course.textContent)
        play = false
    }else{
        timer.startTimer(linkTime)
        play = true
    }

})

ipcRenderer.on('curso-trocado', (event,curso)=>{
    course.textContent = curso
    data.recuperarDados(curso)
        .then((dados)=>{
            linkTime.textContent = dados.tempoDeEstudo
        })
})

btnAddCourse.addEventListener('click', ()=>{
    let fieldCourse = document.querySelector('.campo-adicionar')
    let newCourse = fieldCourse.value 

    course.textContent = newCourse
    
})