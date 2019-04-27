import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'canasta-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.less']
})
export class CardBackComponent implements OnInit {

  constructor() { }

  @Input() count: string;

  ngOnInit() {
  }

}
