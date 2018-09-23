import { CountryLookupService } from './../../../common/lookup/country-lookup/country-lookup.service';
import { CountryLookup } from './../../../common/lookup/country-lookup/country-lookup';
import { FormErrors } from './../../../common/registration/registrationError';
import { UserContactInfo } from './userContactInfo';
import { UserService } from './../../../login/login/user.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';
import { RegistrationViewModel } from '../registration/registrationViewModel';
import { User } from '../../../signup/signup';
import { RestApiService } from '../../../common/restapi.service';

declare var $:any;

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  editBtnIsClick : boolean;
  contactInfo: UserContactInfo
  newContactInfo: UserContactInfo

  countryLookupList: CountryLookup[];

  formErrors

  constructor(
              private _userService : UserService,
              private _restApiService: RestApiService,
              private countryLookupService: CountryLookupService) {
              }

  ngOnInit() {
    // console.log(this._accountService.getFormOfUser())
    this.editBtnIsClick = false;
    this.newContactInfo = new UserContactInfo();
    this.formErrors = FormErrors
    this.countryLookupList = this.countryLookupService.getCountriesLookup();
    this.contactInfo = this._userService.getUserFull().userContactInfo 
    
  }

  editClick(){
    this.editBtnIsClick = true;
  }

  saveClick(){
    this._userService.getUserFull().userContactInfo = this.newContactInfo
    this._restApiService.update(this._userService.getUserFull())
    console.log(this.newContactInfo)
    this.contactInfo = this.newContactInfo;
    this.editBtnIsClick = false;
  }

}
