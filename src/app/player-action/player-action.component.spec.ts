import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { PlayerActionComponent } from './player-action.component';
import { OtherPlayer } from '../model/player/other-player';
import { Board, Game } from '../model';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardSelectionComponent } from '../card-selection/card-selection.component';
import { CardComponent } from '../card/card.component';

describe('PlayerActionComponent', () => {
  let component: PlayerActionComponent;
  let fixture: ComponentFixture<PlayerActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PlayerActionComponent, CardSelectionComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
