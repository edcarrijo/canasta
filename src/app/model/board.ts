import { Card } from './card';
import { Game } from './game';
import { Player } from './player/palyer.enum';
import { CardSuite } from './card-suite';

export class Board{
    TOTAl_DECK_CARDS = 52;
    TOTAL_EXTRA_JOKER = 0;
    HAND_COUNT = 11;


    public maindDeckCount: number;
    public sideDeck1Avaible: boolean;
    public sideDeck2Avaible: boolean;
    public discardStack: Card[];

    public constructor(){
        
        this.discardStack = [];
        this.sideDeck1Avaible = true;
        this.sideDeck2Avaible = true;

        var totalCardsOutsideDeck = this.HAND_COUNT * 5;
        this.maindDeckCount = ((this.TOTAl_DECK_CARDS * 2) - totalCardsOutsideDeck) + this.TOTAL_EXTRA_JOKER;
    }

}