const input = document.querySelector('input')
const paragraph = document.querySelector('p')
const container = document.querySelector('.container')
const arr = []
const div = document.createElement('div')

container.style.gridTemplateColumns =  `repeat(${input.value}, 1fr)`
container.style.gridTemplateRows =  `repeat(${input.value}, 1fr)`

const divContainer = []
for(let i =0; i < Math.pow(input.value, 2); i++){
    const div = document.createElement('div')
    divContainer.push(div)
    container.append(div)
}

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