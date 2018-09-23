import { Gender } from "./gender";

export class UserContactInfo {
    firstName : String;
    lastName : String;
    email : String;
    phone : number;
    introduction : String;
    country :String;
    age :number;
    dob : String;
    gender : Gender;

    constructor(firstName: String="", 
                lastName: String="", 
                email:String="", 
                phone:number=0,
                introduction: String="", 
                country: String="", 
                age: number = 0,
                dob: String = "",
                gender: Gender = 1) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.introduction = introduction;
        this.country = country;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
    }
}