import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ViewChild } from '@angular/core';
import { CountryLookup } from '../../../common/lookup/country-lookup/country-lookup';
import { CountryLookupService } from '../../../common/lookup/country-lookup/country-lookup.service';
import { PlatformLookupService } from '../../../common/lookup/platform-lookup/platform-lookup.service';
import { AccountService } from '../../account.service';
import { RegistrationViewModel } from './registrationViewModel';
import { RestApiService } from '../../../common/restapi.service';
import { FormErrors, ValidationMessages } from '../../../common/registration/registrationError';
import { User } from '../../../signup/signup';
import { UserService } from '../../../login/login/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild("registrationForm") registrationForm: NgForm;
  registrationViewModel: RegistrationViewModel; // 2 way binding, whole form
  countryLookupList: CountryLookup[];
  platformLookupList: String[];
  platformFieldList: String[];
  formErrors;
  validationMessages;
  currentUser: User;
  constructor(private countryLookupService: CountryLookupService,
              private patformLookupService: PlatformLookupService,
              private _accountService: AccountService,
              private _router: Router,
              private _restApiService: RestApiService,
              private _userService: UserService) { 
    this.registrationViewModel = new RegistrationViewModel();
  }
  
  ngOnInit() {
    this.countryLookupList = this.countryLookupService.getCountriesLookup();
    this.platformLookupList = this.patformLookupService.getPlatformsLookup();
    this.initializePlatformFieldList();
    this.formErrors = FormErrors
    this.validationMessages = ValidationMessages
    this.currentUser = this._userService.getUserFull()
    console.log("Current User: ", this.currentUser)
    if (this.currentUser.userDetailInfo == null) {
      console.log("Up")
      this.currentUser.userDetailInfo = new RegistrationViewModel();
    }
  }

  createForm() {
    console.log(this.currentUser)
    this._accountService.createFormOfUser(this.currentUser.userDetailInfo)
    this._router.navigate(['account/information'])
  }

  // Set the unique id name to each one
  private initializePlatformFieldList() {
    this.platformFieldList = [];
    for (let platform of this.platformLookupList) {
      this.platformFieldList.push(platform.trim().replace(" ","").toLocaleLowerCase())
    }
  }
  
  // Check box
  addOrRemovePlatforms(value: String) {
    var indexOfEntry = this.currentUser.userDetailInfo.platforms.indexOf(value);
    console.log(value)
    console.log(indexOfEntry)
    if (indexOfEntry < 0) {
      this.currentUser.userDetailInfo.platforms.push(value)
    } 
    else {
      this.currentUser.userDetailInfo.platforms.splice(indexOfEntry, 1);
    }
  }
  // use (change) in html
  // Uncomment the require
  ngAfterViewChecked() {
    this.formChanged();
  }
  private formChanged() {
    if(this.registrationForm) {
      this.registrationForm.valueChanges.subscribe(data => this.onValueChanged(data))
    }
  }
  private onValueChanged(data?: any) {
    if(this.registrationForm) {
      const form = this.registrationForm.form;

      for(const field in FormErrors) {
        this.formErrors[field] = '';
        const control =  form.get(field);

        if(control && control.dirty && control.invalid) {
          const messages = this.validationMessages[field]

          for(const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }

}
