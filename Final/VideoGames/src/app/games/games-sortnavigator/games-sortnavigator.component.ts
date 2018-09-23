import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../common/games/game';
import { GameListComponent } from '../game-list/game-list.component'
import { RestApiService } from '../../common/restapi.service';
import {forEach} from "@angular/router/src/utils/collection";
@Component({
  selector: 'app-games-sortnavigator',
  templateUrl: './games-sortnavigator.component.html',
  styleUrls: ['./games-sortnavigator.component.scss']
})
export class SortnavigatorComponent implements OnInit {

  listOfGames: Game[];
  //filteredGames: Game[];

  constructor(private _router: Router, private apiService: RestApiService, private  gamelistComponent: GameListComponent) {
  }


  //controller() {
  //  sortName = 'id';
  //  sortReverse = false;

  //}

  ngOnInit() {
    this.listOfGames = this.gamelistComponent.listOfGames;
    //this.filteredGames = this.listOfGames.filter(Game => Game.id == 1);
  }

  getGamesFromDB() {
    this.apiService.getGamesFromDB()
    .then(games => this.listOfGames = games)
  }

  sortbyid() {
    this.listOfGames = this.gamelistComponent.listOfGames;
    console.log("IDIDID")
    var sortedArray: Game[] = this.listOfGames.sort((obj1, obj2) => {
      if (obj1.id > obj2.id) {
        return 1;
      }

      if (obj1.id < obj2.id) {
        return -1;
      }

      return 0;
    });

    return sortedArray;
  }

  sortbytitle() {
    this.listOfGames = this.gamelistComponent.listOfGames;
    var sortedArray: Game[] = this.listOfGames.sort((obj1, obj2) => {
      if (obj1.title > obj2.title) {
        return 1;
      }

      if (obj1.title < obj2.title) {
        return -1;
      }

      return 0;
    });

    return sortedArray;
  }

  sortbyscore() {
    this.listOfGames = this.gamelistComponent.listOfGames;
    var sortedArray: Game[] = this.listOfGames.sort((obj1, obj2) => {
      if (obj1.score > obj2.score) {
        return 1;
      }

      if (obj1.score < obj2.score) {
        return -1;
      }

      return 0;
    });

    return sortedArray.reverse();
  }

  isActive1(): void {
    let elem1: HTMLElement = document.getElementById('sortbyid');
    elem1.setAttribute("class", "active");
    let elem2: HTMLElement = document.getElementById('sortbytitle');
    elem2.setAttribute("class", "class = null;");
    let elem3: HTMLElement = document.getElementById('sortbyscore');
    elem3.setAttribute("class", "class = null;");
  }

  isActive2(): void {
    let elem1: HTMLElement = document.getElementById('sortbyid');
    elem1.setAttribute("class", "class = null;");
    let elem2: HTMLElement = document.getElementById('sortbytitle');
    elem2.setAttribute("class", "active");
    let elem3: HTMLElement = document.getElementById('sortbyscore');
    elem3.setAttribute("class", "class = null;");
  }

  isActive3(): void {
    let elem1: HTMLElement = document.getElementById('sortbyid');
    elem1.setAttribute("class", "class = null;");
    let elem2: HTMLElement = document.getElementById('sortbytitle');
    elem2.setAttribute("class", "class = null;");
    let elem3: HTMLElement = document.getElementById('sortbyscore');
    elem3.setAttribute("class", "active");
  }

}
