import { CardModel } from './card.model';
import { GameModel } from './game.model';

export class BoardModel{
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

    public constructor(){
        this.myGame = new GameModel();
        this.opponentsGame = new GameModel();
        this.myHand = [];
    }
}