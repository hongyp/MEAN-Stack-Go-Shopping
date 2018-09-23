import { BillingAddress } from './../../common/cart/billing-address';
import { Component, OnInit } from '@angular/core';
import { CartEntity } from '../../common/cart/cart.entity';
import { PaymentInformation } from '../../common/cart/payment-information';
import { CartService } from '../cart.service';
import { User } from '../../signup/signup';
import { UserService } from '../../login/login/user.service';
import { completedOrder } from '../../common/user/compleOrder';
import { RestApiService } from '../../common/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  
  constructor(private _cartService: CartService, 
              private _userSerice: UserService, 
              private _restApiService: RestApiService,
              private _router: Router) { }

  checkoutItemList : CartEntity[];
  paymentCardDetail : PaymentInformation;
  billingAddressInfo: BillingAddress;
  totalSum : Number;
  user: User
  orderTime : number
  receiptId : String

  ngOnInit() {
    this.user = this._userSerice.getUserFull()
    this.paymentCardDetail = this._userSerice.getUserFull().paymentCard
    this.billingAddressInfo = this._userSerice.getUserFull().billingAddress
    this.totalSum = this._cartService.getTotalPrice()
    this.checkoutItemList = this._userSerice.getUserFull().cartWithQuality
    this.orderTime = new Date().getTime()
    this.receiptId = String(this.orderTime)
  
    console.log("quantity: " + this.checkoutItemList[0].quantity)
  }

  completeOrder() {
    // console.log("Update DB here, Clean Cart and Add to history and Shipment")
    var order = new completedOrder(this.paymentCardDetail, this.billingAddressInfo, this.checkoutItemList, this.totalSum, String(new Date().getTime()))
    this._userSerice.getUserFull().orderList = this._userSerice.getUserFull().orderList.concat([order])
    this._userSerice.getUserFull().cartWithQuality = []
    this._restApiService.update(this._userSerice.getUserFull())
    this._router.navigate(["account"])
  }

}
