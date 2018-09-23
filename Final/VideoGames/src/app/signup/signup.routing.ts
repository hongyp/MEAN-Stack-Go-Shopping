import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router/src/router';
import { SignupComponent } from './signup.component';

const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class SignupRoutingModule {}