const input = document.querySelector('input')
const paragraph = document.querySelector('p')
const container = document.querySelector('.container')
const arr = []
const div = document.createElement('div')

input.addEventListener('input', changeSize)

function changeSize() {
    paragraph.innerText = input.valueAsNumber
    container.style.gridTemplateColumns =  `repeat(${input.value}, 1fr)`
    container.style.gridTemplateRows =  `repeat(${input.value}, 1fr)`
    divContainer.forEach((divs) => divs.style.backgroundColor = 'white')
}

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

paragraph.innerText = input.value

input.addEventListener('input', main)


































// div.style.backgroundColor = 'red'

// input.addEventListener('input', () => {
//     container.style.gridTemplateColumns =  `repeat(${input.value}, 1fr)`
//     container.style.gridTemplateRows =  `repeat(${input.value}, 1fr)`
//     container.innerHTML = ''
//     paragraph.innerText = input.value
//     for (let i = 0; i < Math.pow(input.value, 2); i++) {
//         arr.push('<div></div>')  
//         container.innerHTML += arr[i]
//     }
// })




// console.log(arr)


// style.setProperty('grid-template-columns', 'repeat(' + variable + ', 1fr)');