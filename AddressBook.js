class Contact {
    //constructors
    constructor(...params) {
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNumber = params[6]
        this.emailId = params[7]
    }
}
let contact1 = new Contact("Sai", "Deeksha", "BHEL", "Hyderabad","Telangana","500019","8919608260","saideeksha@gmail.com");
console.log(contact1); 
let contact2 = new Contact("Sai", "Divya", "Miyapur", "Hyderabad","Telangana","500052","8919787878","saidivya@gmail.com");
console.log(contact2); 