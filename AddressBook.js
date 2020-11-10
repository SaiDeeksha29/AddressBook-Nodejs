const nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
const addressRegex = RegExp('^[A-Za-z0-9/,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-Z]{4,}$');
const zipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
const phoneRegex = RegExp('^[1-9]{1}[0-9]{9}$');
const emailIdRegex = RegExp('^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$');
class Contact {
    //constructors
    constructor(...params) {
        if (!nameRegex.test(params[0])) throw "First Name is incorrect"
        {
            this.firstName = params[0];
        }
        if (!nameRegex.test(params[1])) throw "Last Name is incorrect"
        {
            this.lastName = params[1];
        }
        if (!addressRegex.test(params[2])) throw "Address is incorrect"
        {
            this.address = params[2];
        }
        if (!cityStateRegex.test(params[3])) throw "City is incorrect"
        {
            this.city = params[3];
        }
        if (!cityStateRegex.test(params[4])) throw "State is incorrect"
        {
            this.state = params[4];
        }
        if (!zipRegex.test(params[5])) throw "Zip is incorrect"
        {
            this.zip = params[5];
        }
        if (!phoneRegex.test(params[6])) throw "Phone Number is incorrect"
        {
            this.phoneNumber = params[6];
        }
        if (!emailIdRegex.test(params[7])) throw "Email Id is incorrect"
        {
            this.emailId = params[7];
        }
    }
}
try {
    let contact1 = new Contact("Sai", "Deeksha", "BHEL", "Hyderabad", "Telangana", "500019", "8919608260", "saideeksha@gmail.com");
    console.log(contact1);
} catch (e) {
    console.error(e);
}
try {
    let contact2 = new Contact("Sai", "Divya", "Miyapur", "Hyderabad", "Telangana", "500052", "8919787878", "saidivya@gmail.com");
    console.log(contact2);
} catch (e) {
    console.error(e);
}
