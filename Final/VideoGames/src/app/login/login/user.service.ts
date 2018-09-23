import { Injectable } from '@angular/core';
import { User } from '../../signup/signup';

@Injectable()
export class UserService {

  public isUserLoggedIn;
  public user: User;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: User) {
    this.isUserLoggedIn = true;
    this.user = user;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn
  }

  getUserFull() {
    return this.user;
  }

}
