class Cell{
    constructor(){
        this.symbol = 'z'
    }

    isMarked(){
        return this.symbol == 'z'
    }
    reset(){
        this.symbol = 'z'
    }

    getMark(){
        this.symbol
    }
}
module.exports = Cell