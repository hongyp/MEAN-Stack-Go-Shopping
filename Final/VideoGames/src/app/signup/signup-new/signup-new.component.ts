import { BillingAddress } from './../../common/cart/billing-address';
import { PaymentInformation } from './../../common/cart/payment-information';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../signup';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { RestApiService } from '../../common/restapi.service';
import { ViewChild } from '@angular/core';
import { UserContactInfo } from '../../account/userInfo/user-information/userContactInfo';

@Component({
  selector: 'app-signup-new',
  templateUrl: './signup-new.component.html',
  styleUrls: ['./signup-new.component.scss']
})
export class SignupNewComponent implements OnInit {

  newUser = new User();

  hasUser: Boolean;
  @Input() users: User[];

  constructor(private _signupService: SignupService, 
              private router: Router,
              private _restApiService: RestApiService) { }

  ngOnInit() {
  }

  @Output()
  createNewUserEvent = new EventEmitter();
  sigupDone: String;
  createNewUser() {
    // Link to DB
    this._restApiService.gerUser(this.newUser.userName)
    .then(user => {
      if (user.length == 0) {
        this.newUser._id = String(new Date().getTime())
        // emit to parent component, can delete later
        this.createNewUserEvent.emit(this.newUser);
        this.hasUser = false;
        this.newUser.cartWithQuality = []
        this.newUser.orderList = []
        this.newUser.wishList = []
        this.newUser.platforms = []
        this.newUser.userContactInfo = new UserContactInfo();
        this.newUser.paymentCard = new PaymentInformation();
        this.newUser.billingAddress = new BillingAddress();
        // post new user to DB
        this._restApiService.create(this.newUser)
        .catch(err => console.log(err))
        this.newUser = new User();
        this.sigupDone = "done"
      } else {
        console.log("username has been used")
        this.hasUser = true;
      }
    })

    // // call server to save
    // if (this.userExsited(this.newUser)) {
    //   this.hasUser = true;
    // } else {
    //   this.newUser._id = String(new Date().getTime())
    //   // emit to parent component, can delete later
    //   this.createNewUserEvent.emit(this.newUser);
    //   this.hasUser = false;
    //   // post new user to DB
    //   this._restApiService.create(this.newUser)
    //   .catch(err => console.log(err))
    // }
    // this.newUser = new User();
  }

  userExsited(user: User) {
    return this.users.filter(data => data.userName == user.userName).length
  }

  getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log("Inside Base64: ", reader.result);
      // console.log("imgURL: ", imgURL);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

 getBase64_2(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
 }

}
