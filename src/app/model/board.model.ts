import { CardModel } from './card.model';
import { GameModel } from './game.model';
import { Player } from './palyer.enum';

export class BoardModel{
    TOTAl_DECK_CARDS = 52;
    TOTAL_EXTRA_JOKER = 0;
    HAND_COUNT = 11;

    public opponnent1Count: number;
    public opponent2Count: number;
    public partnerCount: number;
    public maindDeckCount: number;
    public sideDeck1Avaible: boolean;
    public sideDeck2Avaible: boolean;
    public myHand: CardModel[];
    public myGame: GameModel;
    public opponentsGame: GameModel;
    public selectedPlayer: number;
    public discardStack: CardModel[];

    public constructor(){
        this.myGame = new GameModel();
        this.opponentsGame = new GameModel();
        this.discardStack = [];
        this.myHand = [];
        this.opponnent1Count = this.HAND_COUNT;
        this.opponent2Count = this.HAND_COUNT;
        this.partnerCount = this.HAND_COUNT;
        this.sideDeck1Avaible = true;
        this.sideDeck2Avaible = true;

        var totalCardsOutsideDeck = this.HAND_COUNT * 5;
        this.maindDeckCount = ((this.TOTAl_DECK_CARDS * 2) - totalCardsOutsideDeck) + this.TOTAL_EXTRA_JOKER;
    }

    drawCardForMe(card: CardModel){
        this.myHand.push(card);
        this.maindDeckCount--;
    }

    drawCardOthers(player: Player){
        this.addHandCard(player, 1);
        this.maindDeckCount--;
    }

    discardMe(card: CardModel){
        var myHandCard = this.myHand
            .find(c => c.value.importance == card.value.importance 
                    && c.suite.id == c.suite.id);
        if(!myHandCard)
            throw new Error('Card not found');

        const myHandCardIndex = this.myHand.indexOf(myHandCard);
        this.myHand.splice(myHandCardIndex,1);
        this.discardStack.push(myHandCard);
    }

    discardOthers(player: Player, card: CardModel){
        this.discardStack.push(card);
        this.addHandCard(player, -1);
    }

    private addHandCard(player: Player, cardCount: number){
        if(player == Player.OPPONENT1)
            this.opponnent1Count = this.opponnent1Count + cardCount;
        else if(player == Player.OPPONENT2)
            this.opponent2Count = this.opponent2Count + cardCount;
        else if(player == Player.PARTNER)
            this.partnerCount = this.partnerCount + cardCount;
    }
}