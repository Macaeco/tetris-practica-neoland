const main = document.createElement('main'); // contenedor main
// document.body.appendChild(main)
// main.classList.add('main')

const boardContainer = document.createElement('div') // constante contenedora de
main.appendChild(boardContainer)
boardContainer.classList.add('boardContainer')


const displayContainer = document.createElement('div') //
main.appendChild(displayContainer)
displayContainer.classList.add('displayContainer')

// function createGrid(n) {
//     for (let i = 0; i < n; i++) {
//         const divGrid = document.createElement('div')
//         divGrid.classList.add('divGrid')
//         boardContainer.appendChild(divGrid)
//         const divGridSon = document.createElement('div')
//         divGridSon.classList.add('divGridSon')
//         divGrid.appendChild(divGridSon)
//     }
// }

// createGrid(200)


let squares = [];

// console.log(squares)

// let currentPosition = 4;
// let currentRotation = 0;
let random = Math.floor(Math.random() * 7);



let current = tetrominoes[random][currentRotation];


// console.log(currentPosition);



// console.log(currentTetrominoe)

let squaresSelection = document.querySelectorAll('.boardContainer > div');





for (let i = 0; i < 10; i++) {
    const taken = document.createElement('div')
    taken.classList.add('taken')
    boardContainer.appendChild(taken)
};

// squaresSelection = document.querySelectorAll('.boardContainer > div')

// let squaresTaken = document.querySelectorAll('.taken .d');

// console.log(squaresTaken)

// timerId = setInterval(moveDown, 100)

function moveDown() {
    currentPosition += board_width;
    freeze();
}

function freeze() {
    if (current.some(index => squaresSelection[currentPosition + index + board_width].classList.contains('taken'))) {
        current.forEach(index => squaresSelection[currentPosition + index].classList.add('taken'))
        random = Math.floor(Math.random() * 7);
        current = tetrominoes[random][currentRotation];
        currentPosition = 4;
        drawTetrominoInMainBoard()
    }
}




// function drawTetrominoInMiniBoard(tetromino)

// function cleanMiniBoard()



