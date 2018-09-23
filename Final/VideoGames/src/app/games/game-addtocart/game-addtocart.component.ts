import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameDetailComponent } from "../game-detail/game-detail.component";
import { Game } from '../../common/games/game';
import {GamesService} from "../games.service";
import {GameWithQuality} from "../game";
import { RestApiService } from '../../common/restapi.service';
import { UserService } from '../../login/login/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-addtocart',
  templateUrl: './game-addtocart.component.html',
  styleUrls: ['./game-addtocart.component.scss']
})
export class GameAddtocartComponent implements OnInit {

  gameneedadd: GameWithQuality;
  alertcontent: string;
  @Input()
  selectedAddGame: Game;
  game: Game;

  saveGame() {
    this.selectedAddGame = null;
    
  }

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    private location: Location,
    private _restApiService: RestApiService,
    private _userService: UserService,
    private _router: Router
  ) {

    this.gameneedadd = this.gameService.gametoadd;

    this.alertcontent = null
  }

  ngOnInit() {
    this.getGame();
  }


  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getGameFromDB(id)
  }

  getGameFromDB(id: number) {
    this._restApiService.getGameFormDB(id)
    .then(game => this.game = game[0])
  }

  getGametoadd() {
    this.gameneedadd.game = this.game;
    this.gameneedadd.quantity = 0;
  }

  @Output() emitCartList = new EventEmitter()
  onAddToCart(){
    let elem1: HTMLElement = document.getElementById('alertsuccess');
    elem1.setAttribute("style", "display: block");
    if (this._userService.getUserLoggedIn()) {
      var findItem = this._userService.getUserFull().cartWithQuality.find(item => item.game.id.toString().trim() == this.game.id.toString().trim())
      console.log("Find Item: ", findItem)
      if (findItem) {
        this.alertcontent = "The game is in your cart now!"
        alert("Already exited in cart!")
        console.log("Find Item: ", findItem)
      } else {
        this.alertcontent = "Add to Cart Successfully!"
        alert("Success!")
        this.gameService.addGameToCart(this.game);
        // console.log("newList: ", this._userService.getUserFull().cartWithQuality)
        this.emitCartList.emit(this.game)
        // console.log("Add new one: ", this.game)
      }
    } else {
      this._router.navigate(["/login"])
    }
  }

  onAddToWishlist(){
    let elem1: HTMLElement = document.getElementById('alertsuccess');
    elem1.setAttribute("style", "display: block");
    if (this._userService.getUserLoggedIn()) {
      var findItem = this._userService.getUserFull().wishList.find(item => item.game.id.toString().trim() == this.game.id.toString().trim())
      console.log("Find Item: ", findItem)
      if (findItem) {
        this.alertcontent = "The game is in your wishlist now!"
        alert("Already exited in wishlist!")
      } else {
        this.alertcontent = "Add to Wishlist Successfully!"
        alert("Success!")
        this.gameService.addGameToWishList(this.game);
      }
    } else {
      this._router.navigate(["/login"])
    }
  }
}
