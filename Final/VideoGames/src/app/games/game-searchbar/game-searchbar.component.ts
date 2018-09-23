import { Component, OnInit } from '@angular/core';
import { Game } from '../../common/games/game';
import { GameListComponent } from '../game-list/game-list.component'

@Component({
  selector: 'app-game-searchbar',
  templateUrl: './game-searchbar.component.html',
  styleUrls: ['./game-searchbar.component.scss']
})
export class GameSearchbarComponent implements OnInit {

  filterdGames: Game[];
  listOfGames: Game[];
  inputwords: String;

  constructor(private  gamelistComponent: GameListComponent) { }

  ngOnInit() {
     this.filterdGames = this.gamelistComponent.listOfGames;
     this.inputwords = null;
  }

  searchbyKeyword() {
     this.listOfGames = this.filterdGames.filter(Game => Game.title == this.inputwords);
     return this.listOfGames;
  }
}