import { Component, OnInit } from '@angular/core';
import { PaymentInformation } from '../../../common/cart/payment-information';
import { UserService } from '../../../login/login/user.service';
import { RestApiService } from '../../../common/restapi.service';
import { FormErrors } from '../../../common/registration/registrationError';

@Component({
  selector: 'app-account-info-payment',
  templateUrl: './account-info-payment.component.html',
  styleUrls: ['./account-info-payment.component.scss']
})
export class AccountInfoPaymentComponent implements OnInit {

  editBtnIsClick : boolean;
  paymentInfo: PaymentInformation
  newPaymentInfo: PaymentInformation
  formErrors

  constructor(private _userService : UserService,
              private _restApiService: RestApiService) { }

  ngOnInit() {
    this.editBtnIsClick = false;
    this.newPaymentInfo = new PaymentInformation();
    this.formErrors = FormErrors
    this.paymentInfo = this._userService.getUserFull().paymentCard
  }

  editClick(){
    this.editBtnIsClick = true;
  }

  saveClick(){
    this._userService.getUserFull().paymentCard = this.newPaymentInfo
    this._restApiService.update(this._userService.getUserFull())
    this.paymentInfo = this.newPaymentInfo;
    this.editBtnIsClick = false;
    console.log(this.newPaymentInfo)
  }

}
