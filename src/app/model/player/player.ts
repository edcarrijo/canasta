import { Card } from '../card';
import { Board } from '../board';
import { Game } from '../game';

export abstract class Player{
    protected _board: Board;
    protected _game: Game;
    hand: Card[];
    handCount: number;

    constructor(board: Board, game: Game){
        this._board = board;
        this._game = game;
        this.hand = [];
    }

    abstract drawCard(card: Card);
    abstract discard(card: Card);
    abstract addRedThree(card: Card);
    abstract drawDiscard();
}