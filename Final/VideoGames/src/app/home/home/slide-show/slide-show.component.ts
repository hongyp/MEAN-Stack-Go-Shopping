import { Component, OnInit } from '@angular/core';
import { Game } from "../../../common/games/game";
import { RestApiService } from '../../../common/restapi.service';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  game: Game;
  game1: Game;
  game2: Game;
  game3: Game;
  game4: Game;
  listOfGames: Game[]
  constructor(private _restApiService: RestApiService, private _homeService: HomeService) { }

  ngOnInit() {
    this.getGames();
    // this.sortbyscore();
    this.getGame();
  }
  getGames(): void {
    this._restApiService.getGamesFromDB()
      .then(games => {
        this.listOfGames = games;
        console.log(this.listOfGames)
      }) 

  }

  sortbyscore(): void {
    var sortedArray: Game[] = this.listOfGames.sort((obj1, obj2) => {
      if (obj1.score > obj2.score) {
        return 1;
      }

      if (obj1.score < obj2.score) {
        return -1;
      }

      return 0;
    });

    this.listOfGames = sortedArray.reverse();
    this.game1 = this.listOfGames[0]
  }


  getGame(): void {
    // this.game1 = this.listOfGames[0]
    // this.game2 = this.listOfGames[1]
    this.getGame1FromDB(0)
    this.getGame2FromDB(1)
    this.getGame3FromDB(9)
    this.getGame4FromDB(3)
  }

  getGame1FromDB(id: number):void {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game1 = game[0])
  }
  getGame2FromDB(id: number) :void {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game2 = game[0])
  }
  getGame3FromDB(id: number) :void {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game3 = game[0])
  }
  getGame4FromDB(id: number) :void {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game4 = game[0])
  }

}

