function solve(input) {

    let commandExecutor = (() => {
        let cars = {};

        function create(tokens) {
            if (tokens.length > 1) {
                let name = tokens[0];
                let existingCarName = tokens[2];
                let existingCar = cars[existingCarName];
                let car = Object.create(existingCar);
                cars[name] = car;
            } else {
                let name = tokens[0];
                cars[name] = {};
            }
        };

        function set(tokens) {
            let name = tokens[0];
            let key = tokens[1];
            let value = tokens[2];
            let car = cars[name];
            car[key] = value;
        };

        function print(tokens) {
            let name = tokens[0];
            let car = cars[name];
            let carProperties = [];

            for (let key in car) {
                carProperties.push(key + ':' + car[key]);
            }

            let str = carProperties.join(', ');
            console.log(str);
        }

        return {
            create,
            set,
            print
        };
    })();

    for (let line of input) {
        let commandArgs = line.split(' ');
        let command = commandArgs.shift();
        let tokens = commandArgs;

        commandExecutor[command](tokens);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);