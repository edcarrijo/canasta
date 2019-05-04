
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardBackComponent } from './card-back.component';

describe('CardBackComponent', () => {
    let component: CardBackComponent;
    let fixture: ComponentFixture<CardBackComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [FormsModule],
          declarations: [ CardBackComponent ]
        })
        .compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(CardBackComponent);
        component = fixture.componentInstance;
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('should display total cards number', () =>{
        component.count = '11';
        fixture.detectChanges();
        const countSpan: HTMLElement = fixture.nativeElement.querySelector('.card-count');
        expect(countSpan.textContent).toBe('11');
      });

});