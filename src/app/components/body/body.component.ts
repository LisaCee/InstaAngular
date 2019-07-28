import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { BodyService } from '../../services/body.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {

  images: Image[];
  constructor(private bodyService: BodyService) { }
  ngOnInit() {
    this.bodyService.getImages()
      .subscribe(img => {
        this.images = img;
        console.log('THIS.IMAGES', this.images)
      })

  }

}
