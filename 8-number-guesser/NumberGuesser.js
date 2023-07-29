let randomNumber = Math.floor(Math.random() * 100);
let isGameOver = false;
let numberOfTries = 0
let playNumberGuesser = (number) => {
  if (typeof number != "number") {
    return "Invalid number format";
  }
  if (number < 0 || number > 100) {
    return "Number should be between 0 & 100";
  }
  if (number > randomNumber) {
    numberOfTries++
    return "Sorry,Too high";
    
  }
  if (number < randomNumber) {
    numberOfTries++
    return "Sorry,Too low";
  }
  if (number == randomNumber) {
    isGameOver = true;
    console.log("you won in: ",numberOfTries , " tries" )
    numberOfTries=0
    if (isGameOver) {
        console.log("Do you want to play again?");
         let didPressOk = confirm("Do you want to play again?")
         if(didPressOk==true){
            randomNumber = Math.floor(Math.random()*100)
         }else{
            console.log("Game Ended")
         }
      }
  }
};
