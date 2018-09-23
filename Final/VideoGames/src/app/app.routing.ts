import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    // lazy load
    // {
    //     path: 'games',
    //     loadChildren: 'app/games/games.module#GamesModule'
    // },
    {
        path: '',
        // Change the main page
        // component: HomeComponent,
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule(
    {
        imports: [RouterModule.forRoot(routes, { preloadingStrategy : PreloadAllModules})],
        exports: [RouterModule]
    }
)

export class AppRoutingModule {}