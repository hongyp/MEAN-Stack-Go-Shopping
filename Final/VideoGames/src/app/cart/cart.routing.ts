import { GameListComponent } from './../games/game-list/game-list.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AuthguardGuard } from '../login/login/authguard.guard';

const routes: Routes = [
    {
        path: 'cart',
        canActivate: [AuthguardGuard],
        component: CartListComponent
    },
    {
        path: 'cart/checkout',
        canActivate: [AuthguardGuard],
        component: CheckOutComponent
    },
    {
        path: 'cart/checkout/orderConfirmation',
        canActivate: [AuthguardGuard],
        component: OrderConfirmationComponent
    },
    {
        path: 'cart/games',
        canActivate: [AuthguardGuard],
        component: GameListComponent
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class CartRoutingModule {}