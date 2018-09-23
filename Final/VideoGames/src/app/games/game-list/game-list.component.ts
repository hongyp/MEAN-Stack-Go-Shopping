import { Component, OnInit } from '@angular/core';

import { Game } from '../../common/games/game';
import { GamesJson } from '../../common/games/mock-games';
import { RestApiService } from '../../common/restapi.service';
import {GamesService} from "../games.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  listOfGames: Game[];
  selectedGame: Game;
  seletedEditGame: Game;
  selectedAddGame: Game;
  testGames: Game[];
  inputwords: string;
  inputwordscheck: string;

  constructor(private apiService: RestApiService, private gameService: GamesService) { }

  ngOnInit() {
    this.getGamesFromDB()
  }

  getGamesFromDB() {
    this.apiService.getGamesFromDB()
    .then(games => {
      this.listOfGames = games;
      this.testGames = games;
    })
  }

  setSelectedGame(selectedGame: Game) {
    this.selectedGame = selectedGame;
  }

  setSelectedEditGame(seletedEditGame: Game) {
    this.seletedEditGame = seletedEditGame;
  }

  setSelectedAddGame(selectedAddGame: Game) {
    this.selectedAddGame = selectedAddGame;
  }

  filterByPS4() {
    this.listOfGames = this.testGames.filter(Game => Game.platform == "PS4");;
    return this.listOfGames;
  }

  filterByXBOX() {
    this.listOfGames = this.testGames.filter(Game => Game.platform == "XBOX");
    return this.listOfGames;
  }

  filterByPC() {
    this.listOfGames = this.testGames.filter(Game => Game.platform == "PC");
    return this.listOfGames;
  }

  showAll() {
    this.listOfGames = this.testGames;
    return this.listOfGames;
  }

  searchbyKeyword() {
    this.inputwordscheck = this.inputwords.toLocaleUpperCase().trim().replace(/\s/g, "")
    this.listOfGames = this.testGames.filter(Game => (Game.title.toLocaleUpperCase().replace(/\s/g, "").includes(this.inputwordscheck))==true );
    console.log(this.listOfGames)
    return this.listOfGames;
  }
}
