import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../games.service';
import { GameWithQuality } from '../game';
import { UserService } from '../../login/login/user.service';
import { RestApiService } from '../../common/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-cart-list',
  templateUrl: './game-cart-list.component.html',
  styleUrls: ['./game-cart-list.component.scss']
})
export class GameCartListComponent implements OnInit {

  constructor(private _gameService: GamesService, 
              private _userService: UserService, 
              private _restApiService: RestApiService,
              private _routerLink: Router) { }
  
  @Input() listOfCart
  currentList: GameWithQuality[]

  ngOnInit() {
  }

  submitCurrentCart() {
    this.currentList = this._gameService.getCurrentList()
    if (this.currentList.length > 0) {
      this._userService.getUserFull().cartWithQuality.push.apply(this.currentList)
      console.log("New List", this._userService.getUserFull().cartWithQuality)
      this._restApiService.update(this._userService.getUserFull())
      this._gameService.setCurrentList()
    }
  }

}
