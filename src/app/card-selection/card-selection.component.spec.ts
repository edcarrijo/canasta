import { CardSelectionComponent } from "./card-selection.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { CardSelectionModel } from './card-selection.model';
import { Card, CardValue, CardSuit } from '../model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardSelectionComponent', () => { 
    let component: CardSelectionComponent;
    let fixture: ComponentFixture<CardSelectionComponent>;
    let source = [
        <CardSelectionModel>{ card: <Card>{ value: CardValue.FOUR, suit: CardSuit.DIAMOND } },
        <CardSelectionModel>{ card: <Card>{ value: CardValue.FIVE, suit: CardSuit.DIAMOND } },
        <CardSelectionModel>{ card: <Card>{ value: CardValue.SIX, suit: CardSuit.DIAMOND } }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [FormsModule],
          declarations: [ CardComponent, CardSelectionComponent ]
        })
        .compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(CardSelectionComponent);
        component = fixture.componentInstance;
        
        component.source = source;
        fixture.detectChanges();
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('should display cards', () => {
        const cards = fixture.nativeElement.querySelectorAll('canasta-card');
        expect(cards.length).toBe(3, 'should display 3 cards');
      });

      it('should select a card when clicked', () => {
        const cards = fixture.nativeElement.querySelectorAll('canasta-card');
        const secondCard: HTMLElement = cards[1];
        secondCard.click();
        fixture.detectChanges();
        expect(source[1].selected).toBeTruthy();
        expect(secondCard.className).toContain('selected');
      });

      it('should select just one card when single selection active', () => {
        component.singleSelection = true;
        const cards = fixture.nativeElement.querySelectorAll('canasta-card');
        const secondCard: HTMLElement = cards[1];
        secondCard.click();
        fixture.detectChanges();
        const thirdCard: HTMLElement = cards[2];
        thirdCard.click();
        fixture.detectChanges();
        expect(source[1].selected).toBeFalsy();
        expect(source[2].selected).toBeTruthy();
        
        expect(thirdCard.className).toContain('selected');
      });

});