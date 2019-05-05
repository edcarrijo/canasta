import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerActionComponent } from './player-action.component';
import { Board, Game, Player, Card, CardValue, CardSuit, Action } from '../model';
import { FormsModule } from '@angular/forms';
import { CardSelectionComponent } from '../card-selection/card-selection.component';
import { CardComponent } from '../card/card.component';
import { By } from '@angular/platform-browser';


describe('PlayerActionComponent with card hand selection', () => {
  let component: PlayerActionComponent;
  let fixture: ComponentFixture<PlayerActionComponent>;
  let player: Player;

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

    player = jasmine.createSpyObj<Player>('player', {
      'getMustShowHandAction':true,
      'drawCard':null
    });
    
    component.player = player;
    player.hand = [
      <Card>{ value: CardValue.FOUR, suit: CardSuit.DIAMOND },
      <Card>{ value: CardValue.FIVE, suit: CardSuit.DIAMOND },
      <Card>{ value: CardValue.SIX, suit: CardSuit.DIAMOND },
      <Card>{ value: CardValue.SEVEN, suit: CardSuit.DIAMOND }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card suit list', () => {
    expect(component.cardSuitList.length).toBeGreaterThan(0, 'suit list should not be empty');
  });

  it('should have a card value list', () => {
    expect(component.cardValueList.length).toBeGreaterThan(0, 'value list should not be empty');
  });

  it('should have an action list', () => {
    expect(component.actionList.length).toBeGreaterThan(0, 'action list should not be empty');
  });

  it('should set my hand selection when opened', () => {
    component.open();
    expect(component.handSelection.length).toEqual(player.hand.length);
  });

  it('should display card selection for draw action', () => {
  
    fixture.whenStable().then(() => {

      const actionSelect: HTMLSelectElement = fixture.nativeElement.querySelector('#type-action');
      actionSelect.value = Action.DRAW;
      actionSelect.dispatchEvent(new Event('change'));
      
      fixture.detectChanges();

      expect(component.currentAction.type).toEqual(Action.DRAW);

      const newCardSelectionSection: HTMLDivElement = fixture.nativeElement.querySelector('#newCardSelectionSection');
      expect(newCardSelectionSection).toBeDefined();
  
      const handCardSelectionSection: HTMLDivElement = fixture.nativeElement.querySelector('#handCardSelectionSection');
      expect(handCardSelectionSection).toBeNull('hand selection should not be shown');
    });

   
  });

  it('should call draw action with the selected card', () => {
    fixture.whenStable().then(() => {
      const actionSelect: HTMLSelectElement = fixture.nativeElement.querySelector('#type-action');
      actionSelect.value = Action.DRAW;
      actionSelect.dispatchEvent(new Event('change'));
      
      fixture.detectChanges();

      const cardValueSelect = fixture.nativeElement.querySelector('#value-select');
      cardValueSelect.value = cardValueSelect.options[0].value;
      cardValueSelect.dispatchEvent(new Event('change'));

      const cardSuitSelect: HTMLSelectElement = fixture.nativeElement.querySelector('#suit-select');
      cardSuitSelect.value = cardSuitSelect.options[3].value;
      cardSuitSelect.dispatchEvent(new Event('change'));

      fixture.detectChanges();

      const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
      btnDoAction.click();

      expect(player.drawCard).toHaveBeenCalledWith(jasmine.objectContaining({ value: CardValue.ACE, suit: CardSuit.SPADE }));
    }); 
  });

});
