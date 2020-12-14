const body = document.querySelector('body')

const input = document.createElement('input')

input.type = 'date'

body.appendChild(input)

const div = document.createElement('div')

let dateNow = new Date()

let manyHours = 1000 * 60 * 60 * 8000

let turfu = new Date(dateNow.getTime() + manyHours)

console.log(turfu);


// const nombreJours = (e) => {
//     let now = new Date()

//     let date1 = new Date(e.target.value)

//     let dateDiff

//     if(now.getTime() >= date1.getTime) {
//         dateDiff = Math.floor((now.getTime() - date1.getTime())/1000)
//     } else {
//         dateDiff = Math.floor((date1.getTime() - now.getTime())/1000)
//     }
//     return "There are " + dateDiff + "days between " + date1 +  " and " + now

    
// }
// date1.addEventListener('change', (e) =>{
//     const result = document.createElement('div')
//     body.appendChild(result)
//     result.textContent = nombreJours(e)
//     console.log(result);
// })
