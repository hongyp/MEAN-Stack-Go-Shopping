import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthguardGuard } from './authguard.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from '../../not-found/not-found.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //     path: 'login/users',
    //     // component: UserComponent,
    //     pathMatch: 'prefix',
    //     children: [
    //         {
    //             path: ':name',
    //             component: UserComponent
    //         },
    //         {
    //             path: ":name/:id",
    //             component: UserComponent
    //         }
    //     ]
    // },
    {
        // This route is protected by AuthguardGuard
        path: 'login/dashboard',
        canActivate:[AuthguardGuard],
        component: DashboardComponent
    }
]

@NgModule(
    {
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [
            RouterModule
        ]
    }
)

export class LoginRoutingModule {}