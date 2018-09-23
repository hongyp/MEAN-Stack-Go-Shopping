import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GameWithQuality } from './game';
import { Observable } from 'rxjs';

import { of } from 'rxjs/observable/of';
import { Game } from "../common/games/game";
import { GamesJson} from "../common/games/mock-games";
import { RestApiService } from '../common/restapi.service';
import { UserService } from '../login/login/user.service';

@Injectable()
export class GamesService {
  gametoadd: GameWithQuality;

  constructor( 
    private _restApiService: RestApiService, 
    private _http: Http, 
    private _userService: UserService) { }

  cart: GameWithQuality[] = []
  wishlist: GameWithQuality[] = []

  saveGame() {
    this.gametoadd = null;
  }

  messages: string[] = [];


  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  getGame(id: number): Observable<Game> {
    // Todo: send the message _after_ fetching the game
    this.add(`GamesService: fetched game id=${id}`);
    return of(GamesJson.find(game => game.id === id));
    
  }

  addGameToCart(game) {
      this.cart.push({
        game: game,
        quantity: 1
      })
    // console.log("Here", this._userService.getUserFull().cartWithQuality)
    // this._restApiService.update(this._userService.getUserFull())
  }

  addGameToWishList(game) {
    this._userService.getUserFull().wishList.push({
      game: game,
      quantity: 1
    })
   console.log("Here", this._userService.getUserFull().cartWithQuality)
   this._restApiService.update(this._userService.getUserFull())
  }

  setCurrentList() {
    this.cart = []
  }

  getCurrentList() {
    return this.cart;
  }
}




