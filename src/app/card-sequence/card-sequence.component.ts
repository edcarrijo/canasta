import { Component, OnInit, Input } from '@angular/core';
import { Sequence } from '../model/game.service';
import { CardSelectionModel } from '../card-selection/card-selection.model';

@Component({
  selector: 'canasta-card-sequence',
  templateUrl: './card-sequence.component.html'
})
export class CardSequenceComponent implements OnInit {

  constructor() { }
  @Input() sequence: Sequence;
  cardSelectionSource: CardSelectionModel[];

  ngOnInit() {
    this.cardSelectionSource = this.sequence.cards.map(card => <CardSelectionModel>{ card: card });
  }

  showToolbar():boolean{
    return !!this.cardSelectionSource.find(selection => selection.selected);
  }

  moveLeft() {
    let card = this.cardSelectionSource.find(card => card.selected);
    this.move(this.cardSelectionSource, card, -1);
  };
  
  moveRight() {
    let card = this.cardSelectionSource.find(card => card.selected);
    this.move(this.cardSelectionSource, card, 1);
  };

  private move(array, element, delta) {
    var index = array.indexOf(element);
    var newIndex = index + delta;
    if (newIndex < 0  || newIndex == array.length) return; //Already at the top or bottom.
    var indexes = [index, newIndex].sort(); //Sort the indixes
    array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]); //Replace from lowest index, two elements, reverting the order
  };

}
