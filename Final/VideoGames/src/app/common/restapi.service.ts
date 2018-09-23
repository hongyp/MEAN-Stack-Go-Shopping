import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import "rxjs";

import { Game } from './games/game';
import { GamesJson } from './games/mock-games';
import { Wishlist } from './wishlists/wishlist';
import { WishlistJson } from './wishlists/mock-wishlist';
import { Cart } from './cart/cart';
import { CartJson } from './cart/mock-cart';
import { User } from '../signup/signup';

@Injectable()

export class RestApiService {


  constructor(private _http: Http) { }
  
    create(signup: User) {
      return this._http.post("/database/users", signup)
      .map(data => data.json()).toPromise()
    }
  
    destroy(signup: User) {
      return this._http.delete("/database/users/"+signup.userName)
      .map(data => data.json()).toPromise()
    }
  
    update(signup: User) {
      return this._http.put("/database/users/"+signup.userName, signup)
      .map(data => data.json()).toPromise()
    }
  
    getUsers(){
      return this._http.get("/database/users")
      .map(data => data.json()).toPromise()
    }
  
    gerUser(signup: String) {
      return this._http.get("/database/users/"+signup)
      .map(data => data.json()).toPromise()
    }
// Game Database
    getGamesFromDB() {
      return this._http.get("/database/games")
      .map(data => data.json()).toPromise()
    }

    getGameFormDB(id: number) {
      return this._http.get("/database/games/"+id)
      .map(data => data.json()).toPromise()
    }

    getGamesOfWishList(): Wishlist[] {
        return WishlistJson;
    }

    getGamesOfCart(): Cart[] {
        return CartJson;
    }
}