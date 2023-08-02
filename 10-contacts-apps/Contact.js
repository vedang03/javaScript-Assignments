const ContactDetails = require("./ContactDetails");

class Contact {
  static ID = 0;
  constructor(contactName, country) {
    this.contactName = contactName;
    this.country = country;
    this.contactID = Contact.ID++;
    this.contactDetails = [];
  }

  updateContact(parameter, newValue) {
    switch (parameter) {
      case "contactName":
        if (typeof newValue != "string") return "Contact name must be a string";
        this.contactName = newValue;
       return this;
     case "country":
       if (typeof newValue != "string") return "Country name must be a string";
        this.country = newValue;
        return this;

      default:
        return "Invalid parameter";
    }
  }

  createContactDetails(typeOfContact, valueOfContact) {
    let contactDetail = new ContactDetails(typeOfContact, valueOfContact);
    this.contactDetails.push(contactDetail);
    return contactDetail;
  }
  getContactDetails() {
    return this.contactDetails;
    
  }

  updateContactDetails( parameter, newValue,contactInfoID) {

    for(let i=0;i<this.contactDetails.length;i++){
        if(this.contactDetails[i].contactDetailsID==contactInfoID){
    return this.contactDetails[i].updateContactDetails(
                    parameter,
                    newValue
                  );
    }
    }
    
  }     

  deleteContactDetails(indexOfContactDetails) {
    this.contactDetails.splice(indexOfContactDetails,1);
  }
 
}

module.exports = Contact;
