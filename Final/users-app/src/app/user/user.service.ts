import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from './user';
import { Observable } from 'rxjs';
import "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  create(user: User) {
    return this._http.post("/api/users", user)
    .map(data => data.json()).toPromise()
  }

  destroy(user: User) {
    return this._http.delete("/api/users/"+user._id)
    .map(data => data.json()).toPromise()
  }

  update(user: User) {
    return this._http.put("/api/users/"+user._id, user)
    .map(data => data.json()).toPromise()
  }

  getUsers(){
    return this._http.get("/api/users")
    .map(data => data.json()).toPromise()
  }

  result:any;

  gerUser(user: User) {
    return this._http.get("/api/users")
    .map(data => data.json()).toPromise()
  }

}
