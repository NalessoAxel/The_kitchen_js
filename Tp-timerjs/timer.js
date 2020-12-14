const main = document.createElement('main')
document.body.appendChild(main)

const timer = document.createElement('div')
timer.className = 'timer'

main.appendChild(timer)


const button = document.createElement('button')
main.appendChild(button)
const timeRec = document.createElement('button')
main.appendChild(timeRec)
const buttonClear = document.createElement('button')
main.appendChild(buttonClear)
buttonClear.innerHTML = 'Reset'


timeRec.innerHTML = 'Record time'
button.innerHTML = 'start'
timer.innerHTML = '0'
let x = 0
let start = false

const timing = (e) => {
    if (e != undefined) {
        if (start === true) {
            start = false
            button.innerHTML = 'restart'
        } else {
            start = true
            button.innerHTML = 'stop'
        }
    }
    if (start === true) {
        x += 0.1
        timer.innerHTML = x.toFixed(1)
        setTimeout(timing, 100)

    } else {
        timer.innerHTML = x.toFixed(1)
    }

}

const timeRecs = (click) => {
    const newDiv = document.createElement('div')
    newDiv.className = 'recordTime'
    main.appendChild(newDiv)
    newDiv.innerHTML = x.toFixed(1)
}
const resets = (e) => {
    start = false
    timer.innerHTML = 0
    x = 0
    button.innerHTML = 'start'

}
button.addEventListener('click', timing)
timeRec.addEventListener('click', timeRecs)
buttonClear.addEventListener('click', resets)