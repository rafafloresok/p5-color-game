let colors,
    cuadrados = document.querySelectorAll('.square'),
    pickedColor,
    colorDisplay = document.querySelector('#colorDisplay'),
    clickedColor,
    message = document.querySelector('#message'),
    titulo = document.querySelector('#titulo'),
    reset = document.querySelector('#reset'),
    facil = document.querySelector('#facil'),
    dificil = document.querySelector('#dificil'),
    dificultad = document.querySelectorAll('.dificultad')
    numberOfSquares = 6;

function cangeColors(color) {
    cuadrados.forEach(elemento => elemento.style.backgroundColor = color)
}

function pickColor(arr) {
    return (arr[(Math.round(Math.random()*(arr.length-1)))])
}

function randomColor() {
    return (`rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`)
}

function generateRandomColors(num) {
    let resultado = []
    for (let index = 0; index < num; index++) {
        resultado[index] = randomColor()
    }
    return resultado
}

function resetear() {
    message.style.left = '43%'
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor(colors)
    colorDisplay.textContent = pickedColor
    reset.textContent = 'New colors'
    message.textContent = ''
    titulo.style.color = 'white'
    for (let index = 0; index < cuadrados.length; index++) {
        if (colors[index]!==undefined) {
            cuadrados[index].style.backgroundColor = colors[index]
            cuadrados[index].style.display = 'block'
        } else {
            cuadrados[index].style.display = 'none'
        }
        
    }
}

function setearReset() {
    reset.addEventListener('click', function () {
        resetear()
    })
}

function setearCuadrados() {
    for (let index = 0; index < cuadrados.length; index++) {
        cuadrados[index].addEventListener('click', function () {
            clickedColor = this.style.backgroundColor
            if (clickedColor == pickedColor) {
               message.textContent = 'Yes!'
               message.style.left = '47%'
               titulo.style.color = pickedColor
               document.body.style.backgroundColor = pickedColor
               cangeColors(pickedColor)
               reset.textContent = 'Play again?'
            } else {
                cuadrados[index].style.backgroundColor = '#232323'
                message.textContent = 'Try again'
            }
        })
    } 
}

function setearDificultad() {
    for (let index = 0; index < dificultad.length; index++) {
        dificultad[index].addEventListener('click', function () {
            this.classList.add("selected")
            if (this.textContent === 'Hard') {
                facil.classList.remove('selected')
                numberOfSquares=6
            } else {
                dificil.classList.remove('selected')
                numberOfSquares=3 
            }
            resetear()
        })
    }
}

function init() {
    resetear()
    setearReset()
    setearCuadrados()
    setearDificultad()
}

init()