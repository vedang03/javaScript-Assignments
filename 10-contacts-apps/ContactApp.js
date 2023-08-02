const User = require("./User")
// const Contact = require("./Contact")


let admin1 = User.newAdmin("Vedang", "male", 22);
let user1 = admin1.createUser("Tom", "male", 14);
user1.createContact("Aashish", "India");
user1.createContactDetails(0, "asd", 9999999999);
user1.createContactDetails(0,"asswdew",888888888)
// console.log(user1.getContactDetails(0))
user1.updateContactDetails(0,"typeOfContact","home",0)
console.log(user1.getContactDetails(0))
user1.deleteContactDetails(0,1)

console.log(user1.getContactDetails(0))


