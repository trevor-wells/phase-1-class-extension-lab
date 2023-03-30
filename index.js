class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let sum = 0
        for (const num of this.sides){
            sum += num
        }
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
    return (this.countSides === 3
            && this.sides[0] + this.sides[1] > this.sides[2]
            && this.sides[0] + this.sides[2] > this.sides[1]
            && this.sides[1] + this.sides[2] > this.sides[0])
    }
}

class Square extends Polygon{
    get area(){
        return Math.pow(this.sides[0], 2)
    }

    get isValid(){
        return (this.countSides === 4
                && this.sides[0] === this.sides[1]
                && this.sides[0] === this.sides[2]
                && this.sides[0] === this.sides[3])
    }
}