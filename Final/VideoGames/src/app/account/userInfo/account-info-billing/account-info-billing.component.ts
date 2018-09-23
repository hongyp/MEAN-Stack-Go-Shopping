import { CountryLookupService } from './../../../common/lookup/country-lookup/country-lookup.service';
import { CountryLookup } from './../../../common/lookup/country-lookup/country-lookup';
import { Component, OnInit } from '@angular/core';
import { BillingAddress } from '../../../common/cart/billing-address';
import { UserService } from '../../../login/login/user.service';
import { RestApiService } from '../../../common/restapi.service';
import { FormErrors } from '../../../common/registration/registrationError';

@Component({
  selector: 'app-account-info-billing',
  templateUrl: './account-info-billing.component.html',
  styleUrls: ['./account-info-billing.component.scss']
})
export class AccountInfoBillingComponent implements OnInit {

  editBtnIsClick : boolean;
  billingInfo: BillingAddress
  newBillingInfo: BillingAddress;
  formErrors
  countryLookupList: CountryLookup[];

  constructor(
              private _userService : UserService,
              private _restApiService: RestApiService,
              private countryLookupService: CountryLookupService
  ) { }

  ngOnInit() {
    this.editBtnIsClick = false;
    this.newBillingInfo = new BillingAddress();
    this.formErrors = FormErrors
    this.countryLookupList = this.countryLookupService.getCountriesLookup();
    this.billingInfo = this._userService.getUserFull().billingAddress 
  }

  editClick(){
    this.editBtnIsClick = true;
  }

  saveClick(){
    this._userService.getUserFull().billingAddress = this.newBillingInfo
    this._restApiService.update(this._userService.getUserFull())
    this.billingInfo = this.newBillingInfo;
    this.editBtnIsClick = false;
    console.log(this.newBillingInfo)
  }

}
