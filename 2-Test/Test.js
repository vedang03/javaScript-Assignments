
let addition = (...number) => {
    let sum=0
    for(i=0;i<number.length;i++){
        if(typeof number[i]=='number'){
        sum = sum + number[i]
        }else{
        
            return functionGenerator('ansuk')
        }
    }
    return ["addition: ",sum]
}

let subtraction = (...number) => {
    let sub=0
    for(i=0;i<number.length;i++){
        if(typeof number[i]=='number'){
            sub = sub - number[i]
            }else{
                console.log('error');
                return
            }
    }
    return sub
}

let multiplication = (...number) => {
    let mul=1
    for(i=0;i<number.length;i++){
        mul = mul * number[i]
    }
    return mul
}

let division = (...number) => {
    let div=1
    for(i=0;i<number.length;i++){
        div = div / number[i]
    }
    return div
}

let arr = [1,2,3,4]



let functionGenerator = (functionName) => {
switch(functionName){
    case "addition" : return ["addition",addition]
    case "subtraction": return ["subraction:",subtraction]
    case "multiplication": return["multiplication",multiplication]
    case "division": return["division",division]
    default : return function   (){
        "Invalid Operation"
    }
   
}
}
let [m,operation] = functionGenerator("addition")
console.log(  operation(...arr));