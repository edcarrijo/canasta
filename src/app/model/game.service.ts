
import { Injectable } from '@angular/core';
import { Card } from './card';
import { CardSuit } from './card-suit';
import { Game } from './state/game';

@Injectable()
export class GameService{

    private CARD_SCORE = 10;
    private RED_THREE_SCORE = 100;
    private CANASTA_SCORE = 100;
    private CLEAN_CANASTA_SCORE = 200;
    private FINAL_GOOUT_SCORE = 100;

    constructor(public game: Game){
    }

    addRedThree(card: Card){
        if(!this.isRedThree(card)){
            throw new Error('The card is not a red three');
        }
        this.game.redThrees.push(card);
        this.game.currentScore = this.calculateTableScore();
    }

    private isRedThree(card: Card){
        return card.value.rank == 3 && (card.suit.id == CardSuit.HEART.id || card.suit.id == CardSuit.DIAMOND.id);
    }

    goOut():boolean{
        let endGame: boolean;
        if(this.game.goneOutOnce){
            this.game.currentScore += this.FINAL_GOOUT_SCORE;
            endGame = true;
        }
        else{
            this.game.goneOutOnce = true;
            endGame = false;
        } 
        return endGame;
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

    private calculateTableScore():number{
        let totalCards = 0;
        let canastaScore = 0;
        this.game.melds.forEach(meld => {
            totalCards += meld.cards.length;
            canastaScore += this.countCanastas(meld);
        });
        let redThreesScore = this.countRedThrees(canastaScore);
        
        return (totalCards * this.CARD_SCORE) + canastaScore + redThreesScore;
    }

    private countCanastas(meld: Meld):number {
        let canastaCount = 0;
        let cleanCanastaCount = 0;

        if (meld.cards.length >= 7) {
            let hasWildcard = meld.cards.some(card => card.value.rank == 2 || card.value.rank == 0);
            if (hasWildcard)
                canastaCount++;
            else
                cleanCanastaCount++;
        }
        return (canastaCount * this.CANASTA_SCORE) + (cleanCanastaCount * this.CLEAN_CANASTA_SCORE);
    }
    private countRedThrees(canastaScore: number):number{
        let redThreesScoreModifier = canastaScore > 0 ? 1 : -1;
        return (this.game.redThrees.length * this.RED_THREE_SCORE * redThreesScoreModifier) + 
               (this.game.redThrees.length * this.CARD_SCORE);
    }
}

export class Meld{
    public cards: Card[];

    public constructor(){
        this.cards = [];
    }
}