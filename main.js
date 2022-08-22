const input = document.querySelector('input')
const paragraph = document.querySelector('p')
const container = document.querySelector('.container')
const arr = []
const div = document.createElement('div')
div.style.backgroundColor = 'red'

input.addEventListener('input', () => {
    container.style.gridTemplateColumns =  `repeat(16, 1fr)`
    container.style.gridTemplateRows =  `repeat(16, 1fr)`
    container.innerHTML = ''
    paragraph.innerText = input.value
    for (let i = 0; i < input.value; i++) {
        arr.push('<div></div>')  
        container.innerHTML += arr[i]
    }
})




console.log(arr)


// style.setProperty('grid-template-columns', 'repeat(' + variable + ', 1fr)');