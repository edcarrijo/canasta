import { Component, OnInit } from '@angular/core';
import { BoardModel } from './model/board.model';
import { GameModel } from './model/game.model';
import { Cardvalue } from './model/card-value.model';
import { CardSuite } from './model/card-suite.model';
import { Action } from './model/action.model';
import { Player } from './model/palyer.enum';
import { CardModel } from './model/card.model';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {


  title = 'Canasta';
  board: BoardModel;
  cardValueList: Cardvalue[];
  cardSuiteList: CardSuite[];
  actionList: string[];
  currentPlayer: Player;
  lastDiscard: CardModel;

  action = {
    type: Action.DRAW,
    value: Cardvalue.ACE,
    suite: CardSuite.DIAMOND
  };

  ngOnInit() {
    this.board = new BoardModel();
    this.board.selectedPlayer = 1;
    this.cardSuiteList = CardSuite.getAll();
    this.cardValueList = Cardvalue.getAll();
    this.actionList = Action.getAll();
  }

  openMyActionChoice(){
    this.currentPlayer = Player.ME;
    $("#action").modal();
  }
  openPartnerChoice(){
    this.currentPlayer = Player.PARTNER;
    $("#action").modal();
  }
  openOpponents1Choice(){
    this.currentPlayer = Player.OPPONENT1;
    $("#action").modal();
  }
  openOpponents2Choice(){
    this.currentPlayer = Player.OPPONENT2;
    $("#action").modal();
  }

  doAction(){
    const cardAction = <CardModel>{ suite: this.action.suite, value: this.action.value  };
    if(this.action.type == Action.DRAW){
      if(this.currentPlayer == Player.ME){
        this.board.drawCardForMe(cardAction);
      }else{
        this.board.drawCardOthers(this.currentPlayer);
      }
    }else if(this.action.type == Action.DISCARD){
      if(this.currentPlayer == Player.ME){
        this.board.discardMe(cardAction);
      }else{
        this.board.discardOthers(this.currentPlayer, cardAction);
      }
      
      this.lastDiscard = this.board.discardStack[this.board.discardStack.length - 1];
    }

    $("#action").modal('hide');
  }
  
}
