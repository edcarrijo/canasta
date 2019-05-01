import { Component, OnInit, Input } from '@angular/core';
import { CardSelectionModel } from './card-selection.model';

@Component({
  selector: 'canasta-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.less']
})
export class CardSelectionComponent implements OnInit {

  @Input() source: CardSelectionModel[];

  constructor() { }

  ngOnInit() {
  }

  selectCard(index: number){
    this.source[index].selected = !this.source[index].selected;
  }

}
