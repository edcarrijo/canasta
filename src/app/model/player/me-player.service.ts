import { PlayerService } from './player.service';
import { Card } from '../card';
import { GameService } from '../game.service';
import { Injectable, Inject } from '@angular/core';
import { Player } from '../state/player';
import { Board } from '../state/board';

@Injectable()
export class MePlayerService extends PlayerService{
    constructor(@Inject('myGame') game: GameService, private player: Player, private board: Board){
        super(game);
    }

    getMustShowHandAction(): boolean {
        return true;
    }

    drawCard(card: Card) {
        this.player.hand.push(card);
        this.board.maindDeckCount--;
    }

    discard(card: Card) {
        var myHandCard = this.removeCardFromMyHand(card);
        this.board.discardStack.push(myHandCard);
    }
    addRedThree(card: Card) {
        this._game.addRedThree(card);
        this.removeCardFromMyHand(card);
    }
    drawDiscard(){
        this.player.hand.push(...this.board.discardStack);
        this.board.discardStack = [];
    }

    private removeCardFromMyHand(card: Card): Card{
        var myHandCard = this.findCardInMyHand(card);

        const myHandCardIndex = this.player.hand.indexOf(myHandCard);
        this.player.hand.splice(myHandCardIndex,1);
        return myHandCard;
    }

    private findCardInMyHand(card: Card) {
        var myHandCard = this.player.hand
            .find(c => c.value.importance == card.value.importance
                && c.suit.id == card.suit.id);
        if (!myHandCard)
            throw new Error('Card not found');
        return myHandCard;
    }

    addSequence(cardList: Card[], sequenceIndex?: number, cardIndex?: number) {
        this.validateSequence(cardList);
        this._game.addSequence(cardList, sequenceIndex, cardIndex);
        cardList.forEach(card => this.removeCardFromMyHand(card));
    }

    private validateSequence(cardList: Card[]) {
        if (!cardList.length)
            throw new Error('Sequence empty');
        cardList.forEach(card => this.findCardInMyHand(card));
    }
}