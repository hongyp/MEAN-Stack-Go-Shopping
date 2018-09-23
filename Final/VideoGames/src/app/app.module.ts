import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { GamesModule } from './games/games.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login/login.module';
import { AccountModule } from './account/account.module';
import { SignupService } from './signup/signup.service';
import { AuthguardGuard } from './login/login/authguard.guard';
import { UserService } from './login/login/user.service';
import { RestApiService } from './common/restapi.service';
import { FooterComponent } from './footer/footer.component';
import { CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainNavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HomeModule,
    GamesModule,
    CartModule,
    WishlistModule,
    SignupModule,
    LoginModule,
    AccountModule,

    AppRoutingModule,
  ],
  providers: [SignupService, AuthguardGuard, UserService, RestApiService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
