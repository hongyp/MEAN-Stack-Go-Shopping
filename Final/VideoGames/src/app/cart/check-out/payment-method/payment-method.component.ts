import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PaymentInformation } from '../../../common/cart/payment-information';
import { UserService } from '../../../login/login/user.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  paymentCardDetail: PaymentInformation

  userPayment: PaymentInformation = new PaymentInformation("Visa", 1234123412341234, "Holder name", 1, 2017, 111, false)

  constructor(private _userService: UserService) { 
  }

  ngOnInit() {
    // Link to the current user, check whether show the info
    console.log("initial....")
    this.paymentCardDetail = this.userPayment
    this.paymentCardDetail.cvCode = Number("")
    if (!this.paymentCardDetail.rememberInfo) {
      this.paymentCardDetail = new PaymentInformation()
    }
  }

  @Output() emitPaymentForm = new EventEmitter()
  createPaymentDetail() {
    this.paymentCardDetail.formCompleted = true;
    this.emitPaymentForm.emit(this.paymentCardDetail)
    this._userService.getUserFull().paymentCard = this.paymentCardDetail
    // console.log("Update DB Here for payment detail ", this.paymentCardDetail)
  }

  rememberForm() {
    this.paymentCardDetail.rememberInfo = !this.paymentCardDetail.rememberInfo
    this._userService.getUserFull().paymentCard = this.paymentCardDetail
    // console.log("Update DB Here ", this.paymentCardDetail.rememberInfo)
  }

}
