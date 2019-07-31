import { Component, OnInit, Input } from '@angular/core';
import { Avatar } from "../../models/Avatar";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  @Input() avatar: Avatar;

  constructor() { }

  ngOnInit() {
  }

}
