import { Injectable } from '@angular/core';
import { StateService } from './state/state.service';
import { Card } from './card';
import { CardSuit } from './card-suit';
import { CardValue } from './card-value';
import { Table } from './state/table';

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

    getSideDeckCards(){
        var cards: Card[] =[];
        for(let i = 0; i < Table.HAND_COUNT; i++){
            cards.push(this.getRandomCard());
        }
        return cards;
    }

    getRandomCard(){
        const randomIndex = Math.floor(Math.random() * this.state.play.table.availableCards.length);
        const card = this.state.play.table.availableCards[randomIndex];
        this.state.play.table.availableCards.splice(randomIndex, 1);
        return card;
    }

    pickUpDiscardPile():Card[]{
        let pile = JSON.parse(JSON.stringify(this.state.play.table.discardPile)); 
        this.state.play.table.discardPile = [];
        return pile;
    }
}