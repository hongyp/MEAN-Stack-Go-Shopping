import { Injectable } from '@angular/core';

import { Game } from "../common/games/game";
import { RestApiService } from '../common/restapi.service';

@Injectable()
export class HomeService {

    game1: Game;
    game2: Game;
    game3: Game;
    game4: Game;

  constructor(private _restApiService: RestApiService) { 
  }

  getGame(): void {
    this.getGame1FromDB(0)
    this.getGame2FromDB(1)
    this.getGame3FromDB(0)
    this.getGame4FromDB(1)
  }


  getGame1FromDB(id: number) {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game1 = game[0])
  }
  getGame2FromDB(id: number) {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game2 = game[0])
  }
  getGame3FromDB(id: number) {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game3 = game[0])
  }
  getGame4FromDB(id: number) {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game4 = game[0])
  }

}