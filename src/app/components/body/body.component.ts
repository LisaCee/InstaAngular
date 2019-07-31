import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { Avatar } from 'src/app/models/Avatar';
import { BodyService } from '../../services/body.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {

  images: Image[];
  avatar: Avatar[];

  constructor(private bodyService: BodyService) { }
  ngOnInit() {
    this.bodyService.getImages()
      .subscribe(img => {
        this.images = img;
      })
    this.bodyService.getAvatar().subscribe(img => {
      this.avatar = img.results;
      console.log("AVATAR", this.avatar);
    });
  }

}
