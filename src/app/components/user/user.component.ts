import { Component, OnInit, Input } from '@angular/core';
import { Avatar } from 'src/app/models/Avatar';
import { BodyService } from '../../services/body.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() avatars: Avatar;
  constructor(private bodyService: BodyService) { }

  ngOnInit() {
  }

}
