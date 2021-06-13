

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
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
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }


    move() {


        var newCell = random(this.chooseCell(0))

        if (newCell) {
            this.energy--;
            var x = newCell[0];
            var y = newCell[1];

            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;



        }
    }

    eat() {
        var grassCells = random(this.chooseCell(1))
        if (grassCells) {


            matrix[grassCells[1]][grassCells[0]] = this.index;
            matrix[this.y][this.x] = 0;



            for (var i in grassArr) {
                if (grassCells[0] === grassArr[i].x && grassCells[1] === grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.x = grassCells[0];
            this.y = grassCells[1];
            this.energy += 2;
        }
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 12 && newCell) {
            var x = newCell[0];
            var y = newCell[1];


            var newGrasseat = new GrassEater(x, y, this.index);
            grassEatArr.push(newGrasseat);
            matrix[y][x] = this.index;
            this.energy = 8

        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0

            for (var i in grassEatArr) {
                if (grassEatArr[i].y == this.y && grassEatArr[i].x == this.x) {
                    grassEatArr.splice(i, 1);
                    break;


                }
            }
        }
    }
}