// const myObj = {
//     fname: 'Vedang',
//    lname: 'Badawe',
//    xyz:function (a,b){
//        return (a+b)
//    }
// }
// console.log("Sum is: ",myObj.xyz)

// const tryObj = {
//   mno: function (a, b) {
//     return (function (a, b) {
//       return a * b;
//     }),(a,b)
//   } (3,4)
// };

// console.log(tryObj.mno);

let myObj1 = {
  fname: "Vedang",
};

let myObj2 = {
  fname: "Aashish",
};

let tempObj = {};

//
tempObj = myObj1;

myObj1 = myObj2;
myObj2 = tempObj;
console.log(myObj1);
console.log(myObj2);
console.log(tempObj)
