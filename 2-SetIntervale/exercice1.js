const body = document.querySelector('body')
const div = document.createElement('div')
const para = document.createElement('p')
para.textContent = 'prout'

body.appendChild(div)
div.appendChild(para)



let prout = 'prout'
let text = 0

const time = setInterval(function () {
  para.innerHTML = prout.substring(0, text++)
}, 1000)

if (text === 4) {
  para.innerHTML = ' '
}