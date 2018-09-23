
import { UserContactInfo } from './../account/userInfo/user-information/userContactInfo';
import { RegistrationViewModel } from "../account/userInfo/registration/registrationViewModel";
import { Wishlist } from "../common/wishlists/wishlist";
import { GameWithQuality } from "../games/game";
import { History } from "../common/user/history";
import { OrderedListWithStatus } from "../common/user/orderedList";
import { PaymentInformation } from "../common/cart/payment-information";
import { BillingAddress } from "../common/cart/billing-address";
import { completedOrder } from "../common/user/compleOrder";

export class User {
    constructor(
        public _id: String = "",
        public userName: String = "",
        public email: String = "",
        public password :String = "",
        public userDetailInfo: RegistrationViewModel = null,
        public wishList: GameWithQuality[] = [],
        public cartWithQuality: GameWithQuality[] = [],

        public history: History[] = [],
        public paymentCard: PaymentInformation = null,
        public billingAddress: BillingAddress = null,
        public orderList: completedOrder[] = [],
        public userContactInfo : UserContactInfo = new UserContactInfo(),
        public platforms: String[] = []
    ) {}
    
}