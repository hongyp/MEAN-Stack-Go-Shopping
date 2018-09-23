import { GamesService } from './../../games/games.service';
import { GameWithQuality } from '../../games/game';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../common/restapi.service';
import { UserService } from '../../login/login/user.service';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent implements OnInit {

  listOfWishlist: GameWithQuality[];
  wishListIsEmpty = false;
  

  constructor(private apiService: RestApiService,
              private gameService : GamesService,
              private _userService : UserService) { 
              }

  ngOnInit() {
    this.listOfWishlist = this._userService.getUserFull().wishList;
    if (this.listOfWishlist.length == 0) {
      this.wishListIsEmpty = true
    }else{
      this.wishListIsEmpty = false;
    }
    console.log(this.listOfWishlist)
  }

  addClass(event) {
    event.target.classList.add('ok'); // To ADD
    // event.target.classList.remove('class1'); // To Remove
    // event.target.classList.contains('class2'); // To check
    // event.target.classList.toggle('class4'); // To toggle
  }


  

}
