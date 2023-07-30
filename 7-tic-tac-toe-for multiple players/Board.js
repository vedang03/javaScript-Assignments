const Cell = require("./Cell")

class Board{
    constructor(){
        this.cells = [
            new Cell() ,new Cell(),
            new Cell() , new Cell(),
            new Cell() , new Cell(),
            new Cell() , new Cell,
            new Cell()

        ]
    }
   isCellMarked(cellNumber){
     return this.cells[cellNumber].isMarked()
   }

   getCellObj(cellNumber){
    return this.cells[cellNumber]

   }
   analyzeResults(){
    if(this.cells[0].mark==this.cells[1].mark &&
        this.cells[1].mark==this.cells[2].mark &&
        this.cells[0].mark!='z'){
            return [this.cells[0].mark,"winner"]
        }
        if(this.cells[3].mark==this.cells[4].mark &&
            this.cells[4].mark==this.cells[5].mark &&
            this.cells[3].mark!='z'){
                return [this.cells[3].mark,"Winner"]
            }
        if(this.cells[6].mark==this.cells[7] &&
            this.cells[7]==this.cells[8] &&
            this.cells[6].mark!='z'){
                return [this.cells[6].mark,"Winner"]
            }
     return ["",""]
   }
}
module.exports = Board