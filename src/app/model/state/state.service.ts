import { Injectable } from "@angular/core";
import { Table } from './table';
import { Game } from './game';
import { UndoHistory } from './undo-history';
import { Player } from './player';
import { Play } from './play';

@Injectable()
export class StateService{


    public play: Play;
    private undoHistory: UndoHistory<Play>;

    
    constructor(){
        this.play = new Play();
    }

    public initialize(numberOfJokers: number, numberOfPlayers: number){
        this.play.initialize(numberOfJokers, numberOfPlayers);
        this.undoHistory = new UndoHistory<Play>(this.play);
    }

    private createTable():Table{
        if(!this.play.table)
            this.play.table = new Table();
        return this.play.table;
    }
    public createMyGame():Game{
        this.createTable();
        this.play.table.myGame = new Game();
        return this.play.table.myGame;
    }
    public createOpponentGame():Game{
        this.createTable();
        this.play.table.opponentGame = new Game();
        return this.play.table.opponentGame;
    }
    public createMePlayer():Player{
        this.play.me = new Player();
        return this.play.me;
    }
    public createPartnerPlayer():Player{
        this.play.partner = new Player();
        return this.play.partner;
    }
    public createOponent1Player():Player{
        this.play.opponent1 = new Player();
        return this.play.opponent1;
    }
    public createOponent2Player():Player{
        this.play.opponent2 = new Player();
        return this.play.opponent2;
    }

    public registerState(){
        this.undoHistory.do(this.play);
    }
    public undo(){
        const previousState = this.undoHistory.undo();
        this.restoreState(previousState);    
    }

    private restoreState(previousState: Play) {
        this.play.table.maindDeckCount = previousState.table.maindDeckCount;
        this.play.table.discardPile = previousState.table.discardPile;

        this.play.table.myGame.redThrees = previousState.table.myGame.redThrees;
        this.play.table.myGame.melds = previousState.table.myGame.melds;
        this.play.table.myGame.currentScore = previousState.table.myGame.currentScore;
        this.play.table.myGame.goneOutOnce = previousState.table.myGame.goneOutOnce;

        this.play.table.opponentGame.redThrees = previousState.table.opponentGame.redThrees;
        this.play.table.opponentGame.melds = previousState.table.opponentGame.melds;
        this.play.table.opponentGame.currentScore = previousState.table.opponentGame.currentScore;
        this.play.table.opponentGame.goneOutOnce = previousState.table.opponentGame.goneOutOnce;

        this.play.me.hand = previousState.me.hand;
        this.play.partner.handCount = previousState.partner.handCount;
        this.play.opponent1.handCount = previousState.opponent1.handCount;
        this.play.opponent2.handCount = previousState.opponent2.handCount;
    }
}