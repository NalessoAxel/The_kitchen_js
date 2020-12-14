//Write a function that mimics the behaviour of a typewriter.

//Using setInterval display the word prout one character at a time (one letter per second). 
//Once the word is written on the screen clear the interval.
const body = document.querySelector('body')
const div = document.createElement('div')
const para = document.createElement('p')
para.textContent = 'prout'


body.appendChild(div)
div.appendChild(para)
div.appendChild(timerSeconde)
div.appendChild(timerMinute)

//Exercice 1
let prout = 'prout'
let text = 0 

const time = setInterval(function(){para.innerHTML = prout.substring(0,text++)}, 1000)

if(text === 5) {
  clearInterval(time)
}

//Exercice 2

//Exercie 3

const apple = document.createElement('div')

apple.className = 'apple'
apple.style.width = '200px'
