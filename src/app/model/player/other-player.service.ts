import { PlayerService } from './player.service';
import { GameService } from '../game.service';
import { Card } from '../card';
import { Board } from '../state/board';
import { Player } from '../state/player';

export class OtherPlayerService extends PlayerService{
    constructor(game: GameService, private player: Player, private board: Board){
        super(game);
    }

    getMustShowHandAction(): boolean {
        return false;
    }

    drawCard(card: Card) {
        this.player.handCount++;
        this.board.maindDeckCount--;
    }    
    discard(card: Card) {
        this.player.handCount--;
        this.board.discardStack.push(card);
    }

    addRedThree(card: Card) {
        this.player.handCount--;
        this._game.addRedThree(card);
    }

    drawDiscard(){
        this.player.handCount += this.board.discardStack.length;
        this.board.discardStack = [];
    }

    addSequence(cardList: Card[]) {
        this._game.addSequence(cardList);
    }
}