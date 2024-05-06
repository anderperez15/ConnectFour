import { Cordenada, BoxProps, BoxValue } from '../../interfaces/index.d';
import { overColumn, board, goPlayer } from '../../signals';
import { fillColumn } from '../../Utility';
import './index.css';

const isFill = (value:BoxValue):string => {
    if(value === 'X'){
        return 'blue';
    } else if (value === 'O'){
        return 'red';
    }
    return 'gray';
}

const play = (numberCol:number):void => {
    const newBoard = [...board.value]
    const cordenada:Cordenada|null = fillColumn(numberCol, newBoard);
    if(cordenada !== null){
        newBoard[cordenada.row][cordenada.col] = goPlayer.value
        board.value = newBoard;
        goPlayer.value = goPlayer.value === 'X' ? 'O' : 'X';
    }
}

export const Box = ({value, numberCol}:BoxProps) => {
    return (
        <td onClick={() => play(numberCol)} className={overColumn.value === numberCol ? 'over' : ''} onMouseEnter={() => overColumn.value = numberCol }>
            <div className={`box ${isFill(value)}`}/>
        </td>
    );
} 