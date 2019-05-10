import { Injectable } from "@angular/core";
import { Board } from './board';
import { Game } from './game';
import { UndoHistory } from './undo-history';
import { Player } from './player';

@Injectable()
export class StateService{


    public board: Board;
    private undoHistory: UndoHistory<Board>;

    constructor(){
        this.initialize();
    }

    public initialize(){
        this.board = new Board();
       
        this.undoHistory = new UndoHistory<Board>(this.board);
    }

    public createMyGame():Game{
        this.board.myGame = new Game();
        return this.board.myGame;
    }
    public createOpponentGame():Game{
        this.board.opponentGame = new Game();
        return this.board.opponentGame;
    }
    public createMePlayer():Player{
        this.board.me = new Player();
        return this.board.me;
    }
    public createPartnerPlayer():Player{
        this.board.partner = new Player();
        return this.board.partner;
    }
    public createOponent1Player():Player{
        this.board.opponent1 = new Player();
        return this.board.opponent1;
    }
    public createOponent2Player():Player{
        this.board.opponent2 = new Player();
        return this.board.opponent2;
    }

    public registerState(){
        this.undoHistory.do(this.board);
    }
    public undo(){
        const previousState = this.undoHistory.undo();
        this.restoreState(previousState);    
    }

    private restoreState(previousState: Board) {
        this.board.maindDeckCount = previousState.maindDeckCount;
        this.board.discardStack = previousState.discardStack;
        this.board.sideDeck1Avaible = previousState.sideDeck1Avaible;
        this.board.sideDeck2Avaible = previousState.sideDeck2Avaible;
        this.board.myGame.redThrees = previousState.myGame.redThrees;
        this.board.myGame.sequences = previousState.myGame.sequences;
        this.board.opponentGame.redThrees = previousState.opponentGame.redThrees;
        this.board.opponentGame.sequences = previousState.opponentGame.sequences;
        this.board.me.hand = previousState.me.hand;
        this.board.partner.handCount = previousState.partner.handCount;
        this.board.opponent1.handCount = previousState.opponent1.handCount;
        this.board.opponent2.handCount = previousState.opponent2.handCount;
    }
}