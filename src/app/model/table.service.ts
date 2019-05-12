import { Injectable } from '@angular/core';
import { StateService } from './state/state.service';
import { Card } from './card';

@Injectable()
export class TableService{
    constructor(private state: StateService){
    }

    removeCardFromMaindDeck(){
        this.state.play.table.maindDeckCount--;
    }
    addCardToDiscardPile(card: Card){
        this.state.play.table.discardPile.push(card);
    }

    pickUpDiscardPile():Card[]{
        let pile = JSON.parse(JSON.stringify(this.state.play.table.discardPile)); 
        this.state.play.table.discardPile = [];
        return pile;
    }
}