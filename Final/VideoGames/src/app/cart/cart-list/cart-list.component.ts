import { GamesService } from './../../games/games.service';
import { CartEntity } from './../../common/cart/cart.entity';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Game } from '../../common/games/game';
import { CartService } from '../cart.service';
import { UserService } from '../../login/login/user.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartEntities: CartEntity[];
  totalSum : number; // will hold the total sum that the user needs to pay

  constructor(private gameService : GamesService, private _cartService: CartService, private _userService: UserService) { 
  }

  cartIsEmpty = false;
  itemCount;

  ngOnInit() {
    // Here get list form DB Cart
    // this.cartEntities = this.list
    this.cartEntities = this._userService.getUserFull().cartWithQuality
    this.calcTotalSum();
    if (this.cartEntities.length == 0) {
      this.cartIsEmpty = true
    }
    this.itemCount = this.cartEntities.length
  }

  calcTotalSum () {
      let totalSum1 = 0;
      this.cartEntities.forEach(function(entity) {
        totalSum1 += entity.quantity * Number(entity.game.price);
      });
      this.totalSum = totalSum1;
      if (this.cartEntities.length == 0) {
        this.cartIsEmpty = true
      }
      this.itemCount = this.cartEntities.length
      this.totalPay = totalSum1
  };
  
  changeQuantity (gameId:number, valueChange:number) {

    // Update User cart information of DB
      let cartEntry = this.cartEntities.find(cartEntry => cartEntry.game.id === gameId);
      let newValue = cartEntry.quantity + valueChange;
      
      if(newValue > 0) {
        cartEntry.quantity = newValue;
        this.calcTotalSum();
      } 
    };
  
  removeItem(item: CartEntity) {
        // Remove Item from DB
      var index = this.cartEntities.indexOf(item, 0)
      this.cartEntities.splice(index, 1)
      this.calcTotalSum();
    }


  clearCartEntity() {
    this.cartEntities = [];   
    this.calcTotalSum();
  }

  totalPay;
  submitItemList(){
    this.calcTotalSum()
    this._cartService.setCartEntity(this.cartEntities)
    this._cartService.setTotalPrice(this.totalPay)
    this._userService.getUserFull().cartWithQuality = this.cartEntities
    // console.log("items", this.cartEntities)
  }
}
