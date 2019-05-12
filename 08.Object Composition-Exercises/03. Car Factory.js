function solve (car){
    let horsePowers = [90,120,200];
    let engines = {
        smallEngine: {
            power: 90,
            volume: 1800
        },
        normalEngine: {
            power: 120,
            volume: 2400
        },
        monsterEngine: {
            power: 200,
            volume: 3500
        }
    }
    let carriages = {
         hatchback:{
             type: 'hatchback',
             color: ''
         },
         coupe: {
             type: 'coupe',
             color: ''
         }
    }
   

    let upgradedCar = {};
   

    for (let i = 0; i < horsePowers.length; i++) {
        const currPower = horsePowers[i];
        if(car.power <= currPower){
            car.power = currPower;
            break;
        }
    }

    let engine = Object.values(engines).find( a => {
        return a.power === car.power;
    });
    let carriage = Object.values(carriages).find(a => {
        return a.type === car.carriage;
    });

    upgradedCar.model = car.model;
    upgradedCar.engine = {
        power: engine.power,
        volume: engine.volume
    };
    upgradedCar.carriage = {
        type: carriage.type,
        color: car.color
    };
    upgradedCar.carriage.color = car.color;
    upgradedCar.wheels = [];

    if(car.wheelsize % 2 === 0){
        car.wheelsize = car.wheelsize - 1;
    }
    for (let i = 0; i < 4; i++) {
        upgradedCar.wheels.push(car.wheelsize);
        
    }

    for(let key in upgradedCar){
        console.log(key);
        console.log(upgradedCar[key]);
    }
    return upgradedCar;
}

console.log(solve({
            model: 'Opel Vectra',
            power: 110,
            color: 'grey',
            carriage: 'coupe',
            wheelsize: 17
        }
));