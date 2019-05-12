function solve() {
    let domManipulator = (() => {
        let firstElement;
        let secondElement;
        let resultElement;

        function init (selector1, selector2, resultSelector){
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);

        }
         function add() {
            resultElement.value = +firstElement.value + +secondElement.value;
         }
         function subtract() {
             resultElement.value = +firstElement.value - +secondElement.value;
         }
         return {init, add, subtract};
    })();

    domManipulator.init('#num1', '#num2', '#result');
    
    let sumBtn = document.querySelector('#sumButton');
    sumBtn.addEventListener('click', domManipulator.add);

    let subtractBtn = document.querySelector('#subtractButton');
    subtractBtn.addEventListener('click', domManipulator.subtract);
    
}