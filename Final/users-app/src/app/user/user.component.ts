import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = [
    new User(1, "First", "Last", "email@email.com"),
    new User(2, "First", "Last", "email@email.com"),
    new User(3, "First", "Last", "email@email.com"),
  ];

  constructor(private _userService: UserService) { }

  create(user: User) {
    this._userService.create(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err))

    this.users.push(user);
  }

  destroy(user: User) {
    this._userService.destroy(user)
    .then(status => this.getUsers)
    .catch(err => console.log(err))

    const i = this.users.indexOf(user);
    this.users.splice(i, 1)
  }

  update(users: any) {
    console.log(users)
    this._userService.update(users.edited)
    .then(status => this.getUsers)
    .catch(err => console.log(err))

    const i = this.users.indexOf(users.original)
    this.users[i] = users.edited
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this._userService.getUsers()
    .then(users => this.users = users)
  }

}
