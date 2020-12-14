const balle = document.createElement('div')
balle.className = 'apple'

const button = document.createElement('button')
button.className = 'resetButton'
button.innerHTML = 'R'


document.body.appendChild(balle)
document.body.appendChild(button)

let posX = 0
let posY = 0
let speed = 1

function move(e) {
    if(e.key == 'ArrowLeft') { 
        posX -= 5
    }
    if(e.key == 'ArrowRight') {
        posX += 5
    }
    balle.style.left = posX + 'px'
    balle.style.right = posX + 'px'
}
document.body.addEventListener('keydown', move)

function down() {
    if (posY <= 600) {
        speed++
        posY += speed
        balle.style.top = posY + 'px'
        setTimeout(down, 100)
    }

}

const balleInterval = balle.addEventListener("click", down)

const reset = () => {
    posX = 0
    posY = 0
    balle.style.top = posY + 'px'
    balle.style.left = posX + 'px'

}

button.addEventListener('click', reset)