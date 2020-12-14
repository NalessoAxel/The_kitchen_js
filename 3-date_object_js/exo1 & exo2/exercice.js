cities = [{
        name: "Anchorage",
        offset: -9
    },
    {
        name: "Reykjavik",
        offset: 0
    }, {
        name: "Saint-Petersburg",
        offset: 3
    },
    {
        name: "Brussels",
        offset: 1
    }
]
let swaggy
let dateOffset


function screen() {
    document.body.innerHTML = ''
    const title = document.createElement('div')
    title.innerHTML = 'Current Date and Time in Differents City'
    title.style.margin = '20px 10px'
    title.style.fontSize = '30px'
    title.style.fontWeight = 'bold'
    document.body.appendChild(title)
    for (element of cities) {
        dateOffset = calcTime(element.offset)
        swaggy = document.createElement("div")
        swaggy.innerHTML = "The date and time in  " + element.name + " is " + dateOffset.toLocaleString()
        document.body.appendChild(swaggy)

    }

    function calcTime(offset) {
        d = new Date()
        utc = d.getTime() + (d.getTimezoneOffset() * 60 * 1000)
        nd = new Date(utc + (3600 * 1000 * offset))
        return nd;
    }
    let myBirthday = new Date('1991-03-06')
    let birthday = document.createElement('p')  
    let today = new Date()
    let dayPass = today - myBirthday
    birthday.innerHTML  = Math.floor(dayPass/(24*60*60*1000)) + ' day have passed since i was born'
    document.body.appendChild(birthday)

    
    
}
setInterval(screen, 1000);
