
import { Injectable } from '@angular/core';
import { Card } from './card';
import { CardSuit } from './card-suit';

@Injectable()
export class Game{
    public redThrees: Card[];
    public sequences: Sequence[];

    public constructor(){
        this.redThrees = [];
        this.sequences = [];
    }

    addRedThree(card: Card){
        if(!this.isRedThree(card)){
            throw new Error('The card is not a red three');
        }
        this.redThrees.push(card);
    }

    private isRedThree(card: Card){
        return card.value.importance == 3 && (card.suit.id == CardSuit.HEART.id || card.suit.id == CardSuit.DIAMOND.id);
    }

    addSequence(cardList: Card[]){
        this.sequences.push(<Sequence>{ cards: cardList});
    }
}

export class Sequence{
    public cards: Card[];

    public constructor(){
        this.cards = [];
    }
}