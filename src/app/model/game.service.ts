
import { Injectable } from '@angular/core';
import { Card } from './card';
import { CardSuit } from './card-suit';
import { Game } from './state/game';

@Injectable()
export class GameService{

    constructor(public game: Game){
    }

    addRedThree(card: Card){
        if(!this.isRedThree(card)){
            throw new Error('The card is not a red three');
        }
        this.game.redThrees.push(card);
    }

    private isRedThree(card: Card){
        return card.value.rank == 3 && (card.suit.id == CardSuit.HEART.id || card.suit.id == CardSuit.DIAMOND.id);
    }

    addMeld(cardList: Card[], meldIndex?: number, cardIndex?: number){
        if(meldIndex != undefined && cardIndex != undefined){
            let meld = JSON.parse(JSON.stringify(this.game.melds[meldIndex]));
            meld.cards.splice(cardIndex, 0, ...cardList);
            this.game.melds[meldIndex] = meld;
        }
        else{
            this.game.melds.push(<Meld>{ cards: cardList});
        }
    }
}

export class Meld{
    public cards: Card[];

    public constructor(){
        this.cards = [];
    }
}