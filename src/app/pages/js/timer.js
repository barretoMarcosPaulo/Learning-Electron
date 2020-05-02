const moment = require('moment')
let seconds
let timer

module.exports = {
    
    startTimer(element){
        let time = moment.duration(element.textContent)
        seconds = time.asSeconds()
        clearInterval(timer)

        timer = setInterval(()=>{
            seconds++
            element.textContent = this.timeFormat(seconds)
        },1000)
    },

    timeFormat(seconds){
        return moment().startOf('day').seconds(seconds).format("HH:mm:ss")
    },
    
    stopTimer(){
        clearInterval(timer)
    }
}