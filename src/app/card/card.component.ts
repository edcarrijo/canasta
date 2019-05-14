import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../model';

@Component({
  selector: 'canasta-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() card: Card;

  ngOnInit() {
    
  }

  getImagePath(){
    if(this.card.value.rank == 0){
      return 'assets/img/faces/face-joker.png'
    }else if(this.card.suit){
      const image = this.card.suit.getImageFaces().find(face => face.value == this.card.value.rank).image;;
      return 'assets/img/faces/' + image;
    }
  }

}
