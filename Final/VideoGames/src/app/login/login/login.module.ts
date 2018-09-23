import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthguardGuard } from './authguard.guard';

import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent, 
    LoginFormComponent,
    DashboardComponent, 
    UserComponent,
  ],
  providers: [
    UserService,
    AuthguardGuard
  ]
})
export class LoginModule { }
