import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from './signup.service';
import { User } from './signup';
import { RestApiService } from '../common/restapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  users: Array<User> = [
    new User("1", "username0", "email", "password0"),
    new User("2", "username1", "email", "password1"),
    new User("3", "username2", "email", "password2"),
    new User("4", "username3", "email", "password3"),
    new User("5", "admin", "email@email.com", "admin"),
  ];
 
  constructor(private _signupService: SignupService, private router: Router, private _restApiService: RestApiService) { }

  createNewUser(user: User) {
      this.users.push(user);
  }

  ngOnInit() {
  }


}
