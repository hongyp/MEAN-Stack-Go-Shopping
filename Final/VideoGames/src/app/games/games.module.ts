import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Ng2PaginationModule} from "ng2-pagination"

import { GameListComponent } from './game-list/game-list.component';
import { GamesRoutingModule } from './games.routing';
import { CommonModule } from '../common/common.module';
import { GamesProfileComponent } from './games-profile/games-profile.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameAddtocartComponent } from './game-addtocart/game-addtocart.component';
import { SortnavigatorComponent } from './games-sortnavigator/games-sortnavigator.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import {GamesService} from "./games.service";
import { GameSearchbarComponent } from './game-searchbar/game-searchbar.component';
import { GameCartListComponent } from './game-cart-list/game-cart-list.component';

@NgModule(
    {
        imports: [BrowserModule, FormsModule, CommonModule, GamesRoutingModule, Ng2PaginationModule],
        declarations: [GameListComponent, GamesProfileComponent, GameEditComponent, GameAddtocartComponent, SortnavigatorComponent, GameDetailComponent, GameSearchbarComponent, GameCartListComponent],
        providers: [GamesService]
    }
)

export class GamesModule {}
