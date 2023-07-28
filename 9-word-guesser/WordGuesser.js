// program to generate random strings

const result = Math.random().toString(36).substring(2,7);

let arr = ["0","0","0","0","0"]


let playWordGuesser = (letter) => {

    for (let i = 0; i < result.length; i++) {
        if(result[i]==letter){
            arr[i]=letter
            console.log(arr)
        }
        for(let i=0;i<arr.length;i++){
            if(!arr.includes("0")){
                return 'You Wonn'
            }
        }
        
    }

}

