const Board = require("./Board")
const Player = require("./Player")
const Cell = require("./Cell")


class Game{
    constructor(board , players){
         this.players = players
         this.board = board
         this.turn = 0
         this.isGameEnded = false
    }

    static newGame(firstPlayerName , secondPlayerName){
        let board = new Board()
        let firstPlayer = new Player("X",firstPlayerName)
        let secondPlayer = new Player("Y",secondPlayerName)
        return new Game(board , [firstPlayer,secondPlayer])
    }

    play(cellNumber){
        this.isGameEnded=false
        //Validating input
        if(typeof cellNumber != 'number'){
            'Input should be a number'
        }
        if(cellNumber<0 || cellNumber>8){
            return 'cell number should be between 0 & 8'
        }
        //Checking if the cell is empty or not
        if(!this.board.isCellMarked(cellNumber)){
            return 'Cell is not empty'
        }
        
       //Checking which players turn it is
        let currentPlayer
        if(this.turn%2==0){
            currentPlayer = this.players[0]
        } else{
            currentPlayer = this.players[1]
        }
       //marking the cell with x or o based on currentplayer
        let cellObj = this.board.getCellObj(cellNumber)
        currentPlayer.markCell(cellObj)
        this.turn++

        //createing a analyze result method to check all permutations
        let [symbolOfWinner,gameStatus]=this.board.analyzeResults()
        if(gameStatus==''){
            console.log("Continue")
            return this.board
        }
        if(gameStatus=="draw"){
            
            console.log('Game ended in a draw')
            this.isGameEnded = true
            return this.board
           

        }
        if(symbolOfWinner == this.players[0].symbol){
             console.log(this.players[0].name + " is winner")
             this.isGameEnded = true
             if(this.isGameEnded){
                return 'Game has ended'
            }
            return this.board
        }
         if(symbolOfWinner ==this.players[1].symbol){
            console.log( this.players[0].name + " is Winner")
          this.isGameEnded=true
          if(this.isGameEnded){
           console.log("Game has ended")
        }
        return this.board
       
    }


    }
    


}

module.exports = Game