import { completedOrder } from './../../common/user/compleOrder';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../login/login/user.service';
import { CartEntity } from '../../common/cart/cart.entity';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  orderList : completedOrder[]
  gameList :  CartEntity[]
  orderListIsEmpty : boolean

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.orderList = this._userService.getUserFull().orderList;
    
    if(this.orderList.length == 0){
      this.orderListIsEmpty = true
    }
    
  }

}
