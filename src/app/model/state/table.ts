import { Card } from '..';
import { Game } from './game';
import { Player } from './player';
import { CardValue } from '../card-value';
import { CardSuit } from '../card-suit';

export class Table{
    static TOTAl_DECK_CARDS = 52;
    static HAND_COUNT = 11;
    static NUMBER_OF_DECKS = 2;
    static NUMBER_OF_SIDE_DECKS = 2;

    public maindDeckCount: number;
    public discardPile: Card[];
    public availableCards: Card[];

    public myGame: Game;
    public opponentGame: Game;

    constructor(){
        this.discardPile = [];
        this.availableCards = [];

        this.myGame = new Game();
        this.opponentGame = new Game();
    }

    initializeDeck(numberOfJokers: number, numberOfPlayers: number){

        numberOfJokers = parseInt(numberOfJokers.toString());
        numberOfPlayers = parseInt(numberOfPlayers.toString());

        var numberOfCardsInOthersPlayersHands = (numberOfPlayers-1) * Table.HAND_COUNT;
        var numberOfCardsInSideDeck = Table.HAND_COUNT * Table.NUMBER_OF_SIDE_DECKS;
        var totalCardsOutsideDeck = numberOfCardsInOthersPlayersHands + numberOfCardsInSideDeck;
        var totalCardsInDeck = (Table.TOTAl_DECK_CARDS * Table.NUMBER_OF_DECKS) - totalCardsOutsideDeck;

        this.maindDeckCount = totalCardsInDeck + numberOfJokers;

        var cardValueList = CardValue.getAll();
        var cardSuitList = CardSuit.getAll();
        var addedJokers = 0;

        for(let i = 1; i <= Table.NUMBER_OF_DECKS; i++) {
            cardValueList.forEach(cardValue => {
                cardSuitList.forEach(cardSuit => {
                    if(cardValue.rank === 0){
                        addedJokers++;
                        if(addedJokers > numberOfJokers){
                            return;
                        }
                    }
                    this.availableCards.push(new Card(cardSuit, cardValue));
                });
            });
        }
    }
}