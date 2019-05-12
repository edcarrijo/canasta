import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService, Action, CardValue, CardSuit, Card } from '../model';
import { CardSelectionModel } from '../card-selection/card-selection.model';

declare var $: any;

@Component({
  selector: 'canasta-player-action',
  templateUrl: './player-action.component.html'
})
export class PlayerActionComponent implements OnInit {

  @Input() player: PlayerService;
  @Input() modalId: string;
  @Output() actionDone = new EventEmitter<string>();
  @Input() hand: Card[];

  cardValueList: CardValue[];
  cardSuitList: CardSuit[];
  actionList: string[];
  handSelection: CardSelectionModel[] = [];
  desactiveAction: boolean;

  private cardIndex: number;
  private meldIndex: number;
  
  currentAction = {
    type: Action.DRAW,
    value: CardValue.ACE,
    suit: CardSuit.DIAMOND
  };
  constructor() { }

  ngOnInit() {
    this.cardSuitList = CardSuit.getAll();
    this.cardValueList = CardValue.getAll();
    this.actionList = Action.getAll();
  }

  isCardSelectionNeeded():boolean{
    return this.currentAction.type == Action.ADD_RED_THREE || 
           this.currentAction.type == Action.MELD ||
           this.currentAction.type == Action.DISCARD ||
           (this.currentAction.type == Action.DRAW && this.player.getMustShowHandAction());
  }

  open(meldIndex?: number, cardIndex?: number){
    this.meldIndex = meldIndex;
    this.cardIndex = cardIndex;
    if(meldIndex != undefined && cardIndex != undefined){
      this.currentAction.type = Action.MELD;
      this.desactiveAction = true;
    }else{
      this.desactiveAction = false;
    }

    this.setHandSelection();
    $(`#${this.modalId}`).modal('show');
  }

  doActionAndClose(){
    this.doAction();
    $(`#${this.modalId}`).modal('hide');
  }

  doAction(){
    var cardActionList = this.getCardActionList();
   
    switch(this.currentAction.type){
      case Action.DRAW:
        this.player.drawCard(this.getFirstSelectedCard(cardActionList));
        break;
      case Action.DISCARD:
        this.player.discard(this.getFirstSelectedCard(cardActionList));
        break;
      case Action.ADD_RED_THREE:
        this.player.addRedThree(this.getFirstSelectedCard(cardActionList));
        break;
      case Action.PICK_UP_DISCARD:
        this.player.pickUpDiscardPile();
        break;
      case Action.MELD:
        this.player.addMeld(cardActionList, this.meldIndex, this.cardIndex);
        break;
    }

    this.setHandSelection();
    this.actionDone.emit(this.currentAction.type);
  }

  private getCardActionList(): Card[]{
    var cardAction: Card[];
    if(this.mustShowMyHandAction()){
      const selectionCardList = this.handSelection.filter(selection => selection.selected);
      cardAction = selectionCardList.map(selection => selection.card);
    }
    else{
      cardAction = [<Card>{ suit: this.currentAction.suit, value: this.currentAction.value  }];
    }
    return cardAction;
  }

  private getFirstSelectedCard(cardSelectionList: Card[]):Card{
    if(cardSelectionList.length)
      return cardSelectionList[0];
    else
      return null;
  }

  private setHandSelection(){
    if(this.player.getMustShowHandAction()){
      this.handSelection = this.hand.map(card => <CardSelectionModel>{ selected: false, card: card });
    }
  }

  mustShowMyHandAction():boolean{
    return (this.currentAction.type == Action.MELD 
        || this.currentAction.type == Action.DISCARD 
        || this.currentAction.type == Action.ADD_RED_THREE)
        && this.player.getMustShowHandAction();
  }

  selectSuit(suit: CardSuit){
    this.currentAction.suit = suit;
  }

  selectValue(value: CardValue){
    this.currentAction.value = value;
  }

  selectAction(action: string){
    this.currentAction.type = action;
  }

}
