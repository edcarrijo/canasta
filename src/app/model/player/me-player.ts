import { Player } from './player';
import { Card } from '../card';
import { Board } from '../board';
import { Game } from '../game';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class MePlayer extends Player{

    constructor(board: Board, @Inject('myGame') game: Game){
        super(board, game);
    }

    getMustShowHandAction(): boolean {
        return true;
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
        var myHandCard = this.findCardInMyHand(card);

        const myHandCardIndex = this.hand.indexOf(myHandCard);
        this.hand.splice(myHandCardIndex,1);
        return myHandCard;
    }

    private findCardInMyHand(card: Card) {
        var myHandCard = this.hand
            .find(c => c.value.importance == card.value.importance
                && c.suit.id == card.suit.id);
        if (!myHandCard)
            throw new Error('Card not found');
        return myHandCard;
    }

    addSequence(cardList: Card[]) {
        this.validateSequence(cardList);
        this._game.addSequence(cardList);
        cardList.forEach(card => this.removeCardFromMyHand(card));
    }

    private validateSequence(cardList: Card[]) {
        if (!cardList.length)
            throw new Error('Sequence empty');
        cardList.forEach(card => this.findCardInMyHand(card));
    }
}