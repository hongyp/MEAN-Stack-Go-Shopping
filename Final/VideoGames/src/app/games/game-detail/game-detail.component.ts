import { Component, OnInit, Input } from '@angular/core';

import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Game } from '../../common/games/game';
import {GamesService} from "../games.service";
import { RestApiService } from '../../common/restapi.service';
import { CartEntity } from '../../common/cart/cart.entity';
import { UserService } from '../../login/login/user.service';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  listOfCart: CartEntity[] = []
  game: Game;
  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    private location: Location,
    private _restApiService: RestApiService,
    private _userService: UserService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.getGame()
    if (this._userService.getUserLoggedIn()) {
      this.listOfCart = this._userService.getUserFull().cartWithQuality
    }
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getGameFromDB(id)
  }

  getGameFromDB(id: number) {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game = game[0])
  }

  goBack(): void {
    this.location.back();
  }

  passCartList(pushGameToRight: Game) {
    this.listOfCart.push({game: pushGameToRight, quantity: 1})
    // console.log("Pass this to Right", this.listOfCart)
  }
}