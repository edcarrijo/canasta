import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Action } from './model/action';
import { Card } from './model/card';
import { CardSelectionModel } from './card-selection/card-selection.model';
import { MePlayerService } from './model/player/me-player.service';
import { PlayerService } from './model/player/player.service';
import { StateService } from './model/state/state.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Canasta';

  lastDiscard: Card;
  myHandSelection: CardSelectionModel[] = [];
  inverted = false;
  hideMyHand = false;


  constructor(
    public state: StateService,
    @Inject('me') public me: PlayerService,
    @Inject('partner') public partner: PlayerService,
    @Inject('opponent1') public opponent1: PlayerService,
    @Inject('opponent2') public opponent2: PlayerService){ }

  ngOnInit() {
  }

  actionDone(action: string){
    this.checkLastDiscard();
    this.state.registerState();
  }
  checkLastDiscard(){
    if(this.state.board.discardStack.length == 0)
      this.lastDiscard = null;
    else
      this.lastDiscard = this.state.board.discardStack[this.state.board.discardStack.length - 1];
  }
  undo(){
    this.state.undo();
    this.checkLastDiscard();
  }
  invertPlayersSwitch(){
    this.inverted = !this.inverted;
  }
  hideMyHandSwitch(){
    this.hideMyHand = !this.hideMyHand;
  }
}
