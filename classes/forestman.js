class Forestman {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x, this.y + 1],
            [this.x, this.y + 2],
            [this.x, this.y + 3],
            [this.x, this.y - 1],
            [this.x, this.y - 2],
            [this.x, this.y - 3],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x - 1, this.y],
            [this.x - 2, this.y],
            [this.x - 3, this.y]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();

        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    chooseCell2(character, character2) {
        this.getNewCoordinates();

        let found = [];
        for (var i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    move() {
        let newCell = random(this.chooseCell(0));
        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.energy--;
        }
    }


    eat() {

        let rand = random(this.chooseCell(4));

        if (rand) {
            let newx = rand[0];
            let newy = rand[1];

            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;

            console.log(rand);


            for (let i in hunterArr) {
                if (newx === hunterArr[i].x && newy === hunterArr[i].y) {
                    hunterArr.splice(i, 1);
                    break;
                }
            }

            console.log(matrix[newy][newx]);
            for (let i in AnimalArr) {
                if (newx === AnimalArr[i].x && newy === AnimalArr[i].y) {
                    AnimalArr.splice(i, 1);
                    break;
                }
            }


            this.x = newx;
            this.y = newy;
            this.energy += 2;
        }
    }

    mul() {

        let newCell = random(this.chooseCell(0));
        if (this.energy >= 14 && newCell) {
            let x = newCell[0];
            let y = newCell[1];


            let newforestman = new Forestman(x, y, this.index);
            ForestmanArr.push(newforestman);
            matrix[y][x] = this.index;
            this.energy = 8

        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0

            for (let i in ForestmanArr) {
                if (ForestmanArr[i].y == this.y && ForestmanArr[i].x == this.x) {
                    ForestmanArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}


