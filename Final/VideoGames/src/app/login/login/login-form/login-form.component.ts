import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { SignupService } from '../../../signup/signup.service';
import { User } from '../../../signup/signup';
import { RestApiService } from '../../../common/restapi.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  users: Array<User> = [
    new User("1", "username0", "email", "password0"),
    new User("2", "username1", "email", "password1"),
    new User("3", "username2", "email", "password2"),
    new User("4", "username3", "email", "password3"),
    new User("5", "admin", "email@email.com", "admin"),
  ];
  
  userStatus: String;

  constructor(private router: Router, 
              private _userService:UserService,
              private _signupService: SignupService,
              private _restApiSercice: RestApiService) { }

  ngOnInit() {
  }

  loginUser(e) {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    // var userExsited = this.checkUser(String(username) , String(password))
    // if(userExsited) {
    //   this._userService.setUserLoggedIn(userExsited);
    //   this.router.navigate(['login/dashboard'])
    // } else {
    //   this.userStatus = "Account or Password is invalid"
    //   e.target.elements[0].value = "";
    //   e.target.elements[1].value = "";
    // }

    this._restApiSercice.gerUser(username)
    .then(user => {
      if (user.length != 0) {
        if (user[0].password == password) {
          this._userService.setUserLoggedIn(user[0]);
          console.log("success login")
          this.router.navigate(['home'])
        } else {
          this.userStatus = "Account or Password is invalid"
          console.log("fail login")
        }
      } else {
        this.userStatus = "Account or Password is invalid"
        console.log("user doesn't exit")
      }
    })
    console.log(this._userService.getUserLoggedIn())
  }

  // checkUser(inputUsername, inputPassword) {
  //   return this.users.find(res => res.userName == inputUsername && res.password == inputPassword)
  // }

}
