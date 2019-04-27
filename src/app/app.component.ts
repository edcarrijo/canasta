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
  TOTAl_DECK_CARDS = 52;
  TOTAL_EXTRA_JOKER = 0;
  HAND_COUNT = 11;

  title = 'Canasta';
  board: BoardModel;
  cardValueList: Cardvalue[];
  cardSuiteList: CardSuite[];
  actionList: string[];
  currentPlayer: Player;

  action = {
    type: Action.DRAW,
    value: Cardvalue.ACE,
    suite: CardSuite.DIAMOND
  };

  ngOnInit() {
    this.board = new BoardModel();
    this.board.opponnent1Count = this.HAND_COUNT;
    this.board.opponent2Count = this.HAND_COUNT;
    this.board.partnerCount = this.HAND_COUNT;
    this.board.sideDeck1Avaible = true;
    this.board.sideDeck2Avaible = true;
    this.board.myGame = new GameModel();
    this.board.opponentsGame = new GameModel();
    this.board.selectedPlayer = 1;

    var totalCardsOutsideDeck = this.HAND_COUNT * 5;
    this.board.maindDeckCount = ((this.TOTAl_DECK_CARDS * 2) - totalCardsOutsideDeck) + this.TOTAL_EXTRA_JOKER;

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
    if(this.action.type == Action.DRAW){
      if(this.currentPlayer == Player.ME){
        this.board.myHand.push(<CardModel>{ suite: this.action.suite, value: this.action.value  });
        this.board.maindDeckCount = this.board.maindDeckCount - 1;
      }
    }
  }
  
}
