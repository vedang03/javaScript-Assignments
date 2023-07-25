//check if no is prime.

let checkPrimeNumber = (number) =>{
let isPrime = true

for (let i = 2; i < number; i++) {
    if(number%i==0){
        isPrime=false
    }
    
}
if(isPrime==true){
    console.log("Prime no");
} else{
    console.log("Not prime");
}
}



//Program to find sum of fibonacci series.

let sumOfFibonacci = (number) => {
    let num1 = 0
    let num2 = 1
    let count = 2
    let fibb = 1
    let num3
    while(count!=number){
       num3 = num1 + num2
       fibb = fibb + num3
       num1 = num2
       num2 = num3
       count++
    }
    console.log("Sum of fibbonacci series is:",fibb);
}



//program to find the count of even odd and zero

let countEvenOddZero = (params) => {
    let evenCount = 0
    let oddCount = 0
    let zeroCount = 0
     for(i=0;i<params.length;i++){
        if(params[i]%2==0 && params[i]!=0){
            evenCount++
        }else if(params[i]%2==1){
            oddCount++
        }
        if(params[i]==0){
            zeroCount++
        }
        
     }
     console.log("Count of even , odd and zeros is as follows respectively:",evenCount , oddCount , zeroCount);
}

let arr = [2 , 3 , 0 , 8 , 7 , 0, 6 , 0 , 0 , 0 , 3]
countEvenOddZero(arr)


let globalFunction = (runFunction,number) => {
    return runFunction(number)
}

globalFunction(sumOfFibonacci,8)