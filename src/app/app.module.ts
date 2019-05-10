import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardBackComponent } from './card-back/card-back.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { CardSequenceComponent } from './card-sequence/card-sequence.component';
import { GameService } from './model/game.service';
import { MePlayerService } from './model/player/me-player.service';
import { OtherPlayerService } from './model/player/other-player.service';
import { PlayerActionComponent } from './player-action/player-action.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserNinja, faUser, faExchangeAlt, faUndoAlt, faPlus, faCaretRight, faCaretLeft, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeam, faGrinBeamSweat } from '@fortawesome/free-regular-svg-icons'
import { StateService } from './model/state/state.service';


let myGameFactory = (stateService: StateService) => {
  return new GameService(stateService.createMyGame());
}

let opponentGameFactory = (stateService: StateService) => {
  return new GameService(stateService.createOpponentGame());
}

let mePlayerFactory = (game: GameService, stateService: StateService) => {
  return new MePlayerService(game, stateService.createMePlayer(), stateService.board);
};
let partnerPlayerFactory = (game: GameService, stateService: StateService) => {
  return new OtherPlayerService(game, stateService.createPartnerPlayer(),stateService.board);
};
let opponent1PlayerFactory = (game: GameService, stateService: StateService) => {
  return new OtherPlayerService(game, stateService.createOponent1Player(), stateService.board);
};
let opponent2PlayerFactory = (game: GameService, stateService: StateService) => {
  return new OtherPlayerService(game, stateService.createOponent2Player(), stateService.board);
};

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBackComponent,
    CardSelectionComponent,
    CardSequenceComponent,
    PlayerActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    StateService,
    { provide: 'myGame', useFactory: myGameFactory, deps: [StateService] },
    { provide: 'opponentGame', useFactory: opponentGameFactory, deps: [StateService] },
    { provide: 'me', useFactory: mePlayerFactory, deps: ['myGame', StateService] },
    { provide: 'partner', useFactory: partnerPlayerFactory, deps: ['myGame', StateService] },
    { provide: 'opponent1', useFactory: opponent1PlayerFactory, deps: ['opponentGame', StateService] },
    { provide: 'opponent2', useFactory: opponent2PlayerFactory, deps: ['opponentGame', StateService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faUserNinja, 
      faUser, 
      faGrinBeam, 
      faGrinBeamSweat, 
      faExchangeAlt, 
      faUndoAlt,
      faPlus,
      faCaretRight,
      faCaretLeft,
      faEyeSlash);
  }
}
