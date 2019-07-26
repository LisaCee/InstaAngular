import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {

  images: Image[];
  constructor() { }
  ngOnInit() {
    this.images = [{
      id: 1,
      source: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      source: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      source: 'https://images.unsplash.com/photo-1437275537121-331a0457c8d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }]
  }

}
