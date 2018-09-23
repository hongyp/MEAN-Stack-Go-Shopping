import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { AuthguardGuard } from '../login/login/authguard.guard';

const routes: Routes = [
    {
        path: 'wishlist',
        // canActivate: [AuthguardGuard],
        component: WishlistListComponent
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class WishlistRoutingModule {}