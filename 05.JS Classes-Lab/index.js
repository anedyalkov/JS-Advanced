class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get radius(){
        return this._radius;
    }
    set radius(r) {
        if (r < 0) {
            throw new Error('Radius is less than zero');
        }
        this._radius = r;
    }
}

let c = new Circle(9)
c.radius = 10;
console.log(c);

