import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Board } from './model/board';
import { Game } from './model/game';
import { CardValue } from './model/card-value';
import { CardSuit } from './model/card-suit';
import { Action } from './model/action';
import { Player as PlayerEnum } from './model/player/palyer.enum';
import { Card } from './model/card';
import { CardSelectionModel } from './card-selection/card-selection.model';
import { MePlayer } from './model/player/me-player';
import { Player } from './model/player/player';
import { PlayerActionComponent } from './player-action/player-action.component';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Canasta';

  lastDiscard: Card;
  myHandSelection: CardSelectionModel[] = [];


  constructor(protected board: Board, 
    protected me: MePlayer,
    @Inject('myGame') protected myGame: Game,
    @Inject('opponentGame') protected opponentGame: Game,
    @Inject('partner') protected partner: Player,
    @Inject('opponent1') protected opponent1: Player,
    @Inject('opponent2') protected opponent2: Player){ }

  ngOnInit() {
  }

  actionDone(action: string){
    if(action == Action.DISCARD)
      this.lastDiscard = this.board.discardStack[this.board.discardStack.length - 1];
    if(action == Action.DRAW_DISCARD)
      this.lastDiscard = null;
  }
}
