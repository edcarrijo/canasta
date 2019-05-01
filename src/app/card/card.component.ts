import { Component, OnInit, Input, Output } from '@angular/core';
import { Card } from '../model/card';
import { CardSuite } from '../model/card-suite';
import { Cardvalue } from '../model/card-value';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'canasta-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() card: Card;
  @Output() click = new EventEmitter();

  ngOnInit() {
    
  }

  getImagePath(){
    if(this.card.suite){
      const image = this.card.suite.imageFaces.find(face => face.value == this.card.value.importance).image;;
      return 'assets/img/faces/' + image;
    }
  }

  cardClick(){
    this.click.emit("click");
  }

}
