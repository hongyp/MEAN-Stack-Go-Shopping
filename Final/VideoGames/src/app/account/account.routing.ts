import { AccountInfoBillingComponent } from './userInfo/account-info-billing/account-info-billing.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccountComponent } from './account/account.component';
import { AuthguardGuard } from '../login/login/authguard.guard';
import { RegistrationComponent } from './userInfo/registration/registration.component';
import { UserInformationComponent } from './userInfo/user-information/user-information.component';
import { AccountInfoPaymentComponent } from './userInfo/account-info-payment/account-info-payment.component';
import { AccountInfoSettingComponent } from './userInfo/account-info-setting/account-info-setting.component';

const routes: Routes = [
    {
        path: 'account',
        canActivate: [AuthguardGuard],
        component: AccountComponent
    },
    {
        path: 'account/registe',
        canActivate: [AuthguardGuard],
        component: RegistrationComponent
    },
    {
        path: 'account/information',
        canActivate: [AuthguardGuard],
        component: UserInformationComponent
    },
    {
        path: 'account/information/billing',
        canActivate: [AuthguardGuard],
        component: AccountInfoBillingComponent
    },
    {
        path: 'account/information/payment',
        canActivate: [AuthguardGuard],
        component: AccountInfoPaymentComponent
    },
    {
        path: 'account/information/setting',
        canActivate: [AuthguardGuard],
        component: AccountInfoSettingComponent
    }

]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class AccountRoutingModule {}