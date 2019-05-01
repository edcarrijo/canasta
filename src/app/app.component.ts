import { Component, OnInit } from '@angular/core';
import { Board } from './model/board';
import { Game } from './model/game';
import { Cardvalue } from './model/card-value';
import { CardSuite } from './model/card-suite';
import { Action } from './model/action';
import { Player } from './model/player/palyer.enum';
import { Card } from './model/card';
import { MePlayer } from './model/player/me-player';
import { OtherPlayer } from './model/player/other-player';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  title = 'Canasta';
  board: Board;

  cardValueList: Cardvalue[];
  cardSuiteList: CardSuite[];
  actionList: string[];
  currentPlayer: Player;
  lastDiscard: Card;

  me: MePlayer;
  partner: OtherPlayer;
  opponent1: OtherPlayer;
  opponent2: OtherPlayer;

  myGame: Game;
  opponentGame: Game;

  action = {
    type: Action.DRAW,
    value: Cardvalue.ACE,
    suite: CardSuite.DIAMOND
  };

  ngOnInit() {
    this.board = new Board();
    this.myGame = new Game();
    this.me = new MePlayer(this.board, this.myGame);
    this.partner = new OtherPlayer(this.board, this.myGame);

    this.opponentGame = new Game();
    this.opponent1 = new OtherPlayer(this.board, this.opponentGame);
    this.opponent2 = new OtherPlayer(this.board, this.opponentGame);

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
    const cardAction = <Card>{ suite: this.action.suite, value: this.action.value  };

    switch(this.action.type){
      case Action.DRAW:
        this.drawAction(cardAction);
        break;
      case Action.DISCARD:
        this.discardAction(cardAction);
        break;
      case Action.ADD_RED_THREE:
        this.addRedThreeAction(cardAction);
        break;
      case Action.DRAW_DISCARD:
        this.drawDiscardAction();
        break;
    }
  }

  doActionAndClose(){
    this.doAction();
    $("#action").modal('hide');
  }

  private drawAction(cardAction: Card) {
    switch(this.currentPlayer){
      case Player.ME:
        this.me.drawCard(cardAction);
        break;
      case Player.OPPONENT1:
        this.opponent1.drawCard(cardAction);
        break;
      case Player.PARTNER:
        this.partner.drawCard(cardAction);
        break;
      case Player.OPPONENT2:
        this.opponent2.drawCard(cardAction);
        break;
    }
  }

  private discardAction(cardAction: Card) {
    switch(this.currentPlayer){
      case Player.ME:
        this.me.discard(cardAction);
        break;
      case Player.OPPONENT1:
        this.opponent1.discard(cardAction);
        break;
      case Player.PARTNER:
        this.partner.discard(cardAction);
        break;
      case Player.OPPONENT2:
        this.opponent2.discard(cardAction);
        break;
    }
        
    this.lastDiscard = this.board.discardStack[this.board.discardStack.length - 1];
  }

  private addRedThreeAction(cardAction: Card){
    switch(this.currentPlayer){
      case Player.ME:
        this.me.addRedThree(cardAction);
        break;
      case Player.OPPONENT1:
        this.opponent1.addRedThree(cardAction);
        break;
      case Player.PARTNER:
        this.partner.addRedThree(cardAction);
        break;
      case Player.OPPONENT2:
        this.opponent2.addRedThree(cardAction);
        break;
    }
  }

  private drawDiscardAction(){
    switch(this.currentPlayer){
      case Player.ME:
        this.me.drawDiscard();
        break;
      case Player.OPPONENT1:
        this.opponent1.drawDiscard();
        break;
      case Player.PARTNER:
        this.partner.drawDiscard();
        break;
      case Player.OPPONENT2:
        this.opponent2.drawDiscard();
        break;
    }

    this.lastDiscard = null;
  }
}
