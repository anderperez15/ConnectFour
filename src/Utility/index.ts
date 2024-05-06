import { Board, Cordenada } from '../interfaces/index.d';

export const createBoard = (numRow:number, numCol:number):Board => {
    return Array.from({ length:numRow }, () => (
        Array.from({ length:numCol }, () => null)
    ));
}

export const fillColumn = (col:number, board:Board):Cordenada|null => {
    const { length } = board;
    const reverseBoard:Board = [...board].reverse();
    const numRow:number = reverseBoard.findIndex(row => row[col] === null);
    if(numRow === -1){
        return null;
    }
    return {
        col,
        row: length - numRow - 1,
    }
}