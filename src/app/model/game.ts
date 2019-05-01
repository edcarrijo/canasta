import { Card } from './card';
import { CardSuite } from './card-suite';

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
        return card.value.importance == 3 && (card.suite.id == CardSuite.HEART.id || card.suite.id == CardSuite.DIAMOND.id);
    }
}

export class Sequence{
    public cards: Card[];

    public constructor(){
        this.cards = [];
    }
}