
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardSequenceComponent } from './card-sequence.component';
import { CardComponent } from '../card/card.component';
import { Card, CardSuit, CardValue, Sequence } from '../model';
import { CardSelectionComponent } from '../card-selection/card-selection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('CardSequenceComponent', () => {
    let component: CardSequenceComponent;
    let fixture: ComponentFixture<CardSequenceComponent>;
    let sequence = <Sequence>{
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
          declarations: [ CardComponent, CardSelectionComponent, CardSequenceComponent ]
        })
        .compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(CardSequenceComponent);
        component = fixture.componentInstance;
        component.sequence
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('should display cards', () =>{
        component.sequence = sequence;
        fixture.detectChanges();
        const cards: HTMLElement[] = fixture.nativeElement.querySelectorAll('canasta-card');
        expect(cards.length).toBe(4, 'should display 4 cards');
      });

});