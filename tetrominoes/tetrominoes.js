/* tetrominoes rotations */
const tetrominoI = [[0, width, width*2, width*3], [0, 1, 2, 3], [0, width, width*2, width*3], [0, 1, 2, 3]];
const tetrominoL = [[0, 1, 2, width], [0, 1, width+1, (width*2)+1], [2, width, width+1, width+2], [0, width, width*2, (width*2)+1]];
const tetrominoS = [[1, 2, width, width+1], [0, width, width+1, width*2+1]];
const tetrominoZ = [[0, 1, width+1, width+2], [1, width, width+1, width*2]];
const tetrominoJ = [[0, 1, 2, width+2], [1, width+1, width*2, width*2+1], [0, width, width+1, width+2], [0, 1, width, width*2]];
const tetrominoO = [[0, 1, width, width+1]];
const tetrominoT = [[0, 1, 2, width+1], [1, width, width+1, width*2+1], [1, width, width+1, width+2], [0, width, width+1, width*2]];

const tetrominoes = [];
tetrominoes.push(tetrominoI, tetrominoL, tetrominoS, tetrominoZ, tetrominoJ, tetrominoO, tetrominoT);

let currentTetromino

function generateRandomTetromino() {
    const randomIndex = Math.floor(Math.random()*7)
    const randomTetrominoInfo = {
        positionAtTetrominoeList: randomIndex,
        piece: tetrominoes[randomIndex],
        position: 0,
        rotation: 0
    }
    return randomTetrominoInfo
}

function drawTetrominoInMainBoard() {
    const tetromino = generateRandomTetromino();
    tetromino.piece[0].forEach(e => document.querySelector(`.cell${e}`).style.opacity = 1)
    currentTetromino = tetromino.piece[0]
}

function undrawTetrominoInMainBoard() {
    currentTetromino.forEach( e => document.querySelector(`.cell${e}`).style.opacity = 0.2)
}
