const moment = require('moment')
let seconds

module.exports = {
    
    startTimer(element){
        let time = moment.duration(element.textContent)
        seconds = time.asSeconds()
         
        setInterval(()=>{
            seconds++
            element.textContent = this.timeFormat(seconds)
        },1000)
    },

    timeFormat(seconds){
        return moment().startOf('day').seconds(seconds).format("HH:mm:ss")
    },
    
    stopTimer(){
        
    }
}