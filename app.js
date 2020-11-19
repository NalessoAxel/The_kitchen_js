const div = document.createElement('div')
const select = document.createElement('select')
select.className = 'selection'
const option = document.createElement('option')
option.value = 'choose an option'
option.innerText = 'choose an option'
const option1 = document.createElement('option')
option1.value = 'important franchises'
option1.innerText = 'important franchises'
const option2 = document.createElement('option')
option2.value = 'normal franchises'
option2.innerText = 'normal franchises'

const ul = document.querySelector('ul')
const body = document.querySelector('body')

let children = ul.childNodes
let i = 0

body.appendChild(div)
/* div.appendChild(ul) */
div.appendChild(select)
select.appendChild(option)
select.appendChild(option1)
select.appendChild(option2)




/* div.insertBefore() */


for (let child of children) {
        if(child.textContent == 'Fast and Furious') {
            const firstChild = ul.firstElementChild
            ul.insertBefore(child, firstChild)
            child.className = 'important'
        } 
        child.addEventListener('click', function (){
            if(child.className == 'important') {
            alert('The most important franchise ever, the story of DOM(inic) Toretto\'s family. It\'s not about car, it\'s about family.')
        } else {
            alert(child.textContent)
        }
    })
    for (j=i+1; j<children.length; j++) {
        if(child.isEqualNode(children[j])) {
            ul.removeChild(children[j])
        }
        console.log(children[j])
    }
    i++;
    const li = document.querySelectorAll('li')
    select.addEventListener('change', (e) => {
        if(e.target.value === 'important franchises') {
            for(item of li) {
                if(item.className !== 'important') {
                    item.style.visibility = 'hidden'
                }else {
                    item.style.visibility = 'visible'
                }
            }
        } else if (e.target.value === 'normal franchises'){
            for(item of li) {
                if(item.className === 'important') {
                    item.style.visibility = 'hidden'
                }else {
                    item.style.visibility = 'visible'
                }
            }
        } else {
            for(item of li) {
                item.style.visibility = 'visible'
            }
        }
    })  

}

function shuffle(){
    const oldUl = document.querySelector('ul')
    const newUl = document.createElement('ul')
  
    newUl.appendChild(oldUl.children[0])
  
    for(let i=0;oldUl.children.length > 0;i++){
      const oldLi = oldUl.children
      const randomIndex = Math.floor(oldLi.length * Math.random())
      newUl.appendChild(oldLi[randomIndex])
    }
  
    document.body.removeChild(oldUl)
    document.body.appendChild(newUl)
  }
  document.body.addEventListener('keyup', function(e){
    if(e.key == 'r'){
    shuffle()
}
})






