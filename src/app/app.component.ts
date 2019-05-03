import { Component, OnInit, Inject } from '@angular/core';
import { Board } from './model/board';
import { Game } from './model/game';
import { Cardvalue } from './model/card-value';
import { CardSuite } from './model/card-suite';
import { Action } from './model/action';
import { Player as PlayerEnum } from './model/player/palyer.enum';
import { Card } from './model/card';
import { CardSelectionModel } from './card-selection/card-selection.model';
import { MePlayer } from './model/player/me-player';
import { Player } from './model/player/player';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Canasta';

  cardValueList: Cardvalue[];
  cardSuiteList: CardSuite[];
  actionList: string[];
  currentPlayer: PlayerEnum;
  lastDiscard: Card;

  myHandSelection: CardSelectionModel[] = [];

  action = {
    type: Action.DRAW,
    value: Cardvalue.ACE,
    suite: CardSuite.DIAMOND
  };

  constructor(protected board: Board, 
    protected me: MePlayer,
    @Inject('myGame') protected myGame: Game,
    @Inject('opponentGame') protected opponentGame: Game,
    @Inject('partner') protected partner: Player,
    @Inject('opponent1') protected opponent1: Player,
    @Inject('opponent2') protected opponent2: Player){ }

  ngOnInit() {
    this.cardSuiteList = CardSuite.getAll();
    this.cardValueList = Cardvalue.getAll();
    this.actionList = Action.getAll();
  }

  openMyActionChoice(){
    this.currentPlayer = PlayerEnum.ME;
    this.setHandSelection();
    $("#action").modal();
  }
  openPartnerChoice(){
    this.currentPlayer = PlayerEnum.PARTNER;
    $("#action").modal();
  }
  openOpponents1Choice(){
    this.currentPlayer = PlayerEnum.OPPONENT1;
    $("#action").modal();
  }
  openOpponents2Choice(){
    this.currentPlayer = PlayerEnum.OPPONENT2;
    $("#action").modal();
  }

  doActionAndClose(){
    this.doAction();
    $("#action").modal('hide');
  }

  doAction(){
    var cardActionList = this.getCardActionList();
   
    switch(this.action.type){
      case Action.DRAW:
        this.drawAction(this.getFirstSelectedCard(cardActionList));
        break;
      case Action.DISCARD:
        this.discardAction(this.getFirstSelectedCard(cardActionList));
        break;
      case Action.ADD_RED_THREE:
        this.addRedThreeAction(this.getFirstSelectedCard(cardActionList));
        break;
      case Action.DRAW_DISCARD:
        this.drawDiscardAction();
        break;
      case Action.SEQUENCE:
        this.beginSequenceAction(cardActionList);
        break;
      
    }

    this.setHandSelection();
  }


  private getCardActionList(): Card[]{
    var cardAction: Card[];
    if(this.mustShowMyHandAction()){
      const selectionCardList = this.myHandSelection.filter(selection => selection.selected);
      cardAction = selectionCardList.map(selection => selection.card);
    }
    else{
      cardAction = [<Card>{ suite: this.action.suite, value: this.action.value  }];
    }
    return cardAction;
  }

  private getFirstSelectedCard(cardSelectionList: Card[]):Card{
    if(cardSelectionList.length)
      return cardSelectionList[0];
    else
      return null;
  }

  private drawAction(cardAction: Card) {
    switch(this.currentPlayer){
      case PlayerEnum.ME:
        this.me.drawCard(cardAction);
        break;
      case PlayerEnum.OPPONENT1:
        this.opponent1.drawCard(cardAction);
        break;
      case PlayerEnum.PARTNER:
        this.partner.drawCard(cardAction);
        break;
      case PlayerEnum.OPPONENT2:
        this.opponent2.drawCard(cardAction);
        break;
    }
  }

  private discardAction(cardAction: Card) {
    if(!cardAction)
      return;

    switch(this.currentPlayer){
      case PlayerEnum.ME:
        this.me.discard(cardAction);
        break;
      case PlayerEnum.OPPONENT1:
        this.opponent1.discard(cardAction);
        break;
      case PlayerEnum.PARTNER:
        this.partner.discard(cardAction);
        break;
      case PlayerEnum.OPPONENT2:
        this.opponent2.discard(cardAction);
        break;
    }
        
    this.lastDiscard = this.board.discardStack[this.board.discardStack.length - 1];
  }

  private addRedThreeAction(cardAction: Card){
    if(!cardAction)
      return;

    switch(this.currentPlayer){
      case PlayerEnum.ME:
        this.me.addRedThree(cardAction);
        break;
      case PlayerEnum.OPPONENT1:
        this.opponent1.addRedThree(cardAction);
        break;
      case PlayerEnum.PARTNER:
        this.partner.addRedThree(cardAction);
        break;
      case PlayerEnum.OPPONENT2:
        this.opponent2.addRedThree(cardAction);
        break;
    }
  }

  private drawDiscardAction(){
    switch(this.currentPlayer){
      case PlayerEnum.ME:
        this.me.drawDiscard();
        break;
      case PlayerEnum.OPPONENT1:
        this.opponent1.drawDiscard();
        break;
      case PlayerEnum.PARTNER:
        this.partner.drawDiscard();
        break;
      case PlayerEnum.OPPONENT2:
        this.opponent2.drawDiscard();
        break;
    }

    this.lastDiscard = null;
  }

  private setHandSelection(){
    if(this.currentPlayer == PlayerEnum.ME){
      this.myHandSelection = this.me.hand.map(card => <CardSelectionModel>{ selected: false, card: card });
    }
  }

  mustShowMyHandAction():boolean{
    return (this.action.type == Action.SEQUENCE 
        || this.action.type == Action.DISCARD 
        || this.action.type == Action.ADD_RED_THREE)
        && this.currentPlayer == PlayerEnum.ME;
  }

  isCardSelectionNeeded():boolean{
    return this.action.type != Action.DRAW_DISCARD;
  }

  private beginSequenceAction(cardActionList: Card[]){
    switch(this.currentPlayer){
      case PlayerEnum.ME:
        this.me.addSequence(cardActionList);
        break;
      case PlayerEnum.OPPONENT1:
        this.opponent1.addSequence(cardActionList);
        break;
      case PlayerEnum.PARTNER:
        this.partner.addSequence(cardActionList);
        break;
      case PlayerEnum.OPPONENT2:
        this.opponent2.addSequence(cardActionList);
        break;
    }
  }
}
