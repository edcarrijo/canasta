import { Card } from '../card';
import { GameService } from '../game.service';
import { StateService } from '../state/state.service';

export abstract class PlayerService{
    protected _game: GameService;

    constructor(game: GameService){
        this._game = game;
    }

    abstract getMustShowHandAction(): boolean;
    abstract drawCard();
    abstract discard(card: Card);
    abstract addRedThree(card: Card);
    abstract pickUpDiscardPile();
    abstract addMeld(cardList: Card[], meldIndex?: number, cardIndex?: number);
    abstract goOut();
}