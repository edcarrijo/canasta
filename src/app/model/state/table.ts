import { Card } from '..';
import { Game } from './game';
import { Player } from './player';

export class Table{
    static TOTAl_DECK_CARDS = 52;
    static TOTAL_EXTRA_JOKER = 0;
    static HAND_COUNT = 11;

    public maindDeckCount: number;
    public sideDeck1Avaible: boolean;
    public sideDeck2Avaible: boolean;
    public discardPile: Card[];

    public myGame: Game;
    public opponentGame: Game;

    constructor(){
        this.discardPile = [];
        this.sideDeck1Avaible = true;
        this.sideDeck2Avaible = true;

        var totalCardsOutsideDeck = Table.HAND_COUNT * 5;
        this.maindDeckCount = ((Table.TOTAl_DECK_CARDS * 2) - totalCardsOutsideDeck) + Table.TOTAL_EXTRA_JOKER;

        this.myGame = new Game();
        this.opponentGame = new Game();
    }
}