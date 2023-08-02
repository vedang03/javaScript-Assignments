const User = require("./User")
// const Contact = require("./Contact")


let admin1 = User.newAdmin("Vedang", "male", 22);
let user1 = admin1.createUser("Tom", "male", 14);
let user2 = admin1.createUser("Henna", "female", 23);
user1.createContact("Aashish", "India");

user1.createContactDetails(0, "Work", 9999999999);

// user1.updateContactDetails(0,"typeOfContact","Home")
console.log(user1.getContactDetails(0));
console.log(user1.deleteContactDetails(0));
console.log(user1.getContactDetails(0));