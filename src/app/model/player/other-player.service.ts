import { PlayerService } from './player.service';
import { GameService } from '../game.service';
import { Card } from '../card';
import { Table } from '../state/table';
import { Player } from '../state/player';
import { TableService } from '../table.service';

export class OtherPlayerService extends PlayerService{
    constructor(private tableService: TableService, game: GameService, private player: Player){
        super(game);
    }

    getMustShowHandAction(): boolean {
        return false;
    }

    drawCard() {
        this.player.handCount++;
        this.tableService.removeCardFromMaindDeck();
    }    
    discard(card: Card) {
        this.player.handCount--;
        this.tableService.addCardToDiscardPile(card);
    }

    addRedThree(card: Card) {
        this.player.handCount--;
        this._game.addRedThree(card);
    }

    pickUpDiscardPile(){
        this.player.handCount += this.tableService.pickUpDiscardPile().length;
    }

    addMeld(cardList: Card[], meldIndex?: number, cardIndex?: number) {
        this._game.addMeld(cardList, meldIndex, cardIndex);
        this.player.handCount--;
    }

    goOut(){
        if(this.player.handCount != 0)
            throw new Error('You cannot go out with cards in your hand');
        var endGame = this._game.goOut();
        if(!endGame)
            this.player.handCount = Player.HAND_COUNT;
    }
}