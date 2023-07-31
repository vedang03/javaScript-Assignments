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
        !this.cells[0].isMarked()){
            return [this.cells[0].mark,"winner"]
        }
        if(this.cells[3].mark==this.cells[4].mark &&
            this.cells[4].mark==this.cells[5].mark &&
            !this.cells[3].isMarked()){
                return [this.cells[3].mark,"Winner"]
            }
        if(this.cells[6].mark==this.cells[7].mark &&
            this.cells[7].mark==this.cells[8].mark &&
            !this.cells[6].isMarked()){
                return [this.cells[6].mark,"Winner"]
            }
        if(this.cells[0].mark == this.cells[4].mark &&
            this.cells[4].mark==this.cells[8].mark &&
            !this.cells[0].isMarked()){
                return [this.cells[0].mark,"Winner"]
            }
        if(this.cells[2].mark == this.cells[4].mark &&
                this.cells[4].mark==this.cells[6].mark &&
                !this.cells[2].isMarked()){
                    return [this.cells[2].mark,"Winner"]
                }
        if( !this.cells[0].isMarked()&&
        !this.cells[1].isMarked()&&
        !this.cells[2].isMarked()&&
        !this.cells[3].isMarked()&&
        !this.cells[4].isMarked()&&
        !this.cells[5].isMarked()&&
        !this.cells[6].isMarked()&&
        !this.cells[7].isMarked()&&
        !this.cells[8].isMarked()){
        return("","draw")
        }
            
     return ["",""]
   }
}
module.exports = Board