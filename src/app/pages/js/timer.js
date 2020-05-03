const { ipcRenderer } = require('electron')
const moment = require('moment')
let seconds
let timerId
let time

module.exports = {
    
    startTimer(element){
        time = moment.duration(element.textContent)
        seconds = time.asSeconds()
        clearInterval(timerId)

        timerId = setInterval(()=>{
            seconds++
            element.textContent = this.timeFormat(seconds)
        },1000)
    },

    timeFormat(seconds){
        return moment().startOf('day').seconds(seconds).format("HH:mm:ss")
    },
    
    stopTimer(course){
        let timeLearning = this.timeFormat(seconds)
        ipcRenderer.send('stop-timer', course, timeLearning)
        clearInterval(timerId)

    }
}