import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name = "anony"

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.name = String(this._userService.user.userName);
    console.log("User login?",this._userService.getUserLoggedIn())
  }

}
