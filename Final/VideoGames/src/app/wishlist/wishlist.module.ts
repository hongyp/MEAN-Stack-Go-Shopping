import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { WishlistRoutingModule } from './wishlist.routing';
import { CommonModule } from '../common/common.module';

@NgModule(
    {
        imports: [BrowserModule, FormsModule, WishlistRoutingModule, CommonModule],
        declarations: [WishlistListComponent]
    }
)

export class WishlistModule {}