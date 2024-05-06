import { signal } from "@preact/signals-react";
import { OverColumn, Board, Player } from "../interfaces/index.d";
import { createBoard } from "../Utility";

export const overColumn = signal<OverColumn>(null);

export const board = signal<Board>(createBoard(9,10));

export const goPlayer = signal<Player>('X');