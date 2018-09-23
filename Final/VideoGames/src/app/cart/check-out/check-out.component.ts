import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentInformation } from '../../common/cart/payment-information';
import { BillingAddress } from '../../common/cart/billing-address';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor(private _router: Router, private _cartService: CartService) { }

  ngOnInit() {
    this.paymentForm = new PaymentInformation();
    this.billingForm = new BillingAddress()
  }

  canNextStep() {
    if (this.paymentForm.formCompleted && this.billingForm.formCompleted) {
      this._cartService.setPaymentInfo(this.paymentForm)
      this._cartService.setBillingForm(this.billingForm)
      this._router.navigate(["cart/checkout/orderConfirmation"])
      console.log("Updata DB Here")
    } else {
      alert("Please Sumit the information")
    }
  }

  paymentForm: PaymentInformation
  billingForm: BillingAddress

  activeMethod(method: String) {
    return this.paymentForm.method.toString() == method
  }

  paymentDetailForm(paymentDetailForm: PaymentInformation) {
    this.paymentForm = paymentDetailForm
  }

  billingInfoForm(billingInfoForm: BillingAddress) {
    this.billingForm = billingInfoForm
  }
}
