function solve(arr){
    let commandProcessor = (function(){
        let result = '';
        return {
            'append': (str) => {
                return result += str;
            },
            'removeStart': (n) => {
                return result = result.substr(+n,result.length - 1);
            },
            'removeEnd': (n) => {
                return result = result.substr(0, result.length - +n);
            },
            'print': () => {
                return console.log(result);
            }

        }
    })();

    for(let comm of arr){
        let [command, item] = comm.split(' ');
        commandProcessor[command](item);
    }
}

solve(['append hello',
            'append again',
            'removeStart 3',
            'removeEnd 4',
            'print'
        ]
)