// const first = 3  
// console.log(first,typeof first)


// var str
// str = 'Vedang'
// console.log(str,typeof str);

// let b 
// b = 'Badawe'
// console.log(b,typeof b);

// let isTrue = false;
// console.log(isTrue,typeof isTrue);

// let demo = null;
// console.log(demo,typeof demo);


// let a = [1,2,3,4]
// let b = [1,2,3,4]
// console.log(a[0]);
// console.log(b[0]);
// console.log(a==b);
// a=b

// console.log(a[0]);




// let num1 = 3
// let num2 = 2
// let addition = (num1 , num2) => {

// return num1 + num2
// }

// let globalFunction= (operation,num1,num2) => {

//    return operation(num1,num2) 
// }


// console.log(globalFunction(addition,num1,num2));

// let userinput1 = prompt("Enter number")
// console.log(userinput1);
let num1 = 3
let num2 = 2

let addition = (num1,num2) => {
    let sum = num1 + num2
    return sum;
}


let functionGenerator = (functionName) => {
    switch(functionName){
        case "addition" : return ["adding numbers",addition]
        case "subtraction" : return["Subtracting numbers",subtraction]
    }
}

let [m,add] =functionGenerator("addition")
console.log(m,add(num1,num2));





