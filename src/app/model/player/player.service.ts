import { Card } from '../card';
import { GameService } from '../game.service';
import { StateService } from '../state/state.service';

export abstract class PlayerService{
    protected _game: GameService;
    hand: Card[];

    constructor(game: GameService){
        this._game = game;
        this.hand = [];
    }

    abstract getMustShowHandAction(): boolean;
    abstract drawCard(card: Card);
    abstract discard(card: Card);
    abstract addRedThree(card: Card);
    abstract drawDiscard();
    abstract addSequence(cardList: Card[]);
}