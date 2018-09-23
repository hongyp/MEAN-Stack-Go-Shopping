import { PaymentInformation } from "../cart/payment-information";
import { BillingAddress } from "../cart/billing-address";
import { CartEntity } from "../cart/cart.entity";



export class completedOrder {

    paymentDetail: PaymentInformation;
    billingDetail: BillingAddress;
    shoppingList: CartEntity[];
    totalPrice: Number;
    time: String;

    constructor(
        paymentDetail: PaymentInformation,
        billingDetail: BillingAddress,
        shoppingList: CartEntity[],
        totalPrice: Number,
        time: String
    ) {
        this.paymentDetail = paymentDetail;
        this.billingDetail = billingDetail;
        this.shoppingList = shoppingList;
        this.totalPrice = totalPrice;
        this.time = time
    }

}