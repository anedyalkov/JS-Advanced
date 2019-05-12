// function sum(a,b){
//     return a + b;
// }

// let result = sum(2,3);
// console.log(result);

// function incrementByOne(){

//     function increment(number){
//         return 1 + number;
//     }

//     return increment;
// }

// let func = incrementByOne();
// console.log(func(5));
// console.log(func(3));

// function incrementByOne(b) {

//     function increment() {
//         return 1 + b;
//     }

//     return increment();
// }

// let final = incrementByOne(2);
// console.log(final);

// let f = (function sum(a,b){
//     return a + b;
// })(3,4)

// console.log(f)

// let func = function(a,b){
//     return a + b;
// }
// let result = func(5,6);
// console.log(result);
// console.log(func);

// let generator = (function(){
//     let generateId  = 0;
//     return function(){
//         console.log(++generateId);
//     }
// })();

// generator();
// generator();
// generator();
// generator();
// generator();

console.log(this === global);

function solve(){
    console.log(this === global);
}
solve();