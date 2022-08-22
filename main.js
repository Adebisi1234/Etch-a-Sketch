const input = document.querySelector('input')
const paragraph = document.querySelector('p')
const container = document.querySelector('.container')
const arr = []
const div = document.createElement('div')
div.style.backgroundColor = 'red'

input.addEventListener('input', () => {
    paragraph.innerText = input.value
})

for (let i = 0; i < input.value; i++) {
    arr.push('<div></div>')  
}
console.log(arr)
container.innerHTML = arr