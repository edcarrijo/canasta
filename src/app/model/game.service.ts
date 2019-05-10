
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
        return card.value.importance == 3 && (card.suit.id == CardSuit.HEART.id || card.suit.id == CardSuit.DIAMOND.id);
    }

    addSequence(cardList: Card[]){
        this.game.sequences.push(<Sequence>{ cards: cardList});
    }
}

export class Sequence{
    public cards: Card[];

    public constructor(){
        this.cards = [];
    }
}