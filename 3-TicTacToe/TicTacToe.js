let board = ["z", "z", "z", "z", "z", "z", "z", "z", "z"];
// console.log(board);


let playTictacToe = (columnNumber, symbol) => {

    if (symbol != "X" && symbol != "O") {
      console.log("Invalid symbol");
    } else if (board[columnNumber] == "z") {
      board[columnNumber] = symbol;
    } else if(columnNumber>9) {
      console.log("Inavlid column number")
    }else{
      console.log("place is occupied")
    }
    if (
      (board[0] == board[1] && board[1] == board[2] && board[1] != "z") ||
      (board[3] == board[4] && board[4] == board[5] && board[4] != "z") ||
      (board[6] == board[7] && board[7] == board[8] && board[7] != "z") ||
      (board[0] == board[1] && board[1] == board[2] && board[1] != "z") ||
      (board[1] == board[4] && board[4] == board[7] && board[4] != "z") ||
      (board[2] == board[5] && board[5] == board[8] && board[5] != "z") ||
      (board[0] == board[4] && board[4] == board[8] && board[4] != "z") ||
      (board[2] == board[4] && board[4] == board[6] && board[4] != "z")
    ) {
   
      console.log("Winner is: ", symbol);
      console.log("Game over");
      board = ["z", "z", "z", "z", "z", "z", "z", "z", "z"];
    } else if (
      board[0] != "z" &&
      board[1] != "z" &&
      board[2] != "z" &&
      board[3] != "z" &&
      board[4] != "z" &&
      board[5] != "z" &&
      board[6] != "z" &&
      board[7] != "z" &&
      board[8] != "z"
    ) {
      console.log("Draw");
    }

    return board;
  }


// playTictacToe(0,'X')
// playTictacToe(1,'O')
// playTictacToe(2,'X')
// playTictacToe(3,'X')
// playTictacToe(4,'O')
// playTictacToe(5,'X')
// playTictacToe(6,'O')
// playTictacToe(7,'X')
// playTictacToe(8,'X')
