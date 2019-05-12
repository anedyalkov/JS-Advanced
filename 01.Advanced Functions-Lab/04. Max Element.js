function solve(arr){
//  return Math.max(...arr);
    return Math.max.apply('no matter',arr);
}

console.log(solve([1, 44, 123, 33]));