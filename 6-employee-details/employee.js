class Worker {
  constructor(
    fname,
    lname,
    fullname,
    salary,
    annualSalary,
    designation,
    department,
    doj,
    dor,
    totalExperience,
    contactNo,
    personalEmail,
    workEmail,
    dob,
    age,
    address,
    city,
    country,
    reportingOfficer,
    subordinates
  ) {
    this.fname = fname;
    this.lname = lname;
    this.fullname = fullname;
    this.salary = salary;
    this.annualSalary = annualSalary;
    this.designation = designation;
    this.department = department;
    this.doj = doj;
    this.dor = dor;
    this.totalExperience = totalExperience;
    this.contactNo = contactNo;
    this.personalEmail = personalEmail;
    this.workEmail = workEmail;
    this.dob = dob;
    this.age = age;
    this.address = address;
    this.city = city;
    this.country = country;
    this.reportingOfficer = reportingOfficer;
    this.subordinates = subordinates;
  }

  static newEmployee(
    fname,
    lname,
    salary,
    designation,
    department,
    doj,
    totalExperience,
    contactNo,
    personalEmail,
    workEmail,
    dob,
    address,
    city,
    country,
    subordinates
  ) {
    if (typeof fname != "string") {
      return "First name should be a string";
    }
    if (typeof lname != "string") {
      return "Last name should be a string";
    }
    if (typeof salary != "number") {
      return "Salary should be a number";
    }
    if (typeof designation != "string") {
      return "designation should be string";
    }
    if (typeof department != "string") {
      return "department should be string";
    }

    if (Object.prototype.toString.call(doj) != "[object Date]") {
      return "invalid date";
    }
    if (typeof totalExperience != "number") {
      return "Total experience must be number";
    }
    if (typeof contactNo != "number") {
      return "Contact no must be a number";
    }
    if (
      typeof personalEmail != "string" ||
      !personalEmail.includes("@") ||
      !personalEmail.includes(".")
    ) {
      return "Enter valid personal email";
    }
    if (
      typeof workEmail != "string" ||
      !workEmail.includes("@") ||
      !workEmail.includes(".")
    ) {
      return "Enter valid work email";
    }
    if (Object.prototype.toString.call(dob) != "[object Date]") {
      return "invalid date";
    }
    if (typeof address != "string") {
      return "address must be a string";
    }
    if (typeof city != "string") {
      return "city must be a string";
    }
    if (typeof country != "string") {
      return "country must be a string";
    }
    if (typeof subordinates != "string") {
      return "Subordinates must be a string";
    }
    let fullname = Employee.displayFullName(fname, lname);
    let annualSalary = Employee.calAnnualSalary(salary);
    let dor = Employee.calDor(doj, totalExperience);
    let age = Employee.calAge(dob);
    return new Worker(
      fname,
      lname,
      fullname,
      salary,
      annualSalary,
      designation,
      department,
      doj,
      dor,
      totalExperience,
      contactNo,
      personalEmail,
      workEmail,
      dob,
      age,
      address,
      city,
      country,
      subordinates
    );
  }
  static displayFullName(fname, lname) {
    return fname + " " + lname;
  }
  static calAnnualSalary(salary) {
    return salary * 12;
  }
  static calDor(doj, totalExperience) {
    return doj.getFullYear() + totalExperience;
  }
  static calAge(dob) {
    return 2023 - dob.getFullYear();
  }
}

class Employee {
  constructor(
    fname,
    lname,
    fullname,
    salary,
    annualSalary,
    designation,
    department,
    doj,
    dor,
    totalExperience,
    contactNo,
    personalEmail,
    workEmail,
    dob,
    age,
    address,
    city,
    country,
    reportingOfficer,
    subordinates
  ) {
    this.fname = fname;
    this.lname = lname;
    this.fullname = fullname;
    this.salary = salary;
    this.annualSalary = annualSalary;
    this.designation = designation;
    this.department = department;
    this.doj = doj;
    this.dor = dor;
    this.totalExperience = totalExperience;
    this.contactNo = contactNo;
    this.personalEmail = personalEmail;
    this.workEmail = workEmail;
    this.dob = dob;
    this.age = age;
    this.address = address;
    this.city = city;
    this.country = country;
    this.reportingOfficer = reportingOfficer;
    this.subordinates = subordinates;
  }

  static newEmployee(
    fname,
    lname,
    salary,
    designation,
    department,
    doj,
    totalExperience,
    contactNo,
    personalEmail,
    workEmail,
    dob,
    address,
    city,
    country,
    subordinates
  ) {
    if (typeof fname != "string") {
      return "First name should be a string";
    }
    if (typeof lname != "string") {
      return "Last name should be a string";
    }
    if (typeof salary != "number") {
      return "Salary should be a number";
    }
    if (typeof designation != "string") {
      return "designation should be string";
    }
    if (typeof department != "string") {
      return "department should be string";
    }

    if (Object.prototype.toString.call(doj) != "[object Date]") {
      return "invalid date";
    }
    if (typeof totalExperience != "number") {
      return "Total experience must be number";
    }
    if (typeof contactNo != "number") {
      return "Contact no must be a number";
    }
    if (
      typeof personalEmail != "string" ||
      !personalEmail.includes("@") ||
      !personalEmail.includes(".")
    ) {
      return "Enter valid personal email";
    }
    if (
      typeof workEmail != "string" ||
      !workEmail.includes("@") ||
      !workEmail.includes(".")
    ) {
      return "Enter valid work email";
    }
    if (Object.prototype.toString.call(dob) != "[object Date]") {
      return "invalid date";
    }
    if (typeof address != "string") {
      return "address must be a string";
    }
    if (typeof city != "string") {
      return "city must be a string";
    }
    if (typeof country != "string") {
      return "country must be a string";
    }
    if (typeof subordinates != "string") {
      return "Subordinates must be a string";
    }
    let fullname = Employee.displayFullName(fname, lname);
    let annualSalary = Employee.calAnnualSalary(salary);
    let dor = Employee.calDor(doj, totalExperience);
    let age = Employee.calAge(dob);
    return new Employee(
      fname,
      lname,
      fullname,
      salary,
      annualSalary,
      designation,
      department,
      doj,
      dor,
      totalExperience,
      contactNo,
      personalEmail,
      workEmail,
      dob,
      age,
      address,
      city,
      country,
      subordinates
    );
  }
  static displayFullName(fname, lname) {
    return fname + " " + lname;
  }
  static calAnnualSalary(salary) {
    return salary * 12;
  }
  static calDor(doj, totalExperience) {
    return doj.getFullYear() + totalExperience;
  }
  static calAge(dob) {
    return 2023 - dob.getFullYear();
  }
}

let e1 = Employee.newEmployee(
  "Vedang",
  "Badawe",
  30000,
  "Trainee Engineer",
  "Banking",
  new Date("06/20  /2022"),
  1,
  8369615223,
  "ved@gmail.com",
  "ved@aurionpro.com",
  new Date("03/12/2001"),
  "Ushanagar soc",
  "Mumbai",
  "India",
  "abc"
);

let reportingOfficer = Employee.newEmployee(
  "Raj",
  "Singh",
  100000,
  "Manager",
  "Banking",
  new Date("1/03/2003"),
  10,
  23341231,
  "manager@gmail.com",
  "manager@aurionpro.com",
  new Date("24/07/1974"),
  "Kurla",
  "Mumbai",
  "India",
  "xyz"
);

console.log(e1);
if (reportingOfficer instanceof Employee) {
  console.log(reportingOfficer);
} else {
  console.log("Manager is not an Employee");
}
