import { CardComponent } from "./card.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Card, Cardvalue, CardSuit } from '../model';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    let valueDisplay: string;
    let suitDisplay: string;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [FormsModule],
          declarations: [ CardComponent ]
        })
        .compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });

      function testCardDisplay(card: Card){
        component.card = card;
        fixture.detectChanges();

        const cardDebug = fixture.debugElement;
        const divCard: HTMLElement = cardDebug.nativeElement;
        const valueSpan = divCard.querySelector('.number');
        valueDisplay = valueSpan.textContent;

        const suitSpan = divCard.querySelector('.suit-corner');
        suitDisplay = suitSpan.textContent;
      }

      //SPADES ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠
      it('should display A of spades', () => {
          const card = <Card>{ value: Cardvalue.ACE, suit: CardSuit.SPADE };
          testCardDisplay(card);
          expect(valueDisplay).toBe('A');
          expect(suitDisplay).toBe('♠');
      });

      it('should display Two of spades', () => {
        const card = <Card>{ value: Cardvalue.TWO, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('2');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Three of spades', () => {
        const card = <Card>{ value: Cardvalue.THREE, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('3');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Four of spades', () => {
        const card = <Card>{ value: Cardvalue.FOUR, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('4');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Five of spades', () => {
        const card = <Card>{ value: Cardvalue.FIVE, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('5');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Six of spades', () => {
        const card = <Card>{ value: Cardvalue.SIX, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('6');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Seven of spades', () => {
        const card = <Card>{ value: Cardvalue.SEVEN, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('7');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Eight of spades', () => {
        const card = <Card>{ value: Cardvalue.EIGHT, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('8');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Nine of spades', () => {
        const card = <Card>{ value: Cardvalue.NINE, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('9');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Ten of spades', () => {
        const card = <Card>{ value: Cardvalue.TEN, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('10');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Jack of spades', () => {
        const card = <Card>{ value: Cardvalue.JACK, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('J');
        expect(suitDisplay).toBe('♠');
      });

      it('should display Queen of spades', () => {
        const card = <Card>{ value: Cardvalue.QUEEN, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('Q');
        expect(suitDisplay).toBe('♠');
      });

      it('should display King of spades', () => {
        const card = <Card>{ value: Cardvalue.KING, suit: CardSuit.SPADE };
        testCardDisplay(card);
        expect(valueDisplay).toBe('K');
        expect(suitDisplay).toBe('♠');
      });

      //HEARTS ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
      it('should display A of hearts', () => {
          const card = <Card>{ value: Cardvalue.ACE, suit: CardSuit.HEART };
          testCardDisplay(card);
          expect(valueDisplay).toBe('A');
          expect(suitDisplay).toBe('♥');
      });

      it('should display Two of hearts', () => {
        const card = <Card>{ value: Cardvalue.TWO, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('2');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Three of hearts', () => {
        const card = <Card>{ value: Cardvalue.THREE, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('3');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Four of hearts', () => {
        const card = <Card>{ value: Cardvalue.FOUR, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('4');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Five of hearts', () => {
        const card = <Card>{ value: Cardvalue.FIVE, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('5');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Six of hearts', () => {
        const card = <Card>{ value: Cardvalue.SIX, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('6');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Seven of hearts', () => {
        const card = <Card>{ value: Cardvalue.SEVEN, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('7');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Eight of hearts', () => {
        const card = <Card>{ value: Cardvalue.EIGHT, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('8');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Nine of hearts', () => {
        const card = <Card>{ value: Cardvalue.NINE, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('9');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Ten of hearts', () => {
        const card = <Card>{ value: Cardvalue.TEN, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('10');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Jack of hearts', () => {
        const card = <Card>{ value: Cardvalue.JACK, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('J');
        expect(suitDisplay).toBe('♥');
      });

      it('should display Queen of hearts', () => {
        const card = <Card>{ value: Cardvalue.QUEEN, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('Q');
        expect(suitDisplay).toBe('♥');
      });

      it('should display King of hearts', () => {
        const card = <Card>{ value: Cardvalue.KING, suit: CardSuit.HEART };
        testCardDisplay(card);
        expect(valueDisplay).toBe('K');
        expect(suitDisplay).toBe('♥');
      });

      //CLUBS ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣
      it('should display A of clubs', () => {
          const card = <Card>{ value: Cardvalue.ACE, suit: CardSuit.CLUB };
          testCardDisplay(card);
          expect(valueDisplay).toBe('A');
          expect(suitDisplay).toBe('♣');
      });

      it('should display Two of clubs', () => {
        const card = <Card>{ value: Cardvalue.TWO, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('2');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Three of clubs', () => {
        const card = <Card>{ value: Cardvalue.THREE, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('3');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Four of clubs', () => {
        const card = <Card>{ value: Cardvalue.FOUR, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('4');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Five of clubs', () => {
        const card = <Card>{ value: Cardvalue.FIVE, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('5');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Six of clubs', () => {
        const card = <Card>{ value: Cardvalue.SIX, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('6');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Seven of clubs', () => {
        const card = <Card>{ value: Cardvalue.SEVEN, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('7');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Eight of clubs', () => {
        const card = <Card>{ value: Cardvalue.EIGHT, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('8');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Nine of clubs', () => {
        const card = <Card>{ value: Cardvalue.NINE, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('9');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Ten of clubs', () => {
        const card = <Card>{ value: Cardvalue.TEN, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('10');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Jack of clubs', () => {
        const card = <Card>{ value: Cardvalue.JACK, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('J');
        expect(suitDisplay).toBe('♣');
      });

      it('should display Queen of clubs', () => {
        const card = <Card>{ value: Cardvalue.QUEEN, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('Q');
        expect(suitDisplay).toBe('♣');
      });

      it('should display King of clubs', () => {
        const card = <Card>{ value: Cardvalue.KING, suit: CardSuit.CLUB };
        testCardDisplay(card);
        expect(valueDisplay).toBe('K');
        expect(suitDisplay).toBe('♣');
      });


    //DIAMONDS ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦
    it('should display A of diamons', () => {
        const card = <Card>{ value: Cardvalue.ACE, suit: CardSuit.DIAMOND };
        testCardDisplay(card);
        expect(valueDisplay).toBe('A');
        expect(suitDisplay).toBe('♦');
    });

    it('should display Two of diamons', () => {
      const card = <Card>{ value: Cardvalue.TWO, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('2');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Three of diamons', () => {
      const card = <Card>{ value: Cardvalue.THREE, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('3');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Four of diamons', () => {
      const card = <Card>{ value: Cardvalue.FOUR, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('4');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Five of diamons', () => {
      const card = <Card>{ value: Cardvalue.FIVE, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('5');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Six of diamons', () => {
      const card = <Card>{ value: Cardvalue.SIX, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('6');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Seven of diamons', () => {
      const card = <Card>{ value: Cardvalue.SEVEN, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('7');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Eight of diamons', () => {
      const card = <Card>{ value: Cardvalue.EIGHT, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('8');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Nine of diamons', () => {
      const card = <Card>{ value: Cardvalue.NINE, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('9');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Ten of diamons', () => {
      const card = <Card>{ value: Cardvalue.TEN, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('10');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Jack of diamons', () => {
      const card = <Card>{ value: Cardvalue.JACK, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('J');
      expect(suitDisplay).toBe('♦');
    });

    it('should display Queen of diamons', () => {
      const card = <Card>{ value: Cardvalue.QUEEN, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('Q');
      expect(suitDisplay).toBe('♦');
    });

    it('should display King of diamons', () => {
      const card = <Card>{ value: Cardvalue.KING, suit: CardSuit.DIAMOND };
      testCardDisplay(card);
      expect(valueDisplay).toBe('K');
      expect(suitDisplay).toBe('♦');
    });
    
    //JOKDER
    it('should display the Joker', () => {
        const card = <Card>{ value: Cardvalue.JOKER, suit: CardSuit.DIAMOND };
        testCardDisplay(card);
        expect(valueDisplay).toBe('JOKER');
      });
});