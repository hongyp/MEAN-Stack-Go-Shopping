export class User {

    constructor(
        public _id: number = Math.floor(Math.random()*100),
        public first_name: String = "",
        public last_name: String = "",
        public email: String = "",
        public editable: boolean = false
    ){}
}
