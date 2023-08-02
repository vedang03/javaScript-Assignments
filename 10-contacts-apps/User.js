const Contact = require("./Contact");

class User {
  static ID = 0;
  static allUsers = [];
  constructor(name, gender, age, isAdmin) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.isAdmin = isAdmin;
    this.id = User.ID++;
    this.contacts = [];
  }
  static newAdmin(name, gender, age) {
    if (typeof name != "string") {
      return "Name should be a string";
    }
    if (typeof gender != "string") {
      return "Gender should be a string";
    }
    if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") {
      return "Gender should be male or female";
    }
    if (typeof age != "number") {
      return "Age should be a number";
    }
    return new User(name, gender, age, true);
  }
  //Creating a new User
  createUser(name, gender, age) {
    if (!this.isAdmin) {
      return "Only admin can create new users";
    }
    if (typeof name != "string") {
      return "Name should be a string";
    }
    if (typeof gender != "string") {
      return "Gender should be a string";
    }
    if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") {
      return "Gender should be male or female";
    }
    if (typeof age != "number") {
      return "Age should be a number";
    }
    let newUser = new User(name, gender, age, false);
    User.allUsers.push(newUser);
    return newUser;
  }
  //Reading all users
  getAllUsers() {
    if (!this.isAdmin) {
      return "Only admin can access all users";
    }
    return User.allUsers;
  }
  //Finding the user based on its id
  static findUser(id) {
    for (let i = 0; i < User.allUsers.length; i++) {
      if (User.allUsers[i].id == id) {
        return [i, true];
      }
    }
    return [-1, false];
  }
  //Updating the user by first finding the index of that user & then updating its required parameters value
  updateUser(id, parameter, newValue) {
    if (!this.isAdmin) {
      return "Only admin can update user";
    }
    let [indexOfUser, isUserExists] = User.findUser(id);
    if (!isUserExists) {
      return "User does not exist";
    }

    if (typeof id != "number") {
      return "id must be a number";
    }

    switch (parameter) {
      case "name":
        if (typeof newValue != "string") return "name must be a string";
        User.allUsers[indexOfUser].name = newValue;
        return User.allUsers[indexOfUser];

      case "gender":
        if (typeof newValue != "string") return "Gender must be a string";
        User.allUsers[indexOfUser].gender = newValue;
        return User.allUsers[indexOfUser];

      case "age":
        if (typeof newValue != "number") return "Age must be a number";
        User.allUsers[indexOfUser].age = newValue;
        return User.allUsers[indexOfUser];

      default:
        return "Invalid Parameter";
    }
  }

  deleteUser(id) {
    if (!this.isAdmin) {
      return "Only admin can delete the user";
    }
    let [indexOfUser, isUserExists] = User.findUser(id);
    if (!isUserExists) {
      return "User does not exists";
    }
    User.allUsers.splice(indexOfUser, 1);
    return User.allUsers;
  }

  createContact(contactName, country) {
    if (typeof contactName != "string") {
      return "Contact name must be a string";
    }
    if (typeof country != "string") {
      return "Country name must be a string";
    }
    if (this.isAdmin) {
      return "Only users can create a new contact";
    }

    let newContact = new Contact(contactName, country);
    this.contacts.push(newContact);
    return newContact;
  }

  getAllContacts() {
    if (this.isAdmin) {
      return "admin cannot access all contacts";
    }
    return this.contacts;
  }

  findContact(contactID) {
    if (typeof contactID != "number") {
      return "contact id must be a number";
    }
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].contactID == contactID) {
        return [i, true];
      }
    }
    return [-1, false];
  }

  updateContact(contactID, parameter, newValue) {
    if (this.isAdmin) {
      return "admin cannot update any contacts";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactID);
    if (!isContactExist) {
      return "Contact does not exist";
    }
    return this.contacts[indexOfContact].updateContact(parameter, newValue);
  }

  deleteContact(contactID) {
    if (this.isAdmin) {
      return "Admin cannot delete a contact";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactID);
    if (!isContactExist) {
      return "Contact does not exists";
    }
    this.contacts.splice(indexOfContact, 1);
  }

  createContactDetails(contactID, typeOfContact, valueOfContact) {
    if (this.isAdmin) {
      return "Admin cannot create a new contact";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactID);
    if (!isContactExist) {
      return "Contact does not exist";
    }
    return this.contacts[indexOfContact].createContactDetails(
      typeOfContact,
      valueOfContact
    );
  }

  getContactDetails(contactID) {
    if (this.isAdmin) {
      return "admin cannot access the contact details";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactID);
    if (!isContactExist) {
      return "Contact does not exist";
    }
    return this.contacts[indexOfContact].getContactDetails();
  }

  updateContactDetails(contactID, parameter, newValue,contactInfoID) {
    if (this.isAdmin) {
      return "Admin cannot update a contact";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactID);
    if (!isContactExist) {
      return "Contact does not exist";
    }
    return this.contacts[indexOfContact].updateContactDetails(parameter, newValue,contactInfoID);
  }

  deleteContactDetails(contactID,contactInfoID) {
    if (this.isAdmin) {
      return "admin cannot delete a contact";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactID);
    if (!isContactExist) {
      return "Contact does not exist";
    }
    this.contacts[indexOfContact].deleteContactDetails(contactInfoID);
  }

}


module.exports = User;
