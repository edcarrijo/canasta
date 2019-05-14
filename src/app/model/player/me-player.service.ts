import { PlayerService } from './player.service';
import { Card } from '../card';
import { GameService } from '../game.service';
import { Injectable, Inject } from '@angular/core';
import { Player } from '../state/player';
import { Table } from '../state/table';
import { TableService } from '../table.service';

@Injectable()
export class MePlayerService extends PlayerService{
    constructor(private tableService: TableService, @Inject('myGame') game: GameService, private player: Player){
        super(game);
    }

    getMustShowHandAction(): boolean {
        return true;
    }

    drawCard(card: Card) {
        this.tableService.removeCardFromMaindDeck();
        this.player.hand.push(card);
    }

    discard(card: Card) {
        var myHandCard = this.removeCardFromMyHand(card);
        this.tableService.addCardToDiscardPile(myHandCard);
    }
    addRedThree(card: Card) {
        this._game.addRedThree(card);
        this.removeCardFromMyHand(card);
    }
    pickUpDiscardPile(){
        this.player.hand.push(...this.tableService.pickUpDiscardPile());
    }

    private removeCardFromMyHand(card: Card): Card{
        var myHandCard = this.findCardInMyHand(card);

        const myHandCardIndex = this.player.hand.indexOf(myHandCard);
        this.player.hand.splice(myHandCardIndex,1);
        return myHandCard;
    }

    private findCardInMyHand(card: Card) {
        var myHandCard = this.player.hand
            .find(c => c.value.rank == card.value.rank
                && c.suit.id == card.suit.id);
        if (!myHandCard)
            throw new Error('Card not found');
        return myHandCard;
    }

    addMeld(cardList: Card[], meldIndex?: number, cardIndex?: number) {
        this.validateMeld(cardList);
        this._game.addMeld(cardList, meldIndex, cardIndex);
        cardList.forEach(card => this.removeCardFromMyHand(card));
    }

    private validateMeld(cardList: Card[]) {
        if (!cardList.length)
            throw new Error('Meld empty');
        cardList.forEach(card => this.findCardInMyHand(card));
    }

    goOut(){
        if(this.player.hand.length != 0)
            throw new Error('You cannot go out with cards in your hand');
        this._game.goOut();
    }
}