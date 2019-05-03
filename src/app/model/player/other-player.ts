import { Player } from './player';
import { Board } from '../board';
import { Game } from '../game';
import { Card } from '../card';

export class OtherPlayer extends Player{

    constructor(board: Board, game: Game){
        super(board, game);
        this.handCount = board.HAND_COUNT;
    }

    drawCard(card: Card) {
        this.handCount++;
        this._board.maindDeckCount--;
    }    
    
    discard(card: Card) {
        this.handCount--;
        this._board.discardStack.push(card);
    }

    addRedThree(card: Card) {
        this.handCount--;
        this._game.addRedThree(card);
    }

    drawDiscard(){
        this.handCount += this._board.discardStack.length;
        this._board.discardStack = [];
    }

    addSequence(cardList: Card[]) {
        this._game.addSequence(cardList);
    }
}