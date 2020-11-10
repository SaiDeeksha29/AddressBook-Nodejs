const prompt = require('prompt-sync')();
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
let addressBook = new Array();
let choice = 0;
do {
    choice = prompt("Enter 1-Add contact 2-Edit Contact 3-Delete Contact 4-Count of Contacts 0-Exit: ");
    if (choice == 1) {
        let firstName1 = prompt("Enter the first name :");
        let lastName1 = prompt("Enter the last name :");
        let address1 = prompt("Enter the address :");
        let city1 = prompt("Enter the city:");
        let state1 = prompt("Enter the state :");
        let zip1 = prompt("Enter the zip code :")
        let phoneNumber1 = prompt("Enter the phone Number :");
        let emailId1 = prompt("Enter the emailId :");
        try {
            var contact = new Contact(firstName1, lastName1, address1, city1, state1, zip1, phoneNumber1, emailId1);
            addressBook.push(contact);
            var myData = addressBook;
            addressBook = Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);
            console.log(addressBook);
        } catch (e) {
            console.error(e);
        }
    }
    else if (choice == 2) {
        if (addressBook.length == 0) {
            console.log("List is empty");
        } else {
            let name = prompt("Enter the name whose contact you want to edit: ");
            let nameChange = prompt("Enter new name: ");
            let found = addressBook.find((contact) => contact.firstName == name);
            if (found == undefined) {
                console.log("No such contact");
            }
            else {
                addressBook.find((contact) => contact.firstName == name).firstName = nameChange;
                console.log(addressBook);
            }
        }
    }
    else if (choice == 3) {
        if (addressBook.length == 0) {
            console.log("List is empty");
        } else {
            let name = prompt("Enter the name whose contact you want to delete: ");
            let found = addressBook.find((contact) => contact.firstName == name);
            if (found == undefined) {
                console.log("No such contact");
            }
            else {
                addressBook.pop(addressBook.find((contact) => contact.firstName == name));
                console.log("Deleted successfully!")
                console.log(addressBook);
            }
        }
    }
    else if (choice == 4) {
        let numberOfContacts = addressBook.reduce(countOfContacts, 0);
        console.log("Count of contacts :" + numberOfContacts);
    }
} while (choice != 0);

function countOfContacts(count) {
    return count++;
}