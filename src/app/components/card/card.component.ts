import { Component, OnInit, Input } from '@angular/core';
// import { BodyService } from '../../services/body.service';

import { Image } from '../../models/Image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() images: Image;

  constructor() { }

  ngOnInit() {

  }

}
