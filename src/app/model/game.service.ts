
import { Injectable } from '@angular/core';
import { Card } from './card';
import { CardSuit } from './card-suit';
import { Game } from './state/game';

@Injectable()
export class GameService{

    private CARD_SCORE = 10;
    private CANASTA_SCORE = 100;
    private CLEAN_CANASTA_SCORE = 200;

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
        this.game.currentScore = this.calculateTableScore();
    }

    calculateTableScore():number{
        let totalCards = 0;
        let canastaCount = 0;
        let cleanCanastaCount = 0;
        this.game.melds.forEach(meld => {
            totalCards += meld.cards.length;
            if(meld.cards.length >= 7){
                let hasWildcard = meld.cards.some(card => card.value.rank == 2 || card.value.rank == 0);
                if(hasWildcard)
                    canastaCount++;
                else
                    cleanCanastaCount++;
            }
        });
        return (totalCards * this.CARD_SCORE) + 
            (canastaCount * this.CANASTA_SCORE) + 
            (cleanCanastaCount * this.CLEAN_CANASTA_SCORE);
    }
}

export class Meld{
    public cards: Card[];

    public constructor(){
        this.cards = [];
    }
}