class Student {
  constructor(rollno, marks, fname, lname, dateOfBirth) {
    this.roll = rollno;
    this.marks = marks;
    this.fname = fname;
    this.lname = lname;
    this.dateOfBirth = dateOfBirth;
    this.avgMarks = function () {
      let sum = 0;

      for (let i = 0; i < this.marks.length; i++) {
        sum = sum + this.marks[i];
      }
      return sum / this.marks.length;
    };
    this.avgMarks = this.avgMarks();

    this.grade = function () {
      let gradeArray = [];

      for (let i = 0; i < this.marks.length; i++) {
        if (this.marks[i] <= 4) {
          gradeArray.push("C");
        } else if (this.marks[i] > 4 && this.marks[i] <= 8) {
          gradeArray.push("B");
        } else {
          gradeArray.push("A");
        }
      }
      return gradeArray;
    };
    this.grade = this.grade();

    this.finalGrade = function () {
      let sum = 0;

      for (let i = 0; i < this.marks.length; i++) {
        sum = sum + this.marks[i];
      }
      let avg = sum / this.marks.length;
      if (avg <= 4) {
        return "C grade";
      } else if (avg > 4 && avg <= 8) {
        return "B grade";
      } else {
        return "A grade";
      }
    };
    this.finalGrade = this.finalGrade();

    this.currentAge = function () {
      var birth = new Date(this.dateOfBirth);
      var currentDate = new Date("07/26/2023");
      return currentDate.getFullYear() - birth.getFullYear();
    };
    this.currentAge = this.currentAge();
  }

}

let s1 = new Student(1, [6, 7, 8, 9, 3], "Vedang", "Badawe", "03/12/2001");
let s2 = new Student(2, [6, 5, 2, 9, 7], "Raju", "Handsome");
console.log(s1);


