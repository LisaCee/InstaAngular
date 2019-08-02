import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { Avatar } from 'src/app/models/Avatar';
import { BodyService } from '../../services/body.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  images: Image[];
  avatars: Avatar[];

  constructor(private bodyService: BodyService) { }
  ngOnInit() {
    this.bodyService.getImages()
      .subscribe(img => {
        this.images = img;
        // console.log('IMG', this.images)
      })
    this.bodyService.getAvatar().subscribe(img => {
      this.avatars = img.results;
      console.log("AVATAR", this.avatars);
    });
  }

}
