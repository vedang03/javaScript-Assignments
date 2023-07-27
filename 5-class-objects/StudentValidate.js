class Student{
    constructor(fname , lname , rollno , marks , dob , avgMarks , grades , finalGrade , age){
        this.fname = fname
        this.lname = lname
        this.rollno = rollno
        this.marks = marks
        this.dob = dob
        this.avgMarks = avgMarks
        this.grades = grades
        this.finalGrade = finalGrade
        this.age = age
    }

    static newStudent(fname , lname ,rollno, marks , dob){
        if(typeof fname != 'string'){
         
            return 'Ivalid first name'
        }
        if(typeof lname != 'string'){
            return 'invalid last name'  
        }
        if(typeof rollno != 'number'){
            return 'invalid rollno'
        }
        if(!Array.isArray(marks)){
           return 'Marks is not an array'
        }
        if(Object.prototype.toString.call(dob) != '[object Date]'){
          return 'invalid date'
        }
     
       let avgMarks  = Student.calAvgMarks(marks);
       let grades = Student.calGrades(marks);
       let finalGrade = Student.calFinalGrade(marks);
       let age = Student.calAge(dob);
       return  new Student(fname , lname , rollno ,marks,dob,avgMarks,grades,finalGrade,age);  

    }
     static calAvgMarks(marks){
        let sum = 0
        for(let i=0;i<marks[i];i++){
            sum = sum + marks[i]
        }
        return sum / marks.length
    }
     static calGrades(marks){
        let gradeArray = [];

        for (let i = 0; i < marks.length; i++) {
          if (marks[i] <= 4) {
            gradeArray.push("C");
          } else if (marks[i] > 4 && marks[i] <= 8) {
            gradeArray.push("B");
          } else {
            gradeArray.push("A");
          }
        }
        return gradeArray;
    }
     static calFinalGrade(marks){
        let sum = 0;

        for (let i = 0; i < marks.length; i++) {
          sum = sum + marks[i];
        }
        let avg = sum / marks.length;
        if (avg <= 4) {
          return "C grade";
        } else if (avg > 4 && avg <= 8) {
          return "B grade";
        } else {
          return "A grade";
        }
    }
    static calAge(date){
      let age =  2023 - date.getFullYear()
        return age
    }
}


let s1=Student.newStudent("Vedang","Badawe",3 ,[2,3,4],new Date("03/12/2001"))
console.log(s1)
