function solve(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        let [width, height] = matrix[i];
        matrix[i] = {
            width,
            height,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (otherRect) {
                let result = otherRect.area() - this.area();
                return result || (otherRect.width - this.width);
            }
        }
    }

    return matrix.sort((a, b) => {
        return a.compareTo(b)
    });
}

console.log(solve([
    [10, 5],
    [3, 20],
    [5, 12]
]))