const body = document.querySelector('body')
const div = document.createElement('div')
const timerSeconde = document.createElement('p')
const timerMinute = document.createElement('p')

body.appendChild(div)
div.appendChild(timerSeconde)
div.appendChild(timerMinute)

let sec = 0
let min = 0
const timerSecond = setInterval(function() {
  sec ++ 
  timerSeconde.innerHTML = 'Seconde ' + sec
  if(sec == '60') {
    sec = 0
    min++
    timerMinute.innerHTML = min +  ' Minute have passed'
  }
  
}, 1000)
