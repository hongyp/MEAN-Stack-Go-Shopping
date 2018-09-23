export class BillingAddress {
    firstName: string;
    lastName: string;
    billingAddress1:string;
    billingAddress2:string;
    city: string;
    state: string;
    country:string;
    zipCode: number;
    phoneNumber: number;
    rememberInfo: Boolean;
    formCompleted: Boolean

    constructor(firstName: string = "",
                lastName: string = "", 
                billingAddress1:string = "", 
                billingAddress2:string = "", 
                city: string = "",
                state: string = "", 
                country:string = "", 
                zipCode: number = 0,
                phoneNumber: number = 0,
                rememberInfo = false,
                formCompleted = false
                ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.billingAddress1 = billingAddress1;
        this.billingAddress2 = billingAddress2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.rememberInfo = rememberInfo;
        this.formCompleted = formCompleted
    }

}