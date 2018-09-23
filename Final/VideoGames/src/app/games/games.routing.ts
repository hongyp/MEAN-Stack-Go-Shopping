import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent} from "./game-detail/game-detail.component";

const routes: Routes = [
    {
        path: 'games',
        component: GameListComponent
    },

    {
        path: 'games/detail/:id',
        component: GameDetailComponent
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class GamesRoutingModule {}
