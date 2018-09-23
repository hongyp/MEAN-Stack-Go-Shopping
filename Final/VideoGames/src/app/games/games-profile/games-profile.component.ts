import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../common/games/game';

@Component({
  selector: 'app-games-profile',
  templateUrl: './games-profile.component.html',
  styleUrls: ['./games-profile.component.scss']
})
export class GamesProfileComponent implements OnInit {

  @Input()
  selectedGame: Game;

  cancelDetailGame() {
    this.selectedGame = null;
  }

  constructor() {
    // this.selectedGame = new Game("id", "scorePhrase", "title", "url", "platform", "score",
    //                             "genre", "editorsChoice", "Year", "Month", "Day", "price");
  }

  ngOnInit() {
  }

}
