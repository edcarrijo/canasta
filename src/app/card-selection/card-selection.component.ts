import { Component, OnInit, Input } from '@angular/core';
import { CardSelectionModel } from './card-selection.model';

@Component({
  selector: 'canasta-card-selection',
  templateUrl: './card-selection.component.html'
})
export class CardSelectionComponent implements OnInit {

  @Input() source: CardSelectionModel[];
  @Input() singleSelection: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectCard(index: number){
    if(this.singleSelection)
      this.source
        .filter((item, currentIndex) =>  item.selected && index != currentIndex)
        .forEach(item => { item.selected = false });

    this.source[index].selected = !this.source[index].selected;
  }

}
