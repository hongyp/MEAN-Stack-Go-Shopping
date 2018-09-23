export class PaymentInformation {
    method: string;
    cardNumber: number;
    cardHolder:string;
    expMonth:number;
    expYear: number;
    cvCode: number;
    rememberInfo: Boolean
    formCompleted: Boolean;

    constructor(method: string = "",
                cardNumber: number  = 0, 
                cardHolder:string = "", 
                expMonth:number = 0, 
                expYear: number = 0,
                cvCode: number = 0,
                rememberInfo = false,
                completed = false
                ) {
        this.method = method;
        this.cardNumber = cardNumber;
        this.cardHolder = cardHolder;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvCode = cvCode
        this.rememberInfo = rememberInfo
        this.formCompleted = completed
    }
}