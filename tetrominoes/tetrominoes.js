/* tetrominoes rotations */
const tetrominoI = [[0, width, width*2, width*3], [0, 1, 2, 3]];
const tetrominoL = [[0, 1, 2, width], [0, 1, width+1, (width*2)+1], [2, width, width+1, width+2], [0, width, width*2, (width*2)+1]];
const tetrominoS = [[1, 2, width, width+1], [0, width, width+1, width*2+1]];
const tetrominoZ = [[0, 1, width+1, width+2], [1, width, width+1, width*2]];
const tetrominoJ = [[0, 1, 2, width+2], [1, width+1, width*2, width*2+1], [0, width, width+1, width+2], [0, 1, width, width*2]];
const tetrominoO = [[0, 1, width, width+1]];
const tetrominoT = [[0, 1, 2, width+1], [1, width, width+1, width*2+1], [1, width, width+1, width+2], [0, width, width+1, width*2]];