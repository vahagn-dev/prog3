class Main{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this.multiply = 0;
       this.index = index;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
       
        ]
    }
    getNewCoordinates() {
                 this.directions = [
                     [this.x - 1, this.y - 1],
                     [this.x, this.y - 1],
                     [this.x + 1, this.y - 1],
                     [this.x - 1, this.y],
                     [this.x + 1, this.y],
                     [this.x - 1, this.y + 1],
                    [this.x, this.y + 1],
                     [this.x + 1, this.y + 1]
                 ];
             }
                 mul(das,id,en) {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (this.multiply >= en && newCell) {
            var newGrass = new das(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = id;
            this.multiply = 0;
        }
    }
}
