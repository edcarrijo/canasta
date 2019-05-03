import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardBackComponent } from './card-back/card-back.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { CardSequenceComponent } from './card-sequence/card-sequence.component';
import { Board } from './model/board';
import { Game } from './model/game';
import { MePlayer } from './model/player/me-player';
import { OtherPlayer } from './model/player/other-player';

let playerFactory = (board: Board, game: Game) => {
  return new OtherPlayer(board, game);
};


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBackComponent,
    CardSelectionComponent,
    CardSequenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    Board,
    MePlayer,
    { provide: 'myGame', useClass: Game },
    { provide: 'opponentGame', useClass: Game },
    { provide: 'partner', useFactory: playerFactory, deps: [Board, 'myGame'] },
    { provide: 'opponent1', useFactory: playerFactory, deps: [Board, 'opponentGame'] },
    { provide: 'opponent2', useFactory: playerFactory, deps: [Board, 'opponentGame'] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
