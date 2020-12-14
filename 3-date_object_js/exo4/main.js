const body = document.querySelector('body')


const showTime = () => {
    let newDate = new Date()

    let timeNow = newDate.toLocaleTimeString()
    
    document.getElementById('displayClock').textContent = timeNow
    
}
const showDay = () => {
    let date =new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    // let dateToday = "We are the : " + day + "/" + month + " of " + year

    // const div = document.createElement('div')
    
    // div.textContent = dateToday
    
    
}
setInterval(showTime, 1000)
showDay()
const monthAndDay = [
    ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ['Jan','Feb','Mar','Avr','May','Jun','Jui','Aug','Sep','Oct','Nov','Dec',]]



for(let element of monthAndDay) {
    const divDate = document.createElement('div')

    
    divDate.innerHTML = monthAndDay[0][dateToday.getDay()]
    body.appendChild(div)
}