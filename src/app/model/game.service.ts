
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

    addSequence(cardList: Card[], sequenceIndex?: number, cardIndex?: number){
        if(sequenceIndex != undefined && cardIndex != undefined){
            let sequence = JSON.parse(JSON.stringify(this.game.sequences[sequenceIndex]));
            sequence.cards.splice(cardIndex, 0, ...cardList);
            this.game.sequences[sequenceIndex] = sequence;
        }
        else{
            this.game.sequences.push(<Sequence>{ cards: cardList});
        }
    }
}

export class Sequence{
    public cards: Card[];

    public constructor(){
        this.cards = [];
    }
}