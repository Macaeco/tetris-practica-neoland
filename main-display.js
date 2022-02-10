


const tetrisGridContainer = document.querySelector('.tetris__grid')
const scoreGridContainer = document.querySelector('.score__grid')

const board_width = 10
const board_height = 20

const miniboard_width = 4
const miniboard_height = 4


function drawBoard(clase, width, heigth,gridcontainer) { 
    for( let i=0; i<width*heigth; i++) {
        const cell = document.createElement('div');
        cell.classList.add(clase);
        gridcontainer.appendChild(cell)
        const cellChild = document.createElement('div');
        cellChild.classList.add(`${clase}-child`);
        cell.appendChild(cellChild);
        




    };

}

drawBoard('cell',board_width,board_height,tetrisGridContainer);

drawBoard('score',miniboard_width ,miniboard_height,scoreGridContainer);



