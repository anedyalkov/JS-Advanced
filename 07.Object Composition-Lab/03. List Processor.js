function solve(input) {
    let listProcessor = (() => {
        let arr = [];

        function add(string) {
            arr.push(string);
        };

        function remove(string) {
            arr = arr.filter((el) => {
                return el !== string;
            });
        };

        function print() {
            console.log(arr.join(','));
        }
        return {
            add,
            remove,
            print
        };
    })()


    for (let line of input) {
        let [command, value] = line.split(' ');
        listProcessor[command](value);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);