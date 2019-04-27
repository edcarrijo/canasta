import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from '../model/card.model';
import { CardSuite } from '../model/card-suite.model';
import { Cardvalue } from '../model/card-value.model';

@Component({
  selector: 'canasta-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() card: CardModel;

  ngOnInit() {
    
  }

  getImagePath(){
    if(this.card.suite){
      const image = this.card.suite.imageFaces.find(face => face.value == this.card.value.importance).image;;
      return 'assets/img/faces/' + image;
    }
  }

}
