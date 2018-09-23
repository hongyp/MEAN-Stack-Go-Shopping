import {Game} from '../games/game';
/***
* A typescript interface describing a cart item.
*
**/
export class CartEntity {

  quantity: number; // the number of instances the user wants to buy
  game: Game; // the product related to this cart entry

  constructor(
    game:Game,
    quantity:number
  ){
    this.game = game;
    this.quantity = quantity;
  }
}