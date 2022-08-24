const input = document.querySelector('input')
const paragraph = document.querySelector('p')
const container = document.querySelector('.container')
const arr = []
const rainbowColorSelector = document.querySelector('#rainbow')

rainbowColorSelector.addEventListener('click', rainbow)



// Default paragraph content
paragraph.innerText = `${input.value}X${input.value}`


// Default grid row/column size
container.style.gridTemplateColumns =  `repeat(${input.value}, 1fr)`
container.style.gridTemplateRows =  `repeat(${input.value}, 1fr)`

// create inner divs for container
const divContainer = []
for(let i = 0; i < Math.pow(input.value, 2); i++){
    const div = document.createElement('div')
    divContainer.push(div)
    container.append(div)
}

// added eventlistener to divs and change backgroundColor on mouseover
// divContainer.forEach((divs) => divs.addEventListener('mouseover', changeBackgroundColor))

// function changeBackgroundColor() {
//     this.style.backgroundColor = 'black'
// }


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
        // let red = Math.round((Math.random()*255))
        // let blue = Math.round((Math.random()*255))
        // let green = Math.round((Math.random()*255))
        divs.addEventListener('mouseenter', changeBackgroundColor)
    
        function changeBackgroundColor() {
            let red = Math.round((Math.random()*255))
            let blue = Math.round((Math.random()*255))
            let green = Math.round((Math.random()*255))
            this.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
            this.addEventListener('mouseover', changeBackgroundColor)
        }
    
    })
    
}


// GreyScale

function greyScale() {
    let change = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    divContainer.forEach(divs => {
        divs.addEventListener('mouseenter', changeBackgroundColor)
    })
    
    
    function changeBackgroundColor() {
        if(this.style.backgroundColor === ''){
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
        }
        for(let i = 0; i < change.length; i++){
            if(this.style.backgroundColor === `rgba(0, 0, 0, ${change[i]})`){
                this.style.backgroundColor = `rgba(0, 0, 0, ${change[i+1]})`
                break
            }
        }
    }
}