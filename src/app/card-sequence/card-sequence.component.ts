import { Component, OnInit, Input } from '@angular/core';
import { Sequence } from '../model/game';

@Component({
  selector: 'canasta-card-sequence',
  templateUrl: './card-sequence.component.html'
})
export class CardSequenceComponent implements OnInit {

  constructor() { }
  @Input() sequence: Sequence[];

  ngOnInit() {
  }

}
