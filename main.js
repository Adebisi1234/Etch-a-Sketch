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
// let grey = 0.10
// let count = 0
// divContainer.forEach((divs) => {
    
//     divs.addEventListener('mouseover', changeBackgroundColor)

//     function changeBackgroundColor() {
//         console.log(grey)
//         // console.log(this.style.backgroundColor)
//         if(this.style.backgroundColor === `rgba(0, 0, 0, 0)`){
//             this.style.backgroundColor = `rgba(0, 0, 0, 0)` 
//         }
//         if(this.style.backgroundColor === `rgba(0, 0, 0, ${grey})`){
//             count += 0.20
//             console.log(`grey ${grey}`)
//             this.style.backgroundColor = `rgba(0, 0, 0, ${count})`
//             if(this.style.backgroundColor === `rgba(0, 0, 0, ${count})`){
//                 count += 0.20
//                 console.log(`grey ${grey}`)
//                 this.style.backgroundColor = `rgba(0, 0, 0, ${count})`
//             }
//         }else{
//             this.style.backgroundColor = `rgba(0, 0, 0, ${grey})`
//         }
//         // console.log(grey)
        
//     }

// })

let grey = 0.1
let change = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
divContainer.forEach(divs => {
    // divs.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    divs.addEventListener('mouseenter', changeBackgroundColor)
})

// function changeBackgroundColor() {
//     for (let i = 0; i < change.length; i++) {
//         console.log(this.style.backgroundColor)
//         console.log(change[i])
//         this.style.backgroundColor = `rgba( 0, 0, 0, ${change[1]})`
//         console.log(this.style.backgroundColor)
//         console.log(change[i])
//         if(this.style.backgroundColor === `rgba( 0, 0, 0, ${change[i]})`){
//             this.style.backgroundColor = `rgba( 0, 0, 0, ${change[(9)]}})`
//             console.log(this.style.backgroundColor)
//             console.log(change[i])

//         }//else{
//         //    this.style.backgroundColor = `rgba( 0, 0, 0, ${change[1]})`
//         //    console.log(change[i])
//         // }
//     }

// }

function changeBackgroundColor() {
    if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.1)'){
        console.log('fuck')
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    }else if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.2)'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    }else if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.3)'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    }else if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.4)'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }else if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.5)'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
    }else if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.6)'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
    }else if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.7)'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    }else if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.8)'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
    }else if(this.style.backgroundColor === 'rgba(0, 0, 0, 0.9)'){
        this.style.backgroundColor = 'rgba(0, 0, 0, 1)'
    }else if(this.style.backgroundColor === ''){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    }
}