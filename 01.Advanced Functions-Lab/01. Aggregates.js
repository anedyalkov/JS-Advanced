function solve(arr) {
    let sum = arr.reduce((acc, el) => {
        return acc + el;
    }, 0);
    console.log(`Sum = ${sum}`);

    let minNumber = arr.reduce((acc, el) => {
        return Math.min(acc, el);
    });
    console.log(`Min = ${minNumber}`);

    let maxNumber = arr.reduce((acc, el) => {
        return Math.max(acc, el);
    });
    console.log(`Max = ${maxNumber}`);

    let product = arr.reduce((acc,el) => {
        return acc * el; 
    },1);
    console.log(`Product = ${product}`);

    let string = arr.reduce((acc,el) => {
        return acc + el;
    },'');
    console.log(`Join = ${string}`)

}

solve([2, 3, 10, 5]);
solve([5, -3, 20, 7, 0.5]);