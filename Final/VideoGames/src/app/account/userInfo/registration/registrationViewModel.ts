import { Gender } from "./gender";

export class RegistrationViewModel {
    firstName: String;
    lastName: String;
    email: String;
    phone: number;
    introduction: String;
    dop: Date;
    country: String;
    age: number;
    platforms: String[];
    gender: Gender;
    photo: File

    constructor(firstName: String="", lastName: String="", 
                email:String="", phone:number=123456789,
                introduction: String="", country: String="", 
                age: number = 20, platforms: String[]=[]) {
        this.firstName = firstName,
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.introduction = introduction;
        this.country = country;
        this.age = age;
        this.platforms = platforms;
    }
}