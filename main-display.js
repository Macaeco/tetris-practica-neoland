


const tetrisGridContainer = document.querySelector('.tetris__grid')
const scoreGridContainer = document.querySelector('.score__grid')



function drawBoard(clase, width, heigth,gridcontainer) { 
    for( let i=0; i<width*heigth; i++) {
        const cell = document.createElement('div');
        cell.classList.add(clase);
        gridcontainer.appendChild(cell)
    };
  
}

drawBoard('cell',10,20,tetrisGridContainer);
drawBoard('score',4,4,scoreGridContainer);



