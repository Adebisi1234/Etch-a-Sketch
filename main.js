const input = document.querySelector('input')
const paragraph = document.querySelector('p')
const container = document.querySelector('.container')
const arr = []
const div = document.createElement('div')
const rainbowColorSelector = document.querySelector('#rainbow')

rainbowColorSelector.addEventListener('click', rainbow)



// Default paragraph content
paragraph.innerText = `${input.value}X${input.value}`


// Default grid row/column size
container.style.gridTemplateColumns =  `repeat(${input.value}, 1fr)`
container.style.gridTemplateRows =  `repeat(${input.value}, 1fr)`

// create inner divs for container
const divContainer = []
for(let i =0; i < Math.pow(input.value, 2); i++){
    const div = document.createElement('div')
    divContainer.push(div)
    container.append(div)
}

// added eventlistener to divs and change backgroundColor on mouseover
divContainer.forEach((divs) => divs.addEventListener('mouseover', changeBackgroundColor))

function changeBackgroundColor() {
    this.style.backgroundColor = 'black'
}


// Changing the grid row/column size
input.addEventListener('input', changeSize)

function changeSize() {
    paragraph.innerText = `${input.value}X${input.value}`
    container.style.gridTemplateColumns =  `repeat(${input.value}, 1fr)`
    container.style.gridTemplateRows =  `repeat(${input.value}, 1fr)`
    divContainer.forEach((divs) => divs.style.backgroundColor = 'white')
}


// Rainbow color
function rainbow() {
    divContainer.forEach((divs) => {
        let red = Math.round((Math.random()*255))
        let blue = Math.round((Math.random()*255))
        let green = Math.round((Math.random()*255))
        divs.addEventListener('mouseover', changeBackgroundColor)
    
        function changeBackgroundColor() {
            this.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
        }
    
    })
    
}
