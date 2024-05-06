export type Player = 'X' | 'O';
export type BoxValue = Player | null;
export type Board = Array<Array<BoxValue>>;
export type OverColumn = number | null;

export interface Cordenada {
    col:number,
    row:number
}

export interface BoxProps {
    value: BoxValue,
    numberCol: number
}

export interface TableProps {
	Board: Board
}