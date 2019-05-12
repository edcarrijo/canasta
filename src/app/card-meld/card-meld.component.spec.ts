
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardMeldComponent } from './card-meld.component';
import { CardComponent } from '../card/card.component';
import { Card, CardSuit, CardValue, Meld } from '../model';
import { CardSelectionComponent } from '../card-selection/card-selection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('CardMeldComponent', () => {
    let component: CardMeldComponent;
    let fixture: ComponentFixture<CardMeldComponent>;
    let meld = <Meld>{
        cards: [
            <Card>{ value: CardValue.FOUR, suit: CardSuit.DIAMOND },
            <Card>{ value: CardValue.FIVE, suit: CardSuit.DIAMOND },
            <Card>{ value: CardValue.SIX, suit: CardSuit.DIAMOND },
            <Card>{ value: CardValue.SEVEN, suit: CardSuit.DIAMOND }
        ] 
    } ;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [FormsModule, FontAwesomeModule],
          declarations: [ CardComponent, CardSelectionComponent, CardMeldComponent ]
        })
        .compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(CardMeldComponent);
        component = fixture.componentInstance;
        component.meld
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('should display cards', () =>{
        component.meld = meld;
        fixture.detectChanges();
        const cards: HTMLElement[] = fixture.nativeElement.querySelectorAll('canasta-card');
        expect(cards.length).toBe(4, 'should display 4 cards');
      });

});