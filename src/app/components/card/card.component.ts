import { Component, OnInit, Input } from '@angular/core';

import { Image } from '../../models/Image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() images: Image;

  constructor() { }

  ngOnInit() {

  }

}
