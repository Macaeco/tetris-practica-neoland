const boardWidth = 10 // constante de columnas del tablero
const boardHeight = 20 // constante de filas del tablero
const main = document.createElement('main'); // contenedor main
// const ScoreDisplay = document.querySelector('#score')
// const startBtn= document.querySelector('#start-button')

const boardContainer = document.createElement('div') // constante contenedora de los divs del tablero
main.appendChild(boardContainer)
boardContainer.classList.add('boardContainer')

const displayContainer = document.createElement('div') //
main.appendChild(displayContainer)
displayContainer.classList.add('displayContainer')

function generateScoreBlocks(){
    const divScore = document.createElement('div')
    divScore.classList.add('divGrid')
    displayContainer.appendChild(divScore)
    const divScoreSon = document.createElement('div')
    divScoreSon.classList.add('divGridSon')
    divScore.appendChild(divScoreSon)

}




function generateBoardBlock() { //  funcion que crea cada div deltablero(celdas)
    const divGrid = document.createElement('div')
    divGrid.classList.add('divGrid')
    boardContainer.appendChild(divGrid)
    const divGridSon = document.createElement('div')
    divGridSon.classList.add('divGridSon')
    divGrid.appendChild(divGridSon)
}

function drawBoard(containerClass, width, height) {
    document.body.appendChild(containerClass)
    containerClass.classList.add('main')
    for (let i = 0; i < width * height; i++) {
        generateBoardBlock()
    }
}
drawBoard(main, 10, 20)



const grid = document.querySelector('boardContainer')
let squares = Array.from(document.querySelectorAll('.boardContainer > div')) //seleccionamos y metems en un array los 200 divs del tablero

const tetrominoI = [[0, boardWidth, boardWidth * 2, boardWidth * 3], [0, 1, 2, 3],[0, boardWidth, boardWidth * 2, boardWidth * 3], [0, 1, 2, 3]];
const tetrominoL = [[0, 1, 2, boardWidth], [0, 1, boardWidth + 1, boardWidth * 2 + 1], [2, boardWidth, boardWidth + 1, boardWidth + 2], [0, boardWidth, boardWidth * 2, boardWidth * 2 + 1]];
const tetrominoS = [[1, 2, boardWidth, boardWidth + 1], [0, boardWidth, boardWidth + 1, boardWidth * 2 + 1],[1, 2, boardWidth, boardWidth + 1], [0, boardWidth, boardWidth + 1, boardWidth * 2 + 1]];
const tetrominoZ = [[0, 1, boardWidth + 1, boardWidth + 2], [1, boardWidth, boardWidth + 1, boardWidth * 2],[0, 1, boardWidth + 1, boardWidth + 2], [1, boardWidth, boardWidth + 1, boardWidth * 2]];
const tetrominoJ = [[0, 1, 2, boardWidth + 2], [1, boardWidth + 1, boardWidth * 2, boardWidth * 2 + 1], [0, boardWidth, boardWidth + 1, boardWidth + 2], [0, 1, boardWidth, boardWidth * 2]];
const tetrominoO = [[0, 1, boardWidth, boardWidth + 1],[0, 1, boardWidth, boardWidth + 1],[0, 1, boardWidth, boardWidth + 1],[0, 1, boardWidth, boardWidth + 1]];
const tetrominoT = [[0, 1, 2, boardWidth + 1], [1, boardWidth, boardWidth + 1, boardWidth * 2 + 1], [1, boardWidth, boardWidth + 1, boardWidth + 2], [0, boardWidth, boardWidth + 1, boardWidth * 2]];

const theTetrominoes = [tetrominoI, tetrominoL, tetrominoS, tetrominoZ, tetrominoJ, tetrominoO, tetrominoT];

let currentPosition = 4;
let currentRotation = 0;
//genera numero random 
let random = Math.floor(Math.random() * 7)
let current = theTetrominoes[random][currentRotation];
//dibujar el tetromino
function draw() {
    current.forEach(e => {
        squares[currentPosition + e].classList.add('tetronimoDrawed')
    })
}
draw()

//borrar el tetromino

function undraw() {
    current.forEach(e => {
        squares[currentPosition + e].classList.remove('tetronimoDrawed')
    })
}

function generateTakenBlock() { //  funcion que crea los 10 divs taken  que sera la base-barrera del tablero 
    for (let i = 0; i < 10; i++) {
        const divTaken = document.createElement('div')
        divTaken.classList.add('taken')
        boardContainer.appendChild(divTaken)
    }
}
generateTakenBlock();

//timer => que se repita la funcion cada x tiempo

timerId = setInterval(moveDown, 1000)
function control(e) {
    if (e.keyCode === 37) {
        moveLeft()
    } else if (e.keyCode === 38) {
        rotate()
    } else if (e.keyCode === 39) {
        moveRight()
    } else if (e.keyCode === 40) {
        moveDown()
    }

}

document.addEventListener('keyup', control)


function moveDown() {
    undraw()
    currentPosition += boardWidth
    draw()
    freeze()
}


// console.log(current)

squares = Array.from(document.querySelectorAll('.boardContainer > div'));
// console.log(squares)

function freeze() {
    if (current.some(e => squares[currentPosition + e + boardWidth].classList.contains('taken'))) {
        current.forEach(e => squares[currentPosition + e].classList.add('taken'))
        random = Math.floor(Math.random() * 7)
        current = theTetrominoes[random][currentRotation]
        currentPosition = 4
        draw()
    }
}

function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % boardWidth === 0)
    if (!isAtLeftEdge) currentPosition -= 1
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        currentPosition += 1
    }
    draw()
}

function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % boardWidth === boardWidth - 1)
    if (!isAtRightEdge) currentPosition += 1
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        currentPosition -= 1
    }
    draw()
}


function rotate() {
    undraw()
    currentRotation++
    if (currentRotation === current.length) {
        currentRotation = 0
    }
    current = theTetrominoes[random][currentRotation]
    draw()
}








