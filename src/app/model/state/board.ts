import { Card } from '..';
import { Game } from './game';
import { Player } from './player';

export class Board{
    static TOTAl_DECK_CARDS = 52;
    static TOTAL_EXTRA_JOKER = 0;
    static HAND_COUNT = 11;

    public maindDeckCount: number;
    public sideDeck1Avaible: boolean;
    public sideDeck2Avaible: boolean;
    public discardStack: Card[];

    public myGame: Game;
    public opponentGame: Game;

    public me: Player;
    public partner: Player;
    public opponent1: Player;
    public opponent2: Player;

    constructor(){
        this.discardStack = [];
        this.sideDeck1Avaible = true;
        this.sideDeck2Avaible = true;

        var totalCardsOutsideDeck = Board.HAND_COUNT * 5;
        this.maindDeckCount = ((Board.TOTAl_DECK_CARDS * 2) - totalCardsOutsideDeck) + Board.TOTAL_EXTRA_JOKER;

        this.myGame = new Game();
        this.opponentGame = new Game();

        this.me = new Player();
        this.partner = new Player();
        this.opponent1 = new Player();
        this.opponent2 = new Player();
    }
}