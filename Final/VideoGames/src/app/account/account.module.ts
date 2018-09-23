import { AccountInfoBillingComponent } from './userInfo/account-info-billing/account-info-billing.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account.routing';
import { AccountComponent } from './account/account.component';
import { RegistrationComponent } from './userInfo/registration/registration.component';
import { AccountService } from './account.service';
import { UserInformationComponent } from './userInfo/user-information/user-information.component';
import { AccountInfoPaymentComponent } from './userInfo/account-info-payment/account-info-payment.component';
import { AccountInfoSettingComponent } from './userInfo/account-info-setting/account-info-setting.component';

@NgModule(
    {
        imports: [  
            BrowserModule, 
            FormsModule, 
            AccountRoutingModule,
        ],
        declarations: [
            AccountComponent,
            RegistrationComponent,
            UserInformationComponent,
            AccountInfoBillingComponent,
            AccountInfoPaymentComponent,
            AccountInfoSettingComponent
        ],
        providers: [
            AccountService
        ]
    }
)

export class AccountModule {}