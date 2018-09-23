import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BillingAddress } from '../../../common/cart/billing-address';
import { UserService } from '../../../login/login/user.service';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.scss']
})
export class BillingInformationComponent implements OnInit {

  billingAddressInfo: BillingAddress;

  userbillAdd: BillingAddress = new BillingAddress("fname","lname","add1","add2","city","AA","country",21480,123456789,false)

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.billingAddressInfo = this.userbillAdd
    if (!this.billingAddressInfo.rememberInfo) {
      this.billingAddressInfo = new BillingAddress();
    }

  }

  @Output() emitBillingForm = new EventEmitter()
  createBillingAddress() {
    this.billingAddressInfo.formCompleted = true
    this._userService.getUserFull().billingAddress = this.billingAddressInfo
    this.emitBillingForm.emit(this.billingAddressInfo)
    // console.log("Update DB Here", this.billingAddressInfo)
  }

  rememberForm() {
    this.billingAddressInfo.rememberInfo = !this.billingAddressInfo.rememberInfo
    this._userService.getUserFull().billingAddress = this.billingAddressInfo
    // console.log("Update DB Here", this.billingAddressInfo.rememberInfo)
  }

}
