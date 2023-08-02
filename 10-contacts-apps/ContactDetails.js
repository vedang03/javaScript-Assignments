class ContactDetails {
  constructor(typeOfContact, valueOfContact) {
    this.typeOfContact = typeOfContact;
    this.valueOfContact = valueOfContact;
  }
  updateContactDetails(parameter, newValue) {
    switch (parameter) {
      case "typeOfContact":
        if (typeof newValue != "string") return "typeofvalue must be a string";
        this.typeOfContact = newValue;
        return this;

      case "valueOfContact":
        if (typeof newValue != "number")
          return "Value of contact must be a string";
        this.valueOfContact = newValue;
        return this.valueOfContact;

      default:
        return "Invalid parameter";
    }
  }
}

module.exports = ContactDetails;
