(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        let result = [];
        result = this.slice(+n);
        return result;
    }
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];

        }
        return sum;
    }
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();

let arr = [1, 2, 3, 4]
let last = arr.last();
console.log(last);
arr = arr.skip(2);
console.log(arr);
arr = arr.take(1);
console.log(arr);
let sum = arr.sum();
console.log(sum);
let average = arr.average();
console.log(average);