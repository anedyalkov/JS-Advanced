class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = +length;
    }

    toString() {

        if (this.innerString.length > this.innerLength) {
            let index = this.innerString.length - this.innerLength;
            if (index === this.innerString.length) {
                return '...';
            } else {
                let str = this.innerString.substr(0, index) + '...';
                return str;
            }

        } else {
            return `${this.innerString}`;
        }

    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test