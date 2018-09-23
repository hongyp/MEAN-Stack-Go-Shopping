import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../login/login/user.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { GamesService } from '../games/games.service';
import { GameWithQuality } from '../games/game';
import { RestApiService } from '../common/restapi.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  cartLen;
  cartList: GameWithQuality[];
  userName;
  isLoggin = false;
  isRefresh = false;

  constructor(private _router: Router, 
              private _userService: UserService, 
              private _gamesService: GamesService,
              private _restApiService: RestApiService) { 
                
              }

  ngOnInit() {
    // IntervalObservable.create(1000)
    // .subscribe(() => {
      // if (this._userService.getUserLoggedIn()) {
      //   this.cartLen = this._userService.getUserFull().cartWithQuality.length;
      //   // console.log("Length: ", this.cartLen)
      //   this.cartList = this._userService.getUserFull().cartWithQuality.concat(this._gamesService.getCurrentList())
      //   this._gamesService.setCurrentList()
      //   this.userName = this._userService.getUserFull().userName
      //   this.isLoggin = this._userService.getUserLoggedIn()
      //   // console.log("List:", this.cartList)
      // }
    // })
    // console.log("Nav")
    this.notRefresh()
  }

  notRefresh() {
    if (!this.isRefresh) {
      this.isRefresh = false
      // console.log("DO not refresh")
    }
  }

  refresh() {
    // console.log("Refresh Cart")
    if (this._userService.getUserLoggedIn()) {
      this.cartLen = this._userService.getUserFull().cartWithQuality.length;
      // console.log("Length: ", this.cartLen)
      this.cartList = this._userService.getUserFull().cartWithQuality
      this._gamesService.setCurrentList()
      this.userName = this._userService.getUserFull().userName
      this.isLoggin = this._userService.getUserLoggedIn()
      // console.log("List:", this.cartList)
    }
  }

  // startRefresh() {
  //   IntervalObservable.create(1000)
  //   .subscribe(() => {
  //     if (this._userService.getUserLoggedIn()) {
  //       this.cartLen = this._userService.getUserFull().cartWithQuality.length;
  //       // console.log("Length: ", this.cartLen)
  //       this.cartList = this._userService.getUserFull().cartWithQuality.concat(this._gamesService.getCurrentList())
  //       this._gamesService.setCurrentList()
  //       this.userName = this._userService.getUserFull().userName
  //       this.isLoggin = this._userService.getUserLoggedIn()
  //       // console.log("List:", this.cartList)
  //     }
  //   })
  // }

  // when it is click, it is set to active
  isActive(url: String): boolean {
    return url == this._router.url;
  }

  signout() {
    this._userService.isUserLoggedIn = false;
    this._userService.user = null
  }

  submitCurrentCart() {
    if (this.cartList.length > 0) {
      this._userService.getUserFull().cartWithQuality = this.cartList;
      this._restApiService.update(this._userService.getUserFull())
      this._gamesService.setCurrentList()
    }
  }
  
}
