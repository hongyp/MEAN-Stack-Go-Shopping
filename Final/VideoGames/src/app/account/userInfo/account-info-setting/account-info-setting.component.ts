import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PlatformLookupService } from '../../../common/lookup/platform-lookup/platform-lookup.service';
import { RestApiService } from '../../../common/restapi.service';
import { UserService } from '../../../login/login/user.service';
import { FormErrors, ValidationMessages } from '../../../common/registration/registrationError';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-account-info-setting',
  templateUrl: './account-info-setting.component.html',
  styleUrls: ['./account-info-setting.component.scss']
})
export class AccountInfoSettingComponent implements OnInit {

  @ViewChild("accountForm") accountForm: NgForm;
  userName: String;
  newUserName: String;
  password : String;
  newPassword: String;
  platforms: String[];

  editBtnIsClick : boolean;
  platformLookupList: String[];
  platformFieldList: String[];
  formErrors;
  validationMessages;

  constructor(
    private patformLookupService: PlatformLookupService,
    private _restApiService: RestApiService,
    private _userService: UserService) { }

  ngOnInit() {
    this.userName = this._userService.getUserFull().userName;
    this.platforms = this._userService.getUserFull().platforms;
    this.password = this._userService.getUserFull().password;
    this.platformLookupList = this.patformLookupService.getPlatformsLookup();
    this.initializePlatformFieldList();
    this.formErrors = FormErrors
    this.validationMessages = ValidationMessages
    
  }

  private initializePlatformFieldList() {
    this.platformFieldList = [];
    for (let platform of this.platformLookupList) {
      this.platformFieldList.push(platform.trim().replace(" ","").toLocaleLowerCase())
    }
  }
  
  // Check box
  addOrRemovePlatforms(value: String) {
    var indexOfEntry = this._userService.getUserFull().platforms.indexOf(value);
    console.log(value)
    console.log(indexOfEntry)
    if (indexOfEntry < 0) {
      this._userService.getUserFull().platforms.push(value)
  
    } 
    else {
      this._userService.getUserFull().platforms.splice(indexOfEntry, 1);
    }
  }
  // use (change) in html
  // Uncomment the require
  ngAfterViewChecked() {
    this.formChanged();
  }
  private formChanged() {
    if(this.accountForm) {
      this.accountForm.valueChanges.subscribe(data => this.onValueChanged(data))
    }
  }
  private onValueChanged(data?: any) {
    if(this.accountForm) {
      const form = this.accountForm.form;

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

  editClick(){
    this.editBtnIsClick = true;
  }

  saveClick(){
    this._userService.getUserFull().userName = this.newUserName
    this._userService.getUserFull().password = this.newPassword
    this._userService.getUserFull().platforms = this.platforms
    this.userName = this.newUserName;
    this.password = this.newPassword;
    this.editBtnIsClick = false;
    this._restApiService.update(this._userService.getUserFull())
  }

}

