import { Component, OnInit, Inject, ViewChild, HostListener } from '@angular/core';
import { Action } from './model/action';
import { Card } from './model/card';
import { CardSelectionModel } from './card-selection/card-selection.model';
import { MePlayerService } from './model/player/me-player.service';
import { PlayerService } from './model/player/player.service';
import { StateService } from './model/state/state.service';
import { PlayerActionComponent } from './player-action/player-action.component';
import { PlayerEnum } from './model/player.enum';
import { TranslateService } from '@ngx-translate/core';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';

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
  currentPlayer: PlayerEnum;
  numberOfPlayers = 4;
  numberOfJokers = 4;

  @ViewChild('meAction') meAction: PlayerActionComponent;
  @ViewChild('partnerAction') partnerAction: PlayerActionComponent;
  @ViewChild('opponent1Action') opponent1Action: PlayerActionComponent;
  @ViewChild('opponent2Action') opponent2Action: PlayerActionComponent;

  @HostListener('window:beforeunload')
  canDeactivate(): boolean{
    return false;
  }

  constructor(
    public state: StateService,
    @Inject('me') public me: PlayerService,
    @Inject('partner') public partner: PlayerService,
    @Inject('opponent1') public opponent1: PlayerService,
    @Inject('opponent2') public opponent2: PlayerService,
    private translate: TranslateService){ 
      translate.setDefaultLang('en');
    }

  ngOnInit() {
    $('#initilizeWindow').modal('show');
  }

  actionDone(action: string){
    this.checkLastDiscard();
    this.state.registerState();
  }
  checkLastDiscard(){
    if(this.state.play.table.discardPile.length == 0)
      this.lastDiscard = null;
    else
      this.lastDiscard = this.state.play.table.discardPile[this.state.play.table.discardPile.length - 1];
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
  addMeldCard(cardIndex, meldIndex){
    if(this.currentPlayer == PlayerEnum.ME)
      this.meAction.open(meldIndex, cardIndex);
    else if(this.currentPlayer == PlayerEnum.PARTNER)
      this.partnerAction.open(meldIndex, cardIndex);
    else if(this.currentPlayer == PlayerEnum.OPPONENT1)
      this.opponent1Action.open(meldIndex, cardIndex);
    else if(this.currentPlayer == PlayerEnum.OPPONENT2)
      this.opponent2Action.open(meldIndex, cardIndex);
  }

  openMeAction(){
    this.currentPlayer = PlayerEnum.ME;
    this.meAction.open();
  }
  openPartnerAction(){
    this.currentPlayer = PlayerEnum.PARTNER;
    this.partnerAction.open();
  }
  openOpponent1Action(){
    this.currentPlayer = PlayerEnum.OPPONENT1;
    this.opponent1Action.open();
  }
  openOpponent2Action(){
    this.currentPlayer = PlayerEnum.OPPONENT2;
    this.opponent2Action.open();
  }
  usePortuguese(){
    this.translate.use('pt');
  }
  useEnglish(){
    this.translate.use('en');
  }
  startGame(){
    this.state.initialize(this.numberOfJokers, this.numberOfPlayers);
    $('#initilizeWindow').modal('hide');
  }
}
