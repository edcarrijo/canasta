import { Player } from './player';
import { Card } from '../card';
import { Board } from '../board';
import { Game } from '../game';

export class MePlayer extends Player{
    constructor(board: Board, game: Game){
        super(board, game);
    }

    drawCard(card: Card) {
        this.hand.push(card);
        this._board.maindDeckCount--;
    }
    discard(card: Card) {
        var myHandCard = this.removeCardFromMyHand(card);
        this._board.discardStack.push(myHandCard);
    }
    addRedThree(card: Card) {
        this._game.addRedThree(card);
        this.removeCardFromMyHand(card);
    }
    drawDiscard(){
        this.hand.push(...this._board.discardStack);
        this._board.discardStack = [];
    }

    private removeCardFromMyHand(card: Card): Card{
        var myHandCard = this.hand
            .find(c => c.value.importance == card.value.importance 
                    && c.suite.id == card.suite.id);
        if(!myHandCard)
            throw new Error('Card not found');

        const myHandCardIndex = this.hand.indexOf(myHandCard);
        this.hand.splice(myHandCardIndex,1);
        return myHandCard;
    }

    
}