import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerActionComponent } from './player-action.component';
import { PlayerService, Card, CardValue, CardSuit, Action } from '../model';
import { FormsModule } from '@angular/forms';
import { CardSelectionComponent } from '../card-selection/card-selection.component';
import { CardComponent } from '../card/card.component';
import { By } from '@angular/platform-browser';
import { StateService } from '../model/state/state.service';
import { TranslateTestingModule } from '../translate-service-stub';


describe('PlayerActionComponent with card hand selection', () => {
  let component: PlayerActionComponent;
  let fixture: ComponentFixture<PlayerActionComponent>;
  let player: PlayerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, TranslateTestingModule],
      declarations: [ PlayerActionComponent, CardSelectionComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerActionComponent);
    component = fixture.componentInstance;

    player = jasmine.createSpyObj<PlayerService>('player', {
      'getMustShowHandAction':true,
      'drawCard':null,
      'addRedThree':null,
      'discard':null,
      'pickUpDiscardPile':null,
      'addMeld':null
    });
    
    component.player = player;
    component.hand = [
      <Card>{ value: CardValue.FOUR, suit: CardSuit.HEART },
      <Card>{ value: CardValue.FIVE, suit: CardSuit.HEART },
      <Card>{ value: CardValue.SIX, suit: CardSuit.HEART },
      <Card>{ value: CardValue.THREE, suit: CardSuit.DIAMOND }
    ];
    component.open();
    //fixture.detectChanges();
    fixture.autoDetectChanges();
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
    expect(component.handSelection.length).toEqual(component.hand.length);
  });

  it('should display card selection for draw action', () => {
    fixture.whenStable().then(() => {
      testCardSelectionDisplay(Action.DRAW, fixture, component);
    });
  });

  it('should call draw action with the selected card', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.DRAW, component);

      selectCard(fixture, component,CardValue.ACE, CardSuit.SPADE);

      const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
      btnDoAction.click();

      expect(player.drawCard).toHaveBeenCalledWith(jasmine.objectContaining({ value: CardValue.ACE, suit: CardSuit.SPADE }));
    }); 
  });

  it('should display hand selection for add red three action', () => {
    fixture.whenStable().then(() => {
      testHandDisplay(Action.ADD_RED_THREE , fixture, component);
    });
  });

  it('should call add red three action with the selected card', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.ADD_RED_THREE, component);
  
      const shownCards = fixture.nativeElement.querySelectorAll('canasta-card');
      shownCards[3].click(); //three of diamonds of my hand

      const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
      btnDoAction.click();

      expect(player.addRedThree).toHaveBeenCalledWith(jasmine.objectContaining({ value: CardValue.THREE, suit: CardSuit.DIAMOND }));
    }); 
  });

  it('should display hand selection for discard action', () => {
    fixture.whenStable().then(() => {
      testHandDisplay(Action.ADD_RED_THREE , fixture, component);
    });
  });

  it('should call discard action with the selected card', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.DISCARD, component);
  
      const shownCards = fixture.nativeElement.querySelectorAll('canasta-card');
      shownCards[1].click(); //five of hearts of my hand

      const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
      btnDoAction.click();

      expect(player.discard).toHaveBeenCalledWith(jasmine.objectContaining({ value: CardValue.FIVE, suit: CardSuit.HEART }));
    }); 
  });

  it('should not display any card selection for pick up discard action', () => {
    fixture.whenStable().then(() => {
      testNoCardSelectionDisplay(Action.PICK_UP_DISCARD , fixture, component);
    });
  });

  it('should call pick up discard action', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.PICK_UP_DISCARD, component);
  
      const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
      btnDoAction.click(); 

      expect(player.pickUpDiscardPile).toHaveBeenCalled();
    }); 
  });

  it('should display hand selection for begin meld action', () => {
    fixture.whenStable().then(() => {
      testHandDisplay(Action.MELD , fixture, component);
    });
  });

  it('should call add meld action with selecteds cards', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.MELD, component);
  
      const shownCards = fixture.nativeElement.querySelectorAll('canasta-card');
      shownCards[0].click(); //four of hearts of my hand
      shownCards[1].click(); //five of hearts of my hand
      shownCards[2].click(); //six of hearts of my hand

      const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
      btnDoAction.click(); 

      expect(player.addMeld).toHaveBeenCalledWith(jasmine.arrayContaining(
        [
          jasmine.objectContaining({ value: CardValue.FOUR, suit: CardSuit.HEART }),
          jasmine.objectContaining({ value: CardValue.FIVE, suit: CardSuit.HEART }),
          jasmine.objectContaining({ value: CardValue.SIX, suit: CardSuit.HEART })
        ]
      ), undefined, undefined);
    }); 
  });

});

describe('PlayerActionComponent without card hand selection', () => {
  let component: PlayerActionComponent;
  let fixture: ComponentFixture<PlayerActionComponent>;
  let player: PlayerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, TranslateTestingModule],
      declarations: [ PlayerActionComponent, CardSelectionComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerActionComponent);
    component = fixture.componentInstance;

    player = jasmine.createSpyObj<PlayerService>('player', {
      'getMustShowHandAction':false,
      'drawCard':null,
      'addRedThree':null,
      'discard':null,
      'pickUpDiscardPile':null,
      'addMeld':null
    });
    
    component.player = player;
    
    component.open();

    fixture.autoDetectChanges();
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

  it('should call draw action', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.DRAW, component);

      const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
      btnDoAction.click();
  
      expect(player.drawCard).toHaveBeenCalled();
    }); 
  });

  it('should display card selection for add red three action', () => {
    fixture.whenStable().then(() => {
      testCardSelectionDisplay(Action.ADD_RED_THREE , fixture, component);
    });
  });

  it('should call add red three action with the selected card', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.ADD_RED_THREE, component);
  
      fixture.whenStable().then(() => {
        selectCard(fixture, component, CardValue.THREE, CardSuit.HEART);
        const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
        btnDoAction.click();
  
        expect(player.addRedThree).toHaveBeenCalledWith(jasmine.objectContaining({ value: CardValue.THREE, suit: CardSuit.HEART }));
      });

    }); 
  });

  it('should display card selection for discard action', () => {
    fixture.whenStable().then(() => {
      testCardSelectionDisplay(Action.ADD_RED_THREE , fixture, component);
    });
  });

  it('should call discard action with the selected card', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.DISCARD, component);
  
      fixture.whenStable().then(() => {
        selectCard(fixture, component, CardValue.KING, CardSuit.SPADE);
        const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
        btnDoAction.click();
  
        expect(player.discard).toHaveBeenCalledWith(jasmine.objectContaining({ value: CardValue.KING, suit: CardSuit.SPADE }));
      });
    }); 
  });


  it('should display hand selection for begin meld action', () => {
    fixture.whenStable().then(() => {
      testCardSelectionDisplay(Action.MELD , fixture, component);
    });
  });

  it('should call add meld action with selecteds cards', () => {
    fixture.whenStable().then(() => {
      changeAction(fixture, Action.MELD, component);
      
      fixture.whenStable().then(() => {
        selectCard(fixture, component, CardValue.ACE, CardSuit.SPADE);

        const btnDoAction: HTMLButtonElement = fixture.nativeElement.querySelector('#do-action-button');
        btnDoAction.click(); 
  
        expect(player.addMeld).toHaveBeenCalledWith(jasmine.arrayContaining(
          [
            jasmine.objectContaining({ value: CardValue.ACE, suit: CardSuit.SPADE })
          ]
        ), undefined, undefined);
      });
    }); 
  });

});

function selectCard(fixture: ComponentFixture<PlayerActionComponent>, component: PlayerActionComponent, 
  cardValue: CardValue, cardSuit: CardSuit) {
  
  const cardButton: HTMLButtonElement = fixture.nativeElement.querySelector(`#btnValue${cardValue.rank}${cardSuit.id}`);
  cardButton.click();

  expect(component.currentAction.value).toBe(cardValue);
  expect(component.currentAction.suit).toBe(cardSuit);
}

function testCardSelectionDisplay(action: string, fixture: ComponentFixture<PlayerActionComponent>, component: PlayerActionComponent) {
  changeAction(fixture, action, component);
  const newCardSelectionSection: HTMLDivElement = fixture.nativeElement.querySelector('#newCardSelectionSection');
  expect(newCardSelectionSection).toBeDefined();
  const handCardSelectionSection: HTMLDivElement = fixture.nativeElement.querySelector('#handCardSelectionSection');
  expect(handCardSelectionSection).toBeNull('hand selection should not be shown');
}

function testHandDisplay(action: string, fixture: ComponentFixture<PlayerActionComponent>, component: PlayerActionComponent) {
  changeAction(fixture, action, component);
  const newCardSelectionSection: HTMLDivElement = fixture.nativeElement.querySelector('#newCardSelectionSection');
  expect(newCardSelectionSection).toBeNull('card selection should not be shown');
  const handCardSelectionSection: HTMLDivElement = fixture.nativeElement.querySelector('#handCardSelectionSection');
  expect(handCardSelectionSection).toBeDefined();
}

function testNoCardSelectionDisplay(action: string, fixture: ComponentFixture<PlayerActionComponent>, component: PlayerActionComponent) {
  changeAction(fixture, action, component);
  const newCardSelectionSection: HTMLDivElement = fixture.nativeElement.querySelector('#newCardSelectionSection');
  expect(newCardSelectionSection).toBeNull('card selection should not be shown');
  const handCardSelectionSection: HTMLDivElement = fixture.nativeElement.querySelector('#handCardSelectionSection');
  expect(handCardSelectionSection).toBeNull('hand selection should not be shown');
}

function changeAction(fixture: ComponentFixture<PlayerActionComponent>, action: string, component: PlayerActionComponent) {
  const actionIndex = Action.getAll().indexOf(action);
  const actionButton: HTMLButtonElement = fixture.nativeElement.querySelector(`#btnAction${actionIndex}`);
  actionButton.click();
  expect(component.currentAction.type).toEqual(action);
}

