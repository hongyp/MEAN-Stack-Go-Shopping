import { Injectable } from '@angular/core';

import { NgForm } from '@angular/forms';
import { RegistrationViewModel } from './userInfo/registration/registrationViewModel';
import { UserService } from '../login/login/user.service';
import { RestApiService } from '../common/restapi.service';

@Injectable()
export class AccountService {

    private userForm: RegistrationViewModel;

    constructor(private _loginService: UserService,
                private _restApiService: RestApiService) { }

    createFormOfUser(userForm: RegistrationViewModel) {
        this.userForm = userForm
        this._loginService.user.userDetailInfo = this.userForm
        // console.log("Account Service, User's Full Info, Here need to update DB", this._loginService.user)
        // Connect to DB
        this._restApiService.update(this._loginService.user)
        .catch(err => console.log(err))
        console.log("Account Service, User's Full Info, Here need to update DB", this._loginService.user)
    }

    getFormOfUser() {
        return this.userForm
    }

}
