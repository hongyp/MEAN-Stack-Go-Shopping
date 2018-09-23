
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart.routing';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CommonModule } from '../common/common.module';
import { BillingInformationComponent } from './check-out/billing-information/billing-information.component';
import { PaymentMethodComponent } from './check-out/payment-method/payment-method.component';

import { GamesService } from '../games/games.service';
import { CartService } from './cart.service';


@NgModule(
    {
        imports: [BrowserModule, FormsModule, CartRoutingModule, CommonModule],
        declarations: [CartListComponent,CheckOutComponent,BillingInformationComponent,PaymentMethodComponent,OrderConfirmationComponent],
        providers: [GamesService, CartService]
    }
)

export class CartModule {}