import { Injectable } from '@angular/core';
import { PaymentInformation } from '../common/cart/payment-information';
import { BillingAddress } from '../common/cart/billing-address';
import { CartEntity } from '../common/cart/cart.entity';

@Injectable()

export class CartService {

  constructor() { }

  paymentForm: PaymentInformation;
  billingForm: BillingAddress;
  itemsWithQuantity: CartEntity[]
  totalPrice: Number;

  setPaymentInfo(paymentForm: PaymentInformation) {
    this.paymentForm = paymentForm
  }
  setBillingForm(billingForm: BillingAddress) {
    this.billingForm = billingForm
  }
  setCartEntity(cartEntity: CartEntity[]) {
    this.itemsWithQuantity = cartEntity
  }
  setTotalPrice(price: Number) {
    this.totalPrice = price
  }

  getPaymentInfo() {
      return this.paymentForm;
  }
  getBillingInfo() {
      return this.billingForm;
  }
  getCartWithEntity() {
      return this.itemsWithQuantity;
  }
  getTotalPrice() {
      return this.totalPrice;
  }
}