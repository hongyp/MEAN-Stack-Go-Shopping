import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../common/games/game';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {

  @Input()
  seletedEditGame: Game;

  saveGame() {
    this.seletedEditGame = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
